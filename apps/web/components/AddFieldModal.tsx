"use client";

import { useState } from "react";

interface AddFieldModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (field: { name: string; type: string; required: boolean }) => void;
}

export default function AddFieldModal({
  isOpen,
  onClose,
  onAdd,
}: AddFieldModalProps) {
  const [fieldName, setFieldName] = useState("");
  const [fieldType, setFieldType] = useState("Texto");
  const [isRequired, setIsRequired] = useState(false);

  if (!isOpen) return null;

  const fieldTypes = [
    "Texto",
    "E-mail",
    "Telefone",
    "Data",
    "Seleção",
    "Texto Longo",
  ];

  const handleAdd = () => {
    if (!fieldName) return alert("Por favor, digite o nome do campo.");
    onAdd({ name: fieldName, type: fieldType, required: isRequired });
    setFieldName("");
    setFieldType("Texto");
    setIsRequired(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-[40px] bg-white p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
        <h2 className="mb-8 text-xl font-bold text-red-600 flex items-center gap-2">
          <span className="text-2xl">+</span> Adicionar Novo Campo
        </h2>

        <div className="space-y-6">
          {/* Nome do Campo */}
          <div className="flex flex-col items-center gap-2">
            <label className="text-sm font-bold text-gray-800">
              Nome do Campo
            </label>
            <input
              type="text"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
              className="w-full rounded-2xl border-2 border-red-500 px-4 py-3 text-center text-gray-800 outline-none"
              placeholder="Digite o nome do campo"
            />
          </div>

         
          <div className="flex flex-col items-center gap-4">
            <label className="text-sm font-bold text-gray-800">
              Tipo do Campo
            </label>
            <div className="grid grid-cols-2 gap-3 w-full">
              {fieldTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setFieldType(type)}
                  className={`rounded-2xl border-2 py-4 text-sm font-semibold transition-all ${
                    fieldType === type
                      ? "border-red-500 bg-red-50 text-red-600"
                      : "border-red-200 text-gray-600 hover:border-red-300"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

         
          <label className="flex items-center gap-3 cursor-pointer group">
            <div
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                isRequired
                  ? "bg-red-500 border-red-500"
                  : "border-gray-300 group-hover:border-red-400"
              }`}
            >
              {isRequired && <span className="text-white text-xs">✓</span>}
            </div>
            <input
              type="checkbox"
              className="hidden"
              checked={isRequired}
              onChange={(e) => setIsRequired(e.target.checked)}
            />
            <span className="text-sm font-medium text-gray-600">
              Campo obrigatório
            </span>
          </label>

        
          <div className="flex gap-4 pt-4">
            <button
              onClick={handleAdd}
              className="flex-1 rounded-2xl border-2 border-red-500 py-3 font-bold text-red-600 hover:bg-red-50 transition-colors"
            >
              Adicionar Campo
            </button>
            <button
              onClick={onClose}
              className="flex-1 rounded-2xl bg-gradient-to-r from-red-700 to-red-900 py-3 font-bold text-white hover:opacity-90 transition-opacity"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
