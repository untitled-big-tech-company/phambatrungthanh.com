import { Link } from "@tanstack/react-router";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl px-6">
      <header className="flex items-center justify-between py-8">
        <Link to="/" className="text-xl font-bold tracking-tight">
          Trung Thanh
        </Link>
      </header>
      <main className="py-8">{children}</main>
      <footer className="border-t border-gray-100 py-8 text-sm text-gray-400">
        © {new Date().getFullYear()} Trung Thanh
      </footer>
    </div>
  );
}
