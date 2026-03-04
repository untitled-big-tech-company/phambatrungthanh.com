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
    <div className="prose prose-gray max-w-none">
      <MDXContent code={code} components={components} />
    </div>
  );
}
