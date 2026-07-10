"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Plus, RefreshCcw, Loader2, LogOut, Building2 } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

// Importamos los componentes asumiendo que Nicolas los creó en /components
// @ts-ignore (evitamos error en caso de que aún no se hayan mergeado)
import { ProyectoForm } from "@/components/ProyectoForm";
// @ts-ignore
import { ProyectoTable } from "@/components/ProyectoTable";
// @ts-ignore
import { ProyectoDialog } from "@/components/ProyectoDialog";
// @ts-ignore
import { ProyectoDeleteDialog } from "@/components/ProyectoDeleteDialog";

type Proyecto = {
  id: string;
  nombre: string;
  descripcion: string;
  estado: string;
  fecha_inicio: string;
  [key: string]: any;
};

export default function ProyectosPage() {
  const { user, loading: authLoading, signOut } = useAuth();
  const router = useRouter();

  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Estados para modales
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<Proyecto | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  const handleSignOut = async () => {
    await signOut();
    toast.success("Sesión cerrada");
    router.push("/login");
  };

  const fetchProyectos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/proyectos");
      if (!response.ok) throw new Error("Error al obtener los proyectos");
      const data = await response.json();
      setProyectos(data);
    } catch (error) {
      console.error(error);
      toast.error("Hubo un problema al cargar los proyectos.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchProyectos();
    }
  }, [user]);

  const handleOpenCreate = () => {
    setProyectoSeleccionado(null);
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (proyecto: Proyecto) => {
    setProyectoSeleccionado(proyecto);
    setIsDialogOpen(true);
  };

  const handleOpenDelete = (proyecto: Proyecto) => {
    setProyectoSeleccionado(proyecto);
    setIsDeleteDialogOpen(true);
  };

  const onSuccessAction = (mensaje: string) => {
    setIsDialogOpen(false);
    setIsDeleteDialogOpen(false);
    toast.success(mensaje);
    fetchProyectos();
  };

  const onErrorAction = (mensaje: string) => {
    toast.error(mensaje);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Cargando...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Building2 className="h-6 w-6" />
            <div>
              <h1 className="text-2xl font-bold">
                Sistema de Gestión de Ingreso
              </h1>
              <p className="text-sm text-muted-foreground">
                Constructora - Gestión de Proyectos
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden md:inline-block">{user.email}</span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Salir
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 p-8 bg-gray-50/50 dark:bg-gray-900 min-h-[calc(100vh-80px)]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Proyectos</h2>
              <p className="text-muted-foreground mt-2">
                Gestiona los proyectos de construcción y su información.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={fetchProyectos}
                className="p-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors bg-white dark:bg-gray-900"
                title="Refrescar"
              >
                <RefreshCcw className={`w-5 h-5 ${isLoading ? "animate-spin" : ""}`} />
              </button>
              <button
                onClick={handleOpenCreate}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Nuevo Proyecto</span>
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border p-4">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                <Loader2 className="w-8 h-8 animate-spin mb-4" />
                <p>Cargando proyectos...</p>
              </div>
            ) : (
              <ProyectoTable 
                data={proyectos} 
                onEdit={handleOpenEdit} 
                onDelete={handleOpenDelete} 
              />
            )}
          </div>

          {/* Modal de Crear/Editar */}
          <ProyectoDialog 
            isOpen={isDialogOpen} 
            onOpenChange={setIsDialogOpen}
            title={proyectoSeleccionado ? "Editar Proyecto" : "Crear Proyecto"}
          >
            <ProyectoForm 
              initialData={proyectoSeleccionado} 
              onSuccess={() => onSuccessAction(proyectoSeleccionado ? "Proyecto actualizado exitosamente" : "Proyecto creado exitosamente")} 
              onError={(msg: string) => onErrorAction(msg || "Error al guardar el proyecto")} 
            />
          </ProyectoDialog>

          {/* Modal de Eliminar */}
          <ProyectoDeleteDialog 
            isOpen={isDeleteDialogOpen} 
            onOpenChange={setIsDeleteDialogOpen}
            proyecto={proyectoSeleccionado}
            onSuccess={() => onSuccessAction("Proyecto eliminado exitosamente")}
            onError={(msg: string) => onErrorAction(msg || "Error al eliminar el proyecto")}
          />
        </div>
      </main>
    </div>
  );
}
