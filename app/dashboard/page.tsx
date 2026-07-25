"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";
import Counter from "@/components/Counter";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ShieldCheck,
  Bot,
  Radar,
  MapPin,
  TriangleAlert,
  RefreshCw,
  Search,
  TrendingDown,
  TrendingUp,
  BookOpenText,
} from "lucide-react";
import { provinces, statusMeta, nationalStats, type ProvinceStatus } from "@/lib/angola-mine-data";

const detectionTypes = [
  "Mina anti-pessoal",
  "Engenho não deflagrado (UXO)",
  "Anomalia magnética",
  "Falso positivo",
];

const fleet = [
  { id: "RV-01", zone: "Moxico", battery: 82, status: "Em operação" as const },
  { id: "RV-02", zone: "Cuando", battery: 67, status: "Em operação" as const },
  { id: "RV-03", zone: "Huíla", battery: 34, status: "A regressar" as const },
  { id: "RV-04", zone: "Base — Luanda", battery: 100, status: "Em carregamento" as const },
];

const landRelease = [
  {
    metric: "Clearance",
    "2023": nationalStats.clearanceKm2.y2023,
    "2024": nationalStats.clearanceKm2.y2024,
  },
  {
    metric: "Levantamento Técnico",
    "2023": nationalStats.technicalSurveyKm2.y2023,
    "2024": nationalStats.technicalSurveyKm2.y2024,
  },
  {
    metric: "Levantamento Não-Técnico",
    "2023": nationalStats.nonTechnicalSurveyKm2.y2023,
    "2024": nationalStats.nonTechnicalSurveyKm2.y2024,
  },
];

const landReleaseChartConfig = {
  "2023": { label: "2023 (km²)", color: "#a3a3a3" },
  "2024": { label: "2024 (km²)", color: "#047857" },
} satisfies ChartConfig;

type Detection = {
  id: number;
  province: string;
  type: string;
  coords: string;
  time: string;
};

function randomCoords() {
  const lat = (-8 - Math.random() * 9).toFixed(4);
  const lng = (13 + Math.random() * 9).toFixed(4);
  return `${lat}, ${lng}`;
}

export default function DashboardPage() {
  const [detections, setDetections] = useState<Detection[]>([]);
  const [isLive, setIsLive] = useState(true);
  const [provinceSearch, setProvinceSearch] = useState("");
  const [activeStatuses, setActiveStatuses] = useState<Set<ProvinceStatus>>(
    () => new Set(["livre", "operacao", "contaminada"])
  );
  const [typeFilter, setTypeFilter] = useState<string>("todos");
  const counter = useRef(0);

  function toggleStatus(status: ProvinceStatus) {
    setActiveStatuses((prev) => {
      const next = new Set(prev);
      if (next.has(status)) {
        if (next.size === 1) return next;
        next.delete(status);
      } else {
        next.add(status);
      }
      return next;
    });
  }

  useEffect(() => {
    if (!isLive) return;
    const opProvinces = provinces.filter((p) => p.status !== "livre");

    const addDetection = () => {
      const province = opProvinces[Math.floor(Math.random() * opProvinces.length)];
      counter.current += 1;
      const entry: Detection = {
        id: counter.current,
        province: province.name,
        type: detectionTypes[Math.floor(Math.random() * detectionTypes.length)],
        coords: randomCoords(),
        time: "agora mesmo",
      };
      setDetections((prev) => [entry, ...prev].slice(0, 8));
    };

    addDetection();
    const interval = setInterval(addDetection, 4500);
    return () => clearInterval(interval);
  }, [isLive]);

  const freeCount = provinces.filter((p) => p.status === "livre").length;
  const activeRovers = fleet.filter((f) => f.status === "Em operação").length;

  const statusCounts = useMemo(
    () =>
      (Object.keys(statusMeta) as ProvinceStatus[]).map((status) => ({
        status,
        label: statusMeta[status].label,
        count: provinces.filter((p) => p.status === status).length,
        fill: statusMeta[status].color,
      })),
    []
  );

  const filteredProvinces = useMemo(
    () =>
      provinces.filter((p) => {
        const matchesSearch = p.name
          .toLowerCase()
          .includes(provinceSearch.toLowerCase());
        return matchesSearch && activeStatuses.has(p.status);
      }),
    [provinceSearch, activeStatuses]
  );

  const filteredDetections = useMemo(
    () =>
      typeFilter === "todos"
        ? detections
        : detections.filter((d) => d.type === typeFilter),
    [detections, typeFilter]
  );

  const maxHectares = Math.max(...provinces.map((p) => p.hectares));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-emerald-950">
          Visão Geral
        </h1>
        <p className="text-sm text-zinc-500">
          Estado real da contaminação por minas nas 21 províncias de Angola.
        </p>
      </div>

      {/* KPI Row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Províncias livres</CardDescription>
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <p className="font-mono text-3xl font-bold tabular-nums text-emerald-950">
              <Counter value={freeCount} />
              <span className="text-lg text-zinc-400">/{provinces.length}</span>
            </p>
            <p className="mt-1 text-xs font-medium text-zinc-400">
              Benguela, Huambo, Luanda e Zaire
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Área contaminada restante</CardDescription>
            <Radar className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <p className="font-mono text-3xl font-bold tabular-nums text-emerald-950">
              <Counter value={57} suffix=" km²" />
            </p>
            <p className="mt-1 flex items-center gap-1 text-xs font-medium text-emerald-600">
              <TrendingDown className="h-3 w-3" /> -10 km² desde 2023
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Áreas de risco (CHA+SHA)</CardDescription>
            <TriangleAlert className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <p className="font-mono text-3xl font-bold tabular-nums text-emerald-950">
              <Counter value={nationalStats.totalHazardousAreas} />
            </p>
            <p className="mt-1 flex items-center gap-1 text-xs font-medium text-emerald-600">
              <TrendingDown className="h-3 w-3" /> -53 vs 2023 (1 016)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Minas destruídas em 2024</CardDescription>
            <Bot className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <p className="font-mono text-3xl font-bold tabular-nums text-emerald-950">
              <Counter value={nationalStats.minesDestroyed2024} />
            </p>
            <p className="mt-1 flex items-center gap-1 text-xs font-medium text-emerald-600">
              <TrendingUp className="h-3 w-3" /> +684 vs 2023
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="analise" className="gap-4">
        <TabsList>
          <TabsTrigger value="analise">Análise</TabsTrigger>
          <TabsTrigger value="provincias">Províncias</TabsTrigger>
          <TabsTrigger value="deteccoes">Deteções</TabsTrigger>
        </TabsList>

        {/* Analysis Tab */}
        <TabsContent value="analise" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-600" />
                Libertação de Terra: 2023 vs 2024
              </CardTitle>
              <CardDescription>
                Clearance e levantamento de área minada, em km² por ano.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={landReleaseChartConfig} className="aspect-auto h-[260px] w-full">
                <BarChart data={landRelease} margin={{ left: 0, right: 12 }}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis
                    dataKey="metric"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis tickLine={false} axisLine={false} tickMargin={8} width={32} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="2023" fill="var(--color-2023)" radius={4} />
                  <Bar dataKey="2024" fill="var(--color-2024)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 lg:grid-cols-5">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Estado das Províncias
                </CardTitle>
                <CardDescription>Distribuição das 21 províncias.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {statusCounts.map((s) => (
                  <div key={s.status}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 font-medium text-emerald-950">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: s.fill }}
                        />
                        {s.label}
                      </span>
                      <span className="font-mono text-zinc-500">{s.count}/21</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${(s.count / provinces.length) * 100}%`,
                          backgroundColor: s.fill,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TriangleAlert className="h-4 w-4 text-emerald-600" />
                  Hectares por limpar, por província
                </CardTitle>
                <CardDescription>
                  Área de risco (confirmada + suspeita) reportada a dez/2024.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2.5">
                {provinces
                  .filter((p) => p.hectares > 0)
                  .sort((a, b) => b.hectares - a.hectares)
                  .slice(0, 8)
                  .map((p) => (
                    <div key={p.name} className="flex items-center gap-3 text-sm">
                      <span className="w-28 shrink-0 truncate text-zinc-600">{p.name}</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${(p.hectares / maxHectares) * 100}%`,
                            backgroundColor: statusMeta[p.status].color,
                          }}
                        />
                      </div>
                      <span className="w-16 shrink-0 text-right font-mono text-xs text-zinc-500">
                        {p.hectares.toLocaleString("pt-PT")} ha
                      </span>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="flex flex-wrap items-center gap-2 py-4 text-xs text-zinc-500">
              <BookOpenText className="h-3.5 w-3.5 shrink-0" />
              <span>Fonte: {nationalStats.source}.</span>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Provinces Tab */}
        <TabsContent value="provincias">
          <Card>
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <CardTitle>Estado por Província</CardTitle>
                  <CardDescription>
                    Contaminação por minas antipessoal, dados reais a dez/2024.
                  </CardDescription>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                    <Input
                      placeholder="Procurar província..."
                      value={provinceSearch}
                      onChange={(e) => setProvinceSearch(e.target.value)}
                      className="w-48 pl-8"
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {statusCounts.map((s) => {
                      const active = activeStatuses.has(s.status);
                      return (
                        <button key={s.status} onClick={() => toggleStatus(s.status)}>
                          <Badge
                            className="cursor-pointer gap-1.5 border px-2.5 py-1 transition-all"
                            style={
                              active
                                ? { backgroundColor: `${s.fill}1a`, color: s.fill, borderColor: `${s.fill}55` }
                                : { backgroundColor: "transparent", color: "#a1a1aa", borderColor: "#e4e4e7" }
                            }
                          >
                            {s.label}
                          </Badge>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Província</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Área de risco</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProvinces.map((p) => {
                    const meta = statusMeta[p.status];
                    return (
                      <TableRow key={p.name}>
                        <TableCell className="flex items-center gap-2 font-medium text-emerald-950">
                          <MapPin className="h-4 w-4 text-zinc-400" />
                          {p.name}
                        </TableCell>
                        <TableCell>
                          <Badge style={{ backgroundColor: `${meta.color}1a`, color: meta.color }}>
                            {meta.label}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {p.hectares > 0 ? (
                            <div className="flex items-center gap-3">
                              <Progress
                                value={(p.hectares / maxHectares) * 100}
                                className="h-1.5 max-w-[140px]"
                              />
                              <span className="font-mono text-xs text-zinc-500">
                                {p.hectares.toLocaleString("pt-PT")} ha
                              </span>
                            </div>
                          ) : (
                            <span className="font-mono text-xs text-zinc-400">0 ha</span>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {filteredProvinces.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center text-zinc-400">
                        Nenhuma província encontrada.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Detections Tab */}
        <TabsContent value="deteccoes">
          <Card>
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <RefreshCw className={`h-4 w-4 text-emerald-600 ${isLive ? "animate-spin" : ""}`} />
                    Pinos Recentes
                    <Badge variant="outline" className="text-zinc-400">
                      simulação
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    Pré-visualização de deteções da futura frota de rovers (dados simulados —
                    a rede ainda não está em operação).
                  </CardDescription>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Select value={typeFilter} onValueChange={(v) => setTypeFilter(v ?? "todos")}>
                    <SelectTrigger className="w-52">
                      <SelectValue placeholder="Tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos os tipos</SelectItem>
                      {detectionTypes.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <label className="flex items-center gap-2 text-sm text-zinc-600">
                    <Switch checked={isLive} onCheckedChange={setIsLive} />
                    Ao vivo
                  </label>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Província</TableHead>
                    <TableHead>Coordenadas</TableHead>
                    <TableHead className="text-right">Quando</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDetections.map((d) => (
                    <TableRow key={d.id}>
                      <TableCell className="flex items-center gap-2 font-medium text-emerald-950">
                        <TriangleAlert className="h-4 w-4 text-rose-500" />
                        {d.type}
                      </TableCell>
                      <TableCell className="text-zinc-600">{d.province}</TableCell>
                      <TableCell className="font-mono text-xs text-zinc-500">
                        {d.coords}
                      </TableCell>
                      <TableCell className="text-right font-mono text-xs text-zinc-400">
                        {d.time}
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredDetections.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-zinc-400">
                        {isLive ? "A aguardar deteções..." : "Feed em pausa."}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
