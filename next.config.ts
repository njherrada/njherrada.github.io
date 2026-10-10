import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // GitHub Pages serves project repositories below /<repo>, but user/org sites
  // (username.github.io) are served from the domain root.
  ...(process.env.GITHUB_ACTIONS === "true" && process.env.GITHUB_REPOSITORY
    ? {
        basePath: process.env.GITHUB_REPOSITORY.split("/")[1].endsWith(
          ".github.io",
        )
          ? ""
          : `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`,
      }
    : {}),
};

export default nextConfig;
