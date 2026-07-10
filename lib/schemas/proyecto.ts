import { z } from "zod";

export const proyectoSchema = z.object({
  nombre: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(200, "El nombre no puede exceder 200 caracteres"),
  descripcion: z.string().optional().default(""),
  fecha_inicio: z.string().min(1, "La fecha de inicio es obligatoria"),
  estado: z.enum(["Pendiente", "En Progreso", "Completado", "Cancelado"]),
});

export type ProyectoInput = z.infer<typeof proyectoSchema>;
