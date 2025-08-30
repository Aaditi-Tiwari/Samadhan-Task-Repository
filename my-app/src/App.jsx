import React, { useState } from "react";
import Task6 from "./Day2/Task6";
import Task7 from "./Day2/Task7";
import Task8 from "./Day2/Task8";
import Task9 from "./Day2/Task9";
import Task10 from "./Day2/Task_10"; // Clean import (underscore hata diya)

function App() {
  const [activeTask, setActiveTask] = useState("Task6");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">🚀 My React Tasks</h1>

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-center mb-6 flex-wrap">
        {["Task6", "Task7", "Task8", "Task9", "Task10"].map((task) => (
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
        {activeTask === "Task10" && <Task10 />}
      </div>
    </div>
  );
}

export default App;
