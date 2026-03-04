const variants = {
  info: {
    container: "border-blue-200 bg-blue-50",
    title: "text-blue-800",
    icon: "ℹ️",
  },
  warning: {
    container: "border-amber-200 bg-amber-50",
    title: "text-amber-800",
    icon: "⚠️",
  },
  tip: {
    container: "border-green-200 bg-green-50",
    title: "text-green-800",
    icon: "💡",
  },
  danger: {
    container: "border-red-200 bg-red-50",
    title: "text-red-800",
    icon: "🚨",
  },
} as const;

interface CalloutProps {
  type?: keyof typeof variants;
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const variant = variants[type];
  return (
    <div
      className={`my-6 rounded-lg border p-4 ${variant.container} not-prose`}
    >
      {title && (
        <p className={`mb-2 font-semibold ${variant.title}`}>
          {variant.icon} {title}
        </p>
      )}
      <div className="text-sm leading-relaxed text-gray-700">{children}</div>
    </div>
  );
}
