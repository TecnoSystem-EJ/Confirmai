import Image from "next/image";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      <Image
        src="/fundo.png" // Certifique-se de que a imagem está em apps/web/public/fundo.png
        alt="Background"
        fill
        priority
        className="object-cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}