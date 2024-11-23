import 'server-only'
import { Client } from "@notionhq/client";
import React from 'react';
import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionBlogsSchema } from '@/utils/notion.dtypes';

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const fetchBlogs = React.cache(async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Status",
      status: {
        equals: "Published",
      },
    },
  });
  // Validate the response
  const validatedBlogs = NotionBlogsSchema.parse(response.results);
  return validatedBlogs;
});

export const fetchBlogBySlug = React.cache(async (slug: string) => {
  const blog = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "slug",
      rich_text: {
        equals: slug,
      },
    },
  }).then((res) => res.results[0] as PageObjectResponse | undefined);

  const validatedBlog = NotionBlogSchema.parse(blog);
  return validatedBlog;
});

export const fetchBlogBlocks = React.cache(async (blogId: string) => {
  return notion.blocks.children.list({
    block_id: blogId,
  }).then((res) => res.results as BlockObjectResponse[]);
});
