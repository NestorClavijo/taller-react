export default function Dashboard() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <h2 className="text-lg text-gray-600 mb-6">Panel de Control</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-50 p-4 rounded-lg shadow">
            <h3 className="font-medium text-purple-800">Clientes Activos</h3>
            <p className="text-2xl font-bold">128</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg shadow">
            <h3 className="font-medium text-purple-800">Proveedores</h3>
            <p className="text-2xl font-bold">32</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg shadow">
            <h3 className="font-medium text-purple-800">Usuarios</h3>
            <p className="text-2xl font-bold">15</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg shadow">
            <h3 className="font-medium text-purple-800">Ingresos</h3>
            <p className="text-2xl font-bold">$24,500</p>
          </div>
        </div>
  
        <div className="mt-6">
          <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-md shadow hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Ver más
          </button>
        </div>
      </div>
    )
  }
  