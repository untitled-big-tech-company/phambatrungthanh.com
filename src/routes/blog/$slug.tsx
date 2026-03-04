import { createFileRoute } from "@tanstack/react-router";
import { allPosts } from "content-collections";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { PostNavigation } from "~/components/PostNavigation";
import { seo } from "~/components/Seo";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = allPosts.find((p) => p.slug === params.slug);
    if (!post) return {};
    return {
      meta: seo({
        title: `${post.title} | Trung Thanh`,
        description: post.description,
        image: post.image,
        type: "article",
      }),
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();

  const sortedPosts = allPosts
    .filter((p) => p.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const currentIndex = sortedPosts.findIndex((p) => p.slug === slug);
  const post = sortedPosts[currentIndex];

  if (!post) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold">Không tìm thấy bài viết</h1>
        <p className="mt-2 text-gray-500">Bài viết bạn tìm không tồn tại.</p>
      </div>
    );
  }

  const prev = currentIndex < sortedPosts.length - 1
    ? sortedPosts[currentIndex + 1]
    : undefined;
  const next = currentIndex > 0
    ? sortedPosts[currentIndex - 1]
    : undefined;

  return (
    <article>
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
        <p className="mt-2 text-sm text-gray-500">
          {post.formattedDate} · {post.readingTime} phút đọc
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-3 flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <MarkdownRenderer code={post.mdx} />
      <PostNavigation
        prev={prev ? { slug: prev.slug, title: prev.title } : undefined}
        next={next ? { slug: next.slug, title: next.title } : undefined}
      />
    </article>
  );
}
