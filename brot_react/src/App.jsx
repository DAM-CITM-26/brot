import { useState } from "react";
import "./App.css";
import "./index.css";
import { getReceptes } from "./receptes.jsx";
import TargetaRecepta from "./TargetaRecepta";

const PESTANYES = [
  { id: "receptes", etiqueta: "Receptes", icona: "/receptes.svg" },
  { id: "balanc", etiqueta: "Balanç", icona: "/balanc.svg" },
  { id: "perfil", etiqueta: "Perfil", icona: "/perfil.svg" },
];

const IMATGE_CONSTRUCCIO = "\Hello Kitty en construcción.png";

function Pantalla({ titol, children }) {
  return (
    <div className="pantalla">
      <header className="capcalera">
        <h1 className="titol">{titol}</h1>
      </header>
      <div className="cos">{children}</div>
    </div>
  );
}

function PantallaEnConstruccio() {
  return (
    <img
      src={IMATGE_CONSTRUCCIO}
      alt="En construcció"
      className="imatge-construccio"
    />
  );
}

function PantallaReceptes() {
  const receptes = getReceptes();
  const [cerca, setCerca] = useState("");

  const receptesFiltrades = receptes.filter((r) =>
    r.nom.toLowerCase().includes(cerca.toLowerCase().trim())
  );

  return (
    <Pantalla titol="Receptes">
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
          value={cerca}
          onChange={(e) => setCerca(e.target.value)}
        />
      </label>

      <div className="llista">
        {receptesFiltrades.map((r) => (
          <TargetaRecepta key={r.id} recepta={r} />
        ))}
      </div>
    </Pantalla>
  );
}


function PantallaBalanc() {
  return (
    <Pantalla titol="Balanç setmanal">
      <PantallaEnConstruccio />
    </Pantalla>
  );
}

function PantallaPerfil() {
  return (
    <Pantalla titol="Perfil">
      <PantallaEnConstruccio />
    </Pantalla>
  );
}

export default function App() {
  const [pestanya, setPestanya] = useState("receptes");
  const indexActiu = PESTANYES.findIndex((p) => p.id === pestanya);

  return (
    <div className="app">
      <main>
        {pestanya === "receptes" && <PantallaReceptes />}
        {pestanya === "balanc" && <PantallaBalanc />}
        {pestanya === "perfil" && <PantallaPerfil />}
      </main>

      <nav className="barra">
        <div
          className="indicador"
          style={{ transform: `translateX(${indexActiu * 100}%)` }} //mir
        />
        {PESTANYES.map((p) => (
          <button
            key={p.id}
            className={`pestanya ${pestanya === p.id ? "activa" : ""}`} //mir
            onClick={() => setPestanya(p.id)}
          >
            <img src={p.icona} alt="" className="icona" />
            <span>{p.etiqueta}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}