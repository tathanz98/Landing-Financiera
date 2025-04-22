import React from 'react';


type Props = {
  current: string;
  setCategory: (value: string) => void;
};

const categories = ['Todos', 'Cuenta', 'Tarjeta', 'Fondo', 'Seguro'];

export default function FilterTabs({ current, setCategory }: Props) {
  return (
    <div className="flex gap-2 mb-6 overflow-x-auto">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors duration-300 ${
            current === cat
              ? 'bg-blue-600 text-white border-blue-600 shadow-md'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
          }`}
          aria-label={`Filtrar por ${cat}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
