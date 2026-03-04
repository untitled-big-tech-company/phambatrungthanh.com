import { Link } from "@tanstack/react-router";

interface PostCardProps {
  slug: string;
  title: string;
  description: string;
  formattedDate: string;
  readingTime: number;
}

export function PostCard({
  slug,
  title,
  description,
  formattedDate,
  readingTime,
}: PostCardProps) {
  return (
    <article>
      <Link
        to="/blog/$slug"
        params={{ slug }}
        className="group block"
      >
        <h2 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
          {title}
        </h2>
        <p className="mt-1 text-gray-500 text-sm">
          {formattedDate} · {readingTime} phút đọc
        </p>
        <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>
      </Link>
    </article>
  );
}
