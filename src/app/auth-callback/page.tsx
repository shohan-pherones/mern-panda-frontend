"use client";

import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const AuthCallbackPage = () => {
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();
  const router = useRouter();

  const hasCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    router.push("/");
  }, [createUser, router, user]);

  return <>Loading...</>;
};

export default AuthCallbackPage;
