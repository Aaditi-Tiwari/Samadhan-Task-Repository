// import "./Task8.css";
import { useState } from "react";

export default function Task8() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-[450px] flex flex-col items-center justify-start bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl shadow-lg p-6 w-full max-w-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 drop-shadow">
        📝 To-Do List
      </h2>

      {/* Input + Button */}
      <div className="flex gap-2 mb-6 w-full">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
          className="flex-1 border-2 border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition duration-200"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 active:scale-95 transition"
        >
          ➕ Add
        </button>
      </div>

      {/* Task List */}
      <ul className="w-full space-y-3">
        {tasks.length === 0 && (
          <p className="text-gray-600 text-center italic">
            No tasks yet. Add one!
          </p>
        )}
        {tasks.map((t) => (
          <li
            key={t.id}
            className="flex justify-between items-center bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <span
              onClick={() => toggleComplete(t.id)}
              className={`flex-1 cursor-pointer ${
                t.completed
                  ? "line-through text-gray-400"
                  : "text-gray-800 font-medium"
              }`}
            >
              {t.text}
            </span>
            <button
              onClick={() => deleteTask(t.id)}
              className="text-red-500 hover:text-red-700 font-bold ml-4"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
