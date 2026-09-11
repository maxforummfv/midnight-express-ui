import { Link } from "@tanstack/react-router";
import { TrainFront, User, Backpack, Compass, BookOpen, Settings } from "lucide-react";

export const NAV_ITEMS = [
  { to: "/toa-tau", label: "Toa tàu", icon: TrainFront },
  { to: "/nhan-vat", label: "Nhân vật", icon: User },
  { to: "/tui-do", label: "Túi đồ", icon: Backpack },
  { to: "/kham-pha", label: "Khám phá", icon: Compass },
  { to: "/nhat-ky", label: "Nhật ký", icon: BookOpen },
  { to: "/cai-dat", label: "Cài đặt", icon: Settings },
] as const;

/** Desktop / tablet rail: vertical brass-plated navigation. */
export function GameNavRail() {
  return (
    <nav aria-label="Điều hướng" className="hidden md:block">
      <ul className="flex flex-col gap-2">
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <Link
              to={to}
              className="panel-wood grain group flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm transition-colors hover:bg-accent/60"
              activeProps={{
                className: "border-brass/70 bg-accent/70 candle-glow",
              }}
            >
              <Icon className="text-brass/90 size-4 shrink-0" aria-hidden="true" />
              <span className="font-display truncate tracking-wide">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Mobile bottom navigation with large touch targets. */
export function GameNavBottom() {
  const items = NAV_ITEMS.slice(0, 5);
  return (
    <nav
      aria-label="Điều hướng"
      className="panel-wood grain fixed inset-x-0 bottom-0 z-40 border-x-0 border-b-0 pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="grid grid-cols-5">
        {items.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <Link
              to={to}
              className="flex min-h-[3.75rem] flex-col items-center justify-center gap-1 px-1 py-2 text-muted-foreground"
              activeProps={{ className: "text-brass bg-accent/50" }}
            >
              <Icon className="size-5 shrink-0" aria-hidden="true" />
              <span className="font-display text-[0.7rem] leading-none">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
