import { useState } from "react";
import "./index.css";
import Tabs from "./components/Tabs";
import AddForm from "./components/AddForm";
import TaskList from "./components/TaskList";

const initialTasks = [
  { id: 1, title: "Do code challanges", active: true },
  { id: 2, title: "Do code challanges", active: true },
  { id: 3, title: "Do code challanges", active: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [currentTab, setCurrentTab] = useState("All");
  let addForm = null;

  const getFilteredTasks = () => {
    if (currentTab === "Active") return tasks.filter((t) => t.active === true);
    if (currentTab === "Completed") return tasks.filter((t) => t.active === false);
    return tasks;
  };

  const handleAdd = (title) => {
    const newTask = { id: Date.now(), title: title, active: true };
    setTasks([...tasks, newTask]);
  };

  const handleToggle = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, active: !t.active } : t)));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleClearAll = () => {
    setTasks(tasks.filter((t) => t.active === true));
  };

  const showAddForm = currentTab === "All" || currentTab === "Active";

  if (showAddForm) {
    addForm = <AddForm onAdd={handleAdd} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="bg-white rounded-xl  w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">#todo</h1>

        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

        {addForm}

        <TaskList
          tasks={getFilteredTasks()}
          currentTab={currentTab}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onClearAll={handleClearAll}
        />
      </div>
    </div>
  );
}
