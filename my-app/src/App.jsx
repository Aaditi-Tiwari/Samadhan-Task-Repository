import { useState } from "react";
import Task6 from "./task/Task6";
import Task7 from "./task/Task7";
import Task8 from "./task/Task8";
import Task9 from "./task/Task9";  // ✅ nayi file import

function App() {
  const [activeTask, setActiveTask] = useState("Task6");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">🚀 My React Tasks</h1>

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-center mb-6">
        {["Task6", "Task7", "Task8", "Task9"].map((task) => (
          <button
            key={task}
            onClick={() => setActiveTask(task)}
            className={`px-4 py-2 rounded-lg shadow transition ${
              activeTask === task
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-blue-100"
            }`}
          >
            {task}
          </button>
        ))}
      </div>

      {/* Render Selected Task */}
      <div className="bg-white shadow-xl rounded-2xl p-6">
        {activeTask === "Task6" && <Task6 />}
        {activeTask === "Task7" && <Task7 />}
        {activeTask === "Task8" && <Task8 />}
        {activeTask === "Task9" && <Task9 />}
      </div>
    </div>
  );
}

export default App;
