# Manual de Usuario — Sistema de Gestión de Ingreso

## Descripción General

Sistema web para la gestión de proyectos de una constructora. Permite crear, consultar, actualizar y eliminar proyectos de forma sencilla e intuitiva.

---

## Requisitos Previos

- Navegador web actualizado (Chrome, Firefox, Safari o Edge)
- Conexión a internet
- Credenciales de acceso (si aplica autenticación)

---

## Inicio de la Aplicación

1. Abrir el navegador y acceder a la URL del sistema
2. Se mostrará la página principal con la lista de proyectos

---

## Funcionalidades

### 1. Ver Proyectos

Al acceder al sistema, se muestra una tabla con todos los proyectos registrados:

- **Nombre**: Nombre del proyecto
- **Descripción**: Descripción breve (oculta en pantallas pequeñas)
- **Fecha**: Fecha de inicio del proyecto
- **Estado**: Estado actual con indicador de color
- **Acciones**: Botones de editar y eliminar

**Estados disponibles:**
| Estado | Color | Significado |
|--------|-------|-------------|
| Pendiente | Gris | Proyecto aún no iniciado |
| En Progreso | Azul | Proyecto en ejecución |
| Completado | Verde | Proyecto finalizado exitosamente |
| Cancelado | Rojo | Proyecto anulado |

---

### 2. Crear Nuevo Proyecto

1. Hacer clic en el botón **"+ Nuevo Proyecto"** (esquina superior derecha)
2. Completar el formulario con los datos del proyecto:
   - **Nombre** (obligatorio): Nombre del proyecto (3-200 caracteres)
   - **Descripción** (opcional): Detalles adicionales
   - **Fecha de Inicio** (obligatoria): Fecha de comenzado del proyecto
   - **Estado** (obligatorio): Seleccionar uno de los estados disponibles
3. Hacer clic en **"Crear Proyecto"**
4. Se mostrará una notificación de éxito y el proyecto aparecerá en la tabla

---

### 3. Editar Proyecto

1. En la tabla, hacer clic en el **ícono de lápiz** (✏️) del proyecto a editar
2. Se abrirá un formulario con los datos actuales del proyecto
3. Modificar los campos deseados
4. Hacer clic en **"Guardar Cambios"**
5. Se mostrará una notificación de éxito

---

### 4. Eliminar Proyecto

1. En la tabla, hacer clic en el **ícono de papelera** (🗑️) del proyecto a eliminar
2. Se mostrará un diálogo de confirmación
3. Verificar que es el proyecto correcto
4. Hacer clic en **"Eliminar"** para confirmar
5. Se mostrará una notificación de éxito y el proyecto desaparecerá de la tabla

> **Nota:** La eliminación es permanente y no se puede deshacer.

---

## Interfaz de Usuario

### Diseño

- **Estilo**: Minimalista con efecto glass sutil
- **Tema**: Claro y oscuro (se adapta automáticamente al sistema)
- **Header**: Fijo en la parte superior con glass sutil
- **Tabla**: Bordes redondeados, filas con hover suave
- **Botones**: Transiciones suaves, efectos de elevación al pasar el mouse
- **Notificaciones**: Aparecen en la esquina superior derecha

### Colores de Estados

Los badges de estado utilizan colores sutiles para indicar el progreso:

- **Pendiente**: Fondo gris claro
- **En Progreso**: Fondo azul cielo claro
- **Completado**: Fondo verde esmeralda claro
- **Cancelado**: Fondo rojo claro

---

## Notificaciones

El sistema muestra notificaciones automáticas:

- **Éxito** (verde): Cuando una operación se completa correctamente
- **Error** (rojo): Cuando ocurre un problema durante una operación
- **Advertencia** (amarillo): Para alertas importantes
- **Información** (azul): Para mensajes informativos

Las notificaciones desaparecen automáticamente después de unos segundos.

---

## Comportamiento en Diferentes Dispositivos

- **Escritorio**: Layout completo con todas las columnas visibles
- **Tablet**: Columna de descripción se oculta para optimizar espacio
- **Móvil**: Layout responsivo, botones de acción compactos

---

## Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| `Esc` | Cerrar diálogos abiertos |
| `Enter` | Enviar formulario (cuando está enfocado) |

---

## Solución de Problemas

| Problema | Solución |
|----------|----------|
| No se cargan los proyectos | Verificar conexión a internet y recargar la página |
| No se puede crear proyecto | Verificar que todos los campos obligatorios estén completos |
| Notificación de error | Intentar nuevamente; si persiste, contactar al administrador |
| Tabla no se ve bien | Ajustar el tamaño de la ventana del navegador |

---

## Información Técnica

- **Framework**: Next.js 16
- **UI Library**: shadcn/ui
- **Estilos**: Tailwind CSS
- **Base de Datos**: Supabase (PostgreSQL)
- **Validación**: Zod + react-hook-form

---

## Contacto

Para soporte o consultas, contactar al equipo de desarrollo.
