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
import { type Proyecto } from "@/lib/types/proyecto"
import { AlertTriangle, Loader2, Trash2 } from "lucide-react"

interface ProyectoDeleteDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
  proyecto: Proyecto | null
  isLoading?: boolean
}

export function ProyectoDeleteDialog({
  open,
  onOpenChange,
  onConfirm,
  proyecto,
  isLoading = false,
}: ProyectoDeleteDialogProps) {
  if (!proyecto) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="rounded-xl bg-destructive/10 p-2">
              <AlertTriangle className="size-4 text-destructive" />
            </div>
            Eliminar Proyecto
          </DialogTitle>
          <DialogDescription>
            ¿Estás seguro de que deseas eliminar{" "}
            <span className="font-medium text-foreground">{proyecto.nombre}</span>?
            Esta acción no se puede deshacer.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isLoading}
          >
            Cancelar
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Eliminando...
              </>
            ) : (
              <>
                <Trash2 className="size-4" />
                Eliminar
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
