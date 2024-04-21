"use client";
import React, { useState, useEffect } from "react";

const navigation = [
  { name: "主页", href: "/home" },
  { name: "版本", href: "/version" },
  { name: "参与贡献", href: "/contribute" },
  // { name: "Company", href: "#" },
];

export default function AppNavgation() {
  const [curTab, setCurTab] = useState("home");
  console.log(curTab);

  useEffect(() => {
    const tab = window.location.pathname.slice(1) || "home";
    console.log(window.location);
    setCurTab(tab);
  }, []);
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={`${curTab === item.href.slice(1) ? "text-indigo-500 text-base" : "text-gray-900 text-sm"}  font-semibold leading-6 `}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
