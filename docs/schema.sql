-- ============================================
-- Esquema de Base de Datos
-- Sistema de Gestión de Ingreso - Constructora
-- Compatible con Supabase Auth
-- ============================================

-- Habilitar UUID extension (ya viene por defecto en Supabase)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla de proyectos vinculada a auth.users
CREATE TABLE proyectos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  nombre VARCHAR(200) NOT NULL,
  descripcion TEXT DEFAULT '',
  fecha_inicio DATE NOT NULL DEFAULT CURRENT_DATE,
  estado VARCHAR(20) NOT NULL DEFAULT 'Pendiente'
    CHECK (estado IN ('Pendiente', 'En Progreso', 'Completado', 'Cancelado')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para búsquedas frecuentes
CREATE INDEX idx_proyectos_user_id ON proyectos(user_id);
CREATE INDEX idx_proyectos_estado ON proyectos(estado);
CREATE INDEX idx_proyectos_fecha ON proyectos(fecha_inicio);

-- ============================================
-- Row Level Security (RLS)
-- ============================================

-- Habilitar RLS en la tabla
ALTER TABLE proyectos ENABLE ROW LEVEL SECURITY;

-- Policy: Usuarios solo pueden ver sus propios proyectos
CREATE POLICY "Users can view own projects"
  ON proyectos FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Usuarios pueden crear sus propios proyectos
CREATE POLICY "Users can insert own projects"
  ON proyectos FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Usuarios pueden actualizar sus propios proyectos
CREATE POLICY "Users can update own projects"
  ON proyectos FOR UPDATE
  USING (auth.uid() = user_id);

-- Policy: Usuarios pueden eliminar sus propios proyectos
CREATE POLICY "Users can delete own projects"
  ON proyectos FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- Función para actualizar updated_at
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_updated_at
  BEFORE UPDATE ON proyectos
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- ============================================
-- Datos de ejemplo (opcional - se pueden ejecutar después del login)
-- ============================================
-- NOTA: Los datos de ejemplo requieren un user_id válido.
-- Se pueden agregar después de tener un usuario registrado.
