import { Post } from "@/types/post";

interface TravelWrapperProps {
  contents: Post[];
}

export default function TravelWrapper({ contents }: TravelWrapperProps) {
  console.log(contents);
  return <div>TravelWrapper</div>;
}
