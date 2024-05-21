"use client";

import { useGetMyUser } from "@/hooks/useGetMyUser";
import { UserProfileFormDataType } from "@/validations/userProfileFormSchema";
import { useAuth0 } from "@auth0/auth0-react";
import { Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";
import UserProfileForm from "./forms/UserProfileForm";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface Props {
  onCheckout: (userFormData: UserProfileFormDataType) => void;
  disabled: boolean;
  isLoading: boolean;
}

const CheckoutButton = ({ disabled, onCheckout, isLoading }: Props) => {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const pathname = usePathname();

  const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button onClick={onLogin} className="bg-orange-500 flex-1">
        Log in to checkout
      </Button>
    );
  }

  if (isAuthLoading || !currentUser || isLoading) {
    return (
      <Button disabled className="flex-1 flex items-center gap-2">
        <Loader2 size={18} className="animate-spin" />
        <span>Loading...</span>
      </Button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disabled} className="bg-orange-500 flex-1">
          Proceed to checkout
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:min-w-[700px] bg-gray-50">
        <UserProfileForm
          currentUser={currentUser}
          onSave={onCheckout}
          isLoading={isGetUserLoading}
          noMargin
          title="Confirm Delivery Details"
          buttonText="Continue to payment"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutButton;
