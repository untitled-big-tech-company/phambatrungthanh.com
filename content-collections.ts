import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeShiki from "@shikijs/rehype";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.mdx",
  schema: z.object({
    content: z.string(),
    title: z.string(),
    date: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().optional().default(true),
    image: z.string().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [
        [
          rehypeShiki as any,
          {
            themes: {
              light: "github-light",
              dark: "github-dark",
            },
          },
        ],
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeKatex as any,
      ],
    });

    const slug = document._meta.path.replace(/\.mdx$/, "");
    const wordCount = document.content.split(/\s+/g).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));
    const formattedDate = new Date(document.date).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return {
      ...document,
      mdx,
      slug,
      readingTime,
      formattedDate,
    };
  },
});

export default defineConfig({
  content: [posts],
});
