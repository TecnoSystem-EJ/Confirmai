import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between px-8 py-6">
      <div className="flex items-center gap-4">
        <Image
          src="/ts.png" // Certifique-se de que a imagem está em apps/web/public/ts.png
          alt="Logo TecnoSystem"
          width={150}
          height={50}
          className="h-12 w-auto object-contain"
        />
      </div>
      
      <nav className="hidden gap-6 md:flex">
        <Link href="/" className="text-white hover:text-gray-200 transition-colors">
          Início
        </Link>
        <Link href="/painel" className="font-bold text-white hover:text-gray-200 transition-colors">
          Painel
        </Link>
      </nav>
    </header>
  );
}