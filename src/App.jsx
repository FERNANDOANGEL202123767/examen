import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TablaProductos from './components/TablaProductos';
import GraficoBarras from './components/GraficoBarras';

const App = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarGrafico, setMostrarGrafico] = useState(false);

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

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const productosFiltrados = productos.filter((producto) =>
    producto.title.toLowerCase().includes(busqueda.toLowerCase()) ||
    producto.category.toLowerCase().includes(busqueda.toLowerCase())
  );

  const categorias = productos.reduce((acc, producto) => {
    acc[producto.category] = (acc[producto.category] || 0) + 1;
    return acc;
  }, {});
  const datosGrafico = Object.entries(categorias).map(([categoria, cantidad]) => ({
    categoria,
    cantidad,
  }));

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex justify-center items-center p-4">
      <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-black mb-4">Productos</h1>
        <div className="flex items-center justify-between mb-5">
          <input
            type="text"
            placeholder="Buscar por nombre o categoría..."
            value={busqueda}
            onChange={handleBusqueda}
            className="w-[70%] h-10 px-3 border border-[#D3D3D3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BFF] text-sm"
          />
          <button
            onClick={() => setMostrarGrafico(!mostrarGrafico)}
            className="w-[120px] h-10 bg-[#007BFF] text-white rounded-md shadow-md hover:bg-[#0056b3] text-sm font-medium"
          >
            {mostrarGrafico ? 'Ver Tabla' : 'Ver Gráfico'}
          </button>
        </div>
        {mostrarGrafico ? (
          <GraficoBarras datos={datosGrafico} />
        ) : (
          <TablaProductos productos={productosFiltrados} />
        )}
      </div>
    </div>
  );
};

export default App;
