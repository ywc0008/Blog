import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostData {
  title: string;
  slug: string;
  description: string;
  date: string; // ISO 형식의 날짜 문자열
  author?: string;
  tags?: string[];
  [key: string]: string | string[] | undefined; // 추가적인 메타데이터를 허용
}

const postsDirectory = path.join(process.cwd(), "content");

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles); // 하위 디렉토리 재귀 탐색
    } else {
      arrayOfFiles.push(fullPath); // 파일 경로 저장
    }
  });

  return arrayOfFiles;
}

/**
 * posts 디렉토리의 모든 MDX 파일을 읽고, 날짜 기준으로 정렬된 게시물 데이터를 반환합니다.
 * @returns 정렬된 게시물 데이터 배열
 */
export function getSortedPosts(): PostData[] {
  const allFilePaths = getAllFiles(postsDirectory);
  const allPosts: PostData[] = allFilePaths
    .filter((filePath) => filePath.endsWith(".mdx")) // MDX 파일만 필터링
    .map((filePath) => {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return data as PostData; // 메타데이터를 PostData 타입으로 변환
    });

  return allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() // 최신순 정렬
  );
}
