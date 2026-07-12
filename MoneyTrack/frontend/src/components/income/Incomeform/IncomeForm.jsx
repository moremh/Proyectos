import { useState } from "react";
import styles from "./IncomeForm.module.css";

function IncomeForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({
      id: Date.now(),
      description,
      amount: Number(amount),
      category,
      date: new Date().toISOString().split("T")[0]
    });

    setDescription("");
    setAmount("");
    setCategory("");
  };

  return (
  <form className={styles.form} onSubmit={handleSubmit}>

    <div className={styles.group}>
      <label>Descripción</label>

      <input
        className={styles.input}
        type="text"
        placeholder="Ej: Sueldo"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>

    <div className={styles.group}>
      <label>Monto</label>

      <input
        className={styles.input}
        type="number"
        placeholder="Ej: 250000"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>

    <div className={styles.group}>
      <label>Categoría</label>

      <select
        className={styles.input}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Seleccione...</option>
        <option value="Trabajo">Trabajo</option>
        <option value="Freelance">Freelance</option>
        <option value="Ventas">Ventas</option>
        <option value="Inversiones">Inversiones</option>
        <option value="Otros">Otros</option>
      </select>
    </div>

    <button className={styles.button} type="submit">
      <i className="bi bi-plus-circle"></i> Agregar ingreso
    </button>

  </form>
);
}

export default IncomeForm;