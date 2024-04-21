import React from "react";
import ReleaseItem from "../ReleaseItem";

export default function ReleaseList(props) {
  const { releases } = props;
  return releases.map((release) => (
    <ReleaseItem key={release.id} release={release} />
  ));
}
