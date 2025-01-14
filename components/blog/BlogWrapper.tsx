import type { Post } from "@/types/post";

import Link from "next/link";
import Image from "next/image";

import { getContentLink } from "@/lib/link";

interface BlogWrapperProps {
  contents: Post[];
}

export default function BlogWrapper({ contents }: BlogWrapperProps) {
  return (
    <section>
      <div className="max-w-[980px] mx-auto custom-section flex flex-col gap-8">
        <h1 className="custom-h1 mb-8 col-span-6">블로그</h1>
        {contents.map((content) => (
          <Link
            href={getContentLink(content)}
            key={content.frontMatter.title}
            className="flex w-full bg-white lg:col-span-2 h-48"
          >
            <div className="w-full flex flex-col justify-between p-5">
              <div className="flex flex-col gap-4">
                <div className="text-2xl font-extrabold">
                  {content.frontMatter.title}
                </div>
                <div className="text-gray-500">
                  {content.frontMatter.description}
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
            <div className="relative aspect-video">
              <Image
                src={content.frontMatter.thumbnail as string}
                alt={content.frontMatter.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
