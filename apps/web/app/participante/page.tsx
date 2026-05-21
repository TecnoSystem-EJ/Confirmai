"use client";

import React, { useState } from "react";
import Link from "next/link";
import Background from "@/components/Background";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  Users,
  Search,
  Heart,
  ChevronRight,
  User,
  Bell,
  Grid,
  List,
} from "lucide-react";

export default function PortalParticipante() {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const eventos: any[] = [];

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <Background />
      <Header />

      <section className="relative z-10 px-8 py-10">
        <div className="mb-10">
          <h1 className="text-5xl font-black">Eventos</h1>
          <p className="mt-2 text-white/70">
            Encontre eventos disponíveis para inscrição
          </p>
        </div>

        <div className="mb-8 flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Buscar eventos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-12 py-4 text-white placeholder-white/40 outline-none backdrop-blur-md focus:border-red-400"
            />
          </div>

          <button
            onClick={() => setViewMode("grid")}
            className={`rounded-xl border border-white/20 p-4 ${
              viewMode === "grid" ? "bg-red-600" : "bg-white/10"
            }`}
          >
            <Grid className="h-5 w-5" />
          </button>

          <button
            onClick={() => setViewMode("list")}
            className={`rounded-xl border border-white/20 p-4 ${
              viewMode === "list" ? "bg-red-600" : "bg-white/10"
            }`}
          >
            <List className="h-5 w-5" />
          </button>
        </div>

        <Card className="border-white/20 bg-white/10 backdrop-blur-md">
          <CardContent className="min-h-[380px] p-8">
            {eventos.length === 0 ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/30 text-center">
                <Calendar className="mb-4 h-14 w-14 text-red-400" />

                <h2 className="text-2xl font-bold text-white">
                  Nenhum evento disponível
                </h2>

                <p className="mt-2 text-white/60">
                  Os eventos aparecerão aqui quando forem carregados pelo
                  backend.
                </p>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 gap-6 md:grid-cols-2"
                    : "space-y-4"
                }
              >
                {eventos.map((evento) => (
                  <EventoCard key={evento.id} evento={evento} />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

function EventoCard({ evento }: any) {
  return (
    <Card className="border-white/20 bg-white/10 backdrop-blur-md transition hover:border-red-400/60">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">{evento.titulo}</h3>
            <p className="text-sm text-white/60">{evento.organizador}</p>
          </div>

          <Heart className="h-5 w-5 text-red-400" />
        </div>

        <p className="text-sm text-white/70">{evento.descricao}</p>

        <div className="space-y-2 text-sm text-white/70">
          <p className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-red-400" />
            {evento.data}
          </p>

          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-red-400" />
            {evento.local}
          </p>

          <p className="flex items-center gap-2">
            <Users className="h-4 w-4 text-red-400" />
            {evento.participantes} participantes
          </p>
        </div>

        <Link href={`/eventos/${evento.id}`}>
          <Button className="w-full bg-red-600 text-white hover:bg-red-700">
            Ver Evento
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
