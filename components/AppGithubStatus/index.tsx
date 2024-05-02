import AppIcon from "@/components/AppIcon";

export default function AppGithubStatus(props) {
  const { repoInfo, contributors } = props;
  const options = [
    {
      icon: "#icon-star1",
      title: "star",
      value: repoInfo.stargazers_count,
    },
    {
      icon: "#icon-code-fork",
      title: "forks",
      value: repoInfo.forks_count,
    },
    {
      icon: "#icon-ic-gongxianrenyuan",
      title: "contributors",
      value: contributors.length,
    },
  ];
  return (
    <div className="max-w-[100rem] pt-12 lg:pt-20 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {options?.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800"
          >
            <div className="px-4 py-3  flex gap-x-4">
              <div className="flex-shrink-0 flex justify-center items-center size-[46px] bg-gray-100 rounded-lg dark:bg-neutral-800 text-xl">
                <AppIcon icon={item.icon} />
              </div>

              <div className="grow">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                    {item.title}
                  </p>
                </div>
                <div className="mt-1 flex items-center gap-x-2">
                  <div className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    {item.value}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
