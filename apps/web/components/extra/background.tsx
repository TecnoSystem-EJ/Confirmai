import Image from "next/image";
import fundo from "../../public/fundo.png";

interface BackgroundProps {
  children: React.ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-t from-[#980C0C] to-[#F00000]">
      
      <Image
        src={fundo}
        alt=""
        fill
        className="object-cover opacity-20"
        priority
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}