import { createFileRoute } from "@tanstack/react-router";
import { GameShell, PagePanel, ComingSoon } from "@/components/game/game-shell";

export const Route = createFileRoute("/tui-do")({
  head: () => ({
    meta: [
      { title: "Túi đồ — Chuyến Tàu Vô Tận" },
      {
        name: "description",
        content: "Lương thực, vật liệu và những món đồ kỳ lạ bạn mang theo trên tàu.",
      },
      { property: "og:title", content: "Túi đồ — Chuyến Tàu Vô Tận" },
      { property: "og:description", content: "Những gì lữ khách mang theo mình." },
    ],
  }),
  component: InventoryPage,
});

const ITEMS = [
  { name: "Bánh khô", qty: 3 },
  { name: "Bình nước", qty: 1 },
  { name: "Đèn dầu", qty: 1 },
  { name: "Đinh sắt", qty: 12 },
  { name: "Ván gỗ", qty: 5 },
  { name: "Vải cũ", qty: 2 },
  { name: "Chìa khóa lạ", qty: 1 },
];

function InventoryPage() {
  const slots = Array.from({ length: 24 }, (_, i) => ITEMS[i] ?? null);
  return (
    <GameShell aside={<ComingSoon text="Sắp xếp, sử dụng và chế tạo sẽ được mở ở chặng sau." />}>
      <PagePanel title="Túi đồ" subtitle="Hành trang nhẹ tênh của một chuyến đi không biết ngày về.">
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
          {slots.map((item, i) => (
            <button
              key={i}
              type="button"
              className="flex aspect-square min-h-16 flex-col items-center justify-center gap-1 rounded-sm border border-border bg-secondary/60 p-2 text-center transition-colors hover:border-brass/70 hover:bg-accent/50"
              style={{ boxShadow: "var(--shadow-inset-deep)" }}
            >
              {item ? (
                <>
                  <span className="text-xs leading-tight">{item.name}</span>
                  <span className="text-brass/90 text-[0.7rem]">×{item.qty}</span>
                </>
              ) : (
                <span className="text-brass/25 text-lg">❖</span>
              )}
            </button>
          ))}
        </div>
        <div className="mt-5 xl:hidden">
          <ComingSoon text="Sắp xếp, sử dụng và chế tạo sẽ được mở ở chặng sau." />
        </div>
      </PagePanel>
    </GameShell>
  );
}
