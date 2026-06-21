import { useState } from "react";
import { Card } from "../../components";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const nav = useNavigate();

  return (
    <div className="justify-center items-center flex-1 flex flex-col p-6 space-y-6">
      <h1 className="text-3xl font-bold">Welcome to G-Scores</h1>
      <div className="flex flex-col md:flex-row gap-6 w-2/3">
        <Card className="bg-blue-900 text-white font-rubik w-full p-6 space-y-4 cursor-pointer hover:-translate-y-1 transition-all" onClick={() => nav("/search")}>
          <h2 className="text-xl font-bold text-center">Search Scores</h2>
          <p className="text-white text-center">Go to Search Scores to find and view your scores.</p>
        </Card>
        <Card className="bg-blue-900 text-white font-rubik w-full p-6 space-y-4 cursor-pointer hover:-translate-y-1 transition-all" onClick={() => nav("/reports")}>
          <h2 className="text-xl font-bold text-center">Reports</h2>
          <p className="text-white text-center">Go to Reports to view detailed analytics.</p>
        </Card>
      </div>
    </div>
  );
}
