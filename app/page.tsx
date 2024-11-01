import { BentoDemo } from "@/components/bento-demo";
import { MagicCardDemo } from "@/components/magic-card-demo";


export default function Home() {
  return (
    <main className="min-h-screen dotted-background bg-background max-w-5xl mx-auto">
      <div className="container mx-auto px-4 py-16">
      </div>
      <BentoDemo />
      <MagicCardDemo />
    </main>
  );
}
