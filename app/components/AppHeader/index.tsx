import React from "react";
import Image from "next/image";
import AppIcon from "../AppIcon";
import AppNavgation from "../AppNavgaiton";

export default function AppHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              width={48}
              height={48}
              className="h-12 w-auto rounded-lg"
              src="/icon.ico"
              alt=""
            />
          </a>
        </div>
        <AppNavgation />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <div className="flex justify-end">
              <AppLangSelect />
            </div> */}
          <a
            href="https://github.com/sulgweb/baize-toolbox"
            className="text-sm font-semibold leading-6 text-gray-900 flex items-center"
            target="_blank"
          >
            <AppIcon className="text-2xl mr-2" icon="#icon-github-fill" />
            <div>Github</div>
          </a>
        </div>
      </nav>
    </header>
  );
}
