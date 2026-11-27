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
          {recepta.minuts} min - {recepta.racions} {recepta.racions === 1 ? "ració" : "racions"}
        </p>
      </div>

      <button
        type="button"
        className="targeta-guardar"
        onClick={() => setGuardada(!guardada)}
        aria-label={guardada ? "Treure de guardades" : "Guardar recepta"}
      >
        {guardada ? "♥" : "♡"}
      </button>
    </article>
  );
}
