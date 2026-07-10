<div align="center">

# 🏗️ Sistema de Gestión de Ingreso

### Aplicación web para gestión de proyectos de construcción

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ecf8e?logo=supabase)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-000?logo=vercel)](https://vercel.com/)

**🚀 [Deploy en Vercel](https://gestion-ingreso-brown.vercel.app/login)**

</div>

---

## 👥 Integrantes

| Integrante                | Rol                          | GitHub                                         |
| ------------------------- | ---------------------------- | ---------------------------------------------- |
| **Joaquin Felipez Rojas** | 🔧 Backend & Infraestructura | [@Joaquinfr87](https://github.com/Joaquinfr87) |
| **Nicolas Reguerin**      | 🎨 Frontend & UI/UX          | -                                              |
| **David Cruz**            | ⚡ Fullstack & Coordinador   | -                                              |

---

## 📋 Descripción del Sistema

Sistema web diseñado para gestionar proyectos de una constructora, permitiendo realizar operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) sobre los proyectos registrados.

### ✨ Funcionalidades

| Función                   | Descripción                                                        |
| ------------------------- | ------------------------------------------------------------------ |
| 🔐 **Autenticación**      | Registro y login de usuarios con Supabase Auth                     |
| 📝 **Crear Proyectos**    | Registrar nuevos proyectos con nombre, descripción, fecha y estado |
| 📖 **Listar Proyectos**   | Visualizar todos los proyectos en una tabla                        |
| ✏️ **Editar Proyectos**   | Modificar datos de un proyecto existente                           |
| 🗑️ **Eliminar Proyectos** | Borrar proyectos del sistema                                       |
| 🔒 **RLS**                | Cada usuario solo ve sus propios proyectos                         |

### 📊 Estados de Proyecto

| Estado           | Descripción                      |
| ---------------- | -------------------------------- |
| 🟡 `Pendiente`   | Proyecto registrado, no iniciado |
| 🔵 `En Progreso` | Proyecto en ejecución            |
| 🟢 `Completado`  | Proyecto finalizado              |
| 🔴 `Cancelado`   | Proyecto cancelado               |

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

| Política                        | Acción                             |
| ------------------------------- | ---------------------------------- |
| `Users can view own projects`   | Cada usuario solo ve sus proyectos |
| `Users can insert own projects` | Solo puede crear proyectos propios |
| `Users can update own projects` | Solo puede editar sus proyectos    |
| `Users can delete own projects` | Solo puede eliminar sus proyectos  |

---

## 🌐 API Endpoints

### 🔐 Autenticación

| Método | Ruta               | Descripción            |
| ------ | ------------------ | ---------------------- |
| `POST` | `/api/auth/signup` | Crear nueva cuenta     |
| `POST` | `/api/auth/login`  | Iniciar sesión         |
| `POST` | `/api/auth/logout` | Cerrar sesión          |
| `GET`  | `/api/auth/me`     | Obtener usuario actual |

### 📋 Proyectos

| Método   | Ruta                 | Descripción                |
| -------- | -------------------- | -------------------------- |
| `GET`    | `/api/proyectos`     | Listar todos los proyectos |
| `POST`   | `/api/proyectos`     | Crear un proyecto          |
| `PUT`    | `/api/proyectos/:id` | Actualizar un proyecto     |
| `DELETE` | `/api/proyectos/:id` | Eliminar un proyecto       |

---

## 📖 Explicación del Código

### 📋 1. Validación de datos con Zod (`lib/schemas/proyecto.ts`)

Define las reglas de validación para los proyectos. Si los datos no son correctos, la API rechaza la petición.

```typescript
import { z } from "zod";

// Schema que define la estructura y validación de un proyecto
export const proyectoSchema = z.object({
  nombre: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(200, "El nombre no puede exceder 200 caracteres"),
  descripcion: z.string().optional().default(""),
  fecha_inicio: z.string().min(1, "La fecha de inicio es obligatoria"),
  estado: z.enum(["Pendiente", "En Progreso", "Completado", "Cancelado"]),
});

// Tipo TypeScript generado automáticamente desde el schema
export type ProyectoInput = z.infer<typeof proyectoSchema>;
```

> **💡 Por qué:** Zod valida los datos antes de guardarlos en la base de datos, evitando errores y datos inconsistentes.

---

### 🔐 2. Cliente de Supabase para Servidor (`lib/supabase/server.ts`)

Crea un cliente de Supabase que maneja las cookies de autenticación en el servidor.

```typescript
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll(); // Lee las cookies del usuario
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(
            ({ name, value, options }) => cookieStore.set(name, value, options), // Guarda las cookies
          );
        },
      },
    },
  );
}
```

> **💡 Por qué:** Supabase usa cookies para mantener la sesión del usuario. Este cliente las maneja automáticamente en el servidor.

---

### 🌐 3. API Routes - CRUD de Proyectos (`app/api/proyectos/route.ts`)

Endpoints para crear y listar proyectos. Cada petición verifica que el usuario esté autenticado.

```typescript
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { proyectoSchema } from "@/lib/schemas/proyecto";

// GET /api/proyectos - Listar todos los proyectos del usuario
export async function GET() {
  const supabase = await createClient();

  // 1. Verificar que el usuario esté autenticado
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  // 2. Consultar proyectos del usuario (filtrado por user_id)
  const { data, error } = await supabase
    .from("proyectos")
    .select("*")
    .eq("user_id", user.id) // Solo proyectos del usuario actual
    .order("created_at", { ascending: false }); // Más recientes primero

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

// POST /api/proyectos - Crear un nuevo proyecto
export async function POST(request: Request) {
  const supabase = await createClient();

  // 1. Verificar autenticación
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  // 2. Validar datos con Zod
  const body = await request.json();
  const parsed = proyectoSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  // 3. Insertar en la base de datos
  const { data, error } = await supabase
    .from("proyectos")
    .insert({ ...parsed.data, user_id: user.id }) // Agregar user_id automáticamente
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data, { status: 201 });
}
```

> **💡 Por qué:** Las API routes protegen la base de datos. El cliente nunca accede directamente a Supabase, todo pasa por estos endpoints seguros.

---

### 🔒 4. Middleware de Autenticación (`middleware.ts`)

Protege todas las rutas. Si el usuario no está logueado, lo redirige al login.

```typescript
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  // Crear cliente de Supabase con cookies
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // Verificar si el usuario está autenticado
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Rutas de autenticación (login/register)
  const isAuthRoute =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register";

  // Si NO está logueado y NO está en login → redirigir a /login
  if (!user && !isAuthRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Si SÍ está logueado y ESTÁ en login → redirigir a /
  if (user && isAuthRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

// Excluir archivos estáticos del middleware
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
```

> **💡 Por qué:** El middleware se ejecuta antes de cada petición, garantizando que solo los usuarios autenticados accedan al sistema.

---

### 🔄 5. Context de Autenticación (`contexts/auth-context.tsx`)

Gestiona el estado de autenticación global de la aplicación.

```typescript
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

// Definir el contexto
interface AuthContextType {
  user: User | null;        // Usuario actual (null si no hay sesión)
  loading: boolean;          // Si está cargando la sesión
  signUp: (email: string, password: string) => Promise<{ error?: string }>;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider que envuelve toda la aplicación
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  // Verificar sesión al cargar
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    // Escuchar cambios de autenticación (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase]);

  // Funciones de autenticación
  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) return { error: error.message };
    return {};
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message };
    return {};
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para usar el contexto en cualquier componente
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
```

> **💡 Por qué:** Permite que cualquier componente acceda al usuario actual y a las funciones de login/logout sin pasar props manualmente.

---

### 🧩 6. Componente de Formulario (`components/proyecto-form.tsx`)

Formulario reutilizable para crear y editar proyectos con validación en tiempo real.

```typescript
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { proyectoSchema, type ProyectoInput } from "@/lib/schemas/proyecto";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProyectoFormProps {
  initialData?: ProyectoInput;
  onSubmit: (data: ProyectoInput) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

export function ProyectoForm({
  initialData,
  onSubmit,
  onCancel,
  isLoading,
}: ProyectoFormProps) {
  // Configurar formulario con validación Zod
  const form = useForm<ProyectoInput>({
    resolver: zodResolver(proyectoSchema),
    defaultValues: initialData || {
      nombre: "",
      descripcion: "",
      fecha_inicio: "",
      estado: "Pendiente",
    },
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      {/* Campo Nombre */}
      <div className="space-y-2">
        <Label htmlFor="nombre">Nombre *</Label>
        <Input
          id="nombre"
          {...form.register("nombre")}
          placeholder="Nombre del proyecto"
        />
        {form.formState.errors.nombre && (
          <p className="text-sm text-red-500">
            {form.formState.errors.nombre.message}
          </p>
        )}
      </div>

      {/* Campo Descripción */}
      <div className="space-y-2">
        <Label htmlFor="descripcion">Descripción</Label>
        <Textarea
          id="descripcion"
          {...form.register("descripcion")}
          placeholder="Descripción del proyecto"
        />
      </div>

      {/* Campo Fecha y Estado en fila */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fecha_inicio">Fecha de Inicio *</Label>
          <Input
            id="fecha_inicio"
            type="date"
            {...form.register("fecha_inicio")}
          />
        </div>

        <div className="space-y-2">
          <Label>Estado *</Label>
          <Select
            value={form.watch("estado")}
            onValueChange={(value) => form.setValue("estado", value as any)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pendiente">Pendiente</SelectItem>
              <SelectItem value="En Progreso">En Progreso</SelectItem>
              <SelectItem value="Completado">Completado</SelectItem>
              <SelectItem value="Cancelado">Cancelado</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Guardando..." : "Guardar"}
        </Button>
      </div>
    </form>
  );
}
```

> **💡 Por qué:** React Hook Form + Zod validan en tiempo real mientras el usuario escribe, mejorando la experiencia.

---

## 🔄 Flujo de la Aplicación

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│   Usuario   │────▶│   Browser    │────▶│  Middleware   │
│  (Navegador)│     │  (Request)   │     │  (Verificar) │
└─────────────┘     └──────────────┘     └──────┬───────┘
                                                │
                              ┌─────────────────┼─────────────────┐
                              │                 │                 │
                              ▼                 ▼                 ▼
                     ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
                     │   /login     │  │      /       │  │  /api/*      │
                     │  (Sin auth)  │  │  (Con auth)  │  │  (API)       │
                     └──────────────┘  └──────────────┘  └──────┬───────┘
                                                                │
                                                                ▼
                                                       ┌──────────────┐
                                                       │   Supabase   │
                                                       │  (Database)  │
                                                       └──────────────┘
```

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

| Entorno       | URL                                                               |
| ------------- | ----------------------------------------------------------------- |
| 🔧 Desarrollo | `http://localhost:3000`                                           |
| 🚀 Producción | [gestion-ingreso-brown.vercel.app](https://gestion-ingreso-brown.vercel.app/login) |

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

| Documento                                      | Descripción                       |
| ---------------------------------------------- | --------------------------------- |
| 📋 [TAREAS.md](docs/TAREAS.md)                 | Distribución de tareas del equipo |
| 📖 [Manual de Usuario](docs/manual-usuario.md) | Guía de uso del sistema           |
| 🗄️ [Schema SQL](docs/schema.sql)               | Esquema de base de datos          |

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

**Hecho por el equipo**

🏗️ Joaquin Felipez Rojas • 🎨 Nicolas Reguerin • ⚡ David Cruz

</div>
