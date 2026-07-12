import { useState } from "react";

import { incomes as fakeIncomes } from "../../data/fakeData";

import IncomeForm from "../../components/income/IncomeForm/IncomeForm";
import IncomeTable from "../../components/income/IncomeTable/IncomeTable";

import Card from "../../components/common/Card/Card";

function Income() {

  const [incomes,setIncomes]=useState(fakeIncomes);

  const addIncome=(income)=>{
    setIncomes([income,...incomes]);
  };

  const deleteIncome=(id)=>{
    setIncomes(incomes.filter(i=>i.id!==id));
  };

  return(
    <>

      <h1>Ingresos</h1>

      <Card title="Nuevo ingreso">
        <IncomeForm onAdd={addIncome} />
      </Card>

      <Card title="Lista de ingresos">
        <IncomeTable
          incomes={incomes}
          onDelete={deleteIncome}
        />
      </Card>

    </>
  );
}

export default Income;