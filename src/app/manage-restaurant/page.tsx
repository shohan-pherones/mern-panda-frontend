"use client";

import ManageRestaurantForm from "@/components/forms/ManageRestaurantForm";
import { useCreateMyRestaurant } from "@/hooks/useCreateMyRestaurant";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();

  return (
    <ManageRestaurantForm isLoading={isLoading} onSave={createRestaurant} />
  );
};

export default ManageRestaurantPage;
