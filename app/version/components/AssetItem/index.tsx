"use client";
import React from "react";
import AppIcon from "@/components/AppIcon";
import { installIcon } from "@/utils/systemHelper";

export default function AssetItem(props) {
  const { asset } = props;
  return (
    <li className="flex items-center space-x-2 text-indigo-500 hover:text-indigo-600">
      <AppIcon
        className="text-lg"
        icon={installIcon[asset.name.split(".").pop()]}
      />
      <a href={asset.browser_download_url} className="ml-2 ">
        {asset.name}
      </a>
    </li>
  );
}
