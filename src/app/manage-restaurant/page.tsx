"use client";

import ManageRestaurantForm from "@/components/forms/ManageRestaurantForm";
import { useCreateMyRestaurant } from "@/hooks/useCreateMyRestaurant";
import { useGetMyRestaurant } from "@/hooks/useGetMyRestaurant";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  const { currentRestaurant } = useGetMyRestaurant();

  return (
    <ManageRestaurantForm
      restaurant={currentRestaurant}
      isLoading={isLoading}
      onSave={createRestaurant}
    />
  );
};

export default ManageRestaurantPage;
