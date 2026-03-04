import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "~/components/Seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: seo({
      title: "Trang chủ | Trung Thanh",
      description: "Blog cá nhân của Trung Thanh — chia sẻ về lập trình, công nghệ và cuộc sống.",
    }),
  }),
  component: Home,
});

function Home() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold tracking-tight">
        Xin chào! 👋
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-gray-600">
        Tôi là Trung Thanh. Đây là nơi tôi chia sẻ những suy nghĩ về lập trình,
        công nghệ và những điều thú vị trong cuộc sống.
      </p>
      <Link
        to="/blog"
        className="mt-8 inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        Đọc blog →
      </Link>
    </div>
  );
}
