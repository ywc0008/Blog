import { PostData } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";

interface HomeNewPostProps {
  contents: PostData[];
}

// 포스트 링크 생성 함수
const getPostLink = (post: PostData) => {
  return `/${post.category}/${post.title}`;
};

export default function HomeNewPost({ contents }: HomeNewPostProps) {
  // 최신 10개의 포스트만 선택

  const recentContents = contents.slice(0, 10) || [];

  return (
    <section className="bg-c-gray">
      <div className="max-w-[980px] mx-auto custom-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        <h1 className="custom-h1">최신 포스트</h1>

        {/* 첫 번째 포스트 - 가장 큰 사이즈 */}
        {recentContents[0] && (
          <Link
            href={getPostLink(recentContents[0])}
            className="flex bg-white sm:col-span-2 lg:col-span-6 h-80 rounded-3xl"
          >
            <Image
              src={recentContents[0].thumbnail as string}
              alt={recentContents[0].title}
              width={750}
              height={750}
              className="object-cover rounded-l-3xl"
            />
            <div className="flex flex-col justify-between h-full p-5">
              <div>
                <div className="text-gray-500">
                  {recentContents[0].category}
                </div>
                <div className="text-3xl font-extrabold">
                  {recentContents[0].title}
                </div>
              </div>
              <div className="text-gray-500 font-semibold">
                {new Date(recentContents[0]?.date).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </Link>
        )}

        {/* 2-5번째 포스트 - 중간 사이즈 */}
        {recentContents.slice(1, 5).map((content) => (
          <Link
            href={getPostLink(content)}
            key={content.title}
            className="flex flex-col bg-white lg:col-span-3 h-96 rounded-3xl"
          >
            <Image
              src={content.thumbnail as string}
              alt={content.title}
              width={200}
              height={200}
              className="object-cover rounded-t-3xl"
            />
            <div className="flex flex-col justify-between h-full p-5">
              <div>
                <div className="text-gray-500">{content.category}</div>
                <div className="text-2xl font-extrabold">{content.title}</div>
              </div>
              <div className="text-gray-500 font-semibold">
                {new Date(content?.date).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </Link>
        ))}

        {/* 6-10번째 포스트 - 작은 사이즈 */}
        {recentContents.slice(5, 10).map((content) => (
          <Link
            href={getPostLink(content)}
            key={content.title}
            className="flex flex-col bg-white lg:col-span-2 h-36 rounded-3xl"
          >
            <Image
              src={content.thumbnail as string}
              alt={content.title}
              width={200}
              height={200}
              className="object-cover rounded-t-3xl"
            />
            <div className="flex flex-col justify-between h-full p-5">
              <div>
                <div className="text-gray-500">{content.category}</div>
                <div className="text-2xl font-extrabold">{content.title}</div>
              </div>
              <div className="text-gray-500 font-semibold">
                {new Date(content?.date).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
