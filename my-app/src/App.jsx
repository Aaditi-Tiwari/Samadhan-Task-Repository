import { useState } from "react";
import Task6 from "./task/Task6";
import Task7 from "./task/Task7";
import Task8 from "./task/Task8"; // 👈 nayi file import

function App() {
  const [activeTask, setActiveTask] = useState("Task6");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">🚀 My React Tasks</h1>

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-center mb-6">
        <button
          onClick={() => setActiveTask("Task6")}
          className={`px-4 py-2 rounded-lg shadow transition ${
            activeTask === "Task6"
              ? "bg-blue-600 text-white"
              : "bg-white hover:bg-blue-100"
          }`}
        >
          Task 6
        </button>

        <button
          onClick={() => setActiveTask("Task7")}
          className={`px-4 py-2 rounded-lg shadow transition ${
            activeTask === "Task7"
              ? "bg-blue-600 text-white"
              : "bg-white hover:bg-blue-100"
          }`}
        >
          Task 7
        </button>

        <button
          onClick={() => setActiveTask("Task8")}
          className={`px-4 py-2 rounded-lg shadow transition ${
            activeTask === "Task8"
              ? "bg-blue-600 text-white"
              : "bg-white hover:bg-blue-100"
          }`}
        >
          Task 8
        </button>
      </div>

      {/* Render Selected Task */}
      <div className="bg-white shadow-xl rounded-2xl p-6">
        {activeTask === "Task6" && <Task6 />}
        {activeTask === "Task7" && <Task7 />}
        {activeTask === "Task8" && <Task8 />}
      </div>
    </div>
  );
}

export default App;