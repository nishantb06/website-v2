import "server-only";

import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { cache } from "react";
import { NotionBlogsSchema, NotionBlogs } from './notion.dtypes';

export const notionClient = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const getBlogs = cache(async () => {
  const response = await notionClient.databases.query({
    filter: {
      property: "Status",
      select: {
        equals: "Published",
      },
    },
    database_id: process.env.NOTION_DATABASE_ID!,
  });
  
  // Validate the response
  const validatedBlogs = NotionBlogsSchema.parse(response.results);
  return validatedBlogs;
});

export const getBlogContent = cache((pageId: string) => {
  return notionClient.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
});

export const getBlogBySlug = cache((slug: string) => {
  return notionClient.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const getBlogBlocks = cache((pageId: string) => {
  return notionClient.blocks.children.list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
});