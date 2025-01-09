import type { PostData } from "@/lib/mdx";

import HomeNewPost from "./HomeNewPost";
// import HomeMorePost from "./HomeMorePost";
// import HomeTravelPost from "./HomeTravelPost";

interface HomeWrapperProps {
  contents: PostData[];
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
