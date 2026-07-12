function IncomeTable({ incomes, onDelete }) {
  return (
    <table>

      <thead>
        <tr>
          <th>Descripción</th>
          <th>Categoría</th>
          <th>Fecha</th>
          <th>Monto</th>
          <th></th>
        </tr>
      </thead>

      <tbody>

        {incomes.map((income)=>(
          <tr key={income.id}>

            <td>{income.description}</td>

            <td>{income.category}</td>

            <td>{income.date}</td>

            <td>${income.amount}</td>

            <td>

              <button
                onClick={()=>onDelete(income.id)}
              >
                Eliminar
              </button>

            </td>

          </tr>
        ))}

      </tbody>

    </table>
  );
}

export default IncomeTable;