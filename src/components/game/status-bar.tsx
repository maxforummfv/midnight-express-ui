import { Heart, Beef, Droplets, Flame, Coins, Star } from "lucide-react";

type Vital = {
  label: string;
  value: number;
  icon: typeof Heart;
  tone: string;
};

const VITALS: Vital[] = [
  { label: "Sinh lực", value: 82, icon: Heart, tone: "bg-blood" },
  { label: "Đói", value: 64, icon: Beef, tone: "bg-ember" },
  { label: "Khát", value: 47, icon: Droplets, tone: "bg-water" },
  { label: "Thể lực", value: 71, icon: Flame, tone: "bg-moss" },
];

function Gauge({ vital, compact = false }: { vital: Vital; compact?: boolean }) {
  const Icon = vital.icon;
  return (
    <div className="flex min-w-0 items-center gap-2">
      <Icon className="text-brass/90 size-4 shrink-0" aria-hidden="true" />
      <div className="min-w-0 flex-1">
        {!compact && (
          <div className="mb-1 flex items-baseline justify-between gap-2">
            <span className="truncate text-xs tracking-wide text-muted-foreground">
              {vital.label}
            </span>
            <span className="text-brass/90 shrink-0 text-xs">{vital.value}</span>
          </div>
        )}
        <div
          className="h-2 w-full overflow-hidden rounded-sm border border-border/70 bg-secondary"
          style={{ boxShadow: "var(--shadow-inset-deep)" }}
          role="img"
          aria-label={`${vital.label}: ${vital.value}%`}
        >
          <div className={`h-full ${vital.tone}`} style={{ width: `${vital.value}%` }} />
        </div>
      </div>
    </div>
  );
}

export function StatusBar() {
  return (
    <header className="panel-wood grain sticky top-0 z-30 border-x-0 border-t-0">
      <div className="mx-auto grid max-w-[1800px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3 py-2 sm:gap-6 sm:px-5 sm:py-3 lg:flex lg:justify-between">
        {/* Traveller identity */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="panel-parchment grid size-9 shrink-0 place-items-center rounded-sm sm:size-11">
            <span className="font-display text-base leading-none sm:text-lg">V</span>
          </div>
          <div className="min-w-0">
            <p className="font-display truncate text-sm leading-tight sm:text-base">
              Lữ khách vô danh
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="text-brass/90">Cấp độ 3</span> · Toa số 7
            </p>
          </div>
        </div>

        {/* Day + clock */}
        <div className="panel-parchment flex shrink-0 items-center gap-3 rounded-sm px-3 py-1.5 lg:order-3">
          <div className="text-center leading-none">
            <p className="font-display text-sm sm:text-base">Ngày 1</p>
            <p className="text-[0.65rem] tracking-widest opacity-70">HÀNH TRÌNH</p>
          </div>
          <span className="h-8 w-px bg-parchment-foreground/25" />
          <div className="text-center leading-none">
            <p className="font-display text-sm sm:text-base">08:00</p>
            <p className="text-[0.65rem] tracking-widest opacity-70">BÌNH MINH</p>
          </div>
        </div>

        {/* Vitals */}
        <div className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4 lg:order-2 lg:max-w-2xl lg:flex-1">
          {VITALS.map((v) => (
            <Gauge key={v.label} vital={v} />
          ))}
        </div>

        {/* Purse */}
        <div className="col-span-2 flex items-center justify-center gap-5 border-t border-border/50 pt-2 text-sm lg:order-4 lg:col-span-1 lg:border-0 lg:pt-0">
          <span className="flex items-center gap-1.5">
            <Coins className="text-brass size-4" aria-hidden="true" />
            <span className="text-brass/90">128</span>
            <span className="text-xs text-muted-foreground">Vàng</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="text-brass size-4" aria-hidden="true" />
            <span className="text-brass/90">340</span>
            <span className="text-xs text-muted-foreground">Kinh nghiệm</span>
          </span>
        </div>
      </div>
    </header>
  );
}
