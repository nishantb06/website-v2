"use server";

import { fetchBlogs, getSlugToIdMap } from "@/lib/notion";
import { NotionBlogs } from "@/utils/notion.dtypes";

export default async function TempBlogs() {
  const blogs: NotionBlogs = await fetchBlogs();
  const slugToId = await getSlugToIdMap();
  
  return (
    <div>
      <h1>Blogs</h1>
      {/* Display the slug to ID mapping */}
      <div className="mb-8 p-4 bg-gray-800 rounded">
        <h2 className="text-xl font-bold mb-2">Slug to ID Mapping:</h2>
        {Object.entries(slugToId).map(([slug, id]) => (
          <div key={slug} className="text-sm">
            <span className="text-green-400">{slug}</span>: <span className="text-blue-400">{id}</span>
          </div>
        ))}
      </div>
      {/* Original blog list */}
      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <p className="text-sm text-gray-500">Page ID: {blog.id}</p>
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



