'use client'

import { useState } from "react";
import { ToggleGroupDemo } from "@/components/blog-toggle";
import { CommandDemo } from "@/components/search";
import { TabsDemo } from "@/components/tabsdemo";

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
      </div>
    </div>
  );
}
