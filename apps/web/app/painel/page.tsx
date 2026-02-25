import Background from "@/components/Background";
import FormPainel from "@/components/FormPainel";
import Header from "@/components/Header";

export default function PainelPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <Background />
      <Header />
      
      <div className="flex flex-1 items-center justify-center p-4">
        <FormPainel />
      </div>

      <footer className="py-6 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} Confirma.ai - Todos os direitos reservados.
      </footer>
    </main>
  );
}