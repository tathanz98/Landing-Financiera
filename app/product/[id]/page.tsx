'use client';
import { useParams, useRouter } from 'next/navigation';
import products from '@/data/products.json';

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();
  const product = products.find(p => p.id === id);

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className="p-6">
      <button className="mb-4 underline" onClick={() => router.back()}>
        Volver al catálogo
      </button>
      <h2 className="text-2xl font-bold">{product.nombre}</h2>
      <p>Tipo: {product.tipo}</p>
      <p>Categoría: {product.categoria}</p>
      <p>Tasa de Interés: {product.tasaInteres || 'No aplica'}</p>
      <p>Riesgo: {product.riesgo || 'No aplica'}</p>
    </div>
  );
}