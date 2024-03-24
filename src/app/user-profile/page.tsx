"use client";

import Error from "@/components/Error";
import Loading from "@/components/Loading";
import UserProfileForm from "@/components/UserProfileForm";
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
