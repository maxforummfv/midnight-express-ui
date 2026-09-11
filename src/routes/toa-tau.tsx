import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, Hammer, ArrowUpCircle } from "lucide-react";
import interior from "@/assets/carriage-interior.jpg";
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

function CarriagePage() {
  const [active, setActive] = useState<Hotspot | null>(null);

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
          <div className="overflow-x-auto rounded-sm">
            <div className="relative w-[190%] overflow-hidden rounded-sm border border-border/70 sm:w-full">
              <img
                src={interior}
                alt="Nội thất toa tàu cổ với giường, bếp lò, bàn viết và kho đồ dưới ánh nến"
                width={1920}
                height={1088}
                className="block h-auto w-full"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(75% 60% at 50% 45%, transparent, oklch(0.1 0.02 250 / 0.55))",
                }}
                aria-hidden="true"
              />
              {HOTSPOTS.map((h) => (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setActive(h)}
                  aria-label={h.label}
                  className={`hotspot-ring absolute rounded-sm transition-all duration-200 hover:bg-brass/15 focus-visible:bg-brass/20 focus-visible:outline-brass ${
                    active?.id === h.id ? "bg-brass/20 candle-glow" : ""
                  }`}
                  style={{
                    left: `${h.x}%`,
                    top: `${h.y}%`,
                    width: `${h.w}%`,
                    height: `${h.h}%`,
                  }}
                >
                  <span className="panel-parchment absolute bottom-1 left-1/2 max-w-[95%] -translate-x-1/2 truncate rounded-sm px-1.5 py-0.5 text-[0.65rem] sm:text-xs">
                    {h.label}
                  </span>
                </button>
              ))}
            </div>
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
