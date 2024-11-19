'use client'

import { useState } from "react";
import { CommandDemo } from "@/components/search";
import { TabsDemo } from "@/components/tabsdemo";
import { GetStaticProps } from 'next';
import { getBlogPosts } from '../../utils/notion';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getBlogPosts();
  return {
    props: {
      posts,
    },
  };
};
interface Post {
  id: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
}
interface Props {
  posts: Post[];
}

export default function Blog() {
  const [toggleValue, setToggleValue] = useState("blogs");
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="py-10 mx-auto max-w-2xl ">
      <div className="flex justify-center w-full pt-20 pb-10">
        <div className="flex w-7/1">
          <CommandDemo onSearchChange={setSearchValue} />
        </div>
      </div>
      <div className="flex justify-start">
        <TabsDemo />
      </div>
      <div className="flex min-h-screen border-t border-l border-r border-gray-200">
        <p>Showing {toggleValue}, related to {searchValue}</p>
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
              <ul>
                {post.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <p>{post.content}</p>
            </div>
              ))}
        </div>
      </div>
    </div>
  );
}
