import styles from "./Dashboard.module.css";
import StatCard from "../../components/dashboard/StatCard/StatCard";
import BalanceChart from "../../components/dashboard/BalanceChart/BalanceChart";
import RecentTransactions from "../../components/dashboard/RecentTransactions/RecentTransactions";
import ExpenseCategories from "../../components/dashboard/ExpenseCategories/ExpenseCategories";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
        <div className={styles.header}>
            <h1 className={styles.title}>
                Bienvenido, More 👋
            </h1>

            <p className={styles.subtitle}>
                Aquí tienes un resumen actualizado de tu actividad financiera.
            </p>
        </div>
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
    <section className={styles.chartSection}>
        <h2 className={styles.chartTitle}>
            Balance mensual
        </h2>

        <BalanceChart />
    </section>

        <div className={styles.bottomGrid}>
            <RecentTransactions />

            <ExpenseCategories />
        </div>
    </div>
  );
}

export default Dashboard;