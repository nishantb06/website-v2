import {  fetchBlogBySlug } from "@/lib/notion";
import { NotionBlog } from "@/utils/notion.dtypes";
// import { NotionRenderer } from "react-notion";
import { notFound } from "next/navigation";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import 'prismjs/components/prism-python';
import { NotionAPI } from 'notion-client'
import * as React from 'react'
import { NotionRenderer } from 'react-notion-x'
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import Prism from 'prismjs'

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
  const notion = new NotionAPI()
  const pageId = blog.id.replace(/-/g, '');
  const recordMap = await notion.getPage(pageId);
  // const blocks = await fetchBlogBlocks(blog.id);

  // const renderer = new NotionRenderer({ client: notion });
  // renderer.use(hljsPlugin({}));
  // renderer.use(bookmarkPlugin(undefined));
  // const html = await renderer.render(...blocks);  // const html = ();
  // return <Post title={blog.properties.Title.title[0].plain_text} content={html} />;


  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
  )
}
