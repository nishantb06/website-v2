import {  fetchBlogBySlug, getStaticProps } from "@/lib/notion";
import { NotionBlog } from "@/utils/notion.dtypes";
import { NotionRenderer } from "react-notion";
import { notFound } from "next/navigation";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import 'prismjs/components/prism-python';

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
  const pageId = blog.id.replace(/-/g, '');
  const { props: { blockMap } } = await getStaticProps(pageId);
  // const blocks = await fetchBlogBlocks(blog.id);

  // const renderer = new NotionRenderer({ client: notion });
  // renderer.use(hljsPlugin({}));
  // renderer.use(bookmarkPlugin(undefined));
  // const html = await renderer.render(...blocks);  // const html = ();
  // return <Post title={blog.properties.Title.title[0].plain_text} content={html} />;


  return (
    <div className="mx-auto">
      {blog.cover?.type === 'external' && (
        <div className="w-full h-[300px] relative mb-8">
          <img
            src={blog.cover.external.url}
            alt="Blog cover"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
      <div className="max-w-3xl mx-auto justify-left">
        <div style={{ maxWidth: 768 }}>
          <NotionRenderer blockMap={blockMap} />
        </div>
      </div>
    </div>
  );
}
