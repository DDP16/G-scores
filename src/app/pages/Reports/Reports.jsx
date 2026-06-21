import React from "react";
import { motion } from "framer-motion";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { reportData } from "../../../mocks/mockData";

const chartData = reportData.map((r) => ({
  subject: r.subject.split(" ")[0],
  level1: r.excellent,
  level2: r.good,
  level3: r.average,
  level4: r.poor,
}));

export default function Reports() {
  return (
    <motion.div 
      className="justify-center items-center flex-1 flex flex-col p-6 space-y-6"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-3xl font-bold">Reports</h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-xl shadow-md border border-black/5 p-6 w-full"
        style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
      >
        <h2 className="font-semibold font-rubik mb-5">
          Statistics of the number of students with scores in the above 4 levels by subjects
        </h2>
        <ResponsiveContainer width="100%" height={360}>
          <BarChart
            data={chartData}
            barGap={6}
            barSize={30}
            margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f0f2f7"
              vertical={false}
            />
            <XAxis
              dataKey="subject"
              tick={{ fontSize: 11, fill: "#5a6480" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#5a6480" }}
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 10,
                border: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                fontSize: 12,
              }}
            />
            <Legend
              wrapperStyle={{
                fontSize: 12,
                paddingTop: 12,
              }}
            />
            <Bar dataKey="level1" fill="#0f2d84" radius={[5, 5, 0, 0]} name="Excellent (>= 8)" />
            <Bar dataKey="level2" fill="#0d9488" radius={[5, 5, 0, 0]} name="Good (6 - 8)" />
            <Bar dataKey="level3" fill="#f59e0b" radius={[5, 5, 0, 0]} name="Average (4 - 6)" />
            <Bar dataKey="level4" fill="#ef4444" radius={[5, 5, 0, 0]} name="Poor (< 4)" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
}
