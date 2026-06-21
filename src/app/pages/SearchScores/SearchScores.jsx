import React, { useEffect } from "react";
import { Card } from "../../components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getScoreBySBD } from "../../modules/scoresService";

export default function SearchScores() {
  const [registrationNumber, setRegistrationNumber] = React.useState("");
  const scores = useSelector((state) => state.scores);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(getScoreBySBD(registrationNumber));
    console.log("Submitted registration number:", registrationNumber);
  }

  const subjectMap = {
    toan: "Toán",
    ngu_van: "Ngữ Văn",
    ngoai_ngu: "Ngoại Ngữ",
    vat_li: "Vật Lý",
    hoa_hoc: "Hóa Học",
    sinh_hoc: "Sinh Học",
    lich_su: "Lịch Sử",
    dia_li: "Địa Lý",
    gdcd: "GDCD",
  };

  const scoreDetails = scores?.scoreDetails;

  return (
    <motion.div 
      className="justify-center items-center flex-1 flex flex-col bg-gray-100 p-10 space-y-5"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="w-full p-6">
        <h1 className="text-3xl font-semibold font-rubik mb-4">User Registration</h1>
        <div className="text-xl font-rubik mb-4">Registration Number:</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            placeholder="Enter registration number"
            className="w-1/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <button 
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </Card>
      <Card className="w-full p-6">
        <h1 className="text-3xl font-semibold font-rubik mb-4">Detailed Scores</h1>
        {scoreDetails === null ? (
          <div>
            <div className="text-xl font-rubik mb-4">Detailed view of search scores here!</div>
            <div className="text-lg font-rubik text-gray-400 text-center">
              Please enter a registration number to view detailed scores.
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 grid grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Mã số báo danh (SBD)</p>
                <p className="text-2xl font-semibold text-blue-600">{scoreDetails.sbd}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Mã ngoại ngữ</p>
                <p className="text-2xl font-semibold text-blue-600">{scoreDetails.ma_ngoai_ngu || "—"}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">ID</p>
                <p className="text-2xl font-semibold text-blue-600">{scoreDetails.id}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {Object.entries(subjectMap).map(([key, label]) => {
                const score = scoreDetails[key];
                const hasScore = score !== null && score !== undefined;
                return (
                  <div
                    key={key}
                    className={`p-4 rounded-lg border-2 ${
                      hasScore ? "border-green-200 bg-green-50" : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <p className="text-sm text-gray-600 font-rubik">{label}</p>
                    <p
                      className={`text-3xl font-semibold font-rubik ${
                        hasScore ? "text-green-600" : "text-gray-400"
                      }`}
                    >
                      {hasScore ? score : "—"}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  );
}
