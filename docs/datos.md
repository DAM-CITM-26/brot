# Dades de l'aplicació

De moment les dades del projecte són estàtiques i es guarden en local dins de `src/data/receptes.js` (un array de 10 receptes vegetarianes de prova que es retorna amb `getReceptes()`).

## Estructura d'una recepta

Cada recepta és un objecte amb aquests camps:

- `id` (number): identificador únic de la recepta.
- `nom` (string): títol de la recepta.
- `origen` (string): indica d'on prové la recepta. Pot ser `"app"`, `"meves"` o `"comunitat"`.
- `minuts` (number): temps de preparació en minuts.
- `racions` (number): nombre de racions.
- `imatge` (string): ruta de la imatge dins la carpeta `public/`.
- `etiquetes` (array de strings): llista d'etiquetes per poder filtrar la recepta (`"sense-lactics"`, `"alt-proteines"`, `"sense-fruits-secs"`).

Exemple:

```js
{
  id: 1,
  nom: "Cigrons amb espinacs",
  origen: "app",
  minuts: 25,
  racions: 2,
  imatge: "./cigrons.png",
  etiquetes: ["sense-lactics", "alt-proteines", "sense-fruits-secs"],
}
```

## Filtres

Els filtres estan definits a `src/utils/filtreReceptes.js` dins la constant `FILTRES`:

- `sense-lactics`: comprova si `etiquetes` inclou `"sense-lactics"`.
- `menys-30`: comprova si `minuts < 30`.
- `alt-proteines`: comprova si `etiquetes` inclou `"alt-proteines"`.
- `sense-fruits-secs`: comprova si `etiquetes` inclou `"sense-fruits-secs"`.

Es poden activar diversos filtres alhora i combinar-los amb la cerca per nom.

## Estat local

Ara mateix no hi ha base de dades ni persistència; tot es gestiona amb `useState`:

- `pestanya` (`src/App.jsx`): pestanya activa de la navegació (`"receptes"`, `"balanc"` o `"perfil"`).
- `cerca` i `filtresActius` (`src/pages/PantallaReceptes.jsx`): text escrit al cercador i llista d'identificadors dels filtres activats. Les receptes es filtren amb la funció pura `filtrarReceptes(receptes, cerca, filtresActius)` de `src/utils/filtreReceptes.js`.
- `guardada` (`src/components/TargetaRecepta.jsx`): booleà per marcar o desmarcar una recepta com a guardada.
