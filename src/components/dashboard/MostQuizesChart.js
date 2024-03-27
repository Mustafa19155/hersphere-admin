import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis } from "recharts";

export default function MostQuizesChart({ usersData, screenWidth }) {
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
      data={usersData}
    >
      <XAxis dataKey="name" tickLine={false} axisLine={false} stroke="white" />
      <YAxis
        allowDecimals={false}
        tickLine={false}
        axisLine={false}
        stroke="white"
      />
      <Bar dataKey="value" fill="#31CD63" barSize={screenWidth / 50} />
    </BarChart>
  );
}
