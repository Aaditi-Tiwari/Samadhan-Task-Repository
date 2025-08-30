import { useState } from "react";

export default function Task8() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  
  // Estados para manejar estilos interactivos (hover, focus, etc.)
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isAddBtnHovered, setIsAddBtnHovered] = useState(false);
  const [hoveredDeleteBtn, setHoveredDeleteBtn] = useState(null); // Almacena el ID del botón

  // --- Definición de Estilos ---
  const styles = {
    todoApp: {
      minHeight: '450px',
      width: '100%',
      maxWidth: '512px',
      margin: '2rem auto',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundImage: 'linear-gradient(to bottom right, #fce7f3, #f3e8ff, #e0f2fe)',
      borderRadius: '1rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      fontFamily: 'sans-serif',
    },
    todoHeader: {
      fontSize: '1.875rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
      color: '#374151',
      filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1))',
    },
    inputSection: {
      display: 'flex',
      gap: '0.5rem',
      marginBottom: '1.5rem',
      width: '100%',
    },
    taskInput: {
      flexGrow: 1,
      border: '2px solid #d1d5db',
      borderRadius: '0.75rem',
      padding: '0.5rem 1rem',
      transition: 'all 0.2s ease-in-out',
      outline: 'none',
    },
    taskInputFocus: { // Estilo para :focus
      borderColor: '#8b5cf6',
      boxShadow: '0 0 0 2px #c4b5fd',
    },
    addBtn: {
      padding: '0.5rem 1rem',
      backgroundColor: '#8b5cf6',
      color: 'white',
      border: 'none',
      borderRadius: '0.75rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'all 0.1s ease-in-out',
    },
    addBtnHover: { // Estilo para :hover
      backgroundColor: '#7c3aed',
    },
    taskList: {
      width: '100%',
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },
    noTasksMessage: {
      color: '#4b5563',
      textAlign: 'center',
      fontStyle: 'italic',
    },
    taskItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '1rem',
      borderRadius: '0.75rem',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      transition: 'box-shadow 0.2s ease-in-out',
    },
    taskText: {
      flexGrow: 1,
      cursor: 'pointer',
      color: '#1f2937',
      fontWeight: 500,
    },
    completedTaskText: { // Estilo para la tarea completada
      textDecoration: 'line-through',
      color: '#9ca3af',
    },
    deleteBtn: {
      background: 'none',
      border: 'none',
      color: '#ef4444',
      fontSize: '1.2rem',
      marginLeft: '1rem',
      cursor: 'pointer',
      transition: 'color 0.2s ease-in-out',
    },
    deleteBtnHover: { // Estilo para :hover
        color: '#b91c1c',
    }
  };
  
  // --- Lógica de Funciones ---
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // --- Renderizado ---
  return (
    <div style={styles.todoApp}>
      <h2 style={styles.todoHeader}>📝 To-Do List</h2>

      <div style={styles.inputSection}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
          style={isInputFocused ? { ...styles.taskInput, ...styles.taskInputFocus } : styles.taskInput}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        <button
          style={isAddBtnHovered ? { ...styles.addBtn, ...styles.addBtnHover } : styles.addBtn}
          onMouseEnter={() => setIsAddBtnHovered(true)}
          onMouseLeave={() => setIsAddBtnHovered(false)}
          onClick={addTask}
        >
          ➕ Add
        </button>
      </div>

      <ul style={styles.taskList}>
        {tasks.length === 0 && (
          <p style={styles.noTasksMessage}>No tasks yet. Add one!</p>
        )}
        {tasks.map((t) => (
          <li key={t.id} style={styles.taskItem}>
            <span
              onClick={() => toggleComplete(t.id)}
              style={t.completed ? { ...styles.taskText, ...styles.completedTaskText } : styles.taskText}
            >
              {t.text}
            </span>
            <button
              onClick={() => deleteTask(t.id)}
              style={hoveredDeleteBtn === t.id ? { ...styles.deleteBtn, ...styles.deleteBtnHover } : styles.deleteBtn}
              onMouseEnter={() => setHoveredDeleteBtn(t.id)}
              onMouseLeave={() => setHoveredDeleteBtn(null)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}