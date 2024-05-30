"use client";

import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import Error from "@/components/shared/Error";
import Loading from "@/components/shared/Loading";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useGetMyOrders } from "@/hooks/useGetMyOrders";
import Image from "next/image";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return <Loading />;
  }

  if (!orders?.length) {
    return <Error message="No order found" />;
  }

  return (
    <div className="container mx-auto space-y-10">
      {orders.map((order) => (
        <div className="space-y-10 bg-gray-50 p-10 rounded-lg" key={order._id}>
          <OrderStatusHeader order={order} />
          <div className="grid md:grid-cols-2 gap-10">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={16 / 5}>
              <Image
                src={order.restaurant.imageUrl}
                alt={order.restaurant.restaurantName}
                fill
                className="rounded-md object-cover h-full w-full"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;
