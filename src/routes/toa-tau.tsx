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

/**
 * Coordinates are % of the *visible* interior crop (the illustration also
 * contains the undercarriage, which is replaced by an animated layer).
 */
const HOTSPOTS: Hotspot[] = [
  {
    id: "cua-chinh",
    label: "Cửa chính",
    note: "Cánh cửa sắt gia cố, then đồng dày. Về sau bạn sẽ chốt cửa mỗi đêm và bước ra ngoài lúc rạng sáng.",
    x: 2,
    y: 6,
    w: 13,
    h: 87,
  },
  {
    id: "cua-so",
    label: "Cửa sổ",
    note: "Khung sắt chắn ngoài lớp kính mờ. Ban đêm, có thứ gì đó vẫn thường lướt qua sau tấm kính ấy.",
    x: 28,
    y: 29,
    w: 13,
    h: 27,
  },
  {
    id: "giuong",
    label: "Giường",
    note: "Chiếc giường gỗ với tấm chăn chắp vá. Đây sẽ là nơi bạn kết thúc một ngày và hồi phục thể lực.",
    x: 18,
    y: 55,
    w: 23,
    h: 27,
  },
  {
    id: "bep",
    label: "Bếp",
    note: "Lò gang cũ và mấy chiếc ấm đồng. Nấu nướng, đun nước và chế biến sẽ đến ở chặng sau.",
    x: 42,
    y: 53,
    w: 8,
    h: 30,
  },
  {
    id: "ban",
    label: "Bàn",
    note: "Ngọn nến, lọ mực và quyển sổ da mở sẵn. Bàn làm việc dành cho chế tạo và ghi chép hành trình.",
    x: 57,
    y: 55,
    w: 15,
    h: 30,
  },
  {
    id: "kho",
    label: "Kho",
    note: "Kệ treo đầy lọ thủy tinh và những chiếc hòm khóa đồng. Nơi cất giữ lương thực và vật liệu.",
    x: 70,
    y: 25,
    w: 8,
    h: 32,
  },
  {
    id: "phong-tam",
    label: "Phòng tắm",
    note: "Một cánh cửa gỗ hẹp, khăn vải treo bên ngoài. Vệ sinh và giữ sức khỏe sẽ có ý nghĩa về sau.",
    x: 79,
    y: 22,
    w: 8,
    h: 62,
  },
  {
    id: "nha-ve-sinh",
    label: "Nhà vệ sinh",
    note: "Buồng nhỏ cuối toa, sáng lờ mờ dưới ánh đèn dầu.",
    x: 88,
    y: 45,
    w: 10,
    h: 45,
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
            <div
              className="relative w-[190%] overflow-hidden rounded-sm border border-border/70 sm:w-full"
              style={{ aspectRatio: "1920 / 1088" }}
            >
              {/* Original carriage artwork, including its matching undercarriage */}
              <img
                src={interior}
                alt="Nội thất toa tàu cổ với giường, bếp lò, bàn viết và kho đồ dưới ánh nến"
                width={1920}
                height={1088}
                className="absolute inset-0 block h-full w-full object-cover"
              />

              {/* Interactive objects, lit by soft glow (no dashed frames) */}
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
                        on ? "opacity-100" : "opacity-0"
                      }`}


                    >
                      {h.label}
                    </span>
                  </button>
                );
              })}
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
