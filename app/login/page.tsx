"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    localStorage.setItem("loggedIn", "true");
    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-zinc-900">

      <main className="flex flex-1 items-center justify-center p-6 bg-zinc-50">
        <div className="w-full max-w-md bg-white p-8 shadow-sm border border-zinc-100">
          <div className="mb-8 text-center">
            <div className="flex justify-center">
              <Image
                  src="/nzilaimona_logo.png"
                  alt="Nzila Imona Logo"
                  width={72}
                  height={32}
                  className=""
              />
            </div>
            <p className="text-sm text-zinc-500 mt-2">Acesse sua conta para gerenciar as atividades de desminagem.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-emerald-900 mb-2">
                E-mail/USERNAME
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-zinc-200 p-3 text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                placeholder="seu@email.com/username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-widest text-emerald-900 mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-zinc-200 p-3 text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-700 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-emerald-800 transition-all shadow-sm"
            >
              Entrar
            </button>
        <div className="flex flex-col items-center text-sm text-zinc-500 mt-2">
        <span>ou continue com</span>
        
        <div className="flex items-center gap-3 mt-4">
          <button className="rounded-xl shadow-sm hover:bg-zinc-50 transition p-2">
            <Image
              src="/google.png"
              alt="Google"
              width={32}
              height={32}
            />
          </button>
        
          <button className="rounded-xl shadow-sm hover:bg-zinc-50 transition p-2">
            <Image
              src="/github.png"
              alt="GitHub"
              width={32}
              height={32}
            />
          </button>
        </div>
        </div>
          </form>

          <div className="mt-8 text-center border-t border-zinc-100 pt-6">
            <p className="text-sm text-zinc-500">
              Não tem uma conta?{" "}
              <a href="#" className="font-bold text-emerald-700 hover:text-emerald-600 transition-colors">
                Solicitar Acesso
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* <footer className="border-t border-zinc-100 bg-white py-8">
        <div className=" mx-auto px-1 text-center text-sm text-zinc-500">
          © 2026 Nzila Imona. Todos os direitos reservados.
        </div>
      </footer> */}
    </div>
  );
}
