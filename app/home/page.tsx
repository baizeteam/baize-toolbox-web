import "@/styles/globals.css";
import AppGithubStatus from "@/components/AppGithubStatus";
import AppDownload from "@/components/AppDownload";
import AppHeader from "@/components/AppHeader";
import { repoUrl, baseParams } from "@/utils/githubHelper";

export default async function Home() {
  async function init() {
    const [repoInfoRes, repoReleasesRes, contributorsRes] = await Promise.all([
      fetch(repoUrl, baseParams),
      fetch(`${repoUrl}/releases`, baseParams),
      fetch(`${repoUrl}/contributors`, baseParams),
    ]);
    return {
      repoInfo: await repoInfoRes.json(),
      repoReleases: await repoReleasesRes.json(),
      contributors: await contributorsRes.json(),
    };
  }

  const { repoInfo, repoReleases, contributors } = await init();

  return (
    <div className="bg-white">
      <AppHeader />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl pt-32">
          <div className="text-center">
            <h1
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              className="text-4xl font-bold inline-block tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent sm:text-6xl"
            >
              白泽工具箱
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 indent-10 text-left">
              白泽工具箱是一款功能强大的多媒体处理工具，可以帮助用户在不同的多媒体格式之间进行快速、高效的转换。无论是图片、音频还是视频，这个工具都能轻松搞定，让用户在处理多媒体文件时更加方便快捷。
            </p>
            <div className="mt-16 flex items-center justify-center gap-x-6">
              <AppDownload repoReleases={repoReleases} />
              <a
                href="https://github.com/sulgweb/baize-toolbox/releases"
                className="text-sm font-semibold leading-6 text-gray-400 hover:text-gray-600"
              >
                查看更多版本 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <AppGithubStatus repoInfo={repoInfo} contributors={contributors} />
        </div>
      </div>
    </div>
  );
}
