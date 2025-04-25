# Panel Administrativo con React, Vite y Tailwind CSS

Este proyecto es un panel administrativo moderno desarrollado con React, Vite y Tailwind CSS. Incluye una barra de navegación lateral (sidebar), una barra superior (navbar) y varias páginas de ejemplo como Dashboard, Clientes, Proveedores y Usuarios.

![Vista previa del panel administrativo](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BmV2oEg0kTkOl29NiizeT6ZcY54W3o.png)

## Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Configuración Inicial](#configuración-inicial)
- [Instalación de Dependencias](#instalación-de-dependencias)
- [Configuración de Tailwind CSS](#configuración-de-tailwind-css)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Implementación del Navbar y Sidebar](#implementación-del-navbar-y-sidebar)
- [Componentes Principales](#componentes-principales)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Solución de Problemas Comunes](#solución-de-problemas-comunes)
- [Recursos Adicionales](#recursos-adicionales)

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (versión 14.x o superior)
- npm, yarn o pnpm como gestor de paquetes

## Configuración Inicial

### 1. Crear un nuevo proyecto con Vite

```bash
# Usando npm
npm create vite@latest admin-panel -- --template react

# Usando yarn
yarn create vite admin-panel --template react

# Usando pnpm
pnpm create vite admin-panel --template react
```

## Instalación de Dependencias 

#### 1. Instalar dependencias principales

```bash
# Usando npm
npm install react-router-dom lucide-react

# Usando yarn
yarn add react-router-dom lucide-react

# Usando pnpm
pnpm add react-router-dom lucide-react
```
- `react-router-dom`: Para la navegación entre páginas
- `lucide-react`: Para los iconos

#### 1. Instalar dependencias de desarrollo

```bash
# Usando npm
npm install -D tailwindcss postcss autoprefixer

# Usando yarn
yarn add -D tailwindcss postcss autoprefixer

# Usando pnpm
pnpm add -D tailwindcss postcss autoprefixer
```

## Configuración de Tailwind CSS

#### 1. Inicializar Tailwind CSS

```bash
# Usando npm
npx tailwindcss init -p

# Usando yarn
yarn tailwindcss init -p

# Usando pnpm
pnpm exec tailwindcss init -p
```

Si encuentras errores con estos comandos, puedes crear los archivos manualmente:

#### 1. Crear los archivos manualmente

##### Crear archivo tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
      },
    },
  },
};
```
#####  Crear archivo postcss.config.js

```javascript 
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
#####  Configurar CSS global

Edita el archivo `src/index.css` y añade las directivas de Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Estructura del Proyecto

Organiza tu proyecto con la siguiente estructura de archivos:
```bash
admin-panel/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Clientes.jsx
│   │   ├── Proveedores.jsx
│   │   └── Usuarios.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Implementación del Navbar y Sidebar

### 1. Creación del Sidebar (src/components/Sidebar.jsx)

El Sidebar es un componente clave que proporciona la navegación principal de la aplicación. Incluye:

- Logo de la aplicación
- Enlaces a las diferentes secciones
- Iconos para cada enlace
- Indicador visual para la sección activa
- Versión móvil con menú desplegable

```javascript 
// src/components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom"
import { X, Users, Briefcase, User, LogOut, Home } from 'lucide-react'

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
                <span className="text-xl font-bold text-purple-600">yourlogo</span>
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
```
### 1. Creación del Navbar (src/components/Navbar.jsx)

El Navbar es la barra superior que contiene:

- Botón para mostrar/ocultar el sidebar en dispositivos móviles
- Barra de búsqueda
- Iconos de notificaciones y otras acciones

```javascript 
// src/components/Navbar.jsx
import { Menu, Search, Bell } from 'lucide-react'

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
```

## Componentes Principales

Este es el componente principal que integra el Sidebar, Navbar y las rutas de la aplicación:

### 1. App.jsx
```javascript 
// src/App.jsx
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
                <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                  <div className="border-2 border-dashed border-white/30 rounded-xl p-12 text-white text-center">
                    <p className="uppercase tracking-wider">Tu diseño aquí</p>
                  </div>
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
```

### Páginas de ejemplo

Crea páginas básicas para cada sección:

- Dashboard.jsx: Panel principal con estadísticas
- Clientes.jsx: Lista de clientes
- Proveedores.jsx: Lista de proveedores
- Usuarios.jsx: Lista de usuarios

## Ejecución del Proyecto

Para ejecutar el proyecto:

Esto iniciará el servidor de desarrollo de Vite y podrás acceder a la aplicación en `http://localhost:5173`.

```bash
# Usando npm
npm run dev

# Usando yarn
yarn dev

# Usando pnpm
pnpm dev
```

## Solución de Problemas Comunes

### Error al inicializar Tailwind CSS

Si encuentras errores al ejecutar `npx tailwindcss init -p`, puedes:

1. Crear los archivos manualmente como se mostró anteriormente
2. Verificar que tienes los permisos adecuados
3. Actualizar Node.js y npm a las últimas versiones

### Error "Command tailwindcss not found"

Este error ocurre cuando intentas ejecutar el comando de inicialización antes de instalar el paquete:

1. Primero instala las dependencias: 

```bash
pnpm add -D tailwindcss postcss autoprefixer
```

2. Luego ejecuta el comando de inicialización:

```bash
pnpm exec tailwindcss init -p
```

### Alternativa: Usar Tailwind CSS a través de CDN

Si continúas teniendo problemas con la instalación, puedes usar Tailwind a través de CDN como solución temporal. Agrega esto al `<head>` de tu archivo `index.html`:

```javascript
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          purple: {
            50: "#f5f3ff",
            /* ... otros tonos ... */
            900: "#4c1d95",
          },
        },
      },
    },
  }
</script>
```

## Recursos Adicionales

- [Documentación oficial de React](https://reactjs.org/docs/getting-started.html)
- [Documentación de Vite](https://vitejs.dev/guide/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de React Router](https://reactrouter.com/en/main)
- [Lucide Icons](https://lucide.dev/) 