import { getContentLink } from "@/lib/link";
import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

interface TravelWrapperProps {
  contents: Post[];
}

export default function TravelWrapper({ contents }: TravelWrapperProps) {
  return (
    <section>
      <div className="max-w-[980px] mx-auto custom-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        <h1 className="custom-h1 mb-8 col-span-6">여행 포스트</h1>
        {contents.map((content) => (
          <Link
            href={getContentLink(content)}
            key={content.frontMatter.title}
            className="flex flex-col bg-white lg:col-span-2 h-80"
          >
            <div className="relative w-full h-3/5">
              <Image
                src={content.frontMatter.thumbnail as string}
                alt={content.frontMatter.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="flex flex-col justify-between h-2/5 p-5">
              <div>
                <div className="text-gray-500">
                  {content.frontMatter.category}
                </div>
                <div className="text-2xl font-extrabold">
                  {content.frontMatter.title}
                </div>
              </div>
              <div className="text-gray-500 font-semibold">
                {new Date(content.frontMatter.date).toLocaleDateString(
                  "ko-KR",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
