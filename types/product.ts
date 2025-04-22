export type Product = {
  id: string;
  nombre: string;
  tipo: string;
  categoria: string;
  tasaInteres?: string | null;
  riesgo?: string | null;
};