import { useState } from "react";
import { Card } from "../../components";

export default function Dashboard() {
  return (
    <div className="justify-center items-center flex-1 flex flex-col p-6 space-y-6">
      <h1 className="text-3xl font-bold">Welcome to G-Scores</h1>
      <div >
        <Card className="w-full p-6 space-y-4">
          <h2 className="text-xl font-bold">Your dashboard is under construction!</h2>
          <p className="text-gray-600">Please check back later for updates.</p>
        </Card>
      </div>
    </div>
  );
}
