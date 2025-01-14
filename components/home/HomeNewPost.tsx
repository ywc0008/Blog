import type { Post } from "@/types/post";

import Link from "next/link";
import Image from "next/image";

import { getContentLink } from "@/lib/link";

interface HomeNewPostProps {
  contents: Post[];
}

export default function HomeNewPost({ contents }: HomeNewPostProps) {
  return (
    <section className="bg-c-gray">
      <div className="max-w-[980px] mx-auto custom-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        <h1 className="custom-h1">최신 포스트</h1>

        {/* 첫 번째 포스트 - 가장 큰 사이즈 */}
        {contents[0] && contents[0].frontMatter && (
          <Link
            href={getContentLink(contents[0])}
            className="flex bg-white sm:col-span-2 lg:col-span-6 h-80 rounded-3xl"
          >
            <div className="relative w-3/4">
              <Image
                src={contents[0].frontMatter.thumbnail as string}
                alt={contents[0].frontMatter.title}
                fill
                priority
                className="object-cover rounded-l-3xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-between h-full p-5">
              <div>
                <div className="text-gray-500">
                  {contents[0].frontMatter.category}
                </div>
                <div className="text-3xl font-extrabold">
                  {contents[0].frontMatter.title}
                </div>
              </div>
              <div className="text-gray-500 font-semibold">
                {new Date(contents[0].frontMatter.date).toLocaleDateString(
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
        )}

        {/* 2-5번째 포스트 - 중간 사이즈 */}
        {contents.slice(1, 5).map((content) =>
          content?.frontMatter ? (
            <Link
              href={getContentLink(content)}
              key={content.frontMatter.title}
              className="flex flex-col bg-white lg:col-span-3 h-[460px] rounded-3xl"
            >
              <div className="relative w-full h-3/5">
                <Image
                  src={content.frontMatter.thumbnail as string}
                  alt={content.frontMatter.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-t-3xl"
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
          ) : null
        )}

        {/* 6-10번째 포스트 - 작은 사이즈 */}
        {contents.slice(5, 10).map((content) => (
          <Link
            href={getContentLink(content)}
            key={content.frontMatter.title}
            className="flex flex-col bg-white lg:col-span-2 h-36 rounded-3xl"
          >
            <div className="relative w-full h-3/5">
              <Image
                src={content.frontMatter.thumbnail as string}
                alt={content.frontMatter.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-t-3xl"
              />
            </div>
            <div className="flex flex-col justify-between h-full p-5">
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
