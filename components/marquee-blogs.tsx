"use client"
import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import { fetchBlogs } from "@/lib/notion";

// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="36" height="36" alt="" src={img} />
        <div className="flex flex-col">
          <p className="text-sm font-semibold dark:text-white">
            {name}
          </p>
        </div>
      </div>
      <p className="mt-2 text-sm">{body}</p>
    </figure>
  );
};

export async function MarqueeDemo() {
  const blogs = await fetchBlogs();
  const blogsDataForMarquee = blogs.map((blog) => ({
    name: blog.properties.Title.title[0].plain_text,
    username: blog.properties.slug.rich_text[0]?.plain_text,
    body: blog.properties.Subtitle.rich_text[0]?.plain_text,
    img: blog.cover?.type === "external" ? blog.cover.external.url : 
         blog.cover?.type === "file" ? blog.cover.file.url : 
         "/images/default-blog.jpg"  // Provide a default image path
  }));
  const firstRow = blogsDataForMarquee.slice(0, blogsDataForMarquee.length / 2);
  const secondRow = blogsDataForMarquee.slice(blogsDataForMarquee.length / 2);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default MarqueeDemo;
