import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Jaewoong's Blog",
  description: "최재웅의 블로그",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={cn("scroll-smooth", "font-sans", inter.variable)} suppressHydrationWarning>
      <body className="bg-background text-foreground flex min-h-screen flex-col tracking-tight antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="grow">{children}</main>
          {/* Footer 들어올 자리 */}
        </ThemeProvider>
      </body>
    </html>
  );
}
