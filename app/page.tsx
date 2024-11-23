import { Bento } from "@/components/bento";
import { getBlogs } from "@/utils/notion";



export default async function Home() {
  const Blogs = await getBlogs();
  return (
    <main className="min-h-screen dotted-background bg-background max-w-5xl mx-auto">
      <div className="container mx-auto px-4 py-16">
      </div>
      <Bento />
    </main>
  );
}
