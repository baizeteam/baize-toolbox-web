import "@/styles/globals.css";
import AppGithubStatus from "@/components/AppGithubStatus";
import AppDownload from "@/components/AppDownload";
import AppBase from "@/components/AppBase";
import { repoUrl, baseParams } from "@/utils/githubHelper";
import { projectInfo } from "@/utils/textHelper";

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
              {projectInfo?.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 indent-10 text-left">
              {projectInfo?.description}
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
