"use client";

import UserProfileForm from "@/components/forms/UserProfileForm";
import Error from "@/components/shared/Error";
import Loading from "@/components/shared/Loading";
import { useGetMyUser } from "@/hooks/useGetMyUser";
import { useUpdateMyUser } from "@/hooks/useUpdateMyUser";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <Loading />;
  }

  if (!currentUser) {
    return <Error message="Unable to load user profile" />;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
