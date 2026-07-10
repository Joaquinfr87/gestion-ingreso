<div align="center">

# 🏗️ Sistema de Gestión de Ingreso

### Aplicación web para gestión de proyectos de construcción

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ecf8e?logo=supabase)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-000?logo=vercel)](https://vercel.com/)

**🚀 [Deploy en Vercel](https://gestion-ingreso.vercel.app/)**

</div>

---

## 👥 Integrantes

| Integrante | Rol | GitHub |
|------------|-----|--------|
| **Joaquin Felipez Rojas** | 🔧 Backend & Infraestructura | [@Joaquinfr87](https://github.com/Joaquinfr87) |
| **Nicolas Reguerin** | 🎨 Frontend & UI/UX | - |
| **David Cruz** | ⚡ Fullstack & Coordinador | - |

---

## 📋 Descripción del Sistema

Sistema web diseñado para gestionar proyectos de una constructora, permitiendo realizar operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) sobre los proyectos registrados.

### ✨ Funcionalidades

| Función | Descripción |
|---------|-------------|
| 🔐 **Autenticación** | Registro y login de usuarios con Supabase Auth |
| 📝 **Crear Proyectos** | Registrar nuevos proyectos con nombre, descripción, fecha y estado |
| 📖 **Listar Proyectos** | Visualizar todos los proyectos en una tabla |
| ✏️ **Editar Proyectos** | Modificar datos de un proyecto existente |
| 🗑️ **Eliminar Proyectos** | Borrar proyectos del sistema |
| 🔒 **RLS** | Cada usuario solo ve sus propios proyectos |

### 📊 Estados de Proyecto

| Estado | Descripción |
|--------|-------------|
| 🟡 `Pendiente` | Proyecto registrado, no iniciado |
| 🔵 `En Progreso` | Proyecto en ejecución |
| 🟢 `Completado` | Proyecto finalizado |
| 🔴 `Cancelado` | Proyecto cancelado |

---

## 🛠️ Stack Tecnológico

```
┌─────────────────────────────────────────────────────┐
│                    FRONTEND                          │
├─────────────────────────────────────────────────────┤
│  ⚛️  Next.js 16       → Framework React              │
│  🎨 Tailwind CSS 4   → Estilos                      │
│  🧩 shadcn/ui        → Componentes de UI            │
│  📝 React Hook Form  → Manejo de formularios        │
│  ✅ Zod              → Validación de datos          │
│  🎯 Lucide React     → Iconos                       │
│  🔔 Sonner           → Notificaciones toast         │
├─────────────────────────────────────────────────────┤
│                    BACKEND                           │
├─────────────────────────────────────────────────────┤
│  🗄️  Supabase         → Base de datos PostgreSQL    │
│  🔐 Supabase Auth    → Autenticación                │
│  🔒 Row Level Security → Seguridad a nivel de fila  │
│  🌐 API Routes       → Endpoints REST               │
├─────────────────────────────────────────────────────┤
│                    DEPLOY                            │
├─────────────────────────────────────────────────────┤
│  🚀 Vercel            → Hosting y deploy            │
│  🔄 GitHub            → Control de versiones        │
└─────────────────────────────────────────────────────┘
```

---

## 📁 Estructura del Proyecto

```
gestion-ingreso/
│
├── 📂 app/                        # Rutas de Next.js (App Router)
│   ├── 📂 api/
│   │   ├── 📂 auth/               # 🔐 Endpoints de autenticación
│   │   │   ├── login/route.ts     → POST iniciar sesión
│   │   │   ├── signup/route.ts    → POST crear cuenta
│   │   │   ├── logout/route.ts    → POST cerrar sesión
│   │   │   └── me/route.ts        → GET usuario actual
│   │   └── 📂 proyectos/          # 📋 Endpoints CRUD
│   │       ├── route.ts           → GET (listar) y POST (crear)
│   │       └── [id]/route.ts      → PUT (editar) y DELETE (eliminar)
│   │
│   ├── 📂 login/                  # 🖥️ Página de login
│   ├── 📂 register/               # 🖥️ Página de registro
│   ├── layout.tsx                 → Layout principal con AuthProvider
│   ├── page.tsx                   → Página principal (protegida)
│   └── globals.css                → Estilos globales
│
├── 📂 components/                 # 🧩 Componentes reutilizables
│   ├── 📂 ui/                     → Componentes shadcn/ui
│   ├── proyecto-form.tsx          → Formulario de proyecto
│   ├── proyecto-table.tsx         → Tabla de proyectos
│   ├── proyecto-dialog.tsx        → Modal crear/editar
│   └── proyecto-delete-dialog.tsx → Modal confirmar eliminación
│
├── 📂 contexts/                   # 🔄 Estados globales
│   └── auth-context.tsx           → Context de autenticación
│
├── 📂 lib/                        # 📚 Utilidades
│   ├── 📂 schemas/
│   │   └── proyecto.ts            → Validación con Zod
│   ├── 📂 supabase/
│   │   ├── client.ts              → Cliente para navegador
│   │   └── server.ts              → Cliente para servidor
│   ├── 📂 types/
│   │   └── proyecto.ts            → Tipos TypeScript
│   └── utils.ts                   → Utilidades de shadcn
│
├── 📂 docs/                       # 📄 Documentación
│   ├── schema.sql                 → Esquema de base de datos
│   ├── TAREAS.md                  → Distribución de tareas
│   └── manual-usuario.md          → Manual de usuario
│
├── middleware.ts                   → 🔒 Protección de rutas
├── .env.local                     → 🔑 Variables de entorno
└── package.json                   → 📦 Dependencias
```

---

## 🗄️ Base de Datos

### Esquema de la tabla `proyectos`

```sql
CREATE TABLE proyectos (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES auth.users(id),
  nombre      VARCHAR(200) NOT NULL,
  descripcion TEXT DEFAULT '',
  fecha_inicio DATE NOT NULL,
  estado      VARCHAR(20) DEFAULT 'Pendiente',
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);
```

### 🔒 Seguridad (RLS)

| Política | Acción |
|----------|--------|
| `Users can view own projects` | Cada usuario solo ve sus proyectos |
| `Users can insert own projects` | Solo puede crear proyectos propios |
| `Users can update own projects` | Solo puede editar sus proyectos |
| `Users can delete own projects` | Solo puede eliminar sus proyectos |

---

## 🌐 API Endpoints

### 🔐 Autenticación

| Método | Ruta | Descripción |
|--------|------|-------------|
| `POST` | `/api/auth/signup` | Crear nueva cuenta |
| `POST` | `/api/auth/login` | Iniciar sesión |
| `POST` | `/api/auth/logout` | Cerrar sesión |
| `GET` | `/api/auth/me` | Obtener usuario actual |

### 📋 Proyectos

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/proyectos` | Listar todos los proyectos |
| `POST` | `/api/proyectos` | Crear un proyecto |
| `PUT` | `/api/proyectos/:id` | Actualizar un proyecto |
| `DELETE` | `/api/proyectos/:id` | Eliminar un proyecto |

---

## 🚀 Instalación y Ejecución

### Requisitos previos

- 📦 [Node.js](https://nodejs.org/) 18+
- 📦 [pnpm](https://pnpm.io/) (recomendado)
- 🔑 Cuenta en [Supabase](https://supabase.com)

### Pasos

```bash
# 1️⃣ Clonar el repositorio
git clone https://github.com/Joaquinfr87/gestion-ingreso.git
cd gestion-ingreso

# 2️⃣ Instalar dependencias
pnpm install

# 3️⃣ Configurar variables de entorno
cp .env.local.example .env.local
# Editar .env.local con tus credenciales de Supabase

# 4️⃣ Ejecutar en desarrollo
pnpm dev
```

### 🌐 URLs de prueba

| Entorno | URL |
|---------|-----|
| 🔧 Desarrollo | `http://localhost:3000` |
| 🚀 Producción | [gestion-ingreso.vercel.app](https://gestion-ingreso.vercel.app/) |

---

## 📸 Capturas de Pantalla

### 🔐 Login
![Login](docs/screenshots/login.png)

### 📋 Dashboard
![Dashboard](docs/screenshots/dashboard.png)

### ✏️ Formulario
![Formulario](docs/screenshots/formulario.png)

---

## 📄 Documentación adicional

| Documento | Descripción |
|-----------|-------------|
| 📋 [TAREAS.md](docs/TAREAS.md) | Distribución de tareas del equipo |
| 📖 [Manual de Usuario](docs/manual-usuario.md) | Guía de uso del sistema |
| 🗄️ [Schema SQL](docs/schema.sql) | Esquema de base de datos |

---

## 🔧 Comandos útiles

```bash
pnpm dev          # 🚀 Iniciar servidor de desarrollo
pnpm build        # 📦 Build de producción
pnpm start        # ▶️ Iniciar servidor de producción
pnpm lint         # 🔍 Linting del código
```

---

## 📝 Licencia

Proyecto académico - Universidad

<div align="center">

**Hecho con ❤️ por el equipo**

🏗️ Joaquin Felipez Rojas • 🎨 Nicolas Reguerin • ⚡ David Cruz

</div>
