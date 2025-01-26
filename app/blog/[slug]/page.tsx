import { getBlogBySlug, getBlogContent, notionClient } from "@/utils/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { Post } from "@/components/blogPost";
import { notFound } from "next/navigation";
export default async function Page({ params }: { params: { slug: string } }) {
  console.log("Slug: ", params);
  const post = await getBlogBySlug(params.slug);
    
  //Redirect to not found page!
  if (!post) notFound();

  const content = await getBlogContent(post.id);

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));
  const html = await notionRenderer.render(...content);

  console.log("Post: ", post);

  return <Post title={post.properties.Title.title[0].plain_text} content={html} />;
}
