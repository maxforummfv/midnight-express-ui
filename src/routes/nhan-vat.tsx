import { createFileRoute } from "@tanstack/react-router";
import { GameShell, PagePanel, ComingSoon } from "@/components/game/game-shell";

export const Route = createFileRoute("/nhan-vat")({
  head: () => ({
    meta: [
      { title: "Nhân vật — Chuyến Tàu Vô Tận" },
      {
        name: "description",
        content: "Chỉ số, cấp độ và trang bị của lữ khách trên chuyến tàu vô tận.",
      },
      { property: "og:title", content: "Nhân vật — Chuyến Tàu Vô Tận" },
      { property: "og:description", content: "Chỉ số và trang bị của lữ khách." },
    ],
  }),
  component: CharacterPage,
});

const STATS = [
  ["Cấp độ", "3"],
  ["Kinh nghiệm", "340 / 500"],
  ["Sức mạnh", "7"],
  ["Nhanh nhẹn", "5"],
  ["Ý chí", "6"],
  ["Vàng", "128"],
];

const SLOTS = ["Đầu", "Áo", "Tay", "Chân", "Vũ khí", "Đèn"];

function CharacterPage() {
  return (
    <GameShell>
      <PagePanel title="Nhân vật" subtitle="Một lữ khách không còn nhớ mình lên tàu từ khi nào.">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="panel-parchment grain rounded-sm p-4">
            <h2 className="font-display mb-3 text-lg">Chỉ số</h2>
            <dl className="divide-y divide-parchment-foreground/15">
              {STATS.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-3 py-2 text-sm">
                  <dt className="opacity-80">{k}</dt>
                  <dd className="font-display">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-4">
            <div className="panel-wood grain rounded-sm p-4">
              <h2 className="font-display mb-3 text-lg">Trang bị</h2>
              <ul className="grid grid-cols-3 gap-2">
                {SLOTS.map((s) => (
                  <li
                    key={s}
                    className="grid aspect-square place-items-center rounded-sm border border-border bg-secondary/60 p-1 text-center text-xs text-muted-foreground"
                    style={{ boxShadow: "var(--shadow-inset-deep)" }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <ComingSoon text="Hệ thống chỉ số và trang bị sẽ được mở ở chặng sau." />
          </div>
        </div>
      </PagePanel>
    </GameShell>
  );
}
