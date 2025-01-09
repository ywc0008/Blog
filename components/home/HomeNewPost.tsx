import { PostData } from "@/lib/mdx";
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
    <section className="bg-c-gray custom-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
      <h1 className="custom-h1">최신 포스트</h1>

      {/* 첫 번째 포스트 - 가장 큰 사이즈 */}
      {recentContents[0] && (
        <Link
          href={getPostLink(recentContents[0])}
          className="bg-[hsl(var(--chart-1))] sm:col-span-2 lg:col-span-6 h-48"
        >
          <div>{recentContents[0].title}</div>
          <div>{new Date(recentContents[0]?.date).toLocaleDateString()}</div>
        </Link>
      )}

      {/* 2-5번째 포스트 - 중간 사이즈 */}
      {recentContents.slice(1, 5).map((post) => (
        <Link
          href={getPostLink(post)}
          key={post.title}
          className="bg-[hsl(var(--chart-2))] lg:col-span-3 h-48"
        >
          {post.title}
        </Link>
      ))}

      {/* 6-10번째 포스트 - 작은 사이즈 */}
      {recentContents.slice(5, 10).map((post) => (
        <Link
          href={getPostLink(post)}
          key={post.title}
          className="bg-[hsl(var(--primary))] lg:col-span-2 h-36"
        >
          {post.title}
        </Link>
      ))}
    </section>
  );
}
