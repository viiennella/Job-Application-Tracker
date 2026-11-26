"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { signOut } from "@/src/lib/auth/auth-client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar";

import {
    UserRound,
    Settings,
    LogOut,
} from "lucide-react";

interface UserMenuProps {
    name: string;
    email: string;
}

export function NavBarUserMenu({ name, email }: UserMenuProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const initial = name?.charAt(0).toUpperCase() || "U";

    async function handleSignOut() {
        setIsLoading(true);

        try {
            const result = await signOut();

            if (result.error) {
                console.error("Sign out failed:", result.error);
                return;
            }

            router.replace("/");
            router.refresh();
        } catch (error) {
            console.error("Sign out failed:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger render={
                <button
                    type="button"
                    aria-label="Open account menu"
                    className="flex items-center rounded-full outline-none ring-offset-2 transition hover:ring-2 hover:ring-pink-300"
                >
                    <Avatar className="h-10 w-10 border-2 border-pink-200">
                        <AvatarFallback className="bg-gradient-to-tr from-pink-400 to-yellow-300 font-bold text-pink-950">
                            {initial}
                        </AvatarFallback>
                    </Avatar>
                </button>
            } />


            <DropdownMenuContent
                align="end"
                className="w-64 rounded-2xl border-pink-100 p-2 shadow-xl shadow-pink-100/50"
            >
                {/* User Information */}
                <DropdownMenuGroup>

                    <DropdownMenuLabel className="px-3 py-3 font-normal">
                        <p className="font-bold text-slate-900">{name}</p>
                        <p className="truncate text-xs text-slate-500">
                            {email}
                        </p>
                    </DropdownMenuLabel>
                </DropdownMenuGroup>

                <DropdownMenuSeparator className="bg-pink-100" />

                {/* Profile */}
                <DropdownMenuItem className="cursor-pointer rounded-xl" render={
                    <Link href="/profile" />

                }>

                    <UserRound className="mr-2 h-4 w-4" />
                    My Profile
                </DropdownMenuItem>

                {/* Settings */}
                <DropdownMenuItem className="cursor-pointer rounded-xl" render={

                    <Link href="/settings" />
                }>

                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                </DropdownMenuItem>

                <DropdownMenuSeparator className="bg-pink-100" />

                {/* Sign Out */}
                <DropdownMenuItem
                    disabled={isLoading}
                    onClick={() => {
                        void handleSignOut();
                    }}
                    className="cursor-pointer rounded-xl text-red-500 focus:bg-red-50 focus:text-red-600"
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    {isLoading ? "Signing out..." : "Sign Out"}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}