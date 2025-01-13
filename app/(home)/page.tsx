import { getSortedPosts } from "@/lib/mdx";

import HomeWrapper from "@/components/home/HomeWrapper";

export default function HomePage() {
  const contents = getSortedPosts();

  return <HomeWrapper contents={contents} />;
}
