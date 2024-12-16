"use client";

import { ChartNoAxesGantt } from "lucide-react";
import C_IconButton from "../C_IconButton";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // tailwind-merge 사용을 위한 유틸리티 추가 필요
import NAV_LIST from "./NAV_LIST";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export default function SideNavigation() {
  const pathname = usePathname();
  const { setTheme } = useTheme();

  return (
    <aside className="flex flex-col justify-between h-screen py-7">
      <section>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Mute.
        </h1>
      </section>

      <nav className={cn("flex flex-col gap-4")}>
        {NAV_LIST.map(({ Icon, path, alwaysActive }) => (
          <C_IconButton
            key={path}
            Icon={
              <Icon
                size={28}
                strokeWidth={2.5}
                className={cn(
                  "duration-300",
                  "group-hover:[stroke:hsl(var(--primary))]",
                  // 활성화 상태에 따른 스타일
                  path === pathname
                    ? "[stroke:hsl(var(--primary))]"
                    : "stroke-[#bbbbbb]"
                )}
              />
            }
            alwaysActive={alwaysActive}
          />
        ))}
      </nav>

      <Popover>
        <PopoverTrigger>
          <section className="w-16 h-12 flex items-center justify-center">
            <ChartNoAxesGantt size={28} cursor="pointer" />
          </section>
        </PopoverTrigger>

        <PopoverContent className="ml-8">
          <div className="space-y-4">
            <h4 className="font-medium leading-none">설정</h4>

            <p className="text-sm text-muted-foreground">
              UI 모드 전환, 로그아웃이 가능합니다 🙂
            </p>

            <Separator />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full">
                  UI 모드 전환
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" side="right">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  🌞&nbsp;&nbsp;라이트 모드
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  🌙&nbsp;&nbsp;다크 모드
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme("system")}>
                  🖥️&nbsp;&nbsp;시스템 설정
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="destructive" className="w-full">
              로그아웃
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </aside>
  );
}
