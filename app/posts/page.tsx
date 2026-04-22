import { Suspense } from "react";
import { getAllPosts } from "@/lib/posts";
import PostList from "@/components/post-list";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <section>
      <h1 className="mb-8 text-4xl font-bold">Posts</h1>
      <Suspense>
        <PostList posts={posts} />
      </Suspense>
    </section>
  );
}
