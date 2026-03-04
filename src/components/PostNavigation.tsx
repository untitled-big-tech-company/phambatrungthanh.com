import { Link } from "@tanstack/react-router";

interface Post {
  slug: string;
  title: string;
}

interface PostNavigationProps {
  prev?: Post;
  next?: Post;
}

export function PostNavigation({ prev, next }: PostNavigationProps) {
  if (!prev && !next) return null;

  return (
    <nav className="mt-12 flex items-stretch gap-4 border-t border-gray-100 pt-8">
      {prev ? (
        <Link
          to="/blog/$slug"
          params={{ slug: prev.slug }}
          className="group flex-1 rounded-lg border border-gray-200 p-4 hover:border-gray-300 transition-colors"
        >
          <span className="text-sm text-gray-400">← Bài trước</span>
          <p className="mt-1 font-medium group-hover:text-blue-600 transition-colors">
            {prev.title}
          </p>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          to="/blog/$slug"
          params={{ slug: next.slug }}
          className="group flex-1 rounded-lg border border-gray-200 p-4 text-right hover:border-gray-300 transition-colors"
        >
          <span className="text-sm text-gray-400">Bài tiếp →</span>
          <p className="mt-1 font-medium group-hover:text-blue-600 transition-colors">
            {next.title}
          </p>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
