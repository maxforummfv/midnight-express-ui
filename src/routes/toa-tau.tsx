import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, Hammer, ArrowUpCircle, Sun, Sunset, Moon } from "lucide-react";
import interior from "@/assets/carriage-interior.jpg";
import landDay from "@/assets/land-day.jpg";
import landDusk from "@/assets/land-dusk.jpg";
import landNight from "@/assets/land-night.jpg";
import { GameShell, ComingSoon } from "@/components/game/game-shell";
import { Ornament } from "@/components/game/ornament";


export const Route = createFileRoute("/toa-tau")({
  head: () => ({
    meta: [
      { title: "Toa tàu — Chuyến Tàu Vô Tận" },
      {
        name: "description",
        content:
          "Bên trong toa tàu của bạn: cửa chính, cửa sổ, giường, bếp, bàn, kho, phòng tắm và nhà vệ sinh.",
      },
      { property: "og:title", content: "Toa tàu — Chuyến Tàu Vô Tận" },
      {
        property: "og:description",
        content: "Ngôi nhà nhỏ của bạn trên chuyến tàu không có điểm cuối.",
      },
    ],
  }),
  component: CarriagePage,
});

type Hotspot = {
  id: string;
  label: string;
  note: string;
  /** position in % of the illustration */
  x: number;
  y: number;
  w: number;
  h: number;
};

const HOTSPOTS: Hotspot[] = [
  {
    id: "cua-chinh",
    label: "Cửa chính",
    note: "Cánh cửa sắt gia cố, then đồng dày. Về sau bạn sẽ chốt cửa mỗi đêm và bước ra ngoài lúc rạng sáng.",
    x: 1.5,
    y: 8,
    w: 14,
    h: 60,
  },
  {
    id: "cua-so",
    label: "Cửa sổ",
    note: "Khung sắt chắn ngoài lớp kính mờ. Ban đêm, có thứ gì đó vẫn thường lướt qua sau tấm kính ấy.",
    x: 26,
    y: 14,
    w: 18,
    h: 22,
  },
  {
    id: "giuong",
    label: "Giường",
    note: "Chiếc giường gỗ với tấm chăn chắp vá. Đây sẽ là nơi bạn kết thúc một ngày và hồi phục thể lực.",
    x: 17,
    y: 40,
    w: 24,
    h: 24,
  },
  {
    id: "bep",
    label: "Bếp",
    note: "Lò gang cũ và mấy chiếc ấm đồng. Nấu nướng, đun nước và chế biến sẽ đến ở chặng sau.",
    x: 42,
    y: 36,
    w: 15,
    h: 28,
  },
  {
    id: "ban",
    label: "Bàn",
    note: "Ngọn nến, lọ mực và quyển sổ da mở sẵn. Bàn làm việc dành cho chế tạo và ghi chép hành trình.",
    x: 58,
    y: 36,
    w: 17,
    h: 28,
  },
  {
    id: "kho",
    label: "Kho",
    note: "Kệ treo đầy lọ thủy tinh và những chiếc hòm khóa đồng. Nơi cất giữ lương thực và vật liệu.",
    x: 71,
    y: 12,
    w: 12,
    h: 50,
  },
  {
    id: "phong-tam",
    label: "Phòng tắm",
    note: "Một cánh cửa gỗ hẹp, khăn vải treo bên ngoài. Vệ sinh và giữ sức khỏe sẽ có ý nghĩa về sau.",
    x: 84,
    y: 10,
    w: 8,
    h: 55,
  },
  {
    id: "nha-ve-sinh",
    label: "Nhà vệ sinh",
    note: "Buồng nhỏ cuối toa, sáng lờ mờ dưới ánh đèn dầu.",
    x: 92,
    y: 12,
    w: 7,
    h: 55,
  },
];

/** Window opening in the carriage wall — scenery layer is clipped to this */
const WINDOW = { x: 26, y: 14, w: 18, h: 22 };

type TimeKey = "sang" | "chieu" | "dem";

const TIMES: {
  key: TimeKey;
  label: string;
  icon: typeof Sun;
  scenery: string;
  /** tint applied over the interior */
  tint: string;
  blend: "soft-light" | "multiply";
  glow: string;
}[] = [
  {
    key: "sang",
    label: "Trời sáng",
    icon: Sun,
    scenery: landDay,
    tint: "linear-gradient(180deg, oklch(0.92 0.06 90 / 0.28), oklch(0.75 0.05 80 / 0.12))",
    blend: "soft-light",
    glow: "oklch(0.95 0.06 95 / 0.5)",
  },
  {
    key: "chieu",
    label: "Chiều muộn",
    icon: Sunset,
    scenery: landDusk,
    tint: "linear-gradient(180deg, oklch(0.72 0.16 55 / 0.34), oklch(0.45 0.1 40 / 0.28))",
    blend: "soft-light",
    glow: "oklch(0.8 0.16 55 / 0.55)",
  },
  {
    key: "dem",
    label: "Trời tối",
    icon: Moon,
    scenery: landNight,
    tint: "linear-gradient(180deg, oklch(0.2 0.05 265 / 0.62), oklch(0.14 0.04 260 / 0.72))",
    blend: "multiply",
    glow: "oklch(0.7 0.1 250 / 0.4)",
  },
];

function UnderCarriage() {
  return (
    <div className="relative h-16 overflow-hidden rounded-sm border border-border/70 bg-iron sm:h-20">
      {/* motion streaks */}
      {[18, 34, 52, 70, 86].map((top, i) => (
        <span
          key={top}
          className="animate-streak absolute h-px w-24 bg-brass/40"
          style={{
            top: `${top}%`,
            right: 0,
            animationDelay: `${i * 0.22}s`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* wheels */}
      <div className="absolute inset-x-4 top-1 flex justify-between sm:inset-x-10">
        {[0, 1, 2, 3].map((i) => (
          <svg
            key={i}
            viewBox="0 0 100 100"
            className="animate-wheel size-11 sm:size-14"
            style={{ animationDuration: `${0.6 + (i % 2) * 0.05}s` }}
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="46" fill="oklch(0.18 0.01 250)" />
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="oklch(0.62 0.09 70)"
              strokeWidth="5"
            />
            <circle cx="50" cy="50" r="12" fill="oklch(0.6 0.1 72)" />
            {Array.from({ length: 8 }).map((_, s) => (
              <line
                key={s}
                x1="50"
                y1="50"
                x2={50 + 42 * Math.cos((s * Math.PI) / 4)}
                y2={50 + 42 * Math.sin((s * Math.PI) / 4)}
                stroke="oklch(0.5 0.07 68)"
                strokeWidth="4"
              />
            ))}
          </svg>
        ))}
      </div>

      {/* rail */}
      <div className="absolute inset-x-0 bottom-3 h-1.5 bg-brass/50" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-3 bg-wood/80" aria-hidden="true" />

      {/* dust puffs blowing backwards */}
      {[8, 22, 38, 55, 72, 88].map((left, i) => (
        <span
          key={left}
          className="animate-dust absolute bottom-3 size-6 rounded-full"
          style={{
            left: `${left}%`,
            background:
              "radial-gradient(circle, oklch(0.8 0.03 80 / 0.55), transparent 70%)",
            animationDelay: `${i * 0.38}s`,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function CarriagePage() {
  const [active, setActive] = useState<Hotspot | null>(null);
  const [timeKey, setTimeKey] = useState<TimeKey>("sang");
  const time = TIMES.find((t) => t.key === timeKey)!;


  const detail = (
    <div className="space-y-4">
      <section className="panel-wood grain rounded-sm p-4">
        <h2 className="font-display text-gilded text-xl">
          {active ? active.label : "Toa số 7"}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {active
            ? active.note
            : "Chọn một vật trong toa để xem thông tin. Mọi thứ ở đây đều sẽ có công dụng riêng khi hành trình bắt đầu."}
        </p>
      </section>

      <section className="panel-wood grain space-y-3 rounded-sm p-4">
        <h3 className="font-display text-base">Tình trạng toa</h3>
        <div>
          <div className="mb-1 flex items-baseline justify-between text-xs">
            <span className="text-muted-foreground">Độ bền</span>
            <span className="text-brass/90">58 / 100</span>
          </div>
          <div
            className="h-2.5 overflow-hidden rounded-sm border border-border/70 bg-secondary"
            style={{ boxShadow: "var(--shadow-inset-deep)" }}
          >
            <div className="h-full w-[58%] bg-ember" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            className="panel-parchment flex min-h-11 items-center justify-center gap-2 rounded-sm px-3 text-sm"
            onClick={() =>
              setActive({
                id: "sua-chua",
                label: "Sửa chữa",
                note: "Việc sửa chữa vách gỗ, khung sắt và mái toa sẽ được mở ở chặng sau.",
                x: 0,
                y: 0,
                w: 0,
                h: 0,
              })
            }
          >
            <Hammer className="size-4" aria-hidden="true" /> Sửa chữa
          </button>
          <button
            type="button"
            className="panel-parchment flex min-h-11 items-center justify-center gap-2 rounded-sm px-3 text-sm"
            onClick={() =>
              setActive({
                id: "nang-cap",
                label: "Nâng cấp",
                note: "Gia cố cửa, thêm lớp giáp ngoài và mở rộng nội thất sẽ được mở ở chặng sau.",
                x: 0,
                y: 0,
                w: 0,
                h: 0,
              })
            }
          >
            <ArrowUpCircle className="size-4" aria-hidden="true" /> Nâng cấp
          </button>
        </div>
      </section>

      <ComingSoon text="Đây là bản mẫu giao diện. Các hệ thống chơi game sẽ được thêm sau." />
    </div>
  );

  return (
    <GameShell aside={<div className="hidden xl:block">{detail}</div>}>
      <div className="space-y-4">
        <div className="panel-wood grain rounded-sm p-1.5 sm:p-2.5">
          {/* Time of day */}
          <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2 px-1 sm:mb-2.5">
            <div className="flex gap-1.5">
              {TIMES.map((t) => {
                const Icon = t.icon;
                const on = t.key === timeKey;
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setTimeKey(t.key)}
                    aria-pressed={on}
                    className={`flex min-h-9 items-center gap-1.5 rounded-sm px-2.5 text-xs transition-all duration-200 sm:text-sm ${
                      on
                        ? "panel-parchment candle-glow"
                        : "border border-border/70 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {t.label}
                  </button>
                );
              })}
            </div>
            <p className="hidden text-[0.7rem] text-muted-foreground sm:block">
              Trỏ chuột vào từng vật trong toa để nó sáng lên
            </p>
          </div>

          <div className="overflow-x-auto rounded-sm">
            <div className="relative w-[190%] overflow-hidden rounded-sm border border-border/70 sm:w-full">
              {/* Layer 1 — scenery seen through the window */}
              <div
                className="pointer-events-none absolute overflow-hidden"
                style={{
                  left: `${WINDOW.x}%`,
                  top: `${WINDOW.y}%`,
                  width: `${WINDOW.w}%`,
                  height: `${WINDOW.h}%`,
                }}
                aria-hidden="true"
              >
                <img
                  src={time.scenery}
                  alt=""
                  loading="lazy"
                  width={1920}
                  height={640}
                  className="animate-drift h-full w-[320%] max-w-none object-cover"
                />
              </div>

              {/* Layer 2 — the carriage itself */}
              <img
                src={interior}
                alt="Nội thất toa tàu cổ với giường, bếp lò, bàn viết và kho đồ dưới ánh nến"
                width={1920}
                height={1088}
                className="relative block h-auto w-full"
                style={{ mixBlendMode: "normal" }}
              />

              {/* Layer 3 — time-of-day light */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ backgroundImage: time.tint, mixBlendMode: time.blend }}
                aria-hidden="true"
              />
              {/* window light spilling in */}
              <div
                className="pointer-events-none absolute animate-flicker"
                style={{
                  left: `${WINDOW.x - 6}%`,
                  top: `${WINDOW.y - 4}%`,
                  width: `${WINDOW.w + 14}%`,
                  height: `${WINDOW.h + 26}%`,
                  background: `radial-gradient(50% 50% at 45% 40%, ${time.glow}, transparent 72%)`,
                  mixBlendMode: "screen",
                }}
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(75% 60% at 50% 45%, transparent, oklch(0.1 0.02 250 / 0.55))",
                }}
                aria-hidden="true"
              />

              {/* Layer 4 — interactive objects, lit by soft glow (no dashed frames) */}
              {HOTSPOTS.map((h) => {
                const on = active?.id === h.id;
                return (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => setActive(h)}
                    aria-label={h.label}
                    className="group absolute rounded-sm focus-visible:outline-none"
                    style={{
                      left: `${h.x}%`,
                      top: `${h.y}%`,
                      width: `${h.w}%`,
                      height: `${h.h}%`,
                    }}
                  >
                    <span
                      className={`hotspot-glow pointer-events-none absolute -inset-[6%] rounded-sm blur-[6px] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 ${
                        on ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`panel-parchment pointer-events-none absolute bottom-1 left-1/2 max-w-[95%] -translate-x-1/2 truncate rounded-sm px-1.5 py-0.5 text-[0.65rem] transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:text-xs ${
                        on ? "opacity-100" : "opacity-0 md:opacity-0"
                      } max-md:opacity-90`}
                    >
                      {h.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Under-carriage: wheels rolling + dust blowing back */}
          <div className="mt-1.5 sm:mt-2.5">
            <UnderCarriage />
          </div>

          <p className="mt-2 text-center text-[0.7rem] text-muted-foreground sm:hidden">
            Kéo ngang để xem cả toa · chạm vào từng vật
          </p>
        </div>



        <Ornament className="xl:hidden" />

        {/* Contextual info inline on smaller screens */}
        <div className="xl:hidden">{detail}</div>
      </div>

      {/* Mobile bottom sheet */}
      {active && (
        <div className="fixed inset-x-0 bottom-16 z-40 px-3 pb-2 md:hidden">
          <div className="panel-parchment grain rounded-sm p-4">
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-display text-lg">{active.label}</h2>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Đóng"
                className="grid size-9 shrink-0 place-items-center rounded-sm border border-parchment-foreground/25"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-2 text-sm leading-relaxed opacity-85">{active.note}</p>
          </div>
        </div>
      )}
    </GameShell>
  );
}
