import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export default function PillButton({
  href,
  children,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "lime";
  className?: string;
}) {
  const styles = {
    dark: "bg-emerald-950 text-white hover:bg-emerald-900",
    light: "bg-white text-emerald-950 hover:bg-lime-50",
    lime: "bg-lime-400 text-emerald-950 hover:bg-lime-300",
  };
  const circle = {
    dark: "bg-lime-400 text-emerald-950",
    light: "bg-lime-400 text-emerald-950",
    lime: "bg-emerald-950 text-white",
  };

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-4 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-bold transition-colors ${styles[variant]} ${className}`}
    >
      {children}
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform group-hover:rotate-45 ${circle[variant]}`}
      >
        <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
      </span>
    </a>
  );
}
