import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import { Button } from "../ui/button";

const MobileNavLinks = () => {
  const { logout } = useAuth0();

  return (
    <>
      <Link
        href="/user-profile"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        User Profile
      </Link>
      <Link
        href="/manage-restaurant"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        Manage Restaurant
      </Link>
      <Button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="flex items-center px-5 font-bold hover:bg-gray-500"
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
