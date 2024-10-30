import { signOutUser } from "@/app/actions/authActions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, LogOutIcon } from "lucide-react";

const UserCardMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none border-none">
        <Ellipsis className="w-4 h-4 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem className="hover:text-red-600 cursor-pointer" onClick={signOutUser}>
          <LogOutIcon className="w-4 h-4" />
          <span className="ml-4">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserCardMenu;
