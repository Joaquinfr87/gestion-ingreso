"use client"

import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { proyectoSchema, type ProyectoInput } from "@/lib/schemas/proyecto"
import { ESTADOS, type EstadoProyecto } from "@/lib/types/proyecto"

type ProyectoFormInput = z.input<typeof proyectoSchema>
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Building2, Calendar, FileText, Tag } from "lucide-react"

interface ProyectoFormProps {
  defaultValues?: ProyectoInput
  onSubmit: (data: ProyectoInput) => void
  isLoading?: boolean
}

const estadoColors: Record<EstadoProyecto, string> = {
  Pendiente: "text-muted-foreground",
  "En Progreso": "text-sky-600 dark:text-sky-400",
  Completado: "text-emerald-600 dark:text-emerald-400",
  Cancelado: "text-destructive",
}

export function ProyectoForm({
  defaultValues,
  onSubmit,
  isLoading = false,
}: ProyectoFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<ProyectoFormInput>({
    resolver: zodResolver(proyectoSchema),
    defaultValues: defaultValues ?? {
      nombre: "",
      descripcion: "",
      fecha_inicio: new Date().toISOString().split("T")[0],
      estado: "Pendiente",
    },
  })

  const watchedEstado = useWatch({ control, name: "estado" })

  const handleFormSubmit = (data: ProyectoFormInput) => {
    onSubmit(data as ProyectoInput)
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="nombre" className="flex items-center gap-2 text-foreground/80">
          <Building2 className="size-3.5 text-muted-foreground" />
          Nombre del Proyecto
        </Label>
        <Input
          id="nombre"
          placeholder="Ej: Edificio Centro"
          {...register("nombre")}
          disabled={isLoading}
          className="h-10 bg-background/50"
        />
        {errors.nombre && (
          <p className="text-xs text-destructive mt-1">{errors.nombre.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="descripcion" className="flex items-center gap-2 text-foreground/80">
          <FileText className="size-3.5 text-muted-foreground" />
          Descripción
        </Label>
        <Textarea
          id="descripcion"
          placeholder="Describe el proyecto..."
          {...register("descripcion")}
          disabled={isLoading}
          className="min-h-[80px] bg-background/50 resize-none"
        />
        {errors.descripcion && (
          <p className="text-xs text-destructive mt-1">{errors.descripcion.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fecha_inicio" className="flex items-center gap-2 text-foreground/80">
            <Calendar className="size-3.5 text-muted-foreground" />
            Fecha de Inicio
          </Label>
          <Input
            id="fecha_inicio"
            type="date"
            {...register("fecha_inicio")}
            disabled={isLoading}
            className="h-10 bg-background/50"
          />
          {errors.fecha_inicio && (
            <p className="text-xs text-destructive mt-1">{errors.fecha_inicio.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-foreground/80">
            <Tag className="size-3.5 text-muted-foreground" />
            Estado
          </Label>
          <Select
            value={watchedEstado}
            onValueChange={(value) => setValue("estado", value as EstadoProyecto)}
            disabled={isLoading}
          >
            <SelectTrigger className="h-10 w-full bg-background/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {ESTADOS.map((estado) => (
                <SelectItem key={estado} value={estado}>
                  <span className={estadoColors[estado]}>{estado}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.estado && (
            <p className="text-xs text-destructive mt-1">{errors.estado.message}</p>
          )}
        </div>
      </div>
    </form>
  )
}
