import 'server-only'
import { Client } from "@notionhq/client";
import React from 'react';
import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

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
  return response.results;
});

export const fetchBlogBySlug = React.cache(async (slug: string) => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "slug",
      rich_text: {
        equals: slug,
      },
    },
  }).then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const fetchBlogBlocks = React.cache(async (blogId: string) => {
  return notion.blocks.children.list({
    block_id: blogId,
  }).then((res) => res.results as BlockObjectResponse[]);
});
