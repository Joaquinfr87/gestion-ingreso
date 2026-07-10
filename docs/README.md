# Sistema de Gestión de Ingreso

## Descripción

Aplicación web para la gestión de proyectos de una constructora. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los proyectos registrados.

## Equipo

- Integrante 1
- Integrante 2
- Integrante 3

## Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Next.js | 16.2.10 | Framework React |
| TypeScript | 5.x | Tipado estático |
| Tailwind CSS | 4.x | Estilos |
| Supabase | 2.110.2 | Base de datos y backend |

## Requisitos Previos

- Node.js 18+
- pnpm (o npm/yarn)
- Cuenta en [Supabase](https://supabase.com)

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/gestion-ingreso.git
cd gestion-ingreso
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Configurar variables de entorno

Crea el archivo `.env.local` en la raíz del proyecto:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://TU-PROYECTO.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=TU-ANON-KEY-AQUI
```

Para obtener estos valores:
1. Crear un proyecto en [Supabase](https://supabase.com)
2. Ir a **Settings > API**
3. Copiar la **Project URL** y la **anon public** key

### 4. Crear la base de datos

En el panel de Supabase, ir a **SQL Editor** y ejecutar el contenido de `docs/schema.sql`.

### 5. Ejecutar el proyecto

```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Funcionalidades

### CRUD de Proyectos

| Operación | Descripción |
|-----------|-------------|
| **Crear** | Registrar un nuevo proyecto con nombre, descripción, fecha de inicio y estado |
| **Leer** | Listar todos los proyectos registrados en una tabla |
| **Actualizar** | Editar los datos de un proyecto existente |
| **Eliminar** | Borrar un proyecto del sistema |

### Estados de Proyecto

- **Pendiente**: Proyecto registrado pero aún no iniciado
- **En Progreso**: Proyecto en ejecución
- **Completado**: Proyecto finalizado
- **Cancelado**: Proyecto cancelado

## Esquema de Base de Datos

```sql
CREATE TABLE proyectos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre VARCHAR(200) NOT NULL,
  descripcion TEXT,
  fecha_inicio DATE NOT NULL DEFAULT CURRENT_DATE,
  estado VARCHAR(20) NOT NULL DEFAULT 'Pendiente'
    CHECK (estado IN ('Pendiente', 'En Progreso', 'Completado', 'Cancelado')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

Ver esquema completo en `docs/schema.sql`.

## Estructura del Proyecto

```
gestion-ingreso/
├── app/
│   ├── api/
│   │   └── proyectos/
│   │       ├── route.ts          # GET, POST
│   │       └── [id]/
│   │           └── route.ts      # PUT, DELETE
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  # Interfaz principal
├── lib/
│   └── supabase/
│       ├── client.ts             # Cliente navegador
│       └── server.ts             # Cliente servidor
├── docs/
│   ├── schema.sql                # Esquema de BD
│   └── README.md                 # Esta documentación
└── .env.local                    # Variables de entorno
```

## API Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/proyectos` | Listar todos los proyectos |
| POST | `/api/proyectos` | Crear un proyecto |
| PUT | `/api/proyectos/:id` | Actualizar un proyecto |
| DELETE | `/api/proyectos/:id` | Eliminar un proyecto |

### Ejemplo POST

```json
{
  "nombre": "Edificio Centro",
  "descripcion": "Construcción de edificio residencial",
  "fecha_inicio": "2025-01-15",
  "estado": "En Progreso"
}
```

## Deploy

### Vercel (Recomendado)

1. Subir el código a GitHub
2. Importar el proyecto en [Vercel](https://vercel.com)
3. Configurar las variables de entorno
4. Deploy automático

```bash
pnpm build
```

## Capturas de Pantalla

<!-- Agregar capturas aquí -->

### Vista Principal
![Vista Principal](screenshots/principal.png)

### Formulario de Proyecto
![Formulario](screenshots/formulario.png)

## Licencia

Proyecto académico - Universidad [Nombre]
