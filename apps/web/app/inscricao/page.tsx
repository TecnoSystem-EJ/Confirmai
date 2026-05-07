import FormPainel from "@/components/extra/formPainel";
import Background from "@/components/Background";
import Header from "@/components/extra/header";

export default function PainelProcesso() {
  return (
    <div>
  <Background/>
      <Header subtitle="Portal de Inscrições" />

      <h1 className="text-white text-2xl flex flex-col items-center pt-5">
        Processo Seletivo de Analistas
      </h1>

      <div className="min-h-screen flex items-center justify-center px-4">
        <FormPainel />
      </div>
    </div>
   
  );
}