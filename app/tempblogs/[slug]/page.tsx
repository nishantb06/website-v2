import { Post } from "@/components/blogPost";
import { fetchBlogBlocks, fetchBlogBySlug, notion } from "@/lib/notion";
import { NotionBlog } from "@/utils/notion.dtypes";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { notFound } from "next/navigation";

export default async function TempBlog({
  params,
}: {
  params: { slug: string };
}) {
  const blog: NotionBlog = await fetchBlogBySlug(params.slug);
  console.log(blog);
  if (!blog) {
    notFound();
  }
  const blocks = await fetchBlogBlocks(blog.id);

  const renderer = new NotionRenderer({ client: notion });
  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));
  const html = await renderer.render(...blocks);

  return <Post title={blog.properties.Title.title[0].plain_text} content={html} />;
}
