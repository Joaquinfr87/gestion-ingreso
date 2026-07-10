"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ProyectoForm } from "@/components/proyecto-form"
import { type Proyecto } from "@/lib/types/proyecto"
import { type ProyectoInput } from "@/lib/schemas/proyecto"
import { Plus, Pencil, Loader2 } from "lucide-react"

interface ProyectoDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: ProyectoInput) => void
  proyecto?: Proyecto | null
  isLoading?: boolean
}

export function ProyectoDialog({
  open,
  onOpenChange,
  onSubmit,
  proyecto,
  isLoading = false,
}: ProyectoDialogProps) {
  const isEditing = !!proyecto

  const defaultValues: ProyectoInput | undefined = proyecto
    ? {
        nombre: proyecto.nombre,
        descripcion: proyecto.descripcion,
        fecha_inicio: proyecto.fecha_inicio,
        estado: proyecto.estado,
      }
    : undefined

  const handleSubmit = (data: ProyectoInput) => {
    onSubmit(data)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {isEditing ? (
              <>
                <Pencil className="size-4 text-muted-foreground" />
                Editar Proyecto
              </>
            ) : (
              <>
                <Plus className="size-4 text-muted-foreground" />
                Nuevo Proyecto
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Modifica los datos del proyecto seleccionado."
              : "Completa los datos para registrar un nuevo proyecto."}
          </DialogDescription>
        </DialogHeader>

        <ProyectoForm
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isLoading}
          >
            Cancelar
          </Button>
          <Button
            onClick={() => {
              const form = document.querySelector("form")
              if (form) form.requestSubmit()
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Guardando...
              </>
            ) : isEditing ? (
              "Guardar Cambios"
            ) : (
              "Crear Proyecto"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
