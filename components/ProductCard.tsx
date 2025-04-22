import styled from 'styled-components';
import Link from 'next/link';
import { Product } from '@/types/product';

const Card = styled.div`
  @apply bg-white rounded-2xl shadow-md p-5 transition-transform hover:scale-[1.02];
`;

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      <h3 className="text-lg font-bold text-blue-700 mb-1">{product.nombre}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.tipo}</p>
      {product.tasaInteres && (
        <p className="text-sm text-green-600">Tasa: {product.tasaInteres}</p>
      )}
      {product.riesgo && (
        <p className="text-sm text-red-500">Riesgo: {product.riesgo}</p>
      )}
      <Link href={`/product/${product.id}`}>
        <button className="mt-4 w-full text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Ver detalles
        </button>
      </Link>
    </Card>
  );
}
