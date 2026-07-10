# Distribución de Tareas - Sistema de Gestión de Ingreso

## Equipo

| Rol | Nombre | Enfoque |
|-----|--------|---------|
| **Fullstack** | David | Coordinación, revisión de código, integración |
| **Frontend** | Nicolas | Interfaz de usuario, componentes, diseño |
| **Backend** | Joaquin | API, base de datos, lógica de servidor |

---

## Stack Tecnológico

| Capa | Herramienta | Versión |
|------|-------------|---------|
| Framework | Next.js | 16.x |
| UI Components | shadcn/ui | latest |
| Estilos | Tailwind CSS | 4.x |
| Formularios | react-hook-form + zod | 7.x + 4.x |
| Iconos | lucide-react | latest |
| Notificaciones | sonner | latest |
| Base de datos | Supabase (PostgreSQL) | 2.x |
| Deploy | Vercel | - |

---

## Estructura del Proyecto

```
gestion-ingreso/
├── app/
│   ├── api/
│   │   └── proyectos/
│   │       ├── route.ts              ← JOAQUIN
│   │       └── [id]/
│   │           └── route.ts          ← JOAQUIN
│   ├── layout.tsx                    ← DAVID
│   ├── page.tsx                      ← NICOLAS
│   └── globals.css                   (ya configurado)
├── components/
│   ├── ui/                           (shadcn - ya instalado)
│   ├── proyecto-form.tsx             ← NICOLAS
│   ├── proyecto-table.tsx            ← NICOLAS
│   ├── proyecto-dialog.tsx           ← NICOLAS
│   └── proyecto-delete-dialog.tsx    ← NICOLAS
├── lib/
│   ├── types/
│   │   └── proyecto.ts               (ya creado)
│   ├── schemas/
│   │   └── proyecto.ts               (ya creado)
│   ├── supabase/
│   │   ├── client.ts                 (ya creado)
│   │   └── server.ts                 (ya creado)
│   └── utils.ts                      (shadcn)
├── docs/
│   ├── schema.sql                    ← JOAQUIN
│   ├── TAREAS.md                     ← DAVID
│   ├── README.md                     ← DAVID
│   └── manual-usuario.md             ← NICOLAS
└── .env.local                        ← JOAQUIN
```

---

## Tareas por Desarrollador

### JOAQUIN - Backend

**Archivo principal: `lib/`, `app/api/`, `docs/schema.sql`**

| # | Tarea | Archivo | Estado |
|---|-------|---------|--------|
| 1 | Configurar proyecto Supabase y obtener credenciales | `.env.local` | ✅ |
| 2 | Ejecutar SQL de esquema en Supabase Dashboard | `docs/schema.sql` | ✅ |
| 3 | Verificar que las API routes funcionan con Supabase | `app/api/proyectos/route.ts` | ✅ |
| 4 | Agregar validación con zod en todos los endpoints | `app/api/` | ✅ |
| 5 | Configurar Row Level Security (RLS) en Supabase | Supabase Dashboard | ✅ |
| 6 | Probar endpoints con curl o Thunder Client | Terminal | ✅ |

**Notas:**
- El esquema SQL ya está creado en `docs/schema.sql`
- La configuración de Supabase cliente ya está en `lib/supabase/`
- Las API routes ya tienen la estructura base con validación zod

---

### NICOLAS - Frontend

**Archivo principal: `components/`, `app/page.tsx`**

| # | Tarea | Archivo | Estado |
|---|-------|---------|--------|
| 1 | Crear componente `ProyectoForm` (formulario con react-hook-form + zod) | `components/proyecto-form.tsx` | ⬜ |
| 2 | Crear componente `ProyectoTable` (tabla con shadcn Table) | `components/proyecto-table.tsx` | ⬜ |
| 3 | Crear componente `ProyectoDialog` (modal para crear/editar) | `components/proyecto-dialog.tsx` | ⬜ |
| 4 | Crear componente `ProyectoDeleteDialog` (confirmación de eliminación) | `components/proyecto-delete-dialog.tsx` | ⬜ |
| 5 | Integrar todos los componentes en `page.tsx` con estado y fetch | `app/page.tsx` | ⬜ |
| 6 | Agregar iconos de lucide-react (Plus, Pencil, Trash2, Building2) | Componentes | ⬜ |
| 7 | Agregar notificaciones con sonner (éxito/error) | `app/page.tsx` | ⬜ |
| 8 | Crear estados vacíos y loading | `app/page.tsx` | ⬜ |
| 9 | Escribir manual de usuario con capturas | `docs/manual-usuario.md` | ⬜ |

**Componentes shadcn disponibles:**
- `Button` - botones de acción
- `Dialog` - modales
- `Input` - campos de texto
- `Label` - etiquetas
- `Select` - selección de estado
- `Table` - tabla de proyectos
- `Badge` - badge de estado
- `Textarea` - campo de descripción

**Ejemplo de uso de shadcn:**
```tsx
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
```

---

### DAVID - Fullstack / Coordinador

**Archivo principal: `app/layout.tsx`, `docs/README.md`**

| # | Tarea | Archivo | Estado |
|---|-------|---------|--------|
| 1 | Configurar layout con metadata del proyecto | `app/layout.tsx` | ⬜ |
| 2 | Revisar estructura de carpetas y convenciones | Todo el proyecto | ⬜ |
| 3 | Ayudar a Nicolas con integración de componentes | `app/page.tsx` | ⬜ |
| 4 | Ayudar a Joaquin con pruebas de API | `app/api/` | ⬜ |
| 5 | Crear README.md del proyecto | `docs/README.md` | ⬜ |
| 6 | Configurar deploy en Vercel | Vercel Dashboard | ⬜ |
| 7 | Revisar que el build pase sin errores | `pnpm build` | ⬜ |
| 8 | Coordinar merge de ramas y resolver conflictos | Git | ⬜ |

---

## Flujo de Trabajo

```
1. Joaquin crea la rama "backend" y trabaja en API + DB
2. Nicolas crea la rama "frontend" y trabaja en UI
3. David revisa ambas ramas y ayuda donde sea necesario
4. Se mergea todo en "main" y se hace deploy
```

### Comandos Útiles

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Build de producción
pnpm build

# Lint
pnpm lint
```

---

## Entregables

| Entregable | Responsable | Estado |
|------------|-------------|--------|
| Código fuente completo | Todos | ⬜ |
| Esquema de base de datos | Joaquin | ⬜ |
| Manual de usuario | Nicolas | ⬜ |
| Capturas de pantalla | Nicolas | ⬜ |
| Deploy en Vercel | David | ⬜ |
| Repositorio GitHub | David | ⬜ |
