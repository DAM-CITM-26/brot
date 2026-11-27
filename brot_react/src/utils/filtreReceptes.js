export const FILTRES = [
  {
    id: "sense-lactics",
    text: "Sense làctics",
    compleix: (r) => r.etiquetes?.includes("sense-lactics"),
  },
  {
    id: "menys-30",
    text: "Menys de 30 minuts",
    compleix: (r) => r.minuts < 30,
  },
  {
    id: "alt-proteines",
    text: "Alt en proteïnes",
    compleix: (r) => r.etiquetes?.includes("alt-proteines"),
  },
  {
    id: "sense-fruits-secs",
    text: "Sense fruits secs",
    compleix: (r) => r.etiquetes?.includes("sense-fruits-secs"),
  },
];

export function filtrarReceptes(receptes, cerca, filtresActius) {
  return receptes.filter((r) => {
    const coincideixNom = r.nom
      .toLowerCase()
      .includes(cerca.toLowerCase().trim());

    const compleixFiltres = FILTRES.filter((f) =>
      filtresActius.includes(f.id)
    ).every((f) => f.compleix(r));

    return coincideixNom && compleixFiltres;
  });
}
