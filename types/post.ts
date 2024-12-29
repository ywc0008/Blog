export interface Post {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    tags: string[];
  };
  content: string;
}
