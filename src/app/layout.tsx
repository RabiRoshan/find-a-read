import "./globals.css";
import type { Metadata } from "next";
import { Fira_Sans_Condensed } from "next/font/google";

const inter = Fira_Sans_Condensed({ subsets: ["latin"] ,weight: "400"});

export const metadata: Metadata = {
  title: "Find A Book",
  description:
    "Your gateway to explore, discover, and dive into the world of books with just a keyword.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-4 text-center">
          <h1 className="text-4xl font-semibold text-teal-500">Find-A-Book</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
