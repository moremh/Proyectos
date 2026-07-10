function Sidebar() {
  return (
    <div
      className="bg-white border-end p-3"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <h5 className="mb-4">Menú</h5>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <a href="#" className="nav-link">
            📊 Dashboard
          </a>
        </li>

        <li className="nav-item mb-2">
          <a href="#" className="nav-link">
            💰 Ingresos
          </a>
        </li>

        <li className="nav-item mb-2">
          <a href="#" className="nav-link">
            💸 Gastos
          </a>
        </li>

        <li className="nav-item mb-2">
          <a href="#" className="nav-link">
            📈 Reportes
          </a>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;