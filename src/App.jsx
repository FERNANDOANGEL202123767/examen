import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TablaProductos from './components/TablaProductos';
import GraficoBarras from './components/GraficoBarras';

const App = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  // Obtener datos de la API al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchData();
  }, []);

  // Manejar el cambio en el input de búsqueda
  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  // Filtrar productos según el término de búsqueda
  const productosFiltrados = productos.filter((producto) =>
    producto.title.toLowerCase().includes(busqueda.toLowerCase()) ||
    producto.category.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Procesar datos para el gráfico de barras
  const categorias = productos.reduce((acc, producto) => {
    acc[producto.category] = (acc[producto.category] || 0) + 1;
    return acc;
  }, {});
  const datosGrafico = Object.entries(categorias).map(([categoria, cantidad]) => ({
    categoria,
    cantidad,
  }));

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Productos</h1>
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Buscar por nombre o categoría..."
            value={busqueda}
            onChange={handleBusqueda}
            className="border p-2 w-2/3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white p-2 rounded-lg shadow hover:bg-blue-600">
            Ver Gráfico
          </button>
        </div>
        <TablaProductos productos={productosFiltrados} />
        <GraficoBarras datos={datosGrafico} />
      </div>
    </div>
  );
};

export default App;