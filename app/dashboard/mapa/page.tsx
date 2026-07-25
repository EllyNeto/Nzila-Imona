"use client";

import { useState } from "react";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  type MapStyleOption,
} from "@/components/ui/map";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapIcon, ShieldAlert, BookOpenText } from "lucide-react";
import {
  provinces,
  statusMeta,
  nationalStats,
  type ProvinceStatus,
} from "@/lib/angola-mine-data";

const osmStyle: MapStyleOption = {
  version: 8,
  sources: {
    osm: {
      type: "raster",
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution: "© OpenStreetMap contributors",
    },
  },
  layers: [{ id: "osm", type: "raster", source: "osm" }],
};

const badgeClass: Record<ProvinceStatus, string> = {
  livre: "bg-emerald-100 text-emerald-800",
  operacao: "bg-amber-100 text-amber-800",
  contaminada: "bg-rose-100 text-rose-700",
};

export default function MapaPage() {
  const [activeStatuses, setActiveStatuses] = useState<Set<ProvinceStatus>>(
    () => new Set(["livre", "operacao", "contaminada"])
  );

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

  const visibleProvinces = provinces.filter((p) => activeStatuses.has(p.status));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-emerald-950">Mapa</h1>
          <p className="text-sm text-zinc-500">
            Contaminação por minas antipessoal nas 21 províncias de Angola.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {(Object.keys(statusMeta) as ProvinceStatus[]).map((status) => {
            const active = activeStatuses.has(status);
            const count = provinces.filter((p) => p.status === status).length;
            return (
              <button key={status} onClick={() => toggleStatus(status)}>
                <Badge
                  variant={active ? "default" : "outline"}
                  className={`cursor-pointer gap-1.5 px-3 py-1 ${
                    active ? "" : "text-zinc-400"
                  }`}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: active ? statusMeta[status].color : "#d4d4d8" }}
                  />
                  {statusMeta[status].label}
                  <span className="font-mono">{count}</span>
                </Badge>
              </button>
            );
          })}
        </div>
      </div>

      <Card className="h-[560px] overflow-hidden p-0">
        <Map
          center={[17.5, -12.5]}
          zoom={5}
          minZoom={4}
          maxZoom={9}
          styles={{ light: osmStyle, dark: osmStyle }}
        >
          <MapControls />
          {visibleProvinces.map((p) => (
            <MapMarker key={p.name} longitude={p.lng} latitude={p.lat}>
              <MarkerContent>
                <div
                  className="size-4 rounded-full border-2 border-white shadow-lg"
                  style={{ backgroundColor: statusMeta[p.status].color }}
                />
              </MarkerContent>
              <MarkerPopup>
                <div className="min-w-40 space-y-1.5 p-1">
                  <p className="font-semibold text-emerald-950">{p.name}</p>
                  <Badge className={badgeClass[p.status]}>
                    {statusMeta[p.status].label}
                  </Badge>
                  <p className="text-xs text-zinc-500">
                    {p.hectares > 0
                      ? `${p.hectares.toLocaleString("pt-PT")} ha por limpar`
                      : "Sem áreas minadas registadas"}
                  </p>
                </div>
              </MarkerPopup>
            </MapMarker>
          ))}
        </Map>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-rose-600" />
            Áreas de maior risco
          </CardTitle>
          <CardDescription>
            Províncias contaminadas com mais hectares por limpar, por prioridade.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {provinces
              .filter((p) => p.status === "contaminada")
              .sort((a, b) => b.hectares - a.hectares)
              .map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between rounded-xl bg-rose-50 p-3"
                >
                  <span className="flex items-center gap-2 text-sm font-medium text-rose-800">
                    <MapIcon className="h-3.5 w-3.5" />
                    {p.name}
                  </span>
                  <span className="font-mono text-xs text-rose-600">
                    {p.hectares.toLocaleString("pt-PT")} ha
                  </span>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-wrap items-center gap-2 py-4 text-xs text-zinc-500">
          <BookOpenText className="h-3.5 w-3.5 shrink-0" />
          <span>
            Dados de contaminação: {nationalStats.source} — total nacional de{" "}
            {nationalStats.totalContaminatedHectares.toLocaleString("pt-PT")} ha em{" "}
            {nationalStats.totalHazardousAreas} áreas de risco, em{" "}
            {nationalStats.provincesWithContamination} das {nationalStats.provincesTotal}{" "}
            províncias.
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
