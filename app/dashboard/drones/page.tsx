"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Bot,
  Battery,
  Signal,
  Gauge,
  Wrench,
  MapPin,
  Radar,
} from "lucide-react";

const fleet = [
  {
    id: "RV-01",
    zone: "Moxico",
    battery: 82,
    signal: 96,
    status: "Em operação" as const,
    hectares: 1240,
    detections: 58,
    lastMaintenance: "12 Jun 2026",
  },
  {
    id: "RV-02",
    zone: "Cuando",
    battery: 67,
    signal: 88,
    status: "Em operação" as const,
    hectares: 980,
    detections: 41,
    lastMaintenance: "03 Jun 2026",
  },
  {
    id: "RV-03",
    zone: "Huíla",
    battery: 34,
    signal: 74,
    status: "A regressar" as const,
    hectares: 2110,
    detections: 96,
    lastMaintenance: "20 Mai 2026",
  },
  {
    id: "RV-04",
    zone: "Base — Luanda",
    battery: 100,
    signal: 100,
    status: "Em carregamento" as const,
    hectares: 3450,
    detections: 147,
    lastMaintenance: "18 Jul 2026",
  },
];

const statusBadge: Record<string, string> = {
  "Em operação": "bg-emerald-100 text-emerald-800",
  "A regressar": "bg-amber-100 text-amber-800",
  "Em carregamento": "bg-zinc-100 text-zinc-600",
};

export default function DronesPage() {
  const activeCount = fleet.filter((f) => f.status === "Em operação").length;
  const totalHectares = fleet.reduce((sum, f) => sum + f.hectares, 0);
  const totalDetections = fleet.reduce((sum, f) => sum + f.detections, 0);
  const avgBattery = Math.round(
    fleet.reduce((sum, f) => sum + f.battery, 0) / fleet.length
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-emerald-950">Drones</h1>
        <p className="text-sm text-zinc-500">
          Estado operacional da frota de rovers autónomos de deteção.
        </p>
      </div>

      {/* KPI Row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Unidades ativas</CardDescription>
            <Bot className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <p className="font-mono text-3xl font-bold tabular-nums text-emerald-950">
              {activeCount}
              <span className="text-lg text-zinc-400">/{fleet.length}</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Bateria média</CardDescription>
            <Battery className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <p className="font-mono text-3xl font-bold tabular-nums text-emerald-950">
              {avgBattery}%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Hectares varridos</CardDescription>
            <Radar className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <p className="font-mono text-3xl font-bold tabular-nums text-emerald-950">
              {totalHectares.toLocaleString("pt-PT")}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Deteções totais</CardDescription>
            <Gauge className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <p className="font-mono text-3xl font-bold tabular-nums text-emerald-950">
              {totalDetections}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Fleet Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {fleet.map((unit) => (
          <Card key={unit.id}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="font-mono text-base">{unit.id}</CardTitle>
              <Badge className={statusBadge[unit.status]}>{unit.status}</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="flex items-center gap-2 text-sm text-zinc-500">
                <MapPin className="h-3.5 w-3.5" />
                {unit.zone}
              </p>

              <div>
                <div className="mb-1.5 flex items-center justify-between text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Battery className="h-3.5 w-3.5" />
                    Bateria
                  </span>
                  <span className="font-mono">{unit.battery}%</span>
                </div>
                <Progress value={unit.battery} className="h-1.5" />
              </div>

              <div>
                <div className="mb-1.5 flex items-center justify-between text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Signal className="h-3.5 w-3.5" />
                    Sinal
                  </span>
                  <span className="font-mono">{unit.signal}%</span>
                </div>
                <Progress value={unit.signal} className="h-1.5" />
              </div>

              <div className="grid grid-cols-2 gap-2 border-t pt-3 text-xs text-zinc-500">
                <div>
                  <p className="font-mono text-sm font-semibold text-emerald-950">
                    {unit.hectares.toLocaleString("pt-PT")}
                  </p>
                  <p>hectares varridos</p>
                </div>
                <div>
                  <p className="font-mono text-sm font-semibold text-emerald-950">
                    {unit.detections}
                  </p>
                  <p>deteções</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Maintenance Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-4 w-4 text-emerald-600" />
            Manutenção
          </CardTitle>
          <CardDescription>Última manutenção registada por unidade.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Unidade</TableHead>
                <TableHead>Zona Atual</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Última Manutenção</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fleet.map((unit) => (
                <TableRow key={unit.id}>
                  <TableCell className="font-mono font-medium text-emerald-950">
                    {unit.id}
                  </TableCell>
                  <TableCell className="text-zinc-600">{unit.zone}</TableCell>
                  <TableCell>
                    <Badge className={statusBadge[unit.status]}>{unit.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono text-xs text-zinc-500">
                    {unit.lastMaintenance}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
