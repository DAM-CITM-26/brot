import { useState } from "react";
import "./App.css";

const PESTANYES = [
  { id: "receptes", etiqueta: "Receptes", icona: "/receptes.svg" },
  { id: "balanc", etiqueta: "Balanç", icona: "/balanc.svg" },
  { id: "perfil", etiqueta: "Perfil", icona: "/perfil.svg" },
];

const IMATGE_CONSTRUCCIO = "\Hello Kitty en construcción.png";

function Pantalla({ titol, children }) {
  return (
    <div className="pantalla">
      <h1 className="titol">{titol}</h1>
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
  return <Pantalla titol="Receptes" />;
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

  return (
    <div className="app">
      <main>
        {pestanya === "receptes" && <PantallaReceptes />}
        {pestanya === "balanc" && <PantallaBalanc />}
        {pestanya === "perfil" && <PantallaPerfil />}
      </main>

      <nav className="barra">
        {PESTANYES.map((p) => (
          <button
            key={p.id}
            className={`pestanya ${pestanya === p.id ? "activa" : ""}`}
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