import React from "react";
import { timeFormat } from "@/utils/timeHelper";
import { installIcon } from "@/utils/systemHelper";
import AppIcon from "@/components/AppIcon";
import ReleaseHeader from "../ReleaseHeader";

export default function ReleaseItem(props) {
  const { release } = props;
  return (
    <div className="z-20 flex flex-col border border-gray-300 text-left rounded-xl p-8 dark:border-neutral-800 w-full mb-12  last-of-type:mb-0">
      <ReleaseHeader release={release} />
      <h4 className="mt-6 font-bold text-4xl text-gray-800 dark:text-neutral-200">
        {release.tag_name}
      </h4>
      <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500 whitespace-pre-wrap">
        {release.body}
      </p>
      <ul className="mt-7 space-y-2.5 text-sm">
        {release.assets.map((asset) => (
          <RenderAssetItem key={asset.id} asset={asset} />
        ))}
      </ul>
    </div>
  );
}

function RenderAssetItem(props) {
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
