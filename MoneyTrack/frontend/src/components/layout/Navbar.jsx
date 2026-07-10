import styles from "./Navbar.module.css";

function Navbar({ toggleSidebar }) {
  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <button
          className={styles.menuButton}
          onClick={toggleSidebar}
        >
          <i className="bi bi-list"></i>
        </button>

        <h5>MoneyTrack</h5>
      </div>

      <div className={styles.right}>
        <i className={`bi bi-search ${styles.icon}`}></i>

        <i className={`bi bi-bell ${styles.icon}`}></i>

        <div className={styles.user}>
          <i className="bi bi-person-circle"></i>
          <span>More</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;