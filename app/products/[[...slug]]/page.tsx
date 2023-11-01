interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

function page({ params: { slug }, searchParams: { sortOrder } }: Props) {
  return (
    <div>
      newton {slug} {sortOrder}
    </div>
  );
}

export default page;
