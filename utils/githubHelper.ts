export const repoUrl = `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}`;
export const baseParams = {
  // next: { revalidate: 600 },
  headers: {
    "Content-Type": "application/json",
    Authorization: `token ${process.env.GITHUB_TOKEN as string}`,
  },
};
