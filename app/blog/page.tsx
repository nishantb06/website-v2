'use client'

import { useState, useEffect } from "react";
import { CommandDemo } from "@/components/search";
import { TabsDemo } from "@/components/tabsdemo";

interface Post {
  id: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [toggleValue, setToggleValue] = useState("blogs");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="py-10 mx-auto max-w-2xl">
      <div className="flex justify-center w-full pt-20 pb-10">
        <div className="flex w-7/1">
          <CommandDemo onSearchChange={setSearchValue} />
        </div>
      </div>
      <div className="flex justify-start">
        <TabsDemo onToggleChange={setToggleValue} />
      </div>
      <div className="flex flex-col min-h-screen border-t border-l border-r border-gray-200 p-4">
        <p className="text-sm text-gray-500 mb-4">
          Showing {toggleValue}, related to {searchValue}
        </p>
        
        {loading && <p className="text-center">Loading posts...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{new Date(post.date).toLocaleDateString()}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
