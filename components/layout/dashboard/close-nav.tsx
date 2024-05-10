"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarNavItem } from "@/types/nav";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Dispatch, SetStateAction } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Bot, SquareTerminal, SquareUser, Triangle } from "lucide-react";

interface DashboardNavProps {
  items: SidebarNavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function CloseNav({ items, setOpen }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <div className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <Triangle className="size-5 fill-foreground" />
        </Button>
      </div>

      <nav className="grid gap-1 p-2">
        {items.map((item, index) => {
          const Icon = Icons[item.icon || "arrowRight"];
          return (
            item.href && (
              <Link
                key={index}
                href={item.disabled ? "/" : item.href}
                onClick={() => {
                  if (setOpen) setOpen(false);
                }}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {/* <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              > */}

                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={item.title}
                        className={cn(
                          "rounded-lg",
                          path === item.href ? "bg-muted" : "transparent",
                          item.disabled && "cursor-not-allowed opacity-80"
                        )}
                      >
                        <Icon className="size-5" />
                      </Button>
                      {/* </span> */}
                    </TooltipTrigger>
                    <TooltipContent side="right" sideOffset={5}>
                      {item.title}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            )
          );
        })}
      </nav>

      <nav className="mt-auto grid gap-1 p-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="Account"
              >
                <SquareUser className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Account
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </div>
  );
}
