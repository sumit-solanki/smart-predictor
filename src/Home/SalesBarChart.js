import React from "react";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    pv: 2400,
    amt: 2400,
  },
  {
    pv: 1398,
    amt: 2210,
  },
  {
    pv: 9800,
    amt: 2290,
  },
  {
    pv: 3908,
    amt: 2000,
  },
  {
    pv: 4800,
    amt: 2181,
  },
  {
    pv: 3800,
    amt: 2500,
  },
  {
    pv: 4300,
    amt: 2100,
  },
  {
    pv: 2400,
    amt: 2400,
  },
  {
    pv: 1398,
    amt: 2210,
  },
];

export default function SalesBarChart() {
  return (
    <ResponsiveContainer width="95%" height={200}>
      <BarChart
        // width={"100%"}
        // height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Tooltip />
        <Bar
          dataKey="pv"
          stroke-linecap="round"
          fill="#00B0FF"
          background={{ fill: "#F8FAFC" }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
