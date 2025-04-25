export default function Usuarios() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Usuarios</h1>
        <h2 className="text-lg text-gray-600 mb-6">Gestión de usuarios del sistema</h2>
  
        <div className="overflow-hidden bg-white shadow sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {[1, 2, 3, 4].map((user) => (
              <li key={user}>
                <a href="#" className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="truncate text-sm font-medium text-purple-600">Usuario {user}</p>
                      <div className="ml-2 flex flex-shrink-0">
                        <p className="inline-flex rounded-full bg-purple-100 px-2 text-xs font-semibold leading-5 text-purple-800">
                          {user % 2 === 0 ? "Administrador" : "Editor"}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">usuario{user}@ejemplo.com</p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <p>Último acceso: hace {user * 2} horas</p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }