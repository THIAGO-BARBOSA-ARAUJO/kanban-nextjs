import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "400"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Kanban",
  description: "app feito em nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={jakarta.variable}>{children}</body>
    </html>
  );
}
