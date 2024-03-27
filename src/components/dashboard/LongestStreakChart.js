import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis } from "recharts";

export default function LongestStreakChart({ usersData, screenWidth }) {
  return (
    <BarChart
      width={screenWidth > 991 ? screenWidth / 2.7 : screenWidth / 1.3}
      height={
        screenWidth > 1400
          ? screenWidth / 5
          : screenWidth > 991
          ? screenWidth / 4
          : screenWidth > 767
          ? screenWidth / 3
          : screenWidth / 2
      }
      layout="vertical"
      data={usersData}
    >
      <YAxis
        dataKey="name"
        type="category"
        tickLine={false}
        axisLine={false}
        stroke="white"
      />
      <XAxis
        type="number"
        dataKey="longest_streak"
        allowDecimals={false}
        tickLine={false}
        axisLine={false}
        stroke="white"
      />
      <Bar
        dataKey="longest_streak"
        fill="#E87800"
        barSize={screenWidth / 45}
      ></Bar>
    </BarChart>
  );
}
