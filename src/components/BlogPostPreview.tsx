"use client";
import { cn } from "@/lib/utils";
import { GetPostsResult } from "@/lib/wisp";
import { sendGAEvent } from "@next/third-parties/google";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { MagicCard } from "./magicui/magic-card";
import { useTheme } from "next-themes";
import { Lens } from "./magicui/lens";

export const BlogPostPreview: FunctionComponent<{
  post: GetPostsResult["posts"][0];
}> = ({ post }) => {
  const { theme } = useTheme();

  return (
    <MagicCard
      className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl"
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
    >
      <div className="break-words">
        <Link
          href={`/blog/${post.slug}`}
          onClick={() => {
            sendGAEvent("click", "postClicked", {
              category: "post",
              label: post.title,
            });
          }}
        >
          <div className="aspect-[16/9] relative">
            <Lens
              zoomFactor={2}
              lensSize={150}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <Image
                alt={post.title}
                className="object-cover"
                src={post.image || "/images/placeholder.webp"}
                fill
              />
            </Lens>
          </div>
        </Link>
        <div className="grid grid-cols-1 gap-3 md:col-span-2 p-4">
          <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
            {formatDate(post.publishedAt || post.updatedAt, "dd MMMM yyyy")}
          </div>
          <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
            {post.description}
          </div>
          <div className="text-sm text-muted-foreground">
            {post.tags.map((tag) => (
              <div key={tag.id} className="mr-2 inline-block">
                <Link href={`/tag/${tag.name}`}>#{tag.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MagicCard>
  );
};

export const BlogPostsPreview: FunctionComponent<{
  posts: GetPostsResult["posts"];
  className?: string;
}> = ({ posts, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-2 md:my-16 my-8",
        className
      )}
    >
      {posts.map((post) => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};
