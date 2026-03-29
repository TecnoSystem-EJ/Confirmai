"use client";

import { useState } from "react";
import AddFieldModal from "./AddFieldModal";

interface FormField {
  id: string;
  name: string;
  type: string;
  required: boolean;
}

export default function EventoForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    local: "",
    limiteInscricoes: "0",
    dataInicio: "",
    dataEncerramento: "",
  });


  const [fields, setFields] = useState<FormField[]>([
    { id: "1", name: "Nome Completo", type: "Texto", required: true },
    { id: "2", name: "E-mail", type: "E-mail", required: true },
    { id: "3", name: "Telefone", type: "Telefone", required: false },
    { id: "4", name: "Curso/Formação", type: "Texto", required: true },
    {
      id: "5",
      name: "Disponibilidade de Horário",
      type: "Seleção",
      required: false,
    },
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddField = (newField: {
    name: string;
    type: string;
    required: boolean;
  }) => {
    const field: FormField = {
      id: Date.now().toString(),
      ...newField,
    };
    setFields((prev) => [...prev, field]);
  };

  const removeField = (id: string) => {
    setFields((prev) => prev.filter((f) => f.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do Evento:", { ...formData, fields });
    alert("Evento criado com sucesso!");
  };

  return (
    <div className="mx-auto w-full max-w-3xl rounded-[40px] bg-white/20 backdrop-blur-md border-4 border-white/30 p-8 shadow-2xl hover:bg-white/25 transition-colors">
      <h2 className="mb-8 text-center text-2xl font-bold text-white">
        Criar Novo Evento
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-white/90">
              Título do Evento/Processo
            </label>
            <input
              name="titulo"
              type="text"
              required
              className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-red-500 transition-all"
              value={formData.titulo}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-white/90">
              Descrição (opcional)
            </label>
            <textarea
              name="descricao"
              className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-red-500 transition-all"
              rows={2}
              value={formData.descricao}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-white/90">
              Local do Evento
            </label>
            <input
              name="local"
              type="text"
              placeholder="Ex: Auditório ou Link Online"
              className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-red-500 transition-all"
              value={formData.local}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-center text-xl font-bold text-white">
            Campos do Formulário
          </h3>

          <div className="space-y-3">
            {fields.map((field) => (
              <div key={field.id}>
                <label className="text-sm font-bold text-white/90 mb-1 block">
                  {field.name}
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex-1 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 text-white/70 text-sm flex justify-between items-center">
                    <span>{field.type}</span>
                    {field.required && (
                      <span className="text-[10px] font-bold uppercase text-white/60">
                        Obrigatório
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeField(field.id)}
                    className="text-red-400 hover:text-red-300 font-bold px-2 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="text-sm font-bold text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
          >
            + Adicionar Novo Campo
          </button>
        </div>

        <hr className="border-white/20" />

        {/* Prazos e Limites */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-1">
            <label className="text-center text-[10px] font-bold text-white/90 uppercase">
              Limite de Inscrições
            </label>
            <input
              name="limiteInscricoes"
              type="number"
              className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-center text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-red-500 transition-all"
              value={formData.limiteInscricoes}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-center text-[10px] font-bold text-white/90 uppercase">
              Data de Início
            </label>
            <input
              name="dataInicio"
              type="date"
              className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-center text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-red-500 transition-all text-xs"
              value={formData.dataInicio}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-center text-[10px] font-bold text-white/90 uppercase">
              Data de Encerramento
            </label>
            <input
              name="dataEncerramento"
              type="date"
              className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-center text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-red-500 transition-all text-xs"
              value={formData.dataEncerramento}
              onChange={handleInputChange}
            />
          </div>
        </div>

    
        <div className="flex gap-4 pt-4">
          <button
            type="button"
            className="flex-1 rounded-2xl bg-gradient-to-r from-red-700 to-red-900 py-3 font-bold text-white hover:opacity-90 transition-opacity"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="flex-1 rounded-2xl bg-gradient-to-r from-red-700 to-red-900 py-3 font-bold text-white hover:opacity-90 transition-opacity"
          >
            Salvar e Gerar link
          </button>
        </div>
      </form>

      <AddFieldModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddField}
      />
    </div>
  );
}
