import React from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { name: "Dashboard", url: "/" },
  { name: "Search Scores", url: "/search" },
  { name: "Reports", url: "/reports" },
  { name: "Settings", url: "/settings" },
];

export default function Sidebar() {
  const nav = useNavigate();

  const handleNavClick = (url) => {
    nav(url);
  };

  return (
    <aside className="
      bg-linear-to-b from-yellow-300 via-emerald-500 via-80% to-cyan-700 text-black
      w-32 md:w-40 lg:w-48 xl:w-56 2xl:w-64
      flex flex-col px-4 py-10 transition-all duration-500"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Menu</h2>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li className="mb-2" key={item.url}>
              <div
                onClick={() => handleNavClick(item.url)}
                className="cursor-pointer hover:text-blue-600 hover:text-xl text-lg font-medium transition-all duration-200"
              >
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
