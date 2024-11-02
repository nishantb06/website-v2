import { CommandDemo } from "@/components/search";

export default function Blog() {
  return (
    <div className="py-10 mx-auto max-w-2xl">
      <div className="flex justify-center w-full py-20">
        <div className="flex gap-2 w-3/4">
          <CommandDemo />
        </div>
      </div>
    </div>
  );
}
