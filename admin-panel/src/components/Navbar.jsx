import { Menu, Search, Bell } from "lucide-react"

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between h-16 bg-white shadow-sm px-6">
      <button type="button" className="p-2 rounded-md lg:hidden" onClick={() => setSidebarOpen(true)}>
        <Menu className="h-6 w-6" aria-hidden="true" />
        <span className="sr-only">Abrir sidebar</span>
      </button>

      <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
        <div className="max-w-lg w-full lg:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Buscar
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Buscar"
              type="search"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <button
          type="button"
          className="flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          <span className="sr-only">Ver notificaciones</span>
          <Bell className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}