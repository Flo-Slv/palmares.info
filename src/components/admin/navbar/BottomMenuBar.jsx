"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import clsx from "clsx";

import {
  Layers,
  LayoutGrid,
  List,
  LogOut,
  Medal,
  PlusCircle,
  Sheet,
  Trophy,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import Man from "@mui/icons-material/Man";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import SportsRugbyIcon from "@mui/icons-material/SportsRugby";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import Woman from "@mui/icons-material/Woman";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/MenuBar";

const BottomMenuBar = () => {
  return (
    <div
      className={clsx(
        "fixed bottom-3 w-full flex justify-center",
        "sm:bottom-10"
      )}
    >
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="hover:cursor-pointer">
            <Layers className="h-4 w-4 sm:hidden" />
            <span className="hidden sm:block">Dashboard</span>
          </MenubarTrigger>
          <MenubarContent>
            <Link href="/admin/profile">
              <MenubarItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/admin/dashboard">
              <MenubarItem>
                <LayoutGrid className="mr-2 h-4 w-4" />
                Home
              </MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="hover:cursor-pointer">
            <Sheet className="h-4 w-4 sm:hidden" />
            <span className="hidden sm:block">Sports</span>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <DownhillSkiingIcon fontSize="small" className="mr-2 h-4 w-4" />
              Ski
            </MenubarItem>
            <MenubarItem>
              <SportsMmaIcon fontSize="small" className="mr-2 h-4 w-4" />
              MMA
            </MenubarItem>
            <MenubarItem>
              <SportsMartialArtsIcon
                fontSize="small"
                className="mr-2 h-4 w-4"
              />
              Karate
            </MenubarItem>
            <MenubarItem>
              <SportsKabaddiIcon fontSize="small" className="mr-2 h-4 w-4" />
              Judo
            </MenubarItem>
            <MenubarItem>
              <SportsBasketballIcon fontSize="small" className="mr-2 h-4 w-4" />
              Basketball
            </MenubarItem>
            <MenubarItem>
              <SportsHandballIcon fontSize="small" className="mr-2 h-4 w-4" />
              Handball
            </MenubarItem>
            <MenubarItem>
              <SportsRugbyIcon fontSize="small" className="mr-2 h-4 w-4" />
              Rugby
            </MenubarItem>
            <Link href="/admin/sports/football">
              <MenubarItem>
                <SportsSoccerIcon fontSize="small" className="mr-2 h-4 w-4" />
                Football
              </MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/admin/sports/list">
              <MenubarItem>
                <List className="mr-2 h-4 w-4" />
                List all sports
              </MenubarItem>
            </Link>
            <Link href="/admin/sports/add">
              <MenubarItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add new sport
              </MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="hover:cursor-pointer">
            <Users className="h-4 w-4 sm:hidden" />
            <span className="hidden sm:block">Athletes</span>
          </MenubarTrigger>
          <MenubarContent>
            <Link href="/admin/athletes/men">
              <MenubarItem>
                <Man fontSize="small" className="mr-2 h-4 w-4" />
                Men
              </MenubarItem>
            </Link>
            <Link href="/admin/athletes/women">
              <MenubarItem>
                <Woman fontSize="small" className="mr-2 h-4 w-4" />
                Women
              </MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/admin/athletes/add">
              <MenubarItem>
                <UserPlus className="mr-2 h-4 w-4" />
                Add new athlete
              </MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="hover:cursor-pointer">
            <Trophy className="h-4 w-4 sm:hidden" />
            <span className="hidden sm:block">Competitions</span>
          </MenubarTrigger>
          <MenubarContent>
            <Link href="/admin/competitions/list">
              <MenubarItem>
                <Trophy fontSize="small" className="mr-2 h-4 w-4" />
                All competitions
              </MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/admin/competitions/add">
              <MenubarItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add new competition
              </MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="hover:cursor-pointer">
            <Medal className="h-4 w-4 sm:hidden" />
            <span className="hidden sm:block">Titles</span>
          </MenubarTrigger>
          <MenubarContent>
            <Link href="/admin/titles/list">
              <MenubarItem>
                <Medal fontSize="small" className="mr-2 h-4 w-4" />
                All titles
              </MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/admin/titles/add">
              <MenubarItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add new title
              </MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger onClick={signOut} className="hover:cursor-pointer">
            <LogOut className="h-4 w-4 sm:hidden" />
            <span className="hidden sm:block sm:font-semibold">Sign out</span>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default BottomMenuBar;
