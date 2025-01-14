import { Post } from "@/types/post";

interface BlogWrapperProps {
  contents: Post[];
}

export default function BlogWrapper({ contents }: BlogWrapperProps) {
  console.log(contents);
  return <div>BlogWrapper</div>;
}
