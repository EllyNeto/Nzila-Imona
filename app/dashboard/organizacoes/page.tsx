import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Building2 } from "lucide-react";

const organizations = [
  { name: "CNAD / INAD", type: "Agência Nacional", access: "Administrador", status: "Ativo" },
  { name: "HALO Trust Angola", type: "ONG Internacional", access: "Operador", status: "Ativo" },
  { name: "Norwegian People's Aid (NPA)", type: "ONG Internacional", access: "Operador", status: "Ativo" },
  { name: "MAG (Mines Advisory Group)", type: "ONG Internacional", access: "Operador", status: "Ativo" },
  { name: "Forças Armadas Angolanas", type: "Governo", access: "Visualizador", status: "Convidado" },
  { name: "Cooperativa Agrícola do Moxico", type: "Empresa Agrícola", access: "Visualizador", status: "Pendente" },
];

const accessBadge: Record<string, string> = {
  Administrador: "bg-emerald-100 text-emerald-800",
  Operador: "bg-lime-100 text-lime-800",
  Visualizador: "bg-zinc-100 text-zinc-600",
};

const statusBadge: Record<string, string> = {
  Ativo: "bg-lime-100 text-lime-800",
  Convidado: "bg-amber-100 text-amber-800",
  Pendente: "bg-zinc-100 text-zinc-600",
};

export default function OrganizacoesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-emerald-950">
          Organizações
        </h1>
        <p className="text-sm text-zinc-500">
          Parceiros institucionais com acesso à plataforma de monitoramento.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-emerald-600" />
            Parceiros &amp; Acessos
          </CardTitle>
          <CardDescription>
            Agências, ONGs e demais entidades com permissão para consultar dados de
            desminagem.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Organização</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Nível de Acesso</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {organizations.map((org) => (
                <TableRow key={org.name}>
                  <TableCell className="font-medium text-emerald-950">{org.name}</TableCell>
                  <TableCell className="text-zinc-600">{org.type}</TableCell>
                  <TableCell>
                    <Badge className={accessBadge[org.access]}>{org.access}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={statusBadge[org.status]}>{org.status}</Badge>
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
