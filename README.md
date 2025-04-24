# ⚡ Dragon Ball App Por Walker Alejandro Valenzuela Guerrero

Aplicación web que consume la [Dragon Ball API](https://dragonball-api.com/) para mostrar personajes, sus transformaciones y planetas de origen. Desarrollado como proyecto entregable para el curso de Programación Web con React.

## Características

- Consumo de la API REST de Dragon Ball.
- Filtrado de personajes por género (Masculino/Femenino).
- Vista de detalle para cada personaje.
- Navegación fluida sin recargas (SPA).
- Diseño 100% responsive y adaptable a móviles.
- Animaciones de entrada en las tarjetas (fade-in).
- Estilizado personalizado con CSS y MUI.

## Funcionalidades principales

1. Explorar personajes:
En la página principal se listan todos los personajes disponibles en la API. Estos se muestran mediante tarjetas visuales con animaciones, y se cargan progresivamente conforme el usuario hace scroll (efecto tipo scroll infinito controlado).

2. Filtrado por género:
Puedes acceder a páginas específicas para ver personajes masculinos o femeninos, filtrados automáticamente desde la API. Estas páginas muestran toda la información cargada directamente sin necesidad de scroll infinito.

3. Detalle del personaje:
Al hacer clic en cualquier personaje, accedes a una vista de detalle individual. Esta incluye:

- Nombre e imagen del personaje.
- Raza y género.
- Nivel de Ki y Ki máximo.
- Afiliación.
- Descripción.
- Transformaciones disponibles.
- Información del planeta de origen (nombre, estado, descripción e imagen).

4. Página de error personalizada:
Si el usuario intenta acceder a una ruta inválida, se muestra una página 404 amigable con opción para volver al inicio. (Si encuentra problemas con el despliegue online en cuanto a la pagina de error, ejecute de manera local npm run dev el projecto.).

5. Diseño responsive:
Toda la interfaz está adaptada a distintos tamaños de pantalla, permitiendo su uso cómodo en computadoras, tablets y celulares.

6. Sin recargas:
Navegación fluida gracias al uso de react-router-dom, sin recargar la página.

## Tecnologías Usadas

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Dragon Ball API](https://dragonball-api.com/)
- [CSS](https://developer.mozilla.org/es/docs/Web/CSS) personalizado
- [Vite](https://vitejs.dev/)

## Estructura de Componentes
```plaintext
Project-DragonBall/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── Components/
│   │   ├── CharacterCard/
│   │   ├── Footer/
│   │   └── Navbar/
│   ├── Images/
│   │   ├── Background.webp
│   │   ├── errorpageGoku.png
│   │   ├── homeLogo.webp
│   │   ├── iconLogo.webp
│   │   ├── imageWalker.webp
│   │   ├── promocionAWS.png
│   │   └── promocionN.png
│   ├── Pages/
│   │   ├── AboutPage/
│   │   ├── CharacterDetailPage/
│   │   ├── ErrorPage/
│   │   ├── FemalePage/
│   │   ├── HomePage/
│   │   └── MalePage/
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── README.md
└── vite.config.js
```

## Instalación

1. Clona el repositorio

git clone https://github.com/WalkerValenzuela/ValenzuelaWalker-Project-DragonBall.git
cd ValenzuelaWalker-Project-DragonBall

2. Instalar Dependencias
   
npm install

4. Inicia el servidor local
   
npm run dev 

Deploy o Despligue Online por Netlify:

[Pagina Web](https://ubiquitous-malabi-afad06.netlify.app/).

Nombre: Walker Alejandro Valenzuela Guerrero
Repositorio: [ValenzuelaWalker-Project-DragonBall](https://github.com/WalkerValenzuela/ValenzuelaWalker-Project-DragonBall)

