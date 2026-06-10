"use client";

import { useState } from "react";

import Input from "./input";
import Button from "./button";

export default function FormPainel() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [curso, setCurso] = useState("");

  return (
    <div className="bg-white rounded-[40px] flex justify-center w-full max-w-lg p-8 md:p-12 shadow-xl">
      
      <form className="flex flex-col gap-4 w-full max-w-lg">

        <Input
          label="Nome completo"
          placeholder="Digite seu nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <Input
          label="Email"
          type="email"
          placeholder="digite.aqui@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Telefone"
          type="tel"
          placeholder="(75) 4589125013"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Input
          label="Curso/Formação"
          type="text"
          placeholder="Ex: Engenharia de Software"
          value={curso}
          onChange={(e) => setCurso(e.target.value)}
        />

        <div className="flex flex-col">
          <label className="block font-semibold mb-2 text-black">
            Disponibilidade de horário
          </label>

          <select
            className="
              w-full
              bg-gray-200
              rounded-xl
              px-4
              py-3
              outline-none
              text-black
              focus:ring-2
              focus:ring-red-500
            "
            id="meuSelect"
          >
            <option value="op0">Selecione o turno</option>
            <option value="op1">Matutino</option>
            <option value="op2">Vespertino</option>
          </select>
        </div>

        <div className="flex justify-center pt-2">
          <Button type="submit">
            Enviar inscrição
          </Button>
        </div>

      </form>
    </div>
  );
}