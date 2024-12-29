import type { Post } from "@/types/post";

import { getAllPosts } from "@/lib/mdx";

import HomeMorePost from "./HomeMorePost";
import HomeNewPost from "./HomeNewPost";
import HomeTravelPost from "./HomeTravelPost";

export default async function HomeWrapper() {
  const posts = await getAllPosts();

  console.log(posts);

  return (
    <>
      <HomeNewPost posts={posts as Post[]} />
      <HomeTravelPost />
      <HomeMorePost />
    </>
  );
}
