# brot.

Aplicació web feta amb React i Vite per explorar, cercar i filtrar receptes vegetarianes.

## Què inclou ara mateix

- Llistat de receptes vegetarianes amb imatge, origen (`app`, `meves` o `comunitat`), temps de preparació i racions.
- Cercador de receptes per nom.
- Filtres combinables (sense làctics, menys de 30 minuts, alt en proteïnes i sense fruits secs).
- Botó per marcar receptes com a guardades.
- Barra de navegació inferior amb les pestanyes de Receptes, Balanç setmanal (en construcció) i Perfil (en construcció).

## Estructura del projecte

```text
├── docs/
│   ├── componentes.md
│   └── datos.md
├── public/                 # Imatges de les receptes i icones
└── src/
    ├── components/         # Components reutilitzables (Pantalla, TargetaRecepta, BarraNavegacio, PantallaEnConstruccio)
    ├── pages/              # Pantalles principals (PantallaReceptes, PantallaBalanc, PantallaPerfil)
    ├── data/               # Dades de prova (receptes.js)
    ├── utils/              # Lògica de cerca i filtres (filtreReceptes.js)
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx
```

## Com executar el projecte

1. Instal·lar les dependències:

```bash
npm install
```

2. Obrir el servidor de desenvolupament:

```bash
npm run dev
```

3. Generar la versió de producció:

```bash
npm run build
```

## Documentació

- [Dades](docs/datos.md)
- [Components](docs/componentes.md)
