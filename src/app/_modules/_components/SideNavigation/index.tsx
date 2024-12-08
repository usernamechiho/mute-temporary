"use client";

import {
  ChartNoAxesGantt,
  Drama,
  House,
  Plus,
  Search,
  User,
} from "lucide-react";
import C_IconButton from "../C_IconButton";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // tailwind-merge 사용을 위한 유틸리티 추가 필요

export default function SideNavigation() {
  const pathname = usePathname();

  const NAV_ITEMS = [
    { Icon: Drama, isActive: pathname === "/" },
    { Icon: Search, isActive: pathname === "/search" },
    {
      Icon: Plus,
      isActive: pathname === "/create",
      alwaysActive: true,
    },
    { Icon: User, isActive: pathname === "/profile" },
  ];

  return (
    <aside className="flex flex-col">
      <section>Mute.</section>

      <nav className="flex flex-col gap-2">
        {NAV_ITEMS.map(({ Icon, isActive, alwaysActive }) => (
          <C_IconButton
            key={Icon.name}
            Icon={
              <Icon
                size={28}
                strokeWidth={2.5}
                className={cn(
                  "duration-300 group-hover:[stroke:hsl(var(--primary))]",
                  isActive ? "[stroke:hsl(var(--primary))]" : "stroke-[#bbbbbb]"
                )}
              />
            }
            alwaysActive={alwaysActive}
          />
        ))}
      </nav>

      <br />

      <section className="w-16 h-12 flex items-center justify-center">
        <ChartNoAxesGantt size={28} cursor="pointer" />
      </section>
    </aside>
  );
}
