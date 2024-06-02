"use client";

import OrderItemCard from "@/components/OrderItemCard";
import ManageRestaurantForm from "@/components/forms/ManageRestaurantForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCreateMyRestaurant } from "@/hooks/useCreateMyRestaurant";
import { useGetMyRestaurant } from "@/hooks/useGetMyRestaurant";
import { useGetMyRestaurantOrders } from "@/hooks/useGetMyRestaurantOrders";
import { useUpdateMyRestaurant } from "@/hooks/useUpdateMyRestaurant";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { currentRestaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();
  const { orders } = useGetMyRestaurantOrders();

  const isEditing = !!currentRestaurant;

  return (
    <Tabs defaultValue="orders" className="container mx-auto mt-10">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurants</TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="space-y-5 bg-gray-50 p-10 rounded-lg mt-10"
      >
        <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
        {orders?.map((order) => (
          <OrderItemCard key={order._id} order={order} />
        ))}
      </TabsContent>
      <TabsContent value="manage-restaurant">
        <ManageRestaurantForm
          restaurant={currentRestaurant}
          isLoading={isCreateLoading || isUpdateLoading}
          onSave={isEditing ? updateRestaurant : createRestaurant}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ManageRestaurantPage;
