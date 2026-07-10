# Sistema de Gestión de Ingreso - Dashboard Profesional 🚀

Sistema integral de gestión de proyectos para constructoras. Permite realizar operaciones CRUD completas y gestionar el ciclo de vida de los proyectos desde un panel de administración robusto, construido con tecnologías modernas para la mejor experiencia de usuario y desarrollador.

---

## 🛠️ Stack Tecnológico

El proyecto está desarrollado utilizando un stack moderno, escalable y con tipado estricto:

### Frontend
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Lenguaje:** TypeScript 5
- **Estilos:** Tailwind CSS v4 + Tailwind Merge + clsx
- **Componentes de UI:** [Shadcn UI](https://ui.shadcn.com/) / Radix UI / Lucide React
- **Manejo de Formularios:** React Hook Form + Zod (para validación estricta de esquemas)
- **Notificaciones:** Sonner (Toast notifications)
- **Animaciones:** `tw-animate-css`

### Backend y Base de Datos
- **BaaS:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Autenticación y Cliente:** `@supabase/ssr` / `@supabase/supabase-js`
- **API:** Next.js API Routes (Rutas manejadas por App Router `/app/api/...`)

---

## 📂 Estructura del Proyecto

Seguimos los estándares del **App Router** de Next.js:

```text
gestion-ingreso/
├── app/                  # Rutas principales y App Router
│   ├── api/              # API Routes (Backend Next.js)
│   │   └── proyectos/    # Endpoints GET, POST, PUT, DELETE
│   ├── layout.tsx        # Root layout (Configuración global y providers)
│   └── page.tsx          # Dashboard principal e integración de componentes
├── components/           # Componentes UI (Botones, Tablas, Modales)
│   ├── ui/               # Componentes base (Shadcn)
│   └── Proyecto*.tsx     # Componentes de dominio funcional (Formularios, Tablas)
├── lib/                  # Utilidades y configuración
│   └── supabase/         # Clientes de Supabase para Servidor y Cliente
├── docs/                 # Documentación técnica y scripts SQL
└── public/               # Assets estáticos (favicon, imágenes)
```

---

## ⚙️ Variables de Entorno

Para ejecutar este proyecto, necesitas configurar las siguientes variables de entorno. Crea un archivo llamado `.env.local` en la raíz del proyecto basado en el entorno de Supabase:

```env
# URL de tu proyecto en Supabase (Settings > API > Project URL)
NEXT_PUBLIC_SUPABASE_URL=https://tu-id-de-proyecto.supabase.co

# Clave pública anónima de tu proyecto (Settings > API > Project API Keys > anon public)
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-aqui
```

---

## 🚀 Instalación y Ejecución Local

Utilizamos `pnpm` como gestor de paquetes principal debido a su velocidad y manejo eficiente de dependencias.

### 1. Clonar y preparar el entorno
```bash
# 1. Clona el repositorio
git clone https://github.com/TU-USUARIO/gestion-ingreso.git
cd gestion-ingreso

# 2. Instala las dependencias con pnpm
pnpm install
```

### 2. Configurar Base de Datos (Supabase)
Dirígete a tu panel de Supabase, abre el **SQL Editor** y ejecuta el esquema que se encuentra en `docs/schema.sql` (o crea la tabla `proyectos` según las especificaciones del documento). 

### 3. Ejecutar en Desarrollo
```bash
# Inicia el servidor de desarrollo en http://localhost:3000
pnpm dev
```

---

## ✅ Control de Calidad y Pruebas (Pre-Deploy)

Antes de hacer deploy a Vercel, asegúrate de correr las siguientes pruebas:

1. **Build Local en Limpio:**
   ```bash
   pnpm build
   ```
   *Esto detectará errores comunes de TypeScript o problemas en las dependencias antes del deploy.*

2. **Pruebas de API (con cURL o Thunder Client):**
   Asegúrate de que los endpoints en `/api/proyectos` responden correctamente (GET y POST) validando los datos con Zod y comprobando las políticas RLS en Supabase.

3. **Linting de Código:**
   ```bash
   pnpm lint
   ```

---

## 🚀 Deploy a Producción

El proyecto está listo para ser desplegado fácilmente en **Vercel**:

1. Sube tu código al repositorio en GitHub.
2. Crea un nuevo proyecto en Vercel e importa el repositorio.
3. En la sección **Environment Variables**, añade `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Haz clic en **Deploy**. El comando de build que usará por defecto será `next build`.
