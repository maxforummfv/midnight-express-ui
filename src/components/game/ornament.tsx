export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-brass/70 sm:w-24" />
      <span className="text-brass/80 text-sm tracking-[0.5em]">❖</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-brass/70 sm:w-24" />
    </div>
  );
}
