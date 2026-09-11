import { createFileRoute, Link } from "@tanstack/react-router";
import titleArt from "@/assets/title-carriage.jpg";
import { Ornament } from "@/components/game/ornament";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chuyến Tàu Vô Tận — Sinh tồn trên đoàn tàu không điểm cuối" },
      {
        name: "description",
        content:
          "Một game nhập vai sinh tồn kỳ ảo 2D: sống trong toa tàu của bạn, khám phá ban ngày, gia cố và bảo vệ nó khi đêm xuống.",
      },
      {
        property: "og:title",
        content: "Chuyến Tàu Vô Tận — Sinh tồn trên đoàn tàu không điểm cuối",
      },
      {
        property: "og:description",
        content: "Sống qua từng ngày trong toa tàu của bạn giữa một hành trình không có điểm cuối.",
      },
    ],
  }),
  component: TitleScreen,
});

function TitleScreen() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src={titleArt}
        alt="Toa tàu cổ được gia cố, ánh nến ấm trong cửa sổ, chạy qua vùng đồi sương dưới ánh trăng"
        width={1920}
        height={1088}
        className="animate-drift absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.12 0.02 250 / 0.82) 0%, oklch(0.12 0.02 250 / 0.35) 40%, oklch(0.1 0.02 250 / 0.9) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-between px-5 py-10 text-center sm:py-14">
        <div className="flex flex-1 flex-col items-center justify-center">
          <p className="text-brass/80 animate-flicker text-[0.7rem] tracking-[0.45em] uppercase sm:text-xs">
            Sinh tồn kỳ ảo
          </p>
          <Ornament className="mt-5" />
          <h1 className="font-display text-gilded mt-5 text-4xl leading-tight sm:text-6xl lg:text-7xl">
            Chuyến Tàu
            <br />
            Vô Tận
          </h1>
          <Ornament className="mt-5" />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/85 italic sm:text-base">
            Đoàn tàu không có đầu, cũng chẳng có cuối. Bạn chỉ có một toa, một ngọn đèn dầu, và
            khoảng thời gian ngắn ngủi trước khi màn đêm gõ cửa.
          </p>

          <nav className="mt-10 flex w-full max-w-xs flex-col gap-3" aria-label="Bắt đầu">
            <Link
              to="/toa-tau"
              className="panel-parchment grain font-display candle-glow flex min-h-14 items-center justify-center rounded-sm px-6 text-lg tracking-wide transition-transform active:scale-[0.98]"
            >
              Trò chơi mới
            </Link>
            <Link
              to="/toa-tau"
              className="panel-wood grain font-display flex min-h-13 items-center justify-center rounded-sm px-6 text-base tracking-wide transition-colors hover:bg-accent/60"
            >
              Tiếp tục
            </Link>
            <Link
              to="/cai-dat"
              className="font-display text-brass/85 flex min-h-12 items-center justify-center rounded-sm border border-border/70 px-6 text-base tracking-wide transition-colors hover:bg-accent/40"
            >
              Cài đặt
            </Link>
          </nav>
        </div>

        <p className="mt-10 text-[0.7rem] tracking-widest text-muted-foreground uppercase">
          Bản mẫu giao diện · Chặng I
        </p>
      </div>
    </div>
  );
}
