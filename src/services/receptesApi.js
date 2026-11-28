const CLAU = import.meta.env.VITE_SPOONACULAR_KEY;
const URL_API = "https://api.spoonacular.com/recipes/complexSearch";
const CLAU_CACHE = "brot-receptes";

// Palabras que indican que un ingrediente es un fruto seco
const FRUITS_SECS = ["almond", "walnut", "hazelnut", "cashew", "pistachio", "pecan", "pine nut", "macadamia"];

// Busca un nutriente por nombre dentro de la lista y devuelve su cantidad
function buscarNutrient(nutrients, nom) {
  const trobat = nutrients.find((n) => n.name.toLowerCase().includes(nom));
  return trobat ? trobat.amount : null;
}

// Traduce una receta de Spoonacular al formato que ya usa tu app
function adaptarRecepta(r) {
  const nutrients = r.nutrition?.nutrients ?? [];
  const ingredients = r.nutrition?.ingredients ?? [];

  const proteines = buscarNutrient(nutrients, "protein") ?? 0;
  const tensFruitsSecs = ingredients.some((i) =>
    FRUITS_SECS.some((f) => i.name.toLowerCase().includes(f))
  );

  const etiquetes = [];
  if (r.dairyFree) etiquetes.push("sense-lactics");
  if (proteines >= 15) etiquetes.push("alt-proteines");
  if (!tensFruitsSecs) etiquetes.push("sense-fruits-secs");

  return {
    id: r.id,
    nom: r.title,
    origen: "app",
    minuts: r.readyInMinutes,
    racions: r.servings,
    imatge: r.image,
    etiquetes,
    // Preparado para el paso 2 (Balance). Si un nutriente no existe, queda en null.
    nutrients: {
      b12: buscarNutrient(nutrients, "vitamin b12"),
      ferro: buscarNutrient(nutrients, "iron"),
      omega3: buscarNutrient(nutrients, "omega"),
    },
  };
}

async function carregar() {
  // 1. Si ya las pedimos antes, las reutilizamos y no gastamos puntos
  const guardades = localStorage.getItem(CLAU_CACHE);
  if (guardades) return JSON.parse(guardades);

  // 2. Si no, las pedimos a la API
  const url = `${URL_API}?diet=vegetarian&number=10&addRecipeNutrition=true&apiKey=${CLAU}`;
  const resposta = await fetch(url);
  if (!resposta.ok) throw new Error(`Error de l'API: ${resposta.status}`);

  const dades = await resposta.json();
  const receptes = dades.results.map(adaptarRecepta);

  // 3. Las guardamos en el navegador para la próxima vez
  localStorage.setItem(CLAU_CACHE, JSON.stringify(receptes));
  return receptes;
}

// Si dos partes de la app la llaman a la vez, comparten la misma petición
let peticio = null;
export function obtenirReceptes() {
  if (!peticio) peticio = carregar();
  return peticio;
}