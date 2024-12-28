interface SearchPageProps {
  searchParams: Promise<{ query: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = (await searchParams).query;

  return <div>SearchPage {query}</div>;
}
