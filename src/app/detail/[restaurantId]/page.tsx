"use client";

import MenuItem from "@/components/MenuItem";
import RestaurantInfo from "@/components/RestaurantInfo";
import Error from "@/components/shared/Error";
import Loading from "@/components/shared/Loading";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useGetPublicRestaurant } from "@/hooks/useGetPublicRestaurant";
import Image from "next/image";

const RestaurantDetailPage = ({
  params,
}: {
  params: { restaurantId: string };
}) => {
  const { restaurant, isLoading } = useGetPublicRestaurant(params.restaurantId);

  if (isLoading) {
    return <Loading />;
  }

  if (!restaurant) {
    return <Error message="Restaurant not found" />;
  }

  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={16 / 5}>
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.restaurantName}
          fill
          className="object-cover h-full w-full"
        />
      </AspectRatio>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[4fr_2fr] gap-5">
        <div className="flex flex-col gap-5">
          <RestaurantInfo restaurant={restaurant} />
          <span className="text-2xl font-bold tracking-tight">Menu</span>
          {restaurant.menuItems.map((item, index) => (
            <MenuItem key={index + item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
