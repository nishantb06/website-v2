import { ToggleGroupDemo } from "@/components/blog-toggle";
import { CommandDemo } from "@/components/search";

export default function Blog() {
  return (
    <div className="py-10 mx-auto max-w-2xl ">
      <div className="flex justify-center w-full pt-20 pb-10">
        <div className="flex w-7/1">
          <CommandDemo />
        </div>
      </div>
      <div className="flex justify-start">
        <ToggleGroupDemo />
      </div>
      <div className="flex justify-center min-h-screen border-t border-l border-r border-gray-200">
      </div>
    </div>
  );
}
