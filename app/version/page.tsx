import React from "react";
import AppHeader from "@/components/AppHeader";
import AppBg from "@/components/AppBg";
import ReleaseList from "./components/ReleaseList";
import { repoUrl, baseParams } from "@/utils/githubHelper";

export default async function Version() {
  const init = async () => {
    return await fetch(`${repoUrl}/releases`, baseParams).then((res) =>
      res.json(),
    );
  };
  const releases = await init();
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <AppHeader />
      <AppBg />
      <ReleaseList releases={releases} />
    </main>
  );
}
