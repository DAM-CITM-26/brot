# Components

L'aplicació està dividida en pàgines (`src/pages/`) i components reutilitzables (`src/components/`).

## Estructura general

```text
App
├── PantallaReceptes
│   └── Pantalla
│       └── TargetaRecepta
├── PantallaBalanc
│   └── Pantalla
│       └── PantallaEnConstruccio
├── PantallaPerfil
│   └── Pantalla
│       └── PantallaEnConstruccio
└── BarraNavegacio
```

## Arrel

- **`App`** (`src/App.jsx`): guarda la pestanya activa (`pestanya`) i mostra la pàgina corresponent juntament amb la barra de navegació inferior.

## Pàgines (`src/pages/`)

- **`PantallaReceptes`** (`src/pages/PantallaReceptes.jsx`): pantalla principal. Carrega les receptes des de `src/data/receptes.js`, guarda l'estat de `cerca` i `filtresActius` amb `useState`, filtra la llista amb `filtrarReceptes` de `src/utils/filtreReceptes.js`, i mostra la llista de `TargetaRecepta` (o un missatge si no hi ha resultats).
- **`PantallaBalanc`** (`src/pages/PantallaBalanc.jsx`): pantalla de "Balanç setmanal". De moment mostra `PantallaEnConstruccio`.
- **`PantallaPerfil`** (`src/pages/PantallaPerfil.jsx`): pantalla de "Perfil". De moment mostra `PantallaEnConstruccio`.

## Components (`src/components/`)

- **`Pantalla`** (`src/components/Pantalla.jsx`): contenidor comú de totes les pantalles amb la capçalera fixa i el cos.
  - Props: `titol` (text de la capçalera) i `children` (contingut de la pantalla).
- **`TargetaRecepta`** (`src/components/TargetaRecepta.jsx`): mostra una recepta individual amb la imatge, la insígnia d'origen, el nom, els minuts, les racions i el botó de guardar (`♡` / `♥`).
  - Props: `recepta` (objecte amb les dades de la recepta).
- **`BarraNavegacio`** (`src/components/BarraNavegacio.jsx`): barra inferior fixa per canviar entre les pestanyes de Receptes, Balanç i Perfil.
  - Props: `pestanya` (pestanya activa) i `setPestanya` (funció per canviar-la).
- **`PantallaEnConstruccio`** (`src/components/PantallaEnConstruccio.jsx`): imatge provisional per a les pantalles que encara no estan fetes.
