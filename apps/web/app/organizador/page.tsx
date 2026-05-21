// apps/web/app/organizador/page.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Calendar,
  Users,
  BarChart3,
  CreditCard,
  Plus,
  Settings,
  LogOut,
  TrendingUp,
  Bell,
  Search,
  Filter,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react";

export default function DashboardOrganizador() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Dados virão do backend
  const eventos: any[] = [];

  const metricas = {
    totalEventos: 0,
    totalParticipantes: 0,
    totalReceita: 0,
    taxaConversao: 0,
  };

  return (
    <div className="w-full bg-black text-white min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-black border-r border-red-500/20 transition-all duration-300 flex flex-col`}
      >
        <div className="p-6 border-b border-red-500/20">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-600 to-red-800 shadow-lg shadow-red-500/50" />

            {sidebarOpen && (
              <span className="text-xl font-bold bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
                Confirma.ai
              </span>
            )}
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <NavItem
            icon={<BarChart3 className="h-5 w-5" />}
            label="Dashboard"
            active
            sidebarOpen={sidebarOpen}
          />

          <NavItem
            icon={<Calendar className="h-5 w-5" />}
            label="Meus Eventos"
            sidebarOpen={sidebarOpen}
          />

          <NavItem
            icon={<Users className="h-5 w-5" />}
            label="Participantes"
            sidebarOpen={sidebarOpen}
          />

          <NavItem
            icon={<CreditCard className="h-5 w-5" />}
            label="Pagamentos"
            sidebarOpen={sidebarOpen}
          />

          <NavItem
            icon={<Settings className="h-5 w-5" />}
            label="Configurações"
            sidebarOpen={sidebarOpen}
          />
        </nav>

        <div className="p-4 border-t border-red-500/20">
          <Link href="/">
            <Button
              variant="outline"
              className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10 justify-start gap-2"
            >
              <LogOut className="h-4 w-4" />
              {sidebarOpen && "Sair"}
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-red-500/20 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-red-500/10 rounded-lg transition"
              >
                <Filter className="h-5 w-5 text-red-400" />
              </button>

              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />

                <input
                  type="text"
                  placeholder="Buscar eventos..."
                  className="w-full pl-10 pr-4 py-2 bg-red-500/5 border border-red-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-400"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-red-500/10 rounded-lg transition relative">
                <Bell className="h-5 w-5 text-red-400" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
              </button>

              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-lg shadow-red-500/50 flex items-center justify-center">
                <span className="text-sm font-bold">OG</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Welcome */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Bem-vindo, Organizador!</h1>

            <p className="text-gray-300">
              Gerencie seus eventos e acompanhe o desempenho em tempo real.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Total de Eventos"
              value={metricas.totalEventos}
              icon={<Calendar className="h-6 w-6" />}
              trend="Aguardando dados"
              positive
            />

            <MetricCard
              title="Total de Participantes"
              value={metricas.totalParticipantes}
              icon={<Users className="h-6 w-6" />}
              trend="Aguardando dados"
              positive
            />

            <MetricCard
              title="Receita Total"
              value={`R$ ${metricas.totalReceita}`}
              icon={<CreditCard className="h-6 w-6" />}
              trend="Aguardando dados"
              positive
            />

            <MetricCard
              title="Taxa de Conversão"
              value={`${metricas.taxaConversao}%`}
              icon={<TrendingUp className="h-6 w-6" />}
              trend="Aguardando dados"
              positive
            />
          </div>

          {/* Create Event */}
          <div className="flex gap-4">
            <Link href="/evento">
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg shadow-red-500/50">
                <Plus className="h-5 w-5 mr-2" />
                Criar Novo Evento
              </Button>
            </Link>
          </div>

          {/* Events */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Meus Eventos</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {eventos.length === 0 ? (
                <Card className="border-red-500/20 bg-red-500/5 backdrop-blur-sm lg:col-span-2">
                  <CardContent className="py-20 text-center">
                    <Calendar className="h-12 w-12 text-red-400 mx-auto mb-4" />

                    <h3 className="text-xl font-semibold text-white mb-2">
                      Nenhum evento cadastrado
                    </h3>

                    <p className="text-gray-400 mb-6">
                      Crie seu primeiro evento para começar.
                    </p>

                    <Link href="/evento">
                      <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg shadow-red-500/50">
                        <Plus className="h-5 w-5 mr-2" />
                        Criar Evento
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                eventos.map((evento) => (
                  <EventCard key={evento.id} evento={evento} />
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false, sidebarOpen }: any) {
  return (
    <Link
      href="#"
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
        active
          ? "bg-red-500/20 border border-red-500/40 text-red-400"
          : "text-gray-300 hover:bg-red-500/10 hover:border-red-500/20"
      }`}
    >
      {icon}

      {sidebarOpen && <span className="text-sm font-medium">{label}</span>}
    </Link>
  );
}

function MetricCard({ title, value, icon, trend, positive }: any) {
  return (
    <Card className="border-red-500/20 bg-red-500/5 backdrop-blur-sm hover:border-red-500/40 transition">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-gray-300">
            {title}
          </CardTitle>

          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-600/20 to-red-800/20 flex items-center justify-center text-red-400">
            {icon}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-2">
          <p className="text-2xl font-bold text-white">{value}</p>

          <div className="flex items-center gap-1 text-sm">
            {positive ? (
              <ArrowUpRight className="h-4 w-4 text-green-400" />
            ) : (
              <ArrowDownLeft className="h-4 w-4 text-red-400" />
            )}

            <span className={positive ? "text-green-400" : "text-red-400"}>
              {trend}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function EventCard({ evento }: any) {
  return (
    <Card className="border-red-500/20 bg-red-500/5 backdrop-blur-sm">
      <CardContent className="p-6">
        <p className="text-white">{evento.titulo}</p>
      </CardContent>
    </Card>
  );
}
