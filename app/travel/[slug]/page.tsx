import fs from "fs";
import path from "path";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const decodedSlug = decodeURIComponent(slug);
  const { default: Post } = await import(`@/content/travel/${decodedSlug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  // fs 모듈을 사용하여 content/blog 디렉토리의 모든 MDX 파일을 읽습니다
  const posts = fs
    .readdirSync(path.join(process.cwd(), "content/travel"))
    // .mdx 확장자를 제거하고 슬러그만 추출합니다
    .map((filename) => ({
      slug: filename.replace(".mdx", ""),
    }));

  return posts;
}

export const dynamicParams = false;
