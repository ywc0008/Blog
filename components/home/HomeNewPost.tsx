import { Post } from "@/types/post";

interface HomeNewPostProps {
  posts: Post[];
}

export default function HomeNewPost({ posts }: HomeNewPostProps) {
  // 최신 10개의 포스트만 선택
  const recentPosts = posts.slice(0, 10);

  return (
    <section className="bg-c-gray custom-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
      <h1 className="custom-h1">최신 포스트</h1>

      {/* 첫 번째 포스트 - 가장 큰 사이즈 */}
      {recentPosts[0] && (
        <div className="bg-[hsl(var(--chart-1))] sm:col-span-2 lg:col-span-6 h-48">
          <div>{recentPosts[0].frontmatter.title}</div>
          <div>
            {new Date(recentPosts[0].frontmatter.date).toLocaleDateString()}
          </div>
        </div>
      )}

      {/* 2-5번째 포스트 - 중간 사이즈 */}
      {recentPosts.slice(1, 5).map((post) => (
        <div
          key={post.slug}
          className="bg-[hsl(var(--chart-2))] lg:col-span-3 h-48"
        >
          {post.frontmatter.title}
        </div>
      ))}

      {/* 6-10번째 포스트 - 작은 사이즈 */}
      {recentPosts.slice(5, 10).map((post) => (
        <div
          key={post.slug}
          className="bg-[hsl(var(--primary))] lg:col-span-2 h-36"
        >
          {post.frontmatter.title}
        </div>
      ))}
    </section>
  );
}
