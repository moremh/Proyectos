import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { mes: "Ene", ingresos: 150000, gastos: 90000 },
  { mes: "Feb", ingresos: 180000, gastos: 100000 },
  { mes: "Mar", ingresos: 200000, gastos: 130000 },
  { mes: "Abr", ingresos: 240000, gastos: 120000 },
  { mes: "May", ingresos: 210000, gastos: 110000 },
  { mes: "Jun", ingresos: 260000, gastos: 140000 },
];

function BalanceChart() {
  return (
    <div style={{ width: "100%", height: 350 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="mes" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="ingresos"
            stroke="#22c55e"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="gastos"
            stroke="#ef4444"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BalanceChart;