import { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div>
      <p>Today's tasks:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleTask}
          placeholder="Enter a task..."
        />
        <button type="submit">Add a task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
