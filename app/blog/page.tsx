import { getAllBlogContents } from "@/modules/blog/getAllBlogContents";

import BlogWrapper from "@/components/blog/BlogWrapper";

export default async function BlogPage() {
  const contents = await getAllBlogContents();

  return <BlogWrapper contents={contents} />;
}
