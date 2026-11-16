import { useState } from "react";
import "./App.css";

const PESTANYES = [
  { id: "receptes", etiqueta: "Receptes", icona: "/receptes.svg" },
  { id: "balanc", etiqueta: "Balanç", icona: "/balanc.svg" },
  { id: "perfil", etiqueta: "Perfil", icona: "/perfil.svg" },
];

function PantallaReceptes() {
  return <div className="pantalla" />;
}
function PantallaBalanc() {
  return <div className="pantalla" />;
}
function PantallaPerfil() {
  return <div className="pantalla" />;
}

export default function App() {
  const [pestanya, setPestanya] = useState("receptes");

  return (
    <div className="app">
      <main className="contingut">
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