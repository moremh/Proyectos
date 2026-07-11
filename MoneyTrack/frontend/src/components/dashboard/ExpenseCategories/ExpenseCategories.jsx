import styles from "./ExpenseCategories.module.css";

function ExpenseCategories() {
  return (
    <div className={styles.card}>
      <h2>Gastos por categoría</h2>

      <div className={styles.item}>
        🍔 Comida
      </div>

      <div className={styles.item}>
        🚗 Transporte
      </div>

      <div className={styles.item}>
        🏠 Hogar
      </div>

      <div className={styles.item}>
        🎮 Ocio
      </div>
    </div>
  );
}

export default ExpenseCategories;