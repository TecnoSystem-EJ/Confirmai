"use client";

import { useState } from "react";
import Button from "./Button";

export default function FormPainel() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    tipoProcesso: "selecione",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    // Aqui conectará com a API do backend futuramente
    alert("Processo iniciado com sucesso!");
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white/10 p-8 backdrop-blur-xl border border-white/20 shadow-2xl">
      <h2 className="mb-6 text-2xl font-bold text-white text-center">
        Iniciar Processo
      </h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="nome" className="text-sm font-medium text-gray-200">
            Nome Completo
          </label>
          <input
            id="nome"
            type="text"
            required
            className="rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            placeholder="Digite seu nome"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-200">
            E-mail Corporativo
          </label>
          <input
            id="email"
            type="email"
            required
            className="rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="tipo" className="text-sm font-medium text-gray-200">
            Tipo de Processo
          </label>
          <select
            id="tipo"
            className="rounded-lg border border-white/20 bg-white/5 p-3 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all [&>option]:bg-gray-800"
            value={formData.tipoProcesso}
            onChange={(e) => setFormData({ ...formData, tipoProcesso: e.target.value })}
          >
            <option value="selecione" disabled>Selecione uma opção</option>
            <option value="ferias">Solicitação de Férias</option>
            <option value="reembolso">Reembolso de Despesas</option>
            <option value="contratacao">Nova Contratação</option>
          </select>
        </div>

        <div className="mt-4">
          <Button type="submit">
            Confirmar Envio
          </Button>
        </div>
      </form>
    </div>
  );
}