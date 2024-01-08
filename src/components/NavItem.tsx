"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import React from "react";
import { Button } from "./ui/button";
import { ChevronDown, Rotate3D } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: Boolean;
  isAnyOpen: boolean;
}
const NavItem = ({ isAnyOpen, category, handleOpen, isOpen }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex  items-center">
        <Button
          className="gap-1.5  border border-orange-400 "
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>

      {isOpen ? (
        <div
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground",
            {
              "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen,
            }
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          />

          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8">
              <div className=" grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                  {category.featured.map((item) => (
                    <div
                      key={item.name}
                      className="group relative text-base sm:text-sm"
                    >
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <Image
                          src={item.imageSrc}
                          alt="imagen dos produtos"
                          fill
                          className="object-cover object-center"
                        />
                      </div>

                      <Link
                        href={item.href}
                        className="mt-6 block font-medium text-gray-900"
                      >
                        {item.name}
                      </Link>

                      <p className="m-t1" aria-hidden="true">
                        Comprar Agora
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default NavItem;
