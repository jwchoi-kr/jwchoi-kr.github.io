import Link from "next/link";

const links = [
  { href: "https://github.com/jwchoi-kr", label: "GitHub" },
  { href: "https://www.linkedin.com/in/jaewoong-choi-0899a0278/", label: "LinkedIn" },
  { href: "mailto:jwchoi.tech@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Jaewoong Choi</span>
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-foreground transition-colors"
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
