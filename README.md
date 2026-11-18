# BROT
# Cómo arrancar el proyecto
Desde la terminal, sitúate en la carpeta del proyecto y ejecuta:

npm install

npm run dev

npm install instala las dependencias (solo la primera vez o tras cambiar package.json).
npm run dev arranca el servidor de desarrollo. La terminal mostrará una URL local (normalmente http://localhost:5173) que puedes abrir en el navegador. Los cambios se recargan automáticamente.


# Qué hace cada script
main.jsx — Punto de entrada. Monta el componente <App /> dentro del elemento #root del HTML usando createRoot y StrictMode.
App.jsx — Componente principal. Gestiona la pestaña activa (Receptes / Balanç / Perfil) y renderiza la pantalla correspondiente. Incluye la barra de navegación inferior con el indicador deslizante.
receptes.js — Datos. Exporta el array receptes y la función getReceptes() que lo devuelve.
filtreReceptes.js — Lógica de filtrado. Exporta FILTRES (definición de cada filtro) y el hook filtreReceptes(receptes), que gestiona el estado de búsqueda y filtros activos y devuelve la lista filtrada.
TargetaRecepta.jsx — Componente de tarjeta. Muestra imagen, insignia de origen, nombre, minutos/raciones y un botón de favorito (corazón) con estado local.
App.css — Estilos de los componentes de la app (pantallas, buscador, filtros, tarjetas, barra de navegación).
index.css — Estilos globales: reset, tipografía, colores base y fondos.



# Esquema de conexión

         main.jsx
         └── App.jsx
               ├── PantallaReceptes
               │     ├── getReceptes()        ← receptes.js
               │     ├── filtreReceptes()     ← filtreReceptes.js
               │     │     └── FILTRES        ← filtreReceptes.js
               │     └── TargetaRecepta       ← TargetaRecepta.jsx
               ├── PantallaBalanc
               └── PantallaPerfil


               Estilos:  App.jsx → App.css
               main.jsx → index.css
