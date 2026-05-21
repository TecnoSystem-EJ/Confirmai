"use client";

import React from "react";
import Link from "next/link";

import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";

import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Calendar,
  Users,
  ArrowRight,
  Zap,
  BarChart3,
  CreditCard,
  QrCode,
  Search,
  Bell,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-red-500/20 bg-black/60 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-red-500 blur-lg opacity-70" />

              <div className="relative h-10 w-10 rounded-lg bg-gradient-to-br from-red-500 to-red-800 shadow-[0_0_25px_rgba(255,0,0,0.6)]" />
            </div>

            <span className="bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-2xl font-black tracking-tight text-transparent">
              Confirma.ai
            </span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#para-empresas"
              className="text-sm font-medium text-gray-300 transition hover:text-red-400"
            >
              Para Empresas
            </Link>

            <Link
              href="#para-participantes"
              className="text-sm font-medium text-gray-300 transition hover:text-red-400"
            >
              Para Participantes
            </Link>

            <Link
              href="/login"
              className="text-sm font-medium text-gray-300 transition hover:text-red-400"
            >
              Login
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-red-500/40 bg-black/40 text-red-400 backdrop-blur-md hover:border-red-400 hover:bg-red-500/10"
            >
              <Link href="/login">Login</Link>
            </Button>

            <Button
              size="sm"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_0_25px_rgba(255,0,0,0.5)] hover:from-red-500 hover:to-red-600"
            >
              <Link href="/organizador">Começar</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative w-full overflow-hidden py-24 md:py-40">
        <AnimatedHeroBackground />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />

        <div className="container relative z-10 mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-16 px-4 md:px-6 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 backdrop-blur-md">
              <Zap className="h-4 w-4 text-red-400" />

              <span className="text-sm font-medium text-red-400">
                Plataforma Inteligente de Eventos
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-6xl lg:text-8xl">
                Simplifique a Gestão de{" "}
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-700 bg-clip-text text-transparent">
                  Eventos
                </span>
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
                A plataforma completa para organizadores criarem experiências
                incríveis e participantes encontrarem os melhores eventos.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-red-600 to-red-700 px-8 py-6 text-lg text-white shadow-[0_0_40px_rgba(255,0,0,0.5)] hover:from-red-500 hover:to-red-600"
              >
                <Link href="/organizador" className="flex items-center gap-2">
                  Sou Organizador
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group border-red-500/40 bg-black/40 px-8 py-6 text-lg text-red-400 backdrop-blur-md hover:border-red-400 hover:bg-red-500/10"
              >
                <Link href="/participante" className="flex items-center gap-2">
                  Sou Participante
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <h3 className="text-4xl font-black text-red-400">
                  Organização Inteligente
                </h3>

                <p className="text-sm text-gray-400">
                  Gestão moderna de eventos
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-red-400">
                  Check-in Ágil
                </h3>

                <p className="text-sm text-gray-400">
                  Controle rápido de participantes
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-red-400">
                  Experiência Premium
                </h3>

                <p className="text-sm text-gray-400">
                  Plataforma focada em performance
                </p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-[40px] bg-red-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-red-500/20 bg-black/40 p-10 backdrop-blur-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent" />

              <div className="relative z-10 space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <GlassCard
                    icon={<Calendar className="h-7 w-7" />}
                    title="Eventos"
                    desc="Gerencie facilmente"
                  />

                  <GlassCard
                    icon={<Users className="h-7 w-7" />}
                    title="Participantes"
                    desc="Controle total"
                  />

                  <GlassCard
                    icon={<QrCode className="h-7 w-7" />}
                    title="Check-in"
                    desc="QR Code rápido"
                  />

                  <GlassCard
                    icon={<BarChart3 className="h-7 w-7" />}
                    title="Analytics"
                    desc="Métricas em tempo real"
                  />
                </div>

                <div className="rounded-2xl border border-red-500/20 bg-white/[0.03] p-6 backdrop-blur-md">
                  <div className="space-y-5">
                    <div className="flex items-center gap-4 rounded-xl border border-red-500/10 bg-black/30 p-4">
                      <CheckCircle2 className="h-8 w-8 text-green-400" />

                      <div>
                        <h4 className="font-semibold text-white">
                          Gestão completa
                        </h4>

                        <p className="text-sm text-gray-400">
                          Controle eventos, inscrições e participantes em um só
                          lugar.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl border border-red-500/10 bg-black/30 p-4">
                      <Zap className="h-8 w-8 text-red-400" />

                      <div>
                        <h4 className="font-semibold text-white">
                          Performance moderna
                        </h4>

                        <p className="text-sm text-gray-400">
                          Interface rápida, fluida e pensada para grandes
                          eventos.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl border border-red-500/10 bg-black/30 p-4">
                      <Search className="h-8 w-8 text-blue-400" />

                      <div>
                        <h4 className="font-semibold text-white">
                          Experiência intuitiva
                        </h4>

                        <p className="text-sm text-gray-400">
                          Participantes encontram e acessam eventos facilmente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32">
        <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-black">
              Recursos{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                Poderosos
              </span>
            </h2>

            <p className="mt-4 text-lg text-gray-400">
              Tudo que você precisa para criar experiências incríveis.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Calendar className="h-8 w-8" />}
              title="Gestão de Eventos"
              desc="Crie e organize eventos completos."
            />

            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Participantes"
              desc="Gerencie inscrições facilmente."
            />

            <FeatureCard
              icon={<CreditCard className="h-8 w-8" />}
              title="Pagamentos"
              desc="Integração financeira moderna."
            />

            <FeatureCard
              icon={<Bell className="h-8 w-8" />}
              title="Notificações"
              desc="Envios automáticos inteligentes."
            />
          </div>
        </div>
      </section>

      <section className="relative py-32">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black">
              Perguntas{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="1"
              className="rounded-2xl border border-red-500/20 bg-white/[0.03] px-6 backdrop-blur-xl"
            >
              <AccordionTrigger className="text-white hover:no-underline">
                Como criar um evento?
              </AccordionTrigger>

              <AccordionContent className="text-gray-400">
                Basta acessar a área do organizador e clicar em criar evento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="2"
              className="rounded-2xl border border-red-500/20 bg-white/[0.03] px-6 backdrop-blur-xl"
            >
              <AccordionTrigger className="text-white hover:no-underline">
                Como os participantes acessam?
              </AccordionTrigger>

              <AccordionContent className="text-gray-400">
                Os participantes podem visualizar e se inscrever diretamente
                pela plataforma.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-red-500/20 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:border-red-500/40">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-800 text-white shadow-[0_0_30px_rgba(255,0,0,0.4)]">
          {icon}
        </div>

        <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>

        <p className="leading-relaxed text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

function GlassCard({ icon, title, desc }: any) {
  return (
    <div className="rounded-2xl border border-red-500/20 bg-white/[0.04] p-6 backdrop-blur-md">
      <div className="mb-4 text-red-400">{icon}</div>

      <h4 className="font-semibold text-white">{title}</h4>

      <p className="mt-1 text-sm text-gray-400">{desc}</p>
    </div>
  );
}
