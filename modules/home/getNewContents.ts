import type { Post } from "@/types/post";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 재귀적으로 모든 .mdx 파일을 찾는 헬퍼 함수
function getAllMdxFiles(directory: string): string[] {
  const files: string[] = [];

  const items = fs.readdirSync(directory);

  items.forEach((item) => {
    const fullPath = path.join(directory, item);
    if (fs.statSync(fullPath).isDirectory()) {
      // 디렉토리인 경우 재귀적으로 탐색
      files.push(...getAllMdxFiles(fullPath));
    } else if (item.endsWith(".mdx")) {
      // .mdx 파일인 경우 배열에 추가
      files.push(fullPath);
    }
  });

  return files;
}

export async function getNewContents(): Promise<Post[]> {
  const blogDirectory = path.join(process.cwd(), "contents");

  // 모든 .mdx 파일 경로 가져오기
  const files = getAllMdxFiles(blogDirectory);

  // 각 파일의 내용을 처리
  const contents = files.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // slug를 위한 상대 경로 계산
    const relativePath = path.relative(blogDirectory, filePath);
    const slug = relativePath.replace(".mdx", "");

    return {
      frontMatter: {
        title: data.title,
        slug: slug,
        description: data.description,
        date: data.date,
        author: data.author,
        category: data.category,
        tags: data.tags || [],
        thumbnail: data.thumbnail,
      },
      content,
      slug: slug,
    };
  });

  // 날짜를 기준으로 정렬하고 최신 10개만 반환
  const sortedContents = contents
    .sort((a, b) => {
      const dateA = new Date(a.frontMatter.date);
      const dateB = new Date(b.frontMatter.date);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 10);

  return sortedContents;
}
