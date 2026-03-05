import { MDXContent } from "@content-collections/mdx/react";
import { Callout } from "./Callout";
import { Mermaid } from "./Mermaid";

const components = {
  Callout,
  Mermaid,
};

interface MarkdownRendererProps {
  code: string;
}

export function MarkdownRenderer({ code }: MarkdownRendererProps) {
  return (
    <div className="prose prose-gray max-w-none prose-headings:tracking-tight prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-pre:bg-transparent prose-pre:p-0">
      <MDXContent code={code} components={components} />
    </div>
  );
}
