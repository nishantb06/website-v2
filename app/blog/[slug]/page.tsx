import {  fetchBlogBySlug, fetchBlogs, getNotionPage } from "@/lib/notion";
import { NotionBlog } from "@/utils/notion.dtypes";
import { NotionRenderer } from "react-notion";
import { notFound } from "next/navigation";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import 'prismjs/components/prism-python';
import BlurIn from "@/components/magicui/blur-in";

export async function generateStaticParams() {
  // Return an array of params to generate static pages for
  // Example:
  const blogs = await fetchBlogs();
  return blogs.map((blog: NotionBlog) => ({
    slug: blog.properties.slug.rich_text[0].plain_text,
  }));
}

export default async function TempBlog({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const blog: NotionBlog = await fetchBlogBySlug(slug);
  if (!blog) {
    notFound();
  }
  const pageId = blog.id.replace(/-/g, '');
  const pageData = await getNotionPage(pageId);
  const blockMap = pageData.props.blockMap;

  return (
    <div className="mx-auto">
      {blog.cover?.type === 'external' && (
        <div className="w-full h-[300px] relative mb-8">
          <img
            src={blog.cover.external.url}
            alt="Blog cover"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-white px-4 text-center">
              {blog.properties.Title.title[0].plain_text}
            </h1>
            <p className="text-xl text-white mt-4">
              {blog.properties.Subtitle.rich_text[0]?.plain_text}
            </p>
          </div>
        </div>
      )}
      <div className="max-w-3xl mx-auto justify-left">
        <div style={{ maxWidth: 768 }}>
          <BlurIn duration={0.5} className="h-full">
            <NotionRenderer blockMap={blockMap} />
          </BlurIn>
        </div>
      </div>
    </div>
  );
}
