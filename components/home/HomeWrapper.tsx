import type { Post } from "@/types/post";

import HomeNewPost from "./HomeNewPost";
// import HomeMorePost from "./HomeMorePost";
// import HomeTravelPost from "./HomeTravelPost";

interface HomeWrapperProps {
  contents: Post[];
}

export default function HomeWrapper({ contents }: HomeWrapperProps) {
  return (
    <>
      <HomeNewPost contents={contents} />
      {/* <HomeTravelPost /> */}
      {/* <HomeMorePost /> */}
    </>
  );
}
