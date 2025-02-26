import Markdown from "react-markdown";
import { signOgImageUrl } from "@/lib/og-image";

import { IconCloud } from "@/components/magicui/icon-cloud";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";

const slugs = [
  "html5",
  "css3",
  "tailwindcss",
  "javascript",
  "typescript",
  "python",
  "react",
  "nextdotjs",
  "nestjs",
  "supabase",
  "prisma",
  "postgresql",
  "jest",
  "vercel",
  "git",
  "github",
];

const content = `# Welcome to ywc blog

안녕하세요. 

[인터넷에서 임차인이 아닌 소유자가 되는 방법](https://news.hada.io/topic?id=18565&utm_source=slack&utm_medium=bot&utm_campaign=T0755SQJYDU) 긱뉴스 글을 읽고 나도 나만의 웹사이트를 가져보자라는 생각을 하게 되었습니다.

[생각을 정리하고, 관찰하며, 기록하자.](https://news.hada.io/topic?id=19146&utm_source=slack&utm_medium=bot&utm_campaign=T0755SQJYDU)

`;

export async function generateMetadata() {
  return {
    title: "Welcome to my blog",
    description: "열심히 볼로깅을 해보자",
    openGraph: {
      title: "Welcome to my blog",
      description: "열심히 볼로깅을 해보자",
      images: [
        signOgImageUrl({
          title: "Welcome to my blog",
          label: "Welcome to my blog",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <div className="relative flex size-full items-center justify-center overflow-hidden">
        <IconCloud images={images} />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
