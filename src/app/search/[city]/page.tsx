const SearchPage = ({ params }: { params: { city: string } }) => {
  return <div>User searched for {params.city}</div>;
};

export default SearchPage;
