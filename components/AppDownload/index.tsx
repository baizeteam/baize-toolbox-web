"use client";
import React, { useEffect, useState } from "react";
import AppIcon from "@/components/AppIcon";
import { getOs, osData } from "@/utils/systemHelper";

const AppDownload = (props) => {
  const { repoReleases } = props;
  const [curOsData, setCurOsData] = useState<{
    icon: string;
    downType: string | null;
  }>();
  const [downloadUrl, setDownloadUrl] = useState("");

  useEffect(() => {
    const curOs = getOs();
    const curOsData = osData[curOs];
    const downloadAssets = repoReleases?.[0].assets.find(
      (item) => item.name.indexOf(curOsData.downType) > -1,
    );
    setDownloadUrl(downloadAssets?.browser_download_url || "");

    setCurOsData(curOsData);
  }, []);

  if (!curOsData) {
    return null; // 当 curOsData 为 null 时，返回 null，避免组件渲染期间的错误
  }

  const hasDownloadUrl = downloadUrl !== "";

  return (
    <a
      href={hasDownloadUrl ? downloadUrl : "/"}
      onClick={hasDownloadUrl ? () => {} : (e) => e.preventDefault()}
      download={hasDownloadUrl}
      className={`${hasDownloadUrl ? "bg-indigo-500 hover:bg-indigo-600" : "cursor-not-allowed bg-indigo-400"} rounded-md flex items-center justify-center  px-4 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
    >
      <AppIcon className="mr-4 color-white text-lg" icon={curOsData.icon} />
      <span>{hasDownloadUrl ? "下载" : "暂不支持下载"}</span>
    </a>
  );
};

export default AppDownload;
