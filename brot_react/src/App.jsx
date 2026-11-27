import { useState } from "react";
import "./App.css";
import "./index.css";
import BarraNavegacio from "./components/BarraNavegacio";
import PantallaReceptes from "./pages/PantallaReceptes";
import PantallaBalanc from "./pages/PantallaBalanc";
import PantallaPerfil from "./pages/PantallaPerfil";

export default function App() {
  const [pestanya, setPestanya] = useState("receptes");

  return (
    <div className="app">
      <main>
        {pestanya === "receptes" && <PantallaReceptes />}
        {pestanya === "balanc" && <PantallaBalanc />}
        {pestanya === "perfil" && <PantallaPerfil />}
      </main>

      <BarraNavegacio pestanya={pestanya} setPestanya={setPestanya} />
    </div>
  );
}
