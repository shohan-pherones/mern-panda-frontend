"use client";

import UserProfileForm from "@/components/UserProfileForm";
import { useUpdateMyUser } from "@/hooks/useUpdateMyUser";

const UserProfilePage = () => {
  const { updateUser, isLoading } = useUpdateMyUser();

  return <UserProfileForm onSave={updateUser} isLoading={isLoading} />;
};

export default UserProfilePage;
