import Background from "@/components/Background";
import Header from "@/components/Header";
import EventoForm from "@/components/EventoForm";

export default function CriarEventoPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <Background />
      <Header />

      <div className="flex flex-1 items-center justify-center p-4 py-12">
        <EventoForm />
      </div>

      <footer className="py-6 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} Confirma.ai - Todos os direitos
        reservados.
      </footer>
    </main>
  );
}
