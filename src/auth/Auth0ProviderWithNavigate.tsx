"use client";

import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

const Auth0ProviderWithNavigate = ({ children }: PropsWithChildren) => {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URL;

  const router = useRouter();

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to initialize auth");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    router.push("/auth-callback");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
