import React from "react";
import { Card } from "../../components";
import { motion } from "framer-motion";

export default function SearchScores() {
  return (
    // <div className="justify-center items-center flex-1 flex flex-col">
    //   <h1 className="text-3xl font-bold mb-4">Welcome to Search Scores</h1>
    //   <h2 className="text-xl font-bold mb-4">Coming Soon</h2>
    // </div>
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
            placeholder="Enter registration number"
            className="w-1/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer">
            Submit
          </button>
        </div>
      </Card>
      <Card className="w-full p-6">
        <h1 className="text-3xl font-semibold font-rubik mb-4">Detailed Scores</h1>
        <div className="text-xl font-rubik mb-4">Detailed view of search scores here!</div>
        <div className="text-lg font-rubik text-gray-400 text-center">
          Please enter a registration number to view detailed scores.
        </div>
      </Card>
    </motion.div>
  );
}
