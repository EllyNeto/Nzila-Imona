"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LogOut, Settings } from "lucide-react";

export default function ConfiguracoesPage() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("loggedIn");
    router.replace("/login");
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-emerald-950">
          Configurações
        </h1>
        <p className="text-sm text-zinc-500">
          Dados da organização e preferências de conta.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-4 w-4 text-emerald-600" />
            Organização
          </CardTitle>
          <CardDescription>Informação visível às demais organizações parceiras.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="org-name">Nome da organização</Label>
            <Input id="org-name" defaultValue="HALO Trust Angola" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="org-email">E-mail de contacto</Label>
            <Input id="org-email" type="email" defaultValue="contacto@nzilaimona.ao" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="org-role">Função na plataforma</Label>
            <Input id="org-role" defaultValue="Operador de Campo" disabled />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sessão</CardTitle>
          <CardDescription>Termine a sessão neste dispositivo.</CardDescription>
        </CardHeader>
        <CardContent>
          <Separator className="mb-4" />
          <Button variant="destructive" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" />
            Sair da Conta
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
