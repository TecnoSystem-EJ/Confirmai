import Background from "@/components/Background";
import Header from "@/components/Header";
import EventoForm from "@/components/EventoForm";

export default function CriarEventoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <Background />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-700/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,0,0,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,0,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-24">
        <div className="w-full max-w-5xl">
          {/* Title */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400 backdrop-blur-sm">
              Painel de Criação
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight">
              Criar{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                Evento
              </span>
            </h1>

            <p className="mt-4 text-lg text-gray-400">
              Configure todas as informações do seu evento.
            </p>
          </div>

          {/* Form Container */}
          <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-red-500/5 backdrop-blur-xl shadow-[0_0_60px_rgba(255,0,0,0.12)]">
            {/* brilho interno */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 p-8 md:p-12">
              <EventoForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-red-500/10 py-6 text-center text-xs text-white/40 backdrop-blur-sm">
        &copy; {new Date().getFullYear()} Confirma.ai — Todos os direitos
        reservados.
      </footer>
    </main>
  );
}
