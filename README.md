# StarWars App

Aplicación desarrollada en Angular 19 que consume la API pública de Star Wars (SWAPI) para explorar personajes, planetas y naves. El proyecto fue realizado como parte de una prueba técnica para Helipagos.

## Funcionalidades

- Login simulado (mock) con almacenamiento de token en localStorage.
- Lista y detalles de personajes.
- Lista y detalles de planetas.
- Lista y detalles de naves espaciales.
- Búsqueda en tiempo real.
- Navegación SPA con rutas protegidas.
- Estilo visual moderno y responsivo.

## Requisitos

- Node.js v18+
- Angular CLI v19
- NPM

## Instalación y ejecución local

1. Cloná el repositorio:

   git clone https://github.com/Sebareco/starwars-app.git
   cd starwars-app

2. Instalá dependencias:

   npm install

3. Ejecutá el servidor de desarrollo:

   npm start

Esto abrirá la app en http://localhost:4200.

Usa el mock login para ingresar (el backend de login está simulado si useMockLogin está activado en el environment.ts).

## Configuración

En src/environments/environment.ts podés modificar:

  useMockLogin: true or false

## Buenas prácticas aplicadas

- Uso de standalone components.
- Separación por módulos: personas, planetas, naves.
- Inyección de servicios para la lógica de negocio.
- Interceptor de Auth para añadir token al request.
- Variables centralizadas en environment.ts.
- Uso de proxy para desarrollo local (proxy.conf.json).
- Componentes reutilizables.
- Gitflow aplicado (opcional).

## Cómo testear

Para simular login:

1. Ingresá cualquier usuario/contraseña en el login.
2. Se almacenará un token simulado en localStorage.
3. Podrás navegar por todas las secciones protegidas.

## Colaboradores

- Sebastián Areco (sebareco)
- Helipagos (acceso colaborador habilitado)
