import React from "react";
import ReleaseList from "./components/ReleaseList";
import { repoUrl, baseParams } from "@/utils/githubHelper";
import AppBase from "@/components/AppBase";

export default async function Version() {
  const init = async () => {
    return await fetch(`${repoUrl}/releases`, baseParams).then((res) =>
      res.json(),
    );
  };
  const releases = await init();
  return (
    <AppBase>
      <ReleaseList releases={releases} />
    </AppBase>
  );
}
