import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

function LineGraph({ userData, guestData }) {
  const data = [
    { name: "Jan", user: userData[0], guest: guestData[0] },
    { name: "Feb", user: userData[1], guest: guestData[1] },
    { name: "Mar", user: userData[2], guest: guestData[2] },
    { name: "Apr", user: userData[3], guest: guestData[3] },
  ];

  return (
    <LineChart
      width={1000}
      height={200}
      data={data}
      margin={{ top: 30, right: 35, left: 10, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      
      <Tooltip />

      <Line
        type="monotone"
        dataKey="user"
        stroke="green"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="guest"
        stroke="pink"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}

export default LineGraph;
