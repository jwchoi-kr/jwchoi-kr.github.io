import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import Nav from "./nav";

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

        <Nav />

        <ThemeToggle />
      </div>
    </header>
  );
}
