import fs from "fs";
import path from "path";

const title = process.argv[2];

if (!title) {
  console.error("사용법: npm run new-post -- '글 제목'");
  process.exit(1);
}

const date = new Date().toISOString().split("T")[0];
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9가-힣\s-]/g, "")
  .trim()
  .replace(/\s+/g, "-");

const content = `---
title: "${title}"
date: "${date}"
description: ""
tags: []
---

`;

const filePath = path.join(process.cwd(), "content/posts", `${slug}.mdx`);

if (fs.existsSync(filePath)) {
  console.error(`이미 존재하는 파일: ${filePath}`);
  process.exit(1);
}

fs.writeFileSync(filePath, content, "utf-8");
console.log(`생성됨: content/posts/${slug}.mdx`);
