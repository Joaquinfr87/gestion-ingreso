"use client"

import { useState, useEffect, useCallback } from "react"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"
import { ProyectoTable } from "@/components/proyecto-table"
import { ProyectoDialog } from "@/components/proyecto-dialog"
import { ProyectoDeleteDialog } from "@/components/proyecto-delete-dialog"
import { type Proyecto } from "@/lib/types/proyecto"
import { type ProyectoInput } from "@/lib/schemas/proyecto"
import { useTheme } from "next-themes"
import { Plus, Building2, Sun, Moon } from "lucide-react"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [proyectos, setProyectos] = useState<Proyecto[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [dialogOpen, setDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedProyecto, setSelectedProyecto] = useState<Proyecto | null>(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const response = await fetch("/api/proyectos")
        if (!response.ok) throw new Error("Error al cargar proyectos")
        const data = await response.json()
        if (!cancelled) setProyectos(data)
      } catch {
        if (!cancelled) toast.error("No se pudieron cargar los proyectos")
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  const refetchProyectos = useCallback(async () => {
    try {
      const response = await fetch("/api/proyectos")
      if (!response.ok) throw new Error("Error al cargar proyectos")
      const data = await response.json()
      setProyectos(data)
    } catch {
      toast.error("No se pudieron cargar los proyectos")
    }
  }, [])

  const handleCreate = () => {
    setSelectedProyecto(null)
    setDialogOpen(true)
  }

  const handleEdit = (proyecto: Proyecto) => {
    setSelectedProyecto(proyecto)
    setDialogOpen(true)
  }

  const handleDelete = (proyecto: Proyecto) => {
    setSelectedProyecto(proyecto)
    setDeleteDialogOpen(true)
  }

  const handleSubmit = async (data: ProyectoInput) => {
    try {
      setIsSubmitting(true)

      if (selectedProyecto) {
        const response = await fetch(`/api/proyectos/${selectedProyecto.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
        if (!response.ok) throw new Error("Error al actualizar")
        toast.success("Proyecto actualizado correctamente")
      } else {
        const response = await fetch("/api/proyectos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
        if (!response.ok) throw new Error("Error al crear")
        toast.success("Proyecto creado correctamente")
      }

      setDialogOpen(false)
      setSelectedProyecto(null)
      await refetchProyectos()
    } catch {
      toast.error(
        selectedProyecto
          ? "Error al actualizar el proyecto"
          : "Error al crear el proyecto"
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleConfirmDelete = async () => {
    if (!selectedProyecto) return

    try {
      setIsSubmitting(true)
      const response = await fetch(`/api/proyectos/${selectedProyecto.id}`, {
        method: "DELETE",
      })
      if (!response.ok) throw new Error("Error al eliminar")
      toast.success("Proyecto eliminado correctamente")
      setDeleteDialogOpen(false)
      setSelectedProyecto(null)
      await refetchProyectos()
    } catch {
      toast.error("Error al eliminar el proyecto")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" richColors />

      <header className="glass-header sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-2.5">
              <Building2 className="size-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                Sistema de Gestión de Ingreso
              </h1>
              <p className="text-xs text-muted-foreground">
                Constructora — Gestión de Proyectos
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-foreground"
            >
              <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Cambiar tema</span>
            </Button>

            <Button onClick={handleCreate} size="sm" className="gap-1.5">
              <Plus className="size-4" />
              <span className="hidden sm:inline">Nuevo Proyecto</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <ProyectoTable
          proyectos={proyectos}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isLoading={isLoading}
        />
      </main>

      <ProyectoDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSubmit={handleSubmit}
        proyecto={selectedProyecto}
        isLoading={isSubmitting}
      />

      <ProyectoDeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={handleConfirmDelete}
        proyecto={selectedProyecto}
        isLoading={isSubmitting}
      />
    </div>
  )
}
