import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import sidebarMenu from "../../data/sidebarMenu";

function Sidebar({ isOpen }) {
  return (
    <aside
      className={`${styles.sidebar} ${
        !isOpen ? styles.sidebarCollapsed : ""
    }`}
    >
      <div>
        <div className={styles.logo}>
          <i className="bi bi-wallet2 fs-3"></i>

          {isOpen && <h2>MoneyTrack</h2>}
        </div>

        <nav className={styles.nav}>
          {sidebarMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              <i className={item.icon}></i>

              {isOpen && item.title}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className={styles.footer}>
        <div className={styles.user}>
          👤

          {isOpen && " More"}
        </div>

        {isOpen && (
          <div className={styles.role}>
            Usuario
        </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;