import React from "react";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

export default function SalesBarChart({graphData}) {
  return (
    <ResponsiveContainer width="100%" height={165}>
      <BarChart

        data={graphData}
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
          barSize={15}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
