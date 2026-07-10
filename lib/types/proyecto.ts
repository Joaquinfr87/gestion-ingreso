export type EstadoProyecto = "Pendiente" | "En Progreso" | "Completado" | "Cancelado";

export interface Proyecto {
  id: string;
  nombre: string;
  descripcion: string;
  fecha_inicio: string;
  estado: EstadoProyecto;
  created_at: string;
  updated_at: string;
}

export const ESTADOS: EstadoProyecto[] = [
  "Pendiente",
  "En Progreso",
  "Completado",
  "Cancelado",
];
