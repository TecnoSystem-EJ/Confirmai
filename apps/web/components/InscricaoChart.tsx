"use client";

interface ChartData {
  mes: string;
  inscricoes: number;
}

interface InscricaoChartProps {
  data?: ChartData[];
  isLoading?: boolean;
}

export default function InscricaoChart({
  data = [],
  isLoading = false,
}: InscricaoChartProps) {
  const hasData = data.length > 0;

  const maxValue = hasData ? Math.max(...data.map((d) => d.inscricoes)) : 0;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <h3 className="mb-6 text-xl font-bold text-gray-800">
        Inscrições por Mês
      </h3>

      {isLoading && (
        <div className="flex h-64 items-center justify-center">
          <p className="text-gray-500">Carregando gráfico...</p>
        </div>
      )}

      
      {!isLoading && !hasData && (
        <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-500 text-center">
            Nenhum dado de inscrições disponível ainda.
          </p>
        </div>
      )}

      {!isLoading && hasData && (
        <div className="flex h-64 items-end justify-between gap-4">
          {data.map((item) => {
            const height =
              maxValue > 0 ? (item.inscricoes / maxValue) * 100 : 0;

            return (
              <div
                key={item.mes}
                className="flex flex-1 flex-col items-center gap-2"
              >
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-red-500 to-red-400 transition-all hover:from-red-600 hover:to-red-500"
                  style={{
                    height: `${height}%`,
                    minHeight: "20px",
                  }}
                />
                <span className="text-xs font-semibold text-gray-600">
                  {item.mes}
                </span>
                <span className="text-xs text-gray-500">{item.inscricoes}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
