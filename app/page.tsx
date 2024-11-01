import { BentoDemo } from "@/components/bento-demo";
import { MagicCardDemo } from "@/components/magic-card-demo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Home() {
  return (
    <main className="min-h-screen dotted-background bg-background">
      <div className="container mx-auto px-4 py-16">
      </div>
      <BentoDemo />
      <MagicCardDemo />
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

    </main>
  );
}
