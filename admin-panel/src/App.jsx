import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Clientes from "./pages/Clientes"
import Proveedores from "./pages/Proveedores"
import Usuarios from "./pages/Usuarios"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex flex-col flex-1 overflow-hidden">
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 p-6">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-white rounded-3xl p-8 shadow-lg">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/proveedores" element={<Proveedores />} />
                    <Route path="/usuarios" element={<Usuarios />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </div>
                
              </div>
            </div>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
