"use server";

import { fetchBlogs } from "@/lib/notion";

export default async  function TempBlogs() {
  const blogs = await fetchBlogs();
  return <div>{JSON.stringify(blogs)}</div>;
}



