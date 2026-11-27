const PESTANYES = [
  { id: "receptes", etiqueta: "Receptes", icona: "./receptes.svg" },
  { id: "balanc", etiqueta: "Balanç", icona: "./balanc.svg" },
  { id: "perfil", etiqueta: "Perfil", icona: "./perfil.svg" },
];

export default function BarraNavegacio({ pestanya, setPestanya }) {
  const indexActiu = PESTANYES.findIndex((p) => p.id === pestanya);

  return (
    <nav className="barra">
      <div
        className="indicador"
        style={{ transform: `translateX(${indexActiu * 100}%)` }}
      />
      {PESTANYES.map((p) => (
        <button
          key={p.id}
          type="button"
          className={p.id === pestanya ? "pestanya activa" : "pestanya"}
          onClick={() => setPestanya(p.id)}
        >
          <img src={p.icona} alt="" className="icona" />
          <span>{p.etiqueta}</span>
        </button>
      ))}
    </nav>
  );
}
