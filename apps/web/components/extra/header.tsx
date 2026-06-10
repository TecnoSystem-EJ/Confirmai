import Image from "next/image";
import ts from "../../public/ts.png";

interface HeaderProps {
  subtitle?: string;
}

export default function Header({ subtitle }: HeaderProps) {
  return (
    <div className="flex flex-col items-center">
      
      <Image
        src={ts}
        alt="Logo Tecnosystem"
        className="w-30 pt-2"
        priority
      />

      <h1 className="text-white font-[Jaro] text-2xl">
        TECNOSYSTEM
      </h1>

      {subtitle && (
        <h2 className="text-white">
          {subtitle}
        </h2>
      )}
    </div>
  );
}