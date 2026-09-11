import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Settings } from "lucide-react";
import { StatusBar } from "./status-bar";
import { GameNavRail, GameNavBottom } from "./game-nav";

export function GameShell({
  children,
  aside,
}: {
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <StatusBar />

      <div className="mx-auto grid max-w-[1800px] gap-4 px-3 pt-4 pb-24 sm:px-5 md:grid-cols-[11rem_minmax(0,1fr)] md:pb-8 xl:grid-cols-[12rem_minmax(0,1fr)_22rem]">
        <div className="hidden md:block">
          <GameNavRail />
        </div>

        <main className="min-w-0">{children}</main>

        <div className="min-w-0 xl:block">{aside}</div>
      </div>

      <Link
        to="/cai-dat"
        aria-label="Cài đặt"
        className="panel-wood fixed right-3 bottom-[4.5rem] z-40 grid size-11 place-items-center rounded-sm md:hidden"
      >
        <Settings className="text-brass/90 size-5" aria-hidden="true" />
      </Link>

      <GameNavBottom />
    </div>
  );
}

export function PagePanel({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="panel-wood grain rounded-sm p-4 sm:p-6">
      <h1 className="font-display text-gilded text-2xl sm:text-3xl">{title}</h1>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground italic">{subtitle}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function ComingSoon({ text }: { text: string }) {
  return (
    <div className="panel-parchment grain rounded-sm p-4 sm:p-5">
      <p className="font-display text-base">Sẽ được mở ở chặng sau</p>
      <p className="mt-1 text-sm leading-relaxed opacity-80">{text}</p>
    </div>
  );
}
