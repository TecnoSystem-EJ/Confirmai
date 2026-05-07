import Background from "@/components/Background";
import Header from "@/components/extra/header";
import LoginAdm from "@/components/extra/loginAdmin";

export default function PainelAdm() {
  return (
      <div>
        <Background/>
      <Header subtitle="Acesso ao Painel Administrativo" />

      <div className="pt-9 flex items-center justify-center px-4">
        <LoginAdm />
      </div>
      </div>
    
    
  );
}