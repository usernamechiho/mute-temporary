import { cn } from "@/lib/utils";

interface C_IconButtonProps {
  Icon: React.ReactNode;
  alwaysActive?: boolean;
}

export default function C_IconButton({
  Icon,
  alwaysActive,
}: C_IconButtonProps) {
  return (
    <div
      className={cn(
        // 레이아웃
        "w-16 h-12",
        "flex items-center justify-center",

        // 스타일
        "rounded-lg border-none",
        "group",

        // 상호작용
        "cursor-pointer",
        "hover:bg-muted hover:text-sky-700",
        "active:scale-90",
        "animate-in duration-300",

        // 조건부 스타일
        alwaysActive && "bg-muted"
      )}
    >
      {Icon}
    </div>
  );
}
