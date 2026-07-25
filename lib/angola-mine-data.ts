/**
 * Fonte: Mine Action Review — "Clearing the Mines 2025", perfil de Angola
 * (dados de contaminação por minas antipessoal reportados a 31 dez 2024).
 * https://www.mineactionreview.org/assets/downloads/Angola_Clearing_the_Mines_2025.pdf
 *
 * Área de risco (hectares) = área confirmada + suspeita de contaminação por
 * província, convertida de m² para hectares. Angola tem oficialmente 21
 * províncias desde a reorganização territorial de 2024 (Icolo e Bengo, Cuando
 * e Cubango, e Moxico Leste passaram a província própria).
 */

export type ProvinceStatus = "livre" | "operacao" | "contaminada";

export type Province = {
  name: string;
  status: ProvinceStatus;
  hectares: number;
  lng: number;
  lat: number;
};

export const provinces: Province[] = [
  // Sem áreas minadas registadas (Artigo 7, relatório 2024)
  { name: "Luanda", status: "livre", hectares: 0, lng: 13.2343, lat: -8.8368 },
  { name: "Benguela", status: "livre", hectares: 0, lng: 13.4055, lat: -12.5763 },
  { name: "Huambo", status: "livre", hectares: 0, lng: 15.7392, lat: -12.7761 },
  { name: "Zaire", status: "livre", hectares: 0, lng: 14.25, lat: -6.2667 },

  // Contaminação residual baixa — declaração de "livre de minas" prevista
  // para 2026/2027 no pedido de extensão do Artigo 5
  { name: "Namibe", status: "operacao", hectares: 17.3, lng: 12.1522, lat: -15.1961 },
  { name: "Malanje", status: "operacao", hectares: 17.3, lng: 16.341, lat: -9.5402 },
  { name: "Uíge", status: "operacao", hectares: 30.1, lng: 15.0611, lat: -7.6087 },
  { name: "Cuanza Norte", status: "operacao", hectares: 31.2, lng: 14.9167, lat: -9.3 },

  // Contaminação ativa mais significativa
  { name: "Icolo e Bengo", status: "contaminada", hectares: 110.1, lng: 13.6667, lat: -9.0833 },
  { name: "Bengo", status: "contaminada", hectares: 227.5, lng: 13.6644, lat: -8.5798 },
  { name: "Cunene", status: "contaminada", hectares: 250.5, lng: 15.7333, lat: -17.0667 },
  { name: "Huíla", status: "contaminada", hectares: 301.1, lng: 13.4925, lat: -14.9177 },
  { name: "Cabinda", status: "contaminada", hectares: 127.9, lng: 12.2, lat: -5.55 },
  { name: "Moxico Leste", status: "contaminada", hectares: 155.8, lng: 22.2333, lat: -10.7 },
  { name: "Lunda Norte", status: "contaminada", hectares: 188.3, lng: 20.8333, lat: -7.3833 },
  { name: "Cubango", status: "contaminada", hectares: 461.0, lng: 17.691, lat: -14.6585 },
  { name: "Cuanza Sul", status: "contaminada", hectares: 586.7, lng: 13.8437, lat: -11.2061 },
  { name: "Bié", status: "contaminada", hectares: 599.9, lng: 16.9333, lat: -12.3833 },
  { name: "Cuando", status: "contaminada", hectares: 606.6, lng: 19.5, lat: -14.8 },
  { name: "Lunda Sul", status: "contaminada", hectares: 708.4, lng: 20.3911, lat: -9.6641 },
  { name: "Moxico", status: "contaminada", hectares: 1281.7, lng: 19.9167, lat: -11.7833 },
];

export const statusMeta: Record<ProvinceStatus, { label: string; color: string }> = {
  livre: { label: "Livre", color: "#059669" },
  operacao: { label: "Em Operação", color: "#f59e0b" },
  contaminada: { label: "Contaminada", color: "#e11d48" },
};

/** Totais nacionais reportados a 31 dez 2024 (Mine Action Review 2025). */
export const nationalStats = {
  totalContaminatedHectares: 5701.6, // 57.02 km²
  totalHazardousAreas: 963,
  confirmedHazardousAreas: 884,
  suspectedHazardousAreas: 79,
  provincesWithContamination: 17,
  provincesTotal: 21,
  minesDestroyed2024: 5680,
  minesDestroyed2023: 4996,
  clearanceKm2: { y2024: 3.03, y2023: 6.69 },
  technicalSurveyKm2: { y2024: 2.38, y2023: 3.93 },
  nonTechnicalSurveyKm2: { y2024: 0.14, y2023: 0.72 },
  article5Deadline: 2030,
  operators: ["HALO Trust", "APOPO", "MAG", "NPA", "CND", "Brigadas de Desminagem do Exército"],
  source: "Mine Action Review — Clearing the Mines 2025 (dados a 31 dez 2024)",
  sourceUrl: "https://www.mineactionreview.org/assets/downloads/Angola_Clearing_the_Mines_2025.pdf",
};
