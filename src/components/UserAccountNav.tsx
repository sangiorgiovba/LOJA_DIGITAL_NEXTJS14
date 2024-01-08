"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { User } from "@/payload-types";
import Link from "next/link";
import useAuth from "@/hooks/use-auth";

const UserAccountNav = ({ user }: { user: User }) => {
    const { signOut } = useAuth()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button variant="ghost" size="sm" className="relative">
          Minha Conta
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white w-60" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 loading-none">
            <p className="font-medium text-sm text-green-600"> {user.email}</p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href={"/sell"}> Painel de vendedores</Link>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={signOut} className="cursor-pointer">
            Sair
         </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
