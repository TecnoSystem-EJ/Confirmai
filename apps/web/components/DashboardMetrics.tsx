"use client";

interface MetricCard {
  label: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down";
}

interface DashboardMetricsProps {
  metrics?: MetricCard[];
  isLoading?: boolean;
}

export default function DashboardMetrics({
  metrics = [],
  isLoading = false,
}: DashboardMetricsProps) {
  const hasData = metrics.length > 0;

  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {isLoading &&
        Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-6 shadow-lg animate-pulse"
          >
            <div className="h-4 w-24 bg-gray-200 rounded mb-4" />
            <div className="h-8 w-16 bg-gray-300 rounded" />
          </div>
        ))}

      {!isLoading &&
        !hasData &&
        [
          "Total de Inscritos",
          "Formulários Ativos",
          "Taxa de Conclusão",
          "Processos Pendentes",
        ].map((label) => (
          <div key={label} className="rounded-2xl bg-white p-6 shadow-lg">
            <p className="text-sm font-medium text-gray-600 mb-2">{label}</p>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold text-gray-800">—</p>
            </div>
          </div>
        ))}

      {!isLoading &&
        hasData &&
        metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <p className="text-sm font-medium text-gray-600 mb-2">
              {metric.label}
            </p>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold text-gray-800">{metric.value}</p>
              {metric.change && (
                <span
                  className={`text-sm font-semibold ${
                    metric.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {metric.trend === "up" ? "↑" : "↓"} {metric.change}
                </span>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
