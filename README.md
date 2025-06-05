# Notas de Prensa IN

Este proyecto es una aplicación web construida con [Astro](https://astro.build), un moderno generador de sitios web que ofrece rendimiento excepcional.

## 🚀 Características

- Construido con Astro v5.8.2
- Estilizado con TailwindCSS
- Optimizado para rendimiento
- Configuración TypeScript estricta

## 📦 Requisitos Previos

- Node.js (versión recomendada: 16.x o superior)
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
cd notas-de-prensa-in
```

2. Instala las dependencias:
```bash
npm install
```

## 🖥️ Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo en `localhost:4321`
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Vista previa de la build de producción localmente

## 🗂️ Estructura del Proyecto

```
/
├── public/
├── src/
├── .astro/
├── dist/
└── package.json
```

- `public/` - Archivos estáticos
- `src/` - Código fuente
- `.astro/` - Configuración de tipos de Astro
- `dist/` - Build de producción

## ⚙️ Configuración

El proyecto utiliza la siguiente configuración:

- TypeScript con configuración estricta
- Rutas absolutas configuradas con el alias `@/`
- TailwindCSS para estilos

## 📝 Licencia

[Especificar la licencia]

## 👥 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias.

## 📞 Contacto

[Información de contacto del proyecto]

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
