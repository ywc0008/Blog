import { getAllTravelContents } from "@/modules/travel/getAllTravelContents";

import TravelWrapper from "@/components/travel/TravelWrapper";

// type TravelPageProps = {
//   searchParams: Promise<{
//     page?: number;
//     limit?: number;
//   }>;
// };

export default async function TravelPage() {
  // const page = (await searchParams).page || 1;
  // const limit = (await searchParams).limit || 10;
  const contents = await getAllTravelContents();

  return <TravelWrapper contents={contents} />;
}
