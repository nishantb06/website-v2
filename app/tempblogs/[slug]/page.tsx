import { fetchBlogBlocks, fetchBlogBySlug } from "@/lib/notion";
import { notFound } from "next/navigation";

export default async function TempBlog({ params }: { params: { slug: string } }) {
  const blog = await fetchBlogBySlug(params.slug);
  if (!blog) {
    notFound();
  }
  const content = await fetchBlogBlocks(blog.id);
  return <div>{JSON.stringify(content)}</div>;
}
