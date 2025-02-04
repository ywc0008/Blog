import fs from "fs";
import path from "path";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const decodedSlug = decodeURIComponent(slug);
  const { default: Post } = await import(`@/contents/blog/${decodedSlug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  const posts = fs
    .readdirSync(path.join(process.cwd(), "contents/blog"))
    // .mdx 확장자를 제거하고 슬러그만 추출합니다
    .map((filename) => ({
      slug: filename.replace(".mdx", ""),
    }));

  return posts;
}

export const dynamicParams = false;
