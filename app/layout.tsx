import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "白泽工具箱",
  description: "白泽工具箱，一个功能强大的多媒体工具。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="baidu-site-verification" content="codeva-SXiQmQfy3Z" />
        <script async src="/iconfont.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
