import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#4267B2", "#833AB4", "#FF0000"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PromotionPlatformsChart = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="flex items-center gap-5 mt-5">
        <div className="flex items-center gap-2">
          <p className="h-3 w-3 rounded-full bg-[#4267B2]"></p>
          <p className="text-gray-500 text-sm">Facebook</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="h-3 w-3 rounded-full bg-[#833AB4]"></p>
          <p className="text-gray-500 text-sm">Instagram</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="h-3 w-3 rounded-full bg-[#FF0000]"></p>
          <p className="text-gray-500 text-sm">Youtube</p>
        </div>
      </div>
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="count"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PromotionPlatformsChart;
