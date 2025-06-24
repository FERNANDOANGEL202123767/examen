import React from 'react';

const TablaProductos = ({ productos }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-[#E0E0E0] text-[#A9A9A9] uppercase font-bold text-sm">
          <th className="px-4 py-2 text-left">Nombre</th>
          <th className="px-4 py-2 text-center">Precio</th>
          <th className="px-4 py-2 text-right">Categoría</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto, index) => (
          <tr
            key={producto.id}
            className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}
          >
            <td className="px-4 py-2 text-left text-black text-sm">{producto.title}</td>
            <td className="px-4 py-2 text-center text-black text-sm">
              ${producto.price.toFixed(2)}
            </td>
            <td className="px-4 py-2 text-right text-black text-sm">{producto.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaProductos;
