import React from "react";
import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  "amazonaws",
  "apache",
  "apple",
  "archlinux",
  "docker",
  "scylla",
  "freebsd",
  "git",
  "github",
  "gitlab",
  "graphql",
  "huggingface",
  "jira",
  "javascript",
  "kalilinux",
  "linux",
  "linode",
  "mongodb",
  "mysql",
  "nextdotjs",
  "nginx",
  "nodedotjs",
  "numpy",
  "openai",
  "pandas",
  "pocketbase",
  "postgresql",
  "prisma",
  "python",
  "pytorch",
  "react",
  "redis",
  "tailwindcss",
  "typescript",
  "ubuntu",
  "zod",
  "golang",
];
export default function Technologies() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="">
        <IconCloud images={images} />
    </div>
  );
}
