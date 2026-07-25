import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import PillButton from "@/components/PillButton";
import {
  ShieldCheck,
  Radar,
  Satellite,
  Gauge,
  Target,
  FileCheck,
  Building2,
  Handshake,
  Users,
  CheckCircle2,
  Mail,
  MapPin,
  Calendar,
  Quote,
} from "lucide-react";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Risco Humano Zero",
    desc: "Rovers autónomos substituem o sapador na fase crítica de deteção, eliminando a exposição humana direta a minas e engenhos não deflagrados.",
    tone: "light" as const,
  },
  {
    icon: Radar,
    title: "Deteção Multissensores",
    desc: "Radar de penetração no solo (GPR) combinado com sensores magnéticos identificam metais, ligas e anomalias de densidade em profundidade.",
    tone: "lime" as const,
  },
  {
    icon: Target,
    title: "Mapeamento Digital em Nuvem",
    desc: "Geração instantânea de mapas de calor 3D com coordenadas exatas das ameaças detetadas, acessíveis em plataforma cloud.",
    tone: "dark" as const,
  },
  {
    icon: Satellite,
    title: "Navegação de Precisão",
    desc: "GPS RTK garante varredura exata em solos irregulares e vegetação leve, com margem de erro inferior a 5 centímetros.",
    tone: "light" as const,
  },
];

const valueProps: {
  icon: typeof ShieldCheck;
  label: string;
  stat?: string;
  value?: number;
  prefix?: string;
  suffix?: string;
}[] = [
  { icon: ShieldCheck, stat: "Zero", label: "Risco Humano na Deteção" },
  { icon: Gauge, value: 10, suffix: "x", label: "Mais Rápido que o Método Manual" },
  { icon: Target, prefix: "< ", value: 5, suffix: "cm", label: "Precisão Geoespacial" },
  { icon: FileCheck, value: 100, suffix: "%", label: "Certificação Digital Auditável" },
];

const comparison = [
  {
    criterio: "Segurança do Sapador",
    manual: "Alto risco humano",
    drones: "Sem risco humano",
    nzila: "Risco humano zero",
  },
  {
    criterio: "Deteção Sub-superficial",
    manual: "Deteção profunda",
    drones: "Apenas superficial",
    nzila: "Penetração profunda (GPR)",
  },
  {
    criterio: "Rendimento Diário",
    manual: "Dezenas de m²/dia",
    drones: "Rápido (visão aérea)",
    nzila: "Hectares por dia",
  },
  {
    criterio: "Mapeamento Digital",
    manual: "Registos manuais",
    drones: "Relatório fotográfico",
    nzila: "Plataforma cloud & mapa 3D",
  },
];

const roadmap = [
  {
    period: "Q1 – Q2 2026",
    desc: "Testes de campo dos rovers em campos de ensaio nas províncias do Moxico e Cuando Cubango.",
  },
  {
    period: "Q3 2026",
    desc: "Acreditação técnica junto do INAD e parcerias operacionais com ONGs internacionais.",
  },
  {
    period: "Q4 2026",
    desc: "Primeiras operações comerciais de varredura e certificação para projetos agrícolas.",
  },
  {
    period: "2027+",
    desc: "Escala da frota robótica e expansão para redes de infraestruturas rodoviárias e ferroviárias.",
  },
];

const team = [
  {
    name: "Eliandra Neto",
    role: "Liderança estratégica, gestão de operações de impacto e articulação de parcerias institucionais.",
  },
  {
    name: "Liedson Habacuc",
    role: "Desenvolvimento de software de robótica, fusão de dados de sensores e arquitetura da plataforma SaaS.",
  },
  {
    name: "Alexandre Tambo",
    role: "Engenharia de hardware robótico, integração de radares GPR e eletrónica de varredura terrestre.",
  },
];

const toneClasses = {
  light: "bg-white text-emerald-950",
  lime: "bg-lime-300 text-emerald-950",
  dark: "bg-emerald-950 text-white",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-100 font-sans text-emerald-950">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] overflow-hidden bg-emerald-950">
          <Image
            src="/fundo.png"
            alt="Terreno mapeado em Angola"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/85 to-emerald-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />

          <div className="container relative mx-auto flex min-h-[90vh] items-center px-6 py-24 lg:px-12">
            <Reveal className="max-w-xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-lime-300 backdrop-blur">
                <ShieldCheck className="h-4 w-4" strokeWidth={2.5} />
                <Counter value={90} suffix="%" /> menos risco humano
              </p>
              <h1 className="mb-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Tecnologia que <span className="text-lime-400">liberta</span> o solo
                de Angola
              </h1>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-emerald-100/80 sm:text-lg">
                Robótica de deteção e mapeamento digital para a libertação segura e a
                reabilitação do solo — substituindo o contacto humano direto pela
                precisão dos sensores.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <PillButton href="#solucao" variant="light">
                  Conhecer a Solução
                </PillButton>
                <a
                  href="#contacto"
                  className="flex items-center gap-3 text-sm font-semibold text-white hover:text-lime-300"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-xs text-emerald-100/60">Fale connosco</span>
                    contacto@nzilaimona.ao
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
              <Reveal>
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  O Desafio em Angola
                </p>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
                  O gargalo do terreno contaminado
                </h2>
                <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
                  Extensas áreas agrícolas, de infraestrutura e habitação continuam
                  bloqueadas pela ameaça de minas terrestres e engenhos não deflagrados
                  (UXO). A desminagem manual tradicional é lenta, perigosa e sujeita a
                  elevado erro humano — travando o desenvolvimento económico do país.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Público-Alvo &amp; Parceiros Estratégicos
                </p>
                <ul className="space-y-3">
                  {[
                    "Agências Nacionais de Desminagem (CNAD / INAD)",
                    "ONGs Internacionais (HALO Trust, NPA, MAG)",
                    "Forças Armadas",
                    "Empresas Agrícolas e Construtoras de Infraestruturas",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-white p-4 text-sm font-medium text-zinc-700 shadow-sm"
                    >
                      <Building2 className="h-5 w-5 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section id="solucao" className="scroll-mt-20 py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <Reveal className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  <span className="text-lime-500">✳</span> Tecnologia Protegida
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
                  A Solução: Desminagem Autónoma
                </h2>
              </div>
              <p className="text-zinc-500 lg:text-right">
                Substituímos o contacto humano direto na fase crítica de deteção por
                rovers autónomos equipados com múltiplos sensores de subsolo.
              </p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map(({ icon: Icon, title, desc, tone }, i) => (
                <Reveal key={title} delay={i * 100} className="h-full">
                  <div
                    className={`h-full rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 ${toneClasses[tone]}`}
                  >
                    <div
                      className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full ${
                        tone === "dark" ? "bg-white/10" : "bg-emerald-950/10"
                      }`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="mb-3 text-lg font-bold">{title}</h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        tone === "dark" ? "text-emerald-100/70" : "text-zinc-600"
                      }`}
                    >
                      {desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
              <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Componentes &amp; Módulos Robóticos
              </p>
              <div className="flex flex-wrap gap-3">
                {["GPS", "L293D", "Landmine Detector", "NodeMCU ESP8266"].map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-stone-100 px-4 py-2 font-mono text-sm font-semibold text-emerald-900 transition-transform hover:-translate-y-0.5"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Who We Are */}
        <section id="quem-somos" className="scroll-mt-20 py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <Reveal className="relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:aspect-square">
                  <Image
                    src="/fundo2.jpeg"
                    alt="Equipa Nzila Imona em campo"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 rounded-2xl bg-lime-300 p-6 text-emerald-950 shadow-xl sm:right-6">
                  <p className="font-mono text-3xl font-bold tabular-nums leading-none">
                    <Counter value={50000} suffix="+" />
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-widest">
                    Hectares na Meta 2026–27
                  </p>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Quem Somos
                </p>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
                  Solução completa para a libertação do solo
                </h2>
                <p className="mb-8 text-base leading-relaxed text-zinc-600 sm:text-lg">
                  Ao combinar robótica avançada e radar de penetração, a Nzila Imona
                  reduz significativamente o custo e o tempo necessários para declarar
                  terras como seguras — acelerando o caminho de Angola para ficar livre
                  de minas.
                </p>
                <div className="flex flex-wrap items-center gap-8">
                  <PillButton href="#equipa">Conhecer a Equipa</PillButton>
                  <div className="flex items-center gap-3">
                    <Quote className="h-8 w-8 shrink-0 text-lime-500" strokeWidth={1.5} />
                    <div className="text-sm">
                      <p className="font-bold text-emerald-950">Eliandra Neto</p>
                      <p className="text-zinc-500">Liderança Estratégica</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <Reveal className="mb-16 max-w-2xl">
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Proposta de Valor Estratégica
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
                Impacto mensurável em cada operação
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {valueProps.map(({ icon: Icon, stat, value, prefix, suffix, label }, i) => (
                <Reveal key={label} delay={i * 100}>
                  <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950/5">
                      <Icon className="h-6 w-6 text-emerald-700" strokeWidth={1.75} />
                    </div>
                    <p className="mb-2 font-mono text-3xl font-bold tabular-nums text-emerald-950 sm:text-4xl">
                      {stat ?? <Counter value={value!} prefix={prefix} suffix={suffix} />}
                    </p>
                    <p className="text-sm text-zinc-500">{label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Comparative Analysis */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <Reveal className="mb-16 max-w-2xl">
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Análise Comparativa
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
                Como nos comparamos
              </h2>
            </Reveal>

            <Reveal delay={150} className="overflow-hidden overflow-x-auto rounded-3xl bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="bg-emerald-950 text-xs font-bold uppercase tracking-wider text-white">
                    <th className="p-5">Critério</th>
                    <th className="p-5">Desminagem Manual</th>
                    <th className="p-5">Drones Aéreos</th>
                    <th className="p-5 text-lime-300">Nzila Imona</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.criterio} className="border-b border-stone-100 last:border-0">
                      <td className="p-5 font-bold text-emerald-950">{row.criterio}</td>
                      <td className="p-5 text-zinc-500">{row.manual}</td>
                      <td className="p-5 text-zinc-500">{row.drones}</td>
                      <td className="p-5 font-semibold text-emerald-700">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 shrink-0" />
                          {row.nzila}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section>

        {/* Business Model */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <Reveal className="mb-16 max-w-2xl">
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Modelo de Negócio
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
                Sustentabilidade &amp; Escala
              </h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950/5">
                    <Handshake className="h-6 w-6 text-emerald-700" strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-emerald-950">
                    Varredura por Hectare (B2G / B2B)
                  </h3>
                  <p className="leading-relaxed text-zinc-600">
                    Contratos de prestação de serviços de pré-mapeamento e localização
                    de ameaças para ONGs de desminagem, Governo e concessionárias de
                    infraestruturas.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="h-full rounded-3xl bg-emerald-950 p-8 text-white transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <FileCheck className="h-6 w-6 text-lime-300" strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">
                    Licenciamento Hardware &amp; SaaS
                  </h3>
                  <p className="leading-relaxed text-emerald-100/70">
                    Aluguer/venda de unidades robóticas com subscrição recorrente da
                    plataforma de software para análise magnética e emissão de certidões
                    de solo limpo.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <Reveal className="mb-16 max-w-2xl">
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Roadmap de Implementação
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
                Próximos passos
              </h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {roadmap.map((r, i) => (
                <Reveal key={r.period} delay={i * 100}>
                  <div className="h-full rounded-3xl bg-white p-6 shadow-sm">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-lime-300">
                      <Calendar className="h-4 w-4 text-emerald-950" />
                    </div>
                    <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      {r.period}
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-600">{r.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="equipa" className="scroll-mt-20 py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <Reveal className="mb-16 max-w-2xl">
              <p className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                <Users className="h-4 w-4" />
                Equipa &amp; Liderança Técnica
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
                Quem torna isto possível
              </h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {team.map((member, i) => (
                <Reveal key={member.name} delay={i * 100}>
                  <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-lime-300 text-lg font-bold text-emerald-950">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-emerald-950">{member.name}</h3>
                    <p className="text-sm leading-relaxed text-zinc-600">{member.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section id="contacto" className="scroll-mt-20 py-24">
          <Reveal className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col items-center gap-8 rounded-3xl bg-emerald-950 px-8 py-16 text-center text-white">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                Acelere a desminagem em Angola connosco
              </h2>
              <p className="mx-auto max-w-xl text-emerald-100/70">
                Procuramos parceiros institucionais, ONGs e investidores para acelerar a
                tecnologia robótica e libertar solos agrícolas com segurança total.
              </p>
              <PillButton href="mailto:contacto@nzilaimona.ao" variant="light">
                contacto@nzilaimona.ao
              </PillButton>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-950 py-16 text-emerald-50/70">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src="/nzilaimona_logo.png"
                  alt="Nzila Imona Logo"
                  width={32}
                  height={32}
                  style={{ width: "auto" }}
                  className="h-8 brightness-0 invert"
                />
              </div>
              <p className="max-w-md text-sm leading-relaxed mb-8">
                Nzila Imona — Desminagem &amp; Tecnologia Geoespacial. Soluções
                robóticas para a libertação e reabilitação do solo em Angola.
              </p>
            </div>

            <div>
              <h5 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
                Navegação
              </h5>
              <ul className="space-y-4 text-sm">
                <li><a href="#solucao" className="hover:text-white transition-colors">A Solução</a></li>
                <li><a href="#quem-somos" className="hover:text-white transition-colors">Quem Somos</a></li>
                <li><a href="#equipa" className="hover:text-white transition-colors">Equipa</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h5 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
                Contacto
              </h5>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0" />
                  Luanda, Angola
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  contacto@nzilaimona.ao
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-emerald-900 pt-8 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 Nzila Imona. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
