

"use client";

export default function AnimatedHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="absolute -right-32 top-10 h-[520px] w-[520px] rounded-full bg-red-600/30 blur-[90px] animate-pulse" />

      <div className="absolute right-10 top-24 h-[360px] w-[360px] rounded-full border border-red-500/30 shadow-[0_0_120px_rgba(255,0,0,0.5)] animate-[spin_18s_linear_infinite]" />

      <div className="absolute right-24 top-32 h-[280px] w-[280px] rounded-full border-[24px] border-red-500/20 blur-sm animate-[spin_12s_linear_infinite_reverse]" />

      <div className="absolute left-0 top-0 h-full w-full opacity-20 [background-image:linear-gradient(rgba(255,0,0,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,.25)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="absolute left-[-20%] top-[25%] h-[2px] w-[140%] rotate-[-12deg] bg-gradient-to-r from-transparent via-red-500/70 to-transparent animate-[pulse_3s_ease-in-out_infinite]" />

      <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-red-400 shadow-[0_0_20px_red] animate-ping" />
      <div className="absolute left-[35%] top-[12%] h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_20px_red] animate-pulse" />
      <div className="absolute left-[70%] top-[65%] h-2 w-2 rounded-full bg-red-400 shadow-[0_0_20px_red] animate-ping" />
    </div>
  );
}
