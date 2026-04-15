import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <section>
      <h1 className="mb-8 text-4xl font-bold">Posts</h1>
      {posts.length === 0 ? (
        <p className="text-muted-foreground">아직 작성된 글이 없습니다.</p>
      ) : (
        <ul className="flex flex-col gap-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`} className="group block">
                <p className="text-muted-foreground mb-1 text-sm">{post.date}</p>
                <h2 className="group-hover:text-muted-foreground mb-1 text-xl font-semibold transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
