"use server";

import { fetchBlogs } from "@/lib/notion";
import { NotionBlogs } from "@/utils/notion.dtypes";

export default async function TempBlogs() {
  const blogs: NotionBlogs = await fetchBlogs();
  
  return (
    <div>
      <h1>Blogs</h1>
      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.properties.Title.title[0].plain_text}</h2>
            <p>{blog.properties.Subtitle.rich_text[0]?.plain_text}</p>
            <div>
              {blog.properties.Tags.multi_select.map((tag) => (
                <span key={tag.id}>{tag.name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



