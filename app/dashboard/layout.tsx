"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CircleDot } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      router.replace("/login");
      return;
    }
    setChecked(true);
  }, [router]);

  if (!checked) return null;

  return (
    <TooltipProvider>
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-white/95 px-4 backdrop-blur">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-5" />
            <span className="hidden items-center gap-2 rounded-full bg-lime-100 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-800 sm:flex">
              <CircleDot className="h-3 w-3 animate-pulse text-emerald-600" />
              Dados em tempo real
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-right text-sm leading-tight sm:block">
              <p className="font-semibold text-emerald-950">HALO Trust Angola</p>
              <p className="text-xs text-zinc-500">Organização Parceira</p>
            </div>
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-emerald-950 text-white">HT</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className="flex-1 bg-stone-100 p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
    </TooltipProvider>
  );
}
