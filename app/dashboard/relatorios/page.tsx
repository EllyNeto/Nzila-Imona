import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, FileCheck, MapPin } from "lucide-react";

const reports = [
  { province: "Luanda", format: "GIS + PDF", ready: true },
  { province: "Bengo", format: "GIS + PDF", ready: true },
  { province: "Cabinda", format: "GIS + PDF", ready: true },
  { province: "Namibe", format: "GIS + PDF", ready: true },
  { province: "Cuanza Norte", format: "GIS + PDF", ready: true },
  { province: "Zaire", format: "GIS + PDF", ready: true },
  { province: "Benguela", format: "GIS + PDF", ready: true },
  { province: "Moxico", format: "GIS + PDF", ready: false },
  { province: "Cuando", format: "GIS + PDF", ready: false },
];

export default function RelatoriosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-emerald-950">
          Relatórios
        </h1>
        <p className="text-sm text-zinc-500">
          Certidões digitais de solo limpo, geradas automaticamente por província.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCheck className="h-4 w-4 text-emerald-600" />
            Certificação Digital
          </CardTitle>
          <CardDescription>
            Relatórios auditáveis em formato GIS para declaração oficial de solo
            seguro.
          </CardDescription>
        </CardHeader>
        <CardContent className="divide-y divide-zinc-100">
          {reports.map((r) => (
            <div
              key={r.province}
              className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-950/5">
                  <MapPin className="h-4 w-4 text-emerald-700" />
                </span>
                <div>
                  <p className="font-medium text-emerald-950">{r.province}</p>
                  <p className="text-xs text-zinc-500">{r.format}</p>
                </div>
              </div>
              {r.ready ? (
                <Button size="sm" variant="outline" className="gap-2">
                  <Download className="h-3.5 w-3.5" />
                  Descarregar
                </Button>
              ) : (
                <Badge className="bg-amber-100 text-amber-800">Em progresso</Badge>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
