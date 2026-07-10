"use client";

import { Toaster } from "sonner";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" />
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">
            Sistema de Gestión de Ingreso
          </h1>
          <p className="text-sm text-muted-foreground">
            Constructora - Gestión de Proyectos
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-muted-foreground">
          Desarrollar la interfaz aquí (ver tareas asignadas).
        </p>
      </main>
    </div>
  );
}
