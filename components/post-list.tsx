"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { TAGS, type TagKey } from "@/lib/tags";
import type { PostMeta } from "@/lib/posts";

export default function PostList({ posts }: { posts: PostMeta[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTags = searchParams.getAll("tag") as TagKey[];

  const filtered =
    activeTags.length > 0
      ? posts.filter((p) => activeTags.every((t) => p.tags.includes(t)))
      : posts;

  function toggle(tag: TagKey) {
    const params = new URLSearchParams(searchParams.toString());
    const current = params.getAll("tag") as TagKey[];
    params.delete("tag");
    if (current.includes(tag)) {
      current.filter((t) => t !== tag).forEach((t) => params.append("tag", t));
    } else {
      [...current, tag].forEach((t) => params.append("tag", t));
    }
    const qs = params.toString();
    router.push(qs ? `/posts?${qs}` : "/posts");
  }

  return (
    <>
      <ul className="mb-8 flex flex-wrap gap-2">
        {(Object.entries(TAGS) as [TagKey, { label: string }][]).map(([key, { label }]) => {
          const isActive = activeTags.includes(key);
          return (
            <li key={key}>
              <button
                onClick={() => toggle(key)}
                className={`rounded-full border px-3 py-0.5 text-xs transition-colors ${
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground">해당 태그의 글이 없습니다.</p>
      ) : (
        <ul className="flex flex-col gap-8">
          {filtered.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`} className="group block">
                <p className="text-muted-foreground mb-1 text-sm">{post.date}</p>
                <h2 className="group-hover:text-muted-foreground mb-1 text-xl font-semibold transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-2 text-sm">{post.description}</p>
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
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
