type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface SearchPageProps {
  searchParams: SearchParams;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = (await searchParams).query;

  return <div>SearchPage {query}</div>;
}
