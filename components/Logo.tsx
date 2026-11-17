import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showSubtitle?: boolean;
};

export function Logo({ className, showSubtitle = true }: LogoProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[0.18em] text-white sm:text-2xl">
        TECH<span className="text-cyan">971</span>
      </span>
      {showSubtitle ? (
        <span className="mt-0.5 text-[10px] font-medium tracking-[0.16em] text-silver/80 sm:text-[11px]">
          COMPUTERS • MOBILES • ELECTRONICS REPAIR
        </span>
      ) : null}
    </div>
  );
}
