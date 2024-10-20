import { useState, useEffect } from 'react';

export default function Carrito() {
  // Estado inicial del carrito (puedes ajustarlo con datos reales)
  const [carrito, setCarrito] = useState([]);

 useEffect(() => {
    // Obtener productos del carrito (desde una API o localStorage)
    let carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Establecer la cantidad en 1 si no está definida
    carritoGuardado = carritoGuardado.map((item) => ({
      ...item,
      cantidad: item.cantidad || 1,
    }));

    setCarrito(carritoGuardado);
  }, []);

  // Función para eliminar un producto del carrito
  const eliminarProducto = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito)); // Actualizamos localStorage
  };

  // Función para actualizar la cantidad de un producto
  const actualizarCantidad = (index, cantidad) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito[index].cantidad = cantidad;
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito)); // Actualizamos localStorage
  };

  // Calcular el total
  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      {carrito.length === 0 ? (
        <p className="text-lg">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {carrito.map((item, index) => (
              <li key={index} className="border p-4 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{item.nombre}</h3>
                    <p className="text-gray-600">Precio: ${item.precio.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">{item.descripcion}</p>
                  </div>
                  <div className="flex items-center">
                    <label className="mr-2">Cantidad:</label>
                    <input
                      type="number"
                      className="border p-2 w-16"
                      value={item.cantidad}
                      onChange={(e) => actualizarCantidad(index, Number(e.target.value))}
                      min="1"
                    />
                    <button
                      onClick={() => eliminarProducto(index)}
                      className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h3 className="text-xl font-bold">Total: ${calcularTotal().toFixed(2)}</h3>
            <button
              onClick={() => window.location.href = '/checkout'}
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}
