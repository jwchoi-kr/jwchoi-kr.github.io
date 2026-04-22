import Link from "next/link";

const links = [
  { href: "https://github.com/jwchoi-kr", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/jaewoong-choi-0899a0278/",
    label: "LinkedIn",
  },
  { href: "mailto:jwchoi.tech@gmail.com", label: "Email" },
];

export default function About() {
  return (
    <section className="mx-auto">
      <h1 className="mb-8 text-4xl font-bold">About Me</h1>
      <div className="text-foreground space-y-4 leading-relaxed">
        <p>
          서울대학교 컴퓨터공학부 재학 중이며 교내 개발 동아리{" "}
          <Link
            href="https://github.com/wafflestudio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground border-muted-foreground/50 hover:border-foreground border-b border-dotted transition-colors"
          >
            WaffleStudio
          </Link>
          에서 여러 서비스를 개발하였습니다.
        </p>
        <p>AI를 포함한 다양한 tool들을 이용한 생산성 향상에 관심이 많습니다.</p>
      </div>
      <ul className="mt-10 flex gap-4 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
