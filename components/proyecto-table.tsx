"use client"

import { type Proyecto, type EstadoProyecto } from "@/lib/types/proyecto"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2, Inbox, Loader2 } from "lucide-react"

interface ProyectoTableProps {
  proyectos: Proyecto[]
  onEdit: (proyecto: Proyecto) => void
  onDelete: (proyecto: Proyecto) => void
  isLoading?: boolean
}

const estadoVariant: Record<EstadoProyecto, "default" | "info" | "success" | "destructive"> = {
  Pendiente: "default",
  "En Progreso": "info",
  Completado: "success",
  Cancelado: "destructive",
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("es-CL", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

export function ProyectoTable({
  proyectos,
  onEdit,
  onDelete,
  isLoading = false,
}: ProyectoTableProps) {
  if (isLoading) {
    return (
      <div className="glass-card p-8">
        <div className="flex items-center justify-center gap-3 text-muted-foreground">
          <Loader2 className="size-5 animate-spin" />
          <span className="text-sm">Cargando proyectos...</span>
        </div>
      </div>
    )
  }

  if (proyectos.length === 0) {
    return (
      <div className="glass-card p-12">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="rounded-2xl bg-muted/50 p-4">
            <Inbox className="size-8 text-muted-foreground/60" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground/80">No hay proyectos</p>
            <p className="text-xs text-muted-foreground mt-1">
              Comienza creando tu primer proyecto
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="glass-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Nombre</TableHead>
            <TableHead className="hidden sm:table-cell">Descripción</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {proyectos.map((proyecto) => (
            <TableRow key={proyecto.id}>
              <TableCell>
                <span className="font-medium text-foreground">{proyecto.nombre}</span>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <span className="text-muted-foreground line-clamp-1 max-w-[200px]">
                  {proyecto.descripcion || "—"}
                </span>
              </TableCell>
              <TableCell>
                <span className="text-muted-foreground text-sm">
                  {formatDate(proyecto.fecha_inicio)}
                </span>
              </TableCell>
              <TableCell>
                <Badge variant={estadoVariant[proyecto.estado]} className="font-medium">
                  {proyecto.estado}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1">
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => onEdit(proyecto)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Pencil className="size-3.5" />
                    <span className="sr-only">Editar</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => onDelete(proyecto)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="size-3.5" />
                    <span className="sr-only">Eliminar</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
