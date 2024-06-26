import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-bold hover:text-orange-500 flex items-center gap-3">
        <Avatar>
          <AvatarImage src={user?.picture} />
          <AvatarFallback>{user?.name?.split("")[0]}</AvatarFallback>
        </Avatar>
        <span>{user?.name}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link
            href="/order-status"
            className="font-bold hover:text-orange-500"
          >
            Order Status
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/user-profile"
            className="font-bold hover:text-orange-500"
          >
            User Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/manage-restaurant"
            className="font-bold hover:text-orange-500"
          >
            Manage Restaurant
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="flex flex-1 font-bold bg-orange-500"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
