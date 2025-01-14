export interface Post {
  frontMatter: {
    title: string;
    slug: string;
    description: string;
    date: string;
    author: string;
    category: string;
    tags: string[];
    thumbnail: string;
  };
  content: string;
  slug: string;
}
