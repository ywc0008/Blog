import BlogWrapper from "@/components/blog/BlogWrapper";
import { getAllBlogContents } from "@/modules/blog/getAllBlogContents";

export default function BlogPage() {
  const contents = getAllBlogContents();

  return <BlogWrapper contents={contents} />;
}
