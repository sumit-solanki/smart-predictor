import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "mon",
    pv: 0
  },
  {
    name: "Tue",
    pv: 25
  },
  {
    name: "wed",
    pv: 50
  },
  {
    name: "thus",
    pv: 75
  },
  {
    name: "fri",
    pv: 80
  },
  {
    name: "sat",
    pv: 90
  },
  {
    name: "sun",
    pv: 100
  }
];

export default function RevenueLineChart() {
  return (
    <LineChart
      width={370}
      height={125}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#0E9CFF"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
