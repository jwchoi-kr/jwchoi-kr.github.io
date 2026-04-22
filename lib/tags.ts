export const TAGS = {
  react: { label: "React" },
  nextjs: { label: "Next.js" },
  typescript: { label: "TypeScript" },
  javascript: { label: "JavaScript" },
  css: { label: "CSS" },
  dx: { label: "DX" },
} as const;

export type TagKey = keyof typeof TAGS;
