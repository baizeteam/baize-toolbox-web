import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { projectInfo } from "@/utils/textHelper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: projectInfo.title,
  description: projectInfo.description,
  keywords: projectInfo.keywords,
  robots: projectInfo.robots,
  other: {
    "baidu-site-verification": projectInfo["baidu-site-verification"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <meta name="baidu-site-verification" content="codeva-SXiQmQfy3Z" /> */}
        <script async src="/iconfont.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
