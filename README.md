.
# Confirma.ai

Plataforma completa para gerenciamento de eventos e processos seletivos em nuvem.

## Sobre

Confirma.ai é uma solução SaaS que permite criar, organizar e gerenciar eventos e processos seletivos de forma simples e eficiente. Ideal para empresas, instituições educacionais e organizadores que buscam automatizar seu fluxo de trabalho.

## Tecnologias

O projeto é construído sobre uma stack robusta e escalável:

* **Gerenciador de Pacotes & Monorepo:** [PNPM](https://pnpm.io/) + [Turborepo](https://turbo.build/)
* **Backend (`apps/api`):** Node.js, Express, TypeScript, Prisma ORM, MySQL.
* **Frontend (`apps/web`):** Next.js 15+, Tailwind CSS, Shadcn/UI.
* **Infraestrutura:** Docker & Docker Compose.

## Funcionalidades

- 📅 Criação e gerenciamento de eventos
- 👥 Gestão de participantes e inscrições
- 📋 Processos seletivos automatizados
- 📊 Relatórios e análises em tempo real
- 🎟️ Geração de ingressos digitais
- 📧 Notificações automáticas
- 💳 Integração de pagamentos

## Estrutura do Projeto

```text
.
├── apps/
│   ├── api/          # Backend (Express + Prisma)
│   └── web/          # Frontend (Next.js + React)
├── packages/         # Configurações compartilhadas (ESLint, TSConfig) - Opcional
├── docker-compose.yml # Banco de dados MySQL
├── pnpm-workspace.yaml # Configuração do Workspace
└── turbo.json        # Pipeline de build do Turborepo
## Começando

### Pré-requisitos

- Node.js 20+
- npm ou yarn
- Docker & Docker Compose
- PNPM

### Instalação

```bash
git clone https://github.com/seu-usuario/confirma-ai.git
cd confirma-ai
pnpm install
```

### Configurar Variáveis de Ambiente
Backend: crie .env 
```bash
DATABASE_URL="mysql://root:root@localhost:3306/confirmai_db"
PORT=3333
JWT_SECRET="seu_segredo_super_seguro"
```
Frontend: crie .env.local
```bash
NEXT_PUBLIC_API_URL=http://localhost:3333
```
### Uso

```bash
docker-compose up -d
pnpm --filter api exec prisma migrate dev
pnpm dev
```

## Roadmap
[x] Multi-tenancy: Suporte a múltiplas organizações/empresas.

[x] Gestão de Eventos: CRUD básico de eventos.

[x] Inscrições: Registro de participantes.

[ ] Front-end: Dashboard do Produtor (Em desenvolvimento).

[ ] Pagamentos: Integração com Gateway (Mercado Pago/Stripe).

[ ] Check-in: Leitura de QR Code na portaria.

[ ] Lotes: Gestão de virada de lotes automática.

## Documentação

[Link para documentação completa](./docs)