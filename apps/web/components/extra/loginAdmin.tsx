"use client";

import { useState } from "react";
import Button from "./button";

export default function LoginAdm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/usuarios/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, senha, tenantId: null }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setErro(data.message || "Usuário ou senha inválidos.");
        return;
      }

      if (lembrar) {
        localStorage.setItem("token", data.token);
      } else {
        sessionStorage.setItem("token", data.token);
      }

      // Redirecionar após login bem-sucedido
      window.location.href = "/dashboard";
    } catch (error) {
      setErro("Erro ao conectar com o servidor. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-xl w-full max-w-md text-black placeholder:text-gray-500">
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o seu e-mail"
            className="bg-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 text-black placeholder:text-gray-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm">Senha</label>
          <input
            type="password"
            value={senha}
            placeholder="Digite a sua senha"
            onChange={(e) => setSenha(e.target.value)}
            className="bg-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 text-black placeholder:text-gray-500"
          />
        </div>

        {/* Mensagem de erro */}
        {erro && (
          <p className="text-red-600 text-sm font-medium -mt-2">{erro}</p>
        )}

        <div className="flex items-center justify-between text-sm mt-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={lembrar}
              onChange={(e) => setLembrar(e.target.checked)}
              className="accent-red-600 w-4 h-4"
            />
            Lembrar de mim
          </label>

          <a href="#" className="text-red-600 font-semibold hover:underline">
            Esqueci minha senha
          </a>
        </div>

        <div className="flex justify-center mt-4">
          <Button type="submit" disabled={carregando}>
            {carregando ? "Entrando..." : "Entrar no Sistema"}
          </Button>
        </div>
      </form>

      <div className="border-t mt-6 pt-4 text-center text-sm">
        <p>
          Problemas para acessar? Entre em contato com o{" "}
          <a href="#" className="text-red-600 font-semibold hover:underline">
            suporte técnico
          </a>
        </p>
      </div>
    </div>
  );
}
