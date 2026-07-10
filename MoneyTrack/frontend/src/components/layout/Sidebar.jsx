import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        minHeight: "calc(100vh - 70px)",
        borderRight: "1px solid #ddd",
        padding: "20px"
      }}
    >
      <nav>
        <p><Link to="/">Dashboard</Link></p>
        <p><Link to="/income">Ingresos</Link></p>
        <p><Link to="/expenses">Gastos</Link></p>
        <p><Link to="/categories">Categorías</Link></p>
        <p><Link to="/goals">Objetivos</Link></p>
        <p><Link to="/reports">Reportes</Link></p>
        <p><Link to="/settings">Configuración</Link></p>
      </nav>
    </aside>
  );
}

export default Sidebar;