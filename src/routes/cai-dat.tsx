import { createFileRoute, Link } from "@tanstack/react-router";
import { GameShell, PagePanel, ComingSoon } from "@/components/game/game-shell";

export const Route = createFileRoute("/cai-dat")({
  head: () => ({
    meta: [
      { title: "Cài đặt — Chuyến Tàu Vô Tận" },
      {
        name: "description",
        content: "Điều chỉnh âm thanh, hiển thị và ngôn ngữ cho chuyến tàu của bạn.",
      },
      { property: "og:title", content: "Cài đặt — Chuyến Tàu Vô Tận" },
      { property: "og:description", content: "Âm thanh, hiển thị và ngôn ngữ." },
    ],
  }),
  component: SettingsPage,
});

const ROWS = [
  ["Nhạc nền", "70%"],
  ["Hiệu ứng âm thanh", "85%"],
  ["Cỡ chữ", "Vừa"],
  ["Ngôn ngữ", "Tiếng Việt"],
  ["Rung khi chạm", "Bật"],
];

function SettingsPage() {
  return (
    <GameShell>
      <PagePanel title="Cài đặt" subtitle="Mọi lựa chọn hiện chỉ mang tính hiển thị.">
        <div className="panel-parchment grain rounded-sm p-2 sm:p-4">
          <ul className="divide-y divide-parchment-foreground/15">
            {ROWS.map(([k, v]) => (
              <li key={k} className="flex min-h-14 items-center justify-between gap-3 px-2">
                <span className="text-sm">{k}</span>
                <span className="font-display rounded-sm border border-parchment-foreground/25 px-3 py-1 text-sm">
                  {v}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="panel-wood grain font-display flex min-h-12 flex-1 items-center justify-center rounded-sm px-4 tracking-wide"
          >
            Về màn hình chính
          </Link>
        </div>
        <div className="mt-5">
          <ComingSoon text="Lưu cài đặt và tiến trình sẽ được mở ở chặng sau." />
        </div>
      </PagePanel>
    </GameShell>
  );
}
