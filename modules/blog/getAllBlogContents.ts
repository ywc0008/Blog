import type { Post } from "@/types/post";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getAllBlogContents(): Promise<Post[]> {
  // blog 컨텐츠 디렉토리 경로 설정
  const blogDirectory = path.join(process.cwd(), "contents/blog");

  // 디렉토리에서 .mdx 파일들 가져오기
  const files = fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".mdx"));

  // 각 파일의 내용을 처리
  const contents = files.map((fileName) => {
    // 파일 경로
    const filePath = path.join(blogDirectory, fileName);
    // 파일 내용 읽기
    const fileContents = fs.readFileSync(filePath, "utf8");
    // gray-matter로 frontmatter 파싱
    const { data, content } = matter(fileContents);

    return {
      frontMatter: {
        title: data.title,
        slug: fileName.replace(".mdx", ""),
        description: data.description,
        date: data.date,
        author: data.author,
        category: data.category,
        tags: data.tags || [],
        thumbnail: data.thumbnail,
      },
      content,
      slug: fileName.replace(".mdx", ""),
    };
  });

  return contents;
}
