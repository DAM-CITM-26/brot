import { useState } from "react";

export default function TargetaRecepta({ recepta }) {
  const [guardada, setGuardada] = useState(false);

  return (
    <article className="targeta">
      <img src={recepta.imatge} alt={recepta.nom} className="targeta-imatge" />

      <div className="targeta-info">
        <span className={`insignia insignia-${recepta.origen}`}>
          {recepta.origen.toUpperCase()}
        </span>
        <h2 className="targeta-nom">{recepta.nom}</h2>
        <p className="targeta-meta">
          {recepta.minuts} min - {recepta.racions} racions
        </p>
      </div>

      <button className="targeta-guardar" onClick={() => setGuardada(!guardada)}>
        {guardada ? "GUARDADA" : "GUARDAR"}
      </button>
    </article>
  );
}
