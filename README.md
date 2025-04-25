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

### 2. Instalación de Dependencias 

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

### 3. Configuración de Tailwind CSS

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