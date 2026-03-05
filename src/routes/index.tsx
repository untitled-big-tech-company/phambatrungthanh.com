import { createFileRoute } from "@tanstack/react-router";
import { allPosts } from "content-collections";
import { PostCard } from "~/components/PostCard";
import { seo } from "~/components/Seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: seo({
      title: "Trung Thanh — Blog",
      description: "Blog cá nhân của Trung Thanh — chia sẻ về lập trình, công nghệ và cuộc sống.",
    }),
  }),
  component: Home,
});

function Home() {
  const posts = allPosts
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">Bài viết</h1>
      <div className="mt-8 space-y-10">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            description={post.description}
            formattedDate={post.formattedDate}
            readingTime={post.readingTime}
          />
        ))}
      </div>
      {posts.length === 0 && (
        <p className="mt-8 text-gray-500">Chưa có bài viết nào.</p>
      )}
    </div>
  );
}
