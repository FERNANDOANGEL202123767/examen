import React from 'react';

const TablaProductos = ({ productos }) => {
  return (
    <table className="table-auto w-full mb-8 border-collapse">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
          <th className="px-4 py-2 text-left">Nombre</th>
          <th className="px-4 py-2 text-center">Precio</th>
          <th className="px-4 py-2 text-right">Categoría</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id} className="border-b hover:bg-gray-50">
            <td className="px-4 py-2">{producto.title}</td>
            <td className="px-4 py-2 text-center">${producto.price.toFixed(2)}</td>
            <td className="px-4 py-2 text-right">{producto.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaProductos;