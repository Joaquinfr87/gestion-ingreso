-- ============================================
-- Esquema de Base de Datos
-- Sistema de Gestión de Ingreso - Constructora
-- ============================================

CREATE TABLE proyectos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre VARCHAR(200) NOT NULL,
  descripcion TEXT DEFAULT '',
  fecha_inicio DATE NOT NULL DEFAULT CURRENT_DATE,
  estado VARCHAR(20) NOT NULL DEFAULT 'Pendiente'
    CHECK (estado IN ('Pendiente', 'En Progreso', 'Completado', 'Cancelado')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_proyectos_estado ON proyectos(estado);
CREATE INDEX idx_proyectos_fecha ON proyectos(fecha_inicio);

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

-- Datos de ejemplo
INSERT INTO proyectos (nombre, descripcion, fecha_inicio, estado) VALUES
  ('Edificio Centro', 'Construcción de edificio residencial de 10 pisos', '2025-01-15', 'En Progreso'),
  ('Parque Industrial', 'Desarrollo de zona industrial con 5 naves', '2025-03-01', 'Pendiente'),
  ('Centro Comercial Norte', 'Plaza comercial de 3 niveles', '2024-06-10', 'Completado');
