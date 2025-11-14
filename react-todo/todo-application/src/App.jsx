import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AddEditTask from "./pages/AddEditTask";
import MyNotes from "./pages/MyNotes";
import Settings from "./pages/Settings";
import useThemeStore from "./store/useThemeStore";

export default function App() {
  const { darkMode } = useThemeStore();

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50"}`}>
      <header className="p-4 border-b">
        <nav className="flex justify-between max-w-4xl mx-auto">
          <Link to="/" className="font-bold">Get Shit Done</Link>
          <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/add">Add</Link>
            <Link to="/settings">Settings</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add" element={<AddEditTask />} />
          <Route path="/edit/:id" element={<AddEditTask />} />
          <Route path="/notes/:id" element={<MyNotes />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

