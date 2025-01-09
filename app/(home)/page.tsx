import HomeWrapper from "@/components/home/HomeWrapper";
import { getSortedPosts } from "@/lib/mdx";

export default async function HomePage() {
  const contents = getSortedPosts();

  return <HomeWrapper contents={contents} />;
}
