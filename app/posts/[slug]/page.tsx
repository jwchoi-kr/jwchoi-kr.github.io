import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/posts";
import { TAGS } from "@/lib/tags";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: `${post.title} | Jaewoong's Blog`,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  return (
    <article className="mx-auto">
      <header className="mb-10">
        <p className="text-muted-foreground mb-2 text-sm">{post.date}</p>
        <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
        {post.tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {post.tags.map((t) => (
              <li
                key={t}
                className="border-border text-muted-foreground rounded-full border px-2.5 py-0.5 text-xs"
              >
                {TAGS[t]?.label ?? t}
              </li>
            ))}
          </ul>
        )}
      </header>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
