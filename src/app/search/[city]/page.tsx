"use client";

import { useRestaurantPublic } from "@/hooks/useRestaurantPublic";

const SearchPage = ({ params }: { params: { city: string } }) => {
  const { results } = useRestaurantPublic(params.city);

  return (
    <div>
      User searched for {params.city}{" "}
      <span>
        {results?.data.map((restaurant) => (
          <span key={restaurant._id}>
            found- {restaurant.restaurantName}, {restaurant.city}
          </span>
        ))}
      </span>
    </div>
  );
};

export default SearchPage;
