export default function Pantalla({ titol, children }) {
  return (
    <div className="pantalla">
      <header className="capcalera">
        <h1 className="titol">{titol}</h1>
      </header>
      <div className="cos">{children}</div>
    </div>
  );
}
