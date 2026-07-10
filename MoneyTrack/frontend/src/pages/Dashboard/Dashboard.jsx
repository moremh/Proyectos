import styles from "./Dashboard.module.css";
import StatCard from "../../components/dashboard/StatCard";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Bienvenido, More 👋</h1>

      <p className={styles.subtitle}>
        Controla tus ingresos, gastos y objetivos financieros desde un solo lugar.
      </p>

      <div className={styles.cardsGrid}>
  <StatCard
    title="Saldo Total"
    value="$185.000"
    icon="bi bi-wallet2"
    color="#2563eb"
  />

  <StatCard
    title="Ingresos"
    value="$240.000"
    icon="bi bi-arrow-down-circle"
    color="#22c55e"
  />

  <StatCard
    title="Gastos"
    value="$55.000"
    icon="bi bi-arrow-up-circle"
    color="#ef4444"
  />

  <StatCard
    title="Ahorros"
    value="$60.000"
    icon="bi bi-piggy-bank"
    color="#f59e0b"
  />
</div>
    </div>
  );
}

export default Dashboard;