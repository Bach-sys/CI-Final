import TaskItem from "./TaskItem";

export default function TaskList({ tasks, currentTab, onToggle, onDelete, onClearAll }) {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-400 text-sm py-6">No tasks to do.</p>;
  }

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            currentTab={currentTab}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>

      {currentTab === "Completed" && (
        <div className ="flex justify-end">
          <button
          onClick={onClearAll}
          className="mt-4 p-3 bg-red-500 hover:bg-red-600 text-white py-2 rounded-sm text-sm"
        >
          Clear All Completed
          </button>
        </div>
        
      )}
    </>
  );
}
