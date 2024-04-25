"use client";

import ManageRestaurantForm from "@/components/forms/ManageRestaurantForm";
import { useCreateMyRestaurant } from "@/hooks/useCreateMyRestaurant";
import { useGetMyRestaurant } from "@/hooks/useGetMyRestaurant";
import { useUpdateMyRestaurant } from "@/hooks/useUpdateMyRestaurant";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { currentRestaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  const isEditing = !!currentRestaurant;

  return (
    <ManageRestaurantForm
      restaurant={currentRestaurant}
      isLoading={isCreateLoading || isUpdateLoading}
      onSave={isEditing ? updateRestaurant : createRestaurant}
    />
  );
};

export default ManageRestaurantPage;
