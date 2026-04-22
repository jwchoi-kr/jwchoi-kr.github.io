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
    <section>
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
