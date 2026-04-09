import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex w-full max-w-4xl items-center px-6 py-2">
        <Link
          href="/"
          className="text-md text-foreground mr-12 font-semibold tracking-[0.03em]"
        >
          Jaewoong Choi
        </Link>

        <nav aria-label="Primary" className="flex-1">
          <ul className="text-muted flex items-center gap-5 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
