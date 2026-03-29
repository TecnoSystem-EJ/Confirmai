export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Fundo preto base */}
      <div className="absolute inset-0 bg-black" />

      {/* Efeito de pontos vermelhos em toda a página */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradiente que concentra a cor em baixo */}
          <linearGradient id="bottomGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0" />
            <stop offset="60%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#ff3333" stopOpacity="0.6" />
          </linearGradient>

          {/* Padrão de pontos com intensidade reduzida */}
          <pattern
            id="dotPattern"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="25" cy="25" r="2.5" fill="#ff3333" opacity="0.5" />
            <circle cx="25" cy="25" r="1.5" fill="#ff6666" opacity="0.3" />
          </pattern>
        </defs>

        {/* Padrão de pontos em toda a página */}
        <rect width="1200" height="800" fill="url(#dotPattern)" />

        {/* Gradiente que aumenta a intensidade em baixo */}
        <rect width="1200" height="800" fill="url(#bottomGradient)" />

        {/* Camada adicional de pontos maiores na parte inferior */}
        <g opacity="0.4">
          <circle cx="100" cy="650" r="3" fill="#ff4444" />
          <circle cx="250" cy="700" r="2.5" fill="#ff5555" />
          <circle cx="400" cy="720" r="3" fill="#ff3333" />
          <circle cx="550" cy="680" r="2.5" fill="#ff6666" />
          <circle cx="700" cy="710" r="3" fill="#ff4444" />
          <circle cx="850" cy="690" r="2.5" fill="#ff5555" />
          <circle cx="1000" cy="730" r="3" fill="#ff3333" />
          <circle cx="150" cy="750" r="2.5" fill="#ff6666" />
          <circle cx="350" cy="760" r="3" fill="#ff4444" />
          <circle cx="600" cy="770" r="2.5" fill="#ff5555" />
          <circle cx="850" cy="755" r="3" fill="#ff3333" />
          <circle cx="1050" cy="765" r="2.5" fill="#ff6666" />
        </g>
      </svg>

      {/* Overlay suave para melhor legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
    </div>
  );
}
