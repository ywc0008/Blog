import { getNewContents } from "@/modules/home/getNewContents";

import HomeWrapper from "@/components/home/HomeWrapper";

export default async function HomePage() {
  const contents = await getNewContents();

  return <HomeWrapper contents={contents} />;
}
