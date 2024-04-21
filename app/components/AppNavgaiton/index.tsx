"use client";
import React, { useState, useEffect } from "react";

const navigation = [
  { name: "主页", href: "/home" },
  { name: "版本", href: "/version" },
  { name: "参与贡献", href: "#" },
  // { name: "Company", href: "#" },
];

export default function AppNavgation() {
  const [curTab, setCurTab] = useState("home");
  console.log(curTab);

  useEffect(() => {
    const tab = window.location.hash.slice(1) || "home";
    setCurTab(tab);
  }, []);
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
