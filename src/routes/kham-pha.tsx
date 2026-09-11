import { createFileRoute } from "@tanstack/react-router";
import { GameShell, PagePanel, ComingSoon } from "@/components/game/game-shell";

export const Route = createFileRoute("/kham-pha")({
  head: () => ({
    meta: [
      { title: "Khám phá — Chuyến Tàu Vô Tận" },
      {
        name: "description",
        content: "Những toa tàu xa lạ và vùng đất bên ngoài chờ được khám phá lúc ban ngày.",
      },
      { property: "og:title", content: "Khám phá — Chuyến Tàu Vô Tận" },
      { property: "og:description", content: "Đi xa khỏi toa của bạn khi trời còn sáng." },
    ],
  }),
  component: ExplorePage,
});

const PLACES = [
  { name: "Toa hành lý bỏ hoang", note: "Cách ba toa về phía sau. Mùi bụi và dầu cũ." },
  { name: "Toa ăn im lặng", note: "Bàn còn dọn sẵn, nhưng không ai ngồi." },
  { name: "Nóc tàu", note: "Gió lớn. Từ đây có thể thấy đoàn tàu dài đến vô tận." },
  { name: "Cánh đồng sương", note: "Chỉ đến được khi tàu dừng lại lúc ban ngày." },
];

function ExplorePage() {
  return (
    <GameShell>
      <PagePanel title="Khám phá" subtitle="Ban ngày là lúc duy nhất an toàn để rời khỏi toa.">
        <ul className="grid gap-3 sm:grid-cols-2">
          {PLACES.map((p) => (
            <li key={p.name}>
              <button
                type="button"
                className="panel-parchment grain w-full rounded-sm p-4 text-left transition-transform active:scale-[0.99]"
              >
                <p className="font-display text-lg">{p.name}</p>
                <p className="mt-1 text-sm opacity-80">{p.note}</p>
                <p className="mt-3 text-xs tracking-widest uppercase opacity-60">
                  Chưa thể đi — chặng sau
                </p>
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <ComingSoon text="Bản đồ, di chuyển và các sự kiện ngoài toa sẽ được mở ở chặng sau." />
        </div>
      </PagePanel>
    </GameShell>
  );
}
