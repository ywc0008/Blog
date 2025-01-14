import type { Post } from "@/types/post";

// 포스트 링크 생성 함수
export const getContentLink = (post: Post) => {
  return `/${post.frontMatter.category}/${post.frontMatter.title}`;
};
