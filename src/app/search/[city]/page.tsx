"use client";

import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import Error from "@/components/shared/Error";
import Loading from "@/components/shared/Loading";
import { useRestaurantPublic } from "@/hooks/useRestaurantPublic";

const SearchPage = ({ params }: { params: { city: string } }) => {
  const { results, isLoading } = useRestaurantPublic(params.city);

  if (isLoading) {
    return <Loading />;
  }

  if (!results?.data || !params.city) {
    return <Error message="No result found" />;
  }

  return (
    <div className="container mx-auto mt-5 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">{/* INSERT CUISINES LIST HERE */}</div>
      <div id="main-content" className="flex flex-col gap-5">
        <SearchResultInfo total={results.pagination.total} city={params.city} />
        {results.data.map((restaurant) => (
          <SearchResultCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
