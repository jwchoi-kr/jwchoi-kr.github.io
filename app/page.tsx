import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <section className="mx-auto">
      {/* 자기소개 섹션 */}
      <div className="mb-16">
        <h1 className="mb-4 text-4xl font-bold">최재웅 (JWCHOI)</h1>
        <p className="text-lg">TBD</p>
      </div>

      {/* 포스트 목록 섹션 */}
      <div id="recent-posts">
        <h2 className="mb-6 text-xl font-semibold">Recent Posts</h2>
        {posts.length === 0 ? (
          <p className="text-muted-foreground">아직 작성된 글이 없습니다.</p>
        ) : (
          <ul className="flex flex-col gap-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}`} className="group block">
                  <p className="text-muted-foreground mb-1 text-sm">{post.date}</p>
                  <h3 className="group-hover:text-muted-foreground mb-1 text-xl font-semibold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{post.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
