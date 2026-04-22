import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <section className="mx-auto max-w-2xl">
      {/* 자기소개 섹션 */}
      <div className="mb-20 pt-8">
        <h1 className="mb-3 text-3xl font-bold tracking-tight">최재웅</h1>
        <p className="text-muted-foreground leading-relaxed">
          개발하면서 배운 것들을 기록하는 공간입니다.
        </p>
      </div>

      {/* 포스트 목록 섹션 */}
      <div>
        <h2 className="text-muted-foreground mb-6 text-xs font-semibold uppercase tracking-widest">
          Recent Posts
        </h2>
        {posts.length === 0 ? (
          <p className="text-muted-foreground text-sm">아직 작성된 글이 없습니다.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-border">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/posts/${post.slug}`}
                  className="group flex items-baseline justify-between gap-4 py-4"
                >
                  <span className="font-medium group-hover:text-muted-foreground transition-colors">
                    {post.title}
                  </span>
                  <span className="text-muted-foreground shrink-0 text-sm tabular-nums">
                    {formatDate(post.date)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {posts.length > 0 && (
          <div className="mt-6">
            <Link
              href="/posts"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              모든 글 보기 →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
