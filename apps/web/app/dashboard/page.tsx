import Background from "@/components/Background";
import Header from "@/components/Header";

export default function DashboardPage() {
  const hasData = false;

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <Background />
      <Header />

      <div className="flex flex-1 flex-col gap-8 px-4 py-8 md:px-8">
        <div>
          <h1 className="text-4xl font-bold text-white">Dashboard</h1>
          <p className="mt-2 text-white/70">
            Acompanhe o desempenho dos seus formulários e inscrições
          </p>
        </div>

        {hasData ? (
          <></>
        ) : (
          <>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <p className="mb-2 text-sm font-medium text-gray-600">
                  Total de Inscritos
                </p>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold text-gray-800">—</p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <p className="mb-2 text-sm font-medium text-gray-600">
                  Formulários Ativos
                </p>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold text-gray-800">—</p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <p className="mb-2 text-sm font-medium text-gray-600">
                  Taxa de Conclusão
                </p>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold text-gray-800">—</p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <p className="mb-2 text-sm font-medium text-gray-600">
                  Processos Pendentes
                </p>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold text-gray-800">—</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-lg lg:col-span-2">
                <h3 className="mb-6 text-xl font-bold text-gray-800">
                  Inscrições por Mês
                </h3>

                <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-gray-300">
                  <p className="text-center text-gray-500">
                    Nenhum dado de inscrições disponível ainda.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Ações Rápidas
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="/painel"
                    className="block rounded-lg bg-red-600 px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-red-700"
                  >
                    + Novo Formulário
                  </a>
                  <button className="rounded-lg border-2 border-gray-300 px-4 py-3 font-semibold text-gray-800 transition-colors hover:bg-gray-100">
                    Exportar Dados
                  </button>
                  <button className="rounded-lg border-2 border-gray-300 px-4 py-3 font-semibold text-gray-800 transition-colors hover:bg-gray-100">
                    Relatórios
                  </button>
                  <button className="rounded-lg border-2 border-gray-300 px-4 py-3 font-semibold text-gray-800 transition-colors hover:bg-gray-100">
                    Configurações
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Formulários Recentes
              </h3>

              <div className="flex min-h-[220px] items-center justify-center rounded-xl border border-dashed border-gray-300">
                <p className="text-center text-gray-500">
                  Nenhum formulário cadastrado até o momento.
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <footer className="py-6 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} Confirma.ai - Todos os direitos
        reservados.
      </footer>
    </main>
  );
}
