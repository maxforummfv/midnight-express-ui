import { createFileRoute } from "@tanstack/react-router";
import { GameShell, PagePanel, ComingSoon } from "@/components/game/game-shell";
import { Ornament } from "@/components/game/ornament";

export const Route = createFileRoute("/nhat-ky")({
  head: () => ({
    meta: [
      { title: "Nhật ký — Chuyến Tàu Vô Tận" },
      {
        name: "description",
        content: "Những trang ghi chép của lữ khách về từng ngày trên chuyến tàu vô tận.",
      },
      { property: "og:title", content: "Nhật ký — Chuyến Tàu Vô Tận" },
      { property: "og:description", content: "Ghi chép của lữ khách qua từng ngày." },
    ],
  }),
  component: JournalPage,
});

const ENTRIES = [
  {
    day: "Ngày 1 — Rạng sáng",
    text: "Tôi tỉnh giấc trong một toa tàu không quen. Cửa đã được ai đó gia cố bằng sắt, và ngọn đèn dầu vẫn còn cháy. Bên ngoài, cánh đồng sương trôi qua mãi không dứt.",
  },
  {
    day: "Ngày 1 — Buổi trưa",
    text: "Tôi đếm được ít nhất mười hai toa phía trước. Không tiếng người. Chỉ có tiếng bánh sắt đập vào đường ray, đều đặn như nhịp tim của một con vật khổng lồ.",
  },
  {
    day: "Ngày 1 — Trước khi trời tối",
    text: "Có người để lại dòng chữ khắc trên vách gỗ: “Đêm xuống thì đừng mở cửa.” Tôi sẽ nghe theo.",
  },
];

function JournalPage() {
  return (
    <GameShell aside={<ComingSoon text="Nhật ký sẽ tự ghi lại hành trình của bạn ở chặng sau." />}>
      <PagePanel title="Nhật ký" subtitle="Giấy đã ngả vàng, mực vẫn còn thơm.">
        <div className="panel-parchment grain rounded-sm p-5 sm:p-7">
          <div className="space-y-6">
            {ENTRIES.map((e, i) => (
              <article key={e.day}>
                <h2 className="font-display text-lg">{e.day}</h2>
                <p className="mt-2 text-[0.95rem] leading-7 opacity-85">{e.text}</p>
                {i < ENTRIES.length - 1 && <Ornament className="mt-6 opacity-50" />}
              </article>
            ))}
          </div>
        </div>
        <div className="mt-5 xl:hidden">
          <ComingSoon text="Nhật ký sẽ tự ghi lại hành trình của bạn ở chặng sau." />
        </div>
      </PagePanel>
    </GameShell>
  );
}
