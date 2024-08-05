"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaFantasyFlightGames, FaRegCircleUser } from "react-icons/fa6";

export default function Navigationmenu() {
  const [isMenu, setisMenu] = useState(false);
  const toggleMenu = () => {
    setisMenu(!isMenu);
  };

  return (
    <div className="absolute w-full">
      <div className="container mt-10 mb-10 flex justify-between bg-[#868788] text-[#F8FAFC] p-2 rounded-lg">
        <Link href="/" legacyBehavior passHref>
          <div className="flex gap-2 items-center">
            <Image src="/Vector.png" alt="logo" height={30} width={30} />
            <p>Redakcja Naukowa</p>
          </div>
        </Link>

        <div className="items-center">
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenu ? (
              <FaFantasyFlightGames className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          <NavigationMenu>
            <NavigationMenuList
              className={`${
                isMenu ? "block" : "hidden"
              } md:flex flex-col md:flex-row gap-5 items-center`}
            >
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="md:pl-10">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="" legacyBehavior passHref>
                  <NavigationMenuLink>Our Editors</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="" legacyBehavior passHref>
                  <NavigationMenuLink>How to Order?</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="" legacyBehavior passHref>
                  <NavigationMenuLink>
                    <div className="flex gap-2 p-2 rounded-3xl bg-white text-black">
                      <p className="bg-[#8ABA51] h-5 w-5 rounded-full"></p>
                      <p>Editor</p>
                    </div>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {isMenu && (
                <div className="md:hidden flex justify-end items-center mt-4">
                  <div className="px-2 py-1 border flex gap-2 justify-center items-center rounded">
                    <FaRegCircleUser className="h-7 w-5" />
                    <p>Join Now</p>
                  </div>
                </div>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <div className="px-2 py-1 border flex gap-2 justify-center items-center rounded">
            <FaRegCircleUser className="h-7 w-5" />
            <p>Join Now</p>
          </div>
        </div>
      </div>

      {/* {isMenu && (
        <div className="md:hidden flex justify-end items-center mt-4">
          <div className="px-2 py-1 border flex gap-2 justify-center items-center rounded">
            <FaRegCircleUser className="h-7 w-5" />
            <p>Join Now</p>
          </div>
        </div>
      )} */}
    </div>
  );
}
