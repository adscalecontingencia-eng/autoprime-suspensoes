import { cn } from "@/lib/utils";

const BrandLockup = ({ className, compact = false }: { className?: string; compact?: boolean }) => (
  <span role="img" aria-label="Auto Prime Centro Automotivo" className={cn("inline-flex flex-col font-display font-bold leading-none text-foreground", className)}>
    <span className={compact ? "text-lg md:text-xl" : "text-4xl md:text-5xl"}>AUTO <span className="text-primary">PRIME</span></span>
    <span className={cn("mt-1.5 font-medium text-primary", compact ? "text-[9px] md:text-[10px]" : "text-sm md:text-base")}>CENTRO AUTOMOTIVO</span>
  </span>
);

export default BrandLockup;