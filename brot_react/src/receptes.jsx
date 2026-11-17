export const receptes = [
  {
    id: 1,
    nom: "Cigrons amb espinacs",
    origen: "app",
    minuts: 25,
    racions: 2,
    imatge: "",
  },
  {
    id: 2,
    nom: "Bol de tofu i quinoa",
    origen: "app",
    minuts: 35,
    racions: 2,
    imatge: "",
  },
  {
    id: 3,
    nom: "Crema de carbassa",
    origen: "meves",
    minuts: 30,
    racions: 1,
    imatge: "",
  },
  {
    id: 4,
    nom: "Lasanya de verdures",
    origen: "comunitat",
    minuts: 50,
    racions: 2,
    imatge: "",
  },
  {
    id: 5,
    nom: "Macarrons amb pesto",
    origen: "comunitat",
    minuts: 50,
    racions: 2,
    imatge: "",
  },
];

export function getReceptes() {
  return receptes;
}