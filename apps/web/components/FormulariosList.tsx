"use client";

interface Formulario {
  id: string;
  titulo: string;
  inscricoes: number;
  dataInicio: string;
  dataEncerramento: string;
  status: "ativo" | "encerrado" | "pausado";
}

interface FormulariosListProps {
  formularios?: Formulario[];
  isLoading?: boolean;
}

export default function FormulariosList({
  formularios = [],
  isLoading = false,
}: FormulariosListProps) {
  const hasData = formularios.length > 0;

  const getStatusColor = (status: Formulario["status"]) => {
    switch (status) {
      case "ativo":
        return "bg-green-100 text-green-800";
      case "encerrado":
        return "bg-gray-100 text-gray-800";
      case "pausado":
        return "bg-yellow-100 text-yellow-800";
    }
  };

  const getStatusLabel = (status: Formulario["status"]) => {
    switch (status) {
      case "ativo":
        return "Ativo";
      case "encerrado":
        return "Encerrado";
      case "pausado":
        return "Pausado";
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg overflow-x-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Formulários Recentes
      </h3>

      {isLoading && (
        <div className="flex min-h-[200px] items-center justify-center">
          <p className="text-gray-500">Carregando formulários...</p>
        </div>
      )}

      {!isLoading && !hasData && (
        <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-500 text-center">
            Nenhum formulário cadastrado até o momento.
          </p>
        </div>
      )}

      {!isLoading && hasData && (
        <table className="w-full text-sm text-gray-700">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-800">
                Título
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-800">
                Inscrições
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-800">
                Início
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-800">
                Encerramento
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-800">
                Status
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-800">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {formularios.map((formulario) => (
              <tr
                key={formulario.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-4 font-medium text-gray-800">
                  {formulario.titulo}
                </td>
                <td className="py-4 px-4 text-gray-600">
                  {formulario.inscricoes}
                </td>
                <td className="py-4 px-4 text-gray-600">
                  {formulario.dataInicio}
                </td>
                <td className="py-4 px-4 text-gray-600">
                  {formulario.dataEncerramento}
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      formulario.status,
                    )}`}
                  >
                    {getStatusLabel(formulario.status)}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 font-semibold text-xs">
                      Editar
                    </button>
                    <button className="text-red-600 hover:text-red-800 font-semibold text-xs">
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
