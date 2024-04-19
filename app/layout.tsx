import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "白泽工具箱",
  description:
    "白泽工具箱是一款功能强大的多媒体处理工具，可以帮助用户在不同的多媒体格式之间进行快速、高效的转换。无论是图片、音频还是视频，这个工具都能轻松搞定，让用户在处理多媒体文件时更加方便快捷。",
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
