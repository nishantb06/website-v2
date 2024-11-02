import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function Blog() {
  return (
    <div className="py-10 mx-auto max-w-2xl">
      <div className="flex justify-center w-full max-w-2xl mx-auto py-20">
        <div className="flex gap-2 w-3/4">
          <Input className="h-10" placeholder="Coming soon..." />
          <Button>
            <SearchIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
