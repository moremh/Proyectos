import styles from "./Card.module.css";

function Card({ title, children }) {
  return (
    <div className={styles.card}>
      {title && <h3 className={styles.title}>{title}</h3>}

      {children}
    </div>
  );
}

export default Card;