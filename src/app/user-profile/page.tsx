"use client";

import UserProfileForm from "@/components/UserProfileForm";
import { useGetMyUser } from "@/hooks/useGetMyUser";
import { useUpdateMyUser } from "@/hooks/useUpdateMyUser";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <div>Unable to load user profile</div>;
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
