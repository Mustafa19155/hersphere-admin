import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

// const data = [
//   {
//     name: "28 April",
//     users: 4,
//   },
//   {
//     name: "29 April",
//     users: 3,
//   },
//   {
//     name: "30 April",
//     users: 4,
//   },
//   {
//     name: "01 April",
//     users: 0,
//   },
//   {
//     name: "02 April",
//     users: 2,
//   },
//   {
//     name: "03 April",
//     users: 1,
//   },
//   {
//     name: "04 April",
//     users: 1,
//   },
// ];

const UsersJoinedChart = ({ data }) => {
  return (
    // <ResponsiveContainer width="100%" height="100%">
    <BarChart width={550} height={350} data={data}>
      <Bar dataKey="count" fill="#13B887" barSize={15} />
      <XAxis
        dataKey="date"
        tickLine={false}
        tickMargin={10}
        color="black"
        stroke="black"
      />
      <YAxis
        allowDecimals={false}
        tickLine={false}
        axisLine={false}
        color="black"
        stroke="black"
      />
    </BarChart>
    // </ResponsiveContainer>
  );
};

export default UsersJoinedChart;

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { BarChart, Bar, Cell, XAxis, YAxis } from "recharts";

// export default function UsersJoinedChart({ screenWidth }) {
//   const data = [
//     {
//       name: "22-07-2024",
//       users: 4000,
//     },
//     {
//       name: "22-07-2024",
//       users: 3000,
//     },
//     {
//       name: "22-07-2024",
//       users: 2000,
//     },
//     {
//       name: "22-07-2024",
//       users: 2780,
//     },
//     {
//       name: "22-07-2024",
//       users: 1890,
//     },
//     {
//       name: "22-07-2024",
//       users: 2390,
//     },
//     {
//       name: "22-07-2024",
//       users: 3490,
//     },
//   ];

//   return (
//     <BarChart
//       width={screenWidth > 991 ? screenWidth / 2.7 : screenWidth / 1.3}
//       height={
//         screenWidth > 1400
//           ? screenWidth / 5
//           : screenWidth > 991
//           ? screenWidth / 4
//           : screenWidth > 767
//           ? screenWidth / 3
//           : screenWidth / 2
//       }
//       data={data}
//     >
//       <XAxis dataKey="name" tickLine={false} axisLine={false} stroke="white" />
//       <YAxis
//         allowDecimals={false}
//         tickLine={false}
//         axisLine={false}
//         stroke="white"
//       />
//       <Bar dataKey="users" fill="#31CD63" barSize={screenWidth / 50} />
//     </BarChart>
//   );
// }
