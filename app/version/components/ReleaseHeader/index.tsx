"use client";
import React, { useEffect, useState } from "react";
import { timeFormat } from "@/utils/timeHelper";

export default function ReleaseHeader(props) {
  const { release } = props;
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(timeFormat(release.created_at));
  }, [release]);
  return (
    <div className="font-medium text-lg flex items-center text-gray-800 dark:text-neutral-200">
      <div className=" bg-indigo-200 text-indigo-500 rounded py-1 px-2 mr-2 text-xs">
        {release.prerelease ? "Pre-release" : "Release"}
      </div>
      {time}
    </div>
  );
}
