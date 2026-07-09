import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-zinc-900">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop"
            alt="Angola landscape"
            fill
            sizes="100vw"
            className="object-cover brightness-50"
            preload
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-2xl bg-emerald-900/90 p-6 sm:p-8 lg:p-12 text-white">
                <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold leading-tight lg:text-5xl">
                  Limpando caminhos, protegendo vidas e restaurando o futuro.
                </h1>
                <p className="mb-6 sm:mb-8 text-base sm:text-lg text-emerald-50/90 lg:text-xl leading-relaxed">
                  Trabalhamos incansavelmente para remover perigos ocultos e devolver a segurança às comunidades afetadas por conflitos.
                </p>
                <button className="w-full sm:w-auto bg-emerald-500 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-emerald-400 transition-all">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-emerald-900 py-20 text-center text-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-light italic leading-relaxed">
              "Nossa missão é proteger vidas e restaurar os meios de subsistência daqueles afetados por conflitos, criando um mundo onde as pessoas possam caminhar sem medo."
            </h2>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 bg-zinc-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-emerald-900">O Que Fazemos</h2>
              <div className="mt-4 h-1 w-24 bg-emerald-500"></div>
            </div>
            
            <div className="grid gap-12 md:grid-cols-3">
              {[
                {
                  title: "Remoção de Explosivos",
                  desc: "Limpamos minas terrestres e outros explosivos para tornar a terra segura, permitindo que as comunidades regressem a casa.",
                  img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop"
                },
                {
                  title: "Segurança de Armas",
                  desc: "Recolhemos e destruímos armas e munições deixadas para trás após conflitos que poderiam cair em mãos erradas.",
                  img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop"
                },
                {
                  title: "Educação de Risco",
                  desc: "Oferecemos educação sobre riscos em zonas de conflito, ensinando as comunidades a reconhecer perigos e a manterem-se seguras.",
                  img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop"
                }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative mb-6 h-64 w-full overflow-hidden bg-zinc-200">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="relative min-h-[60vh] py-20 w-full flex items-center">
          <Image
            src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop"
            alt="Angola landscape"
            fill
            sizes="100vw"
            className="object-cover brightness-50"
          />
          <div className="relative z-10 w-full text-center">
            <div className="container mx-auto px-6">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">Trabalhamos em todo o país</h2>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-emerald-50/90 lg:text-xl">
                A Nzila Imona está presente em diversas províncias, transformando áreas de risco em campos de esperança.
              </p>
              <button className="mt-10 border-2 border-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-emerald-900 transition-all w-full sm:w-auto">
                Ver Onde Atuamos
              </button>
            </div>
          </div>
        </section>

        {/* How To Help */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-emerald-900">Como Ajudar</h2>
              <div className="mt-4 h-1 w-24 bg-emerald-500"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                { title: "Parceria Corporativa", icon: "🤝" },
                { title: "Seja um Voluntário", icon: "🙋" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center border border-emerald-100 bg-white p-8 sm:p-12 text-center transition-shadow hover:shadow-xl">
                  <div className="mb-6 text-5xl">{item.icon}</div>
                  <h3 className="mb-4 text-xl font-bold text-emerald-900">{item.title}</h3>
                  <p className="mb-8 text-zinc-600">Sua ajuda é fundamental para que possamos continuar nosso trabalho vital.</p>
                  <a href="#" className="text-sm font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-800">
                    Saiba Mais →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="bg-zinc-50 py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-end justify-between mb-16">
              <div>
                <h2 className="text-4xl font-bold text-emerald-900">Últimas Notícias</h2>
                <div className="mt-4 h-1 w-24 bg-emerald-500"></div>
              </div>
              <a href="#" className="hidden md:block font-bold text-emerald-600 hover:underline uppercase tracking-wider text-sm">
                Ver todas as notícias
              </a>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { 
                  id: 1, 
                  provincia: "Luanda", 
                  titulo: "Angola acelera meta para ser livre de minas até 2027", 
                  desc: "Governo anuncia investimento de $240 milhões para reforçar operações de desminagem em todo o território nacional.",
                  img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop",
                  data: "09 Julho 2026"
                },
                { 
                  id: 2, 
                  provincia: "Cuando Cubango", 
                  titulo: "Desminagem avança na bacia do Okavango para proteger biodiversidade", 
                  desc: "Projeto de $60 milhões garante segurança em áreas de conservação, promovendo o turismo sustentável na região.",
                  img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop",
                  data: "08 Julho 2026"
                },
                { 
                  id: 3, 
                  provincia: "Lunda Sul", 
                  titulo: "Inovação tecnológica: o uso de ratos farejadores e drones", 
                  desc: "Operadores internacionais implementam novas metodologias para acelerar a identificação de campos minados.",
                  img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop",
                  data: "05 Julho 2026"
                },
                { 
                  id: 4, 
                  provincia: "Benguela", 
                  titulo: "Contaminação por minas cai para nível histórico em 9 províncias", 
                  desc: "Relatório de 2024 aponta progresso significativo, com área contaminada reduzida para menos de 60 km².",
                  img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop",
                  data: "01 Julho 2026"
                }
              ].map((item) => (
                <div key={item.id} className="flex flex-col bg-white overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.titulo}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-600">{item.provincia}</p>
                    <h4 className="mb-4 font-bold text-emerald-900 line-clamp-2 group-hover:text-emerald-700">
                      {item.titulo}
                    </h4>
                    <p className="mb-4 text-sm text-zinc-600 line-clamp-3">
                      {item.desc}
                    </p>
                    <p className="text-xs text-zinc-400">{item.data}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="max-w-md text-sm leading-relaxed mb-8">
                Nzila Imona é uma organização dedicada à segurança humana e desenvolvimento comunitário. 
                Removendo os perigos do passado para construir os caminhos do futuro.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholders */}
                <div className="h-8 w-8 rounded-full bg-emerald-900 hover:bg-emerald-700 transition-colors cursor-pointer flex items-center justify-center">f</div>
                <div className="h-8 w-8 rounded-full bg-emerald-900 hover:bg-emerald-700 transition-colors cursor-pointer flex items-center justify-center">t</div>
                <div className="h-8 w-8 rounded-full bg-emerald-900 hover:bg-emerald-700 transition-colors cursor-pointer flex items-center justify-center">i</div>
              </div>
            </div>
            
            <div>
              <h5 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Navegação</h5>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nosso Trabalho</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Onde Atuamos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transparência</a></li>
              </ul>
            </div>

            <div>
              <h5 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Contato</h5>
              <ul className="space-y-4 text-sm">
                <li>Luanda, Angola</li>
                <li>+244 9XX XXX XXX</li>
                <li>contato@nzilaimona.org</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 border-t border-emerald-900 pt-8 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 Nzila Imona. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacidade</a>
              <a href="#" className="hover:text-white">Termos de Uso</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
