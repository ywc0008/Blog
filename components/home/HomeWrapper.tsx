import HomeMorePost from "./HomeMorePost";
import HomeNewPost from "./HomeNewPost";
import HomeTravelPost from "./HomeTravelPost";

export default function HomeWrapper() {
  return (
    <>
      <HomeNewPost />
      <HomeTravelPost />
      <HomeMorePost />
    </>
  );
}
