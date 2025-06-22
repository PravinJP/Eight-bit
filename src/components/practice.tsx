import React from 'react';

type Item = {
  id: number;
  title: string;
  description: string;
};

const MapComponent: React.FC = () => {
  const items: Item[] = [
    { id: 1, title: 'React', description: 'A JavaScript library for building UI.' },
    { id: 2, title: 'TypeScript', description: 'A typed superset of JavaScript.' },
    { id: 3, title: 'Tailwind CSS', description: 'A utility-first CSS framework.' },
    ];

  return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
            <p className="text-gray-600 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
  );
};

export default MapComponent