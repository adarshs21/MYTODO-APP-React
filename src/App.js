
import React, { useState } from 'react';
function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { task, completed: false }]);
      setTask('');
    }
  };
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className={t.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => handleCompleteTask(index)}
            />
            {t.task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp;
