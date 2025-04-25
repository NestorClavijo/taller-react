
import { Link, useLocation } from "react-router-dom"
import { X, Users, Briefcase, User, LogOut, Home } from "lucide-react"

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation()

  const navigation = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Clientes", href: "/clientes", icon: Users },
    { name: "Proveedores", href: "/proveedores", icon: Briefcase },
    { name: "Usuarios", href: "/usuarios", icon: User },
  ]

  return (
    <>
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 flex z-40 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          aria-hidden="true"
          onClick={() => setSidebarOpen(false)}
        ></div>

        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Cerrar sidebar</span>
              <X className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <span className="text-xl font-bold text-purple-600">yourlogo</span>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    location.pathname === item.href
                      ? "bg-purple-100 text-purple-900"
                      : "text-gray-600 hover:bg-purple-50 hover:text-purple-900"
                  }`}
                >
                  <item.icon
                    className={`mr-4 h-6 w-6 ${
                      location.pathname === item.href ? "text-purple-600" : "text-gray-400 group-hover:text-purple-600"
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
              <Link
                to="/logout"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-purple-50 hover:text-purple-900"
              >
                <LogOut className="mr-4 h-6 w-6 text-gray-400 group-hover:text-purple-600" aria-hidden="true" />
                Cerrar Sesión
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img src="./../assets/logo.png" alt="Logo" className="h-10 w-auto" />
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      location.pathname === item.href
                        ? "bg-purple-100 text-purple-900"
                        : "text-gray-600 hover:bg-purple-50 hover:text-purple-900"
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-6 w-6 ${
                        location.pathname === item.href
                          ? "text-purple-600"
                          : "text-gray-400 group-hover:text-purple-600"
                      }`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/logout"
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-purple-50 hover:text-purple-900"
                >
                  <LogOut className="mr-3 h-6 w-6 text-gray-400 group-hover:text-purple-600" aria-hidden="true" />
                  Cerrar Sesión
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}