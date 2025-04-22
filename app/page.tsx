'use client';
import ProductGrid from '@/components/ProductGrid';
import FilterTabs from '@/components/FilterTabs';
import { useState } from 'react';
import products from '@/data/products.json';

export default function HomePage() {
  const [category, setCategory] = useState('Todos');

  const filtered = category === 'Todos'
    ? products
    : products.filter(p => p.categoria === category);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Catálogo de Productos Financieros</h1>
      <FilterTabs current={category} setCategory={setCategory} />
      <ProductGrid products={filtered} />
    </main>
  );
}