import React from "react";
import AppMarkdown from "@/components/AppMarkdown";
// import Md from "./index.md";
import AppBase from "@/components/AppBase";
import fs from "fs";
import path from "path";

export default async function Contributu() {
  const init = async () => {
    const markdownFilePath = path.join(process.cwd(), "markdown/contribute.md");
    return await fs.readFileSync(markdownFilePath, "utf-8");
  };
  const markdownContent = await init();
  return (
    <AppBase>
      <AppMarkdown markdownContent={markdownContent}></AppMarkdown>
    </AppBase>
  );
}
