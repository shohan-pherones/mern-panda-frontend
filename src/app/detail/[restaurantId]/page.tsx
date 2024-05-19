"use client";

import CheckoutButton from "@/components/CheckoutButton";
import MenuItem from "@/components/MenuItem";
import OrderSummery from "@/components/OrderSummery";
import RestaurantInfo from "@/components/RestaurantInfo";
import Error from "@/components/shared/Error";
import Loading from "@/components/shared/Loading";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardFooter } from "@/components/ui/card";
import { useGetPublicRestaurant } from "@/hooks/useGetPublicRestaurant";
import { MenuItem as TMenuItem } from "@/types";
import { UserProfileFormDataType } from "@/validations/userProfileFormSchema";
import Image from "next/image";
import { useState } from "react";

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

const RestaurantDetailPage = ({
  params,
}: {
  params: { restaurantId: string };
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = sessionStorage.getItem(
      `cartItems-${params.restaurantId}`
    );

    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const addToCart = (menuItem: TMenuItem) => {
    setCartItems((prev) => {
      const existingCartItem = prev.find((item) => item._id === menuItem._id);

      let updatedCartItems;

      if (existingCartItem) {
        updatedCartItems = prev.map((item) =>
          item._id === menuItem._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCartItems = [
          ...prev,
          {
            _id: menuItem._id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1,
          },
        ];
      }

      sessionStorage.setItem(
        `cartItems-${params.restaurantId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const removeFromCart = (cartItem: CartItem) => {
    setCartItems((prev) => {
      const updatedCartItems = prev.filter((item) => cartItem._id !== item._id);

      sessionStorage.setItem(
        `cartItems-${params.restaurantId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const onCheckout = (userFormData: UserProfileFormDataType) => {
    console.log(userFormData);
  };

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
            <MenuItem
              key={index + item.name}
              item={item}
              addToCart={() => addToCart(item)}
            />
          ))}
        </div>

        <div>
          <Card>
            <OrderSummery
              restaurant={restaurant}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
            <CardFooter>
              <CheckoutButton
                disabled={cartItems.length === 0}
                onCheckout={onCheckout}
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
