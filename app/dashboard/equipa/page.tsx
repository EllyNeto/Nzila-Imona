import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Users } from "lucide-react";

const team = [
  {
    name: "Eliandra Neto",
    role: "Liderança Estratégica",
    focus: "Gestão de operações de impacto e articulação de parcerias institucionais.",
    email: "eliandra@nzilaimona.ao",
  },
  {
    name: "Liedson Habacuc",
    role: "Engenharia de Software",
    focus: "Desenvolvimento de software de robótica, fusão de dados de sensores e arquitetura da plataforma SaaS.",
    email: "liedson@nzilaimona.ao",
  },
  {
    name: "Alexandre Tambo",
    role: "Engenharia de Hardware",
    focus: "Engenharia de hardware robótico, integração de radares GPR e eletrónica de varredura terrestre.",
    email: "alexandre@nzilaimona.ao",
  },
];

export default function EquipaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-emerald-950">Equipa</h1>
        <p className="text-sm text-zinc-500">
          Liderança técnica e estratégica por trás da Nzila Imona.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <Card key={member.name}>
            <CardHeader>
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950 text-lg font-bold text-white">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>
                <Badge className="bg-emerald-100 text-emerald-800">{member.role}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed text-zinc-600">{member.focus}</p>
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800"
              >
                <Mail className="h-3.5 w-3.5" />
                {member.email}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-4 w-4 text-emerald-600" />
            Junte-se à equipa
          </CardTitle>
          <CardDescription>
            Procuramos especialistas em robótica, geoespacial e operações de campo
            para acelerar a desminagem em Angola.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
