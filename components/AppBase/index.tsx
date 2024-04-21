import React from "react";
import AppHeader from "../AppHeader";
import AppBg from "../AppBg";

export default function AppBase(props) {
  const { children } = props;
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 pt-24 pb-12 sm:pt-28 lg:px-8">
      <AppHeader />
      <AppBg />
      {children}
    </main>
  );
}
