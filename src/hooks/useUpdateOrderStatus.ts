import { API_BASE_URL } from "@/constants";
import { UpdateOrderStatusRequest } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";

export const useUpdateOrderStatus = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateOrderStatusRequest = async (
    updateOrderStatusRequest: UpdateOrderStatusRequest
  ) => {
    const accessToken = await getAccessTokenSilently();

    const res = await fetch(
      `${API_BASE_URL}/api/my/restaurant/order/${updateOrderStatusRequest.orderId}/status`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: updateOrderStatusRequest.status }),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to update status");
    }

    return res.json();
  };

  const {
    mutateAsync: updateOrderStatus,
    isLoading,
    isError,
    isSuccess,
    reset,
  } = useMutation(updateOrderStatusRequest);

  if (isSuccess) {
    toast.success("Order status updated");
  }

  if (isError) {
    toast.error("Unable to update order");
    reset();
  }

  return { updateOrderStatus, isLoading };
};
