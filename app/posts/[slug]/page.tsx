import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  return (
    <article className="mx-auto">
      <header className="mb-10">
        <p className="text-muted-foreground mb-2 text-sm">{post.date}</p>
        <h1 className="text-4xl font-bold">{post.title}</h1>
      </header>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
