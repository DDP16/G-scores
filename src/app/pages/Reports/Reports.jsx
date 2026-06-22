import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { reportData } from "../../../mocks/mockData";
import { useDispatch, useSelector } from "react-redux";
import { getReport, getTop10GroupA } from "../../modules/scoresService";
import { Spin, Table } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const subjectsName = Object.freeze({
  toan: 'Math',
  vat_li: 'Physics',
  hoa_hoc: 'Chemistry',
  ngu_van: 'Literature',
  ngoai_ngu: 'Foreign Language',
  sinh_hoc: 'Biology',
  lich_su: 'History',
  dia_li: 'Geography',
  gdcd: 'Civic Education',
});

export default function Reports() {
  const dispatch = useDispatch();
  const report = useSelector((state) => state.scores.report);
  const top10 = useSelector((state) => state.scores.top10);
  const status = useSelector((state) => state.scores.status);
  const [chartData, setChartData] = React.useState([]);

  useEffect(() => {
    if (!report) {
      dispatch(getReport());
    }
    if (!top10) {
      dispatch(getTop10GroupA());
    }
  }, []);

  useEffect(() => {
    if (report) {
      console.log(report?.data);
      const data = report?.data.map((r) => ({
        subject: subjectsName[r.subject] || r.subject,
        level1: r.ge8,
        level2: r.from6to8,
        level3: r.from4to6,
        level4: r.lt4,
      }));
      setChartData(data);
      console.log("chartData:", data);
    }
  }, [report]);

  return (
    <motion.div
      className="flex-1 flex flex-col w-full overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {status === "loading" ? (
        <Spin indicator={<LoadingOutlined spin />} />
      ) : (
        <motion.div
          className="flex-1 flex flex-col p-6 space-y-6 w-full overflow-y-auto"
        >
          <h1 className="text-3xl font-bold text-center">Reports</h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl shadow-md border border-black/5 p-6 w-full"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
          >
            <h2 className="font-semibold font-rubik mb-5">
              Statistics of the number of students with scores in the above 4
              levels by subjects
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
                <Bar
                  dataKey="level1"
                  fill="#0f2d84"
                  radius={[5, 5, 0, 0]}
                  name="Excellent (>= 8)"
                />
                <Bar
                  dataKey="level2"
                  fill="#0d9488"
                  radius={[5, 5, 0, 0]}
                  name="Good (6 - 8)"
                />
                <Bar
                  dataKey="level3"
                  fill="#f59e0b"
                  radius={[5, 5, 0, 0]}
                  name="Average (4 - 6)"
                />
                <Bar
                  dataKey="level4"
                  fill="#ef4444"
                  radius={[5, 5, 0, 0]}
                  name="Poor (< 4)"
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {top10 && top10.data && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-md border border-black/5 p-6 w-full"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
            >
              <h2 className="font-semibold font-rubik mb-5">
                Top 10 Students - Group A
              </h2>
              <Table
                dataSource={top10.data.map((item, index) => ({
                  ...item,
                  key: item.sbd,
                  rank: index + 1,
                }))}
                columns={[
                  {
                    title: "Rank",
                    dataIndex: "rank",
                    key: "rank",
                    width: 80,
                    align: "center",
                  },
                  {
                    title: "Student ID",
                    dataIndex: "sbd",
                    key: "sbd",
                    align: "center",
                  },
                  {
                    title: "Math",
                    dataIndex: "toan",
                    key: "toan",
                    align: "center",
                  },
                  {
                    title: "Physics",
                    dataIndex: "vat_li",
                    key: "vat_li",
                    align: "center",
                  },
                  {
                    title: "Chemistry",
                    dataIndex: "hoa_hoc",
                    key: "hoa_hoc",
                    align: "center",
                  },
                  {
                    title: "Total",
                    dataIndex: "total",
                    key: "total",
                    align: "center",
                    render: (text) => (
                      <span className="font-semibold">{text}</span>
                    ),
                  },
                ]}
                pagination={false}
                size="small"
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
