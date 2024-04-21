import "@/styles/globals.css";
import AppGithubStatus from "@/components/AppGithubStatus";
import AppDownload from "@/components/AppDownload";
import AppBase from "@/components/AppBase";
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
    <AppBase>
      <div className="z-20 relative isolate">
        <div className="mx-auto max-w-2xl pt-4 lg:pt-32">
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
                href="/version"
                className="text-sm font-semibold leading-6 text-gray-400 hover:text-gray-600"
              >
                查看更多版本 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <AppGithubStatus repoInfo={repoInfo} contributors={contributors} />
        </div>
      </div>
    </AppBase>
  );
}
