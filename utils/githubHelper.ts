export const repoUrl = `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}`;

type baseParamsType = {
  next?: any;
  headers: {
    [key: string]: string;
  };
};
export const baseParams: baseParamsType = {
  next: { revalidate: 600 },
  headers: {
    "Content-Type": "application/json",
  },
};
if (process.env.GITHUB_TOKEN) {
  baseParams.headers.Authorization = `token ${process.env.GITHUB_TOKEN as string}`;
}
