import { useState, useEffect } from "react";
import Pantalla from "../components/Pantalla";
import TargetaRecepta from "../components/TargetaRecepta";
import { getReceptes } from "../data/receptes";
import { obtenirReceptes } from "../services/receptesApi";
import { FILTRES, filtrarReceptes } from "../utils/filtreReceptes";

export default function PantallaReceptes() {
  const [cerca, setCerca] = useState("");
  const [filtresActius, setFiltresActius] = useState([]);
  const [receptes, setReceptes] = useState([]);
  const [carregant, setCarregant] = useState(true);

  useEffect(() => {
    obtenirReceptes()
      .then(setReceptes)
      .catch((error) => {
        console.error(error);
        setReceptes(getReceptes()); // si falla la API, usamos las recetas locales
      })
      .finally(() => setCarregant(false));
  }, []);

  const alternaFiltre = (id) => {
    setFiltresActius((actius) =>
      actius.includes(id) ? actius.filter((f) => f !== id) : [...actius, id]
    );
  };

  const receptesFiltrades = filtrarReceptes(receptes, cerca, filtresActius);

  return (
    <Pantalla titol="Receptes">
      <div>
        <label className="buscador">
          <svg
            className="buscador-icona"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="10.5" cy="10.5" r="6.5" />
            <line x1="15.5" y1="15.5" x2="21" y2="21" />
          </svg>
          <input
            type="search"
            placeholder="Cerca receptes vegetarianes"
            aria-label="Cerca receptes vegetarianes"
            value={cerca}
            onChange={(e) => setCerca(e.target.value)}
          />
        </label>

        <div className="filtres">
          {FILTRES.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filtre ${filtresActius.includes(f.id) ? "filtre-actiu" : ""}`}
              onClick={() => alternaFiltre(f.id)}
              aria-pressed={filtresActius.includes(f.id)}
            >
              {f.text}
            </button>
          ))}
        </div>

        <div className="llista">
          {carregant && <p>Carregant receptes…</p>}
          {receptesFiltrades.map((r) => (
            <TargetaRecepta key={r.id} recepta={r} />
          ))}
          {!carregant && receptesFiltrades.length === 0 && (
            <p>No s'ha trobat cap recepta.</p>
          )}
        </div>
      </div>
    </Pantalla>
  );
}