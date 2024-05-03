import React from "react";
import ReleaseHeader from "../ReleaseHeader";
import AssetItem from "../AssetItem";

export default function ReleaseItem(props) {
  const { release } = props;
  return (
    <div className="z-20 flex flex-col border border-gray-300 text-left rounded-xl p-8 dark:border-neutral-800 w-full mb-12  last-of-type:mb-0">
      <ReleaseHeader release={release} />
      <h4 className="mt-6 font-bold text-4xl text-gray-800 dark:text-neutral-200">
        {release?.tag_name}
      </h4>
      <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500 whitespace-pre-wrap">
        {release?.body}
      </p>
      <ul className="mt-7 space-y-2.5 text-sm">
        {release?.assets?.map((asset) => (
          <AssetItem key={asset.id} asset={asset} />
        ))}
      </ul>
    </div>
  );
}
