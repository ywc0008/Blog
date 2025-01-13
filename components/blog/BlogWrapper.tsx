import type { PostData } from "@/lib/mdx";

interface BlogWrapperProps {
  contents: PostData[];
}

export default function BlogWrapper({ contents }: BlogWrapperProps) {
  return <div>BlogWrapper</div>;
}
