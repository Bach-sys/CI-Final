export default function TaskItem({ task, currentTab, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-none">
      <input
        type="checkbox"
        checked={!task.active}
        onChange={() => onToggle(task.id)}
        className="w-4 h-4 cursor-pointer accent-blue-500"
      />
      <span className={`flex-1 text-sm ${!task.active ? "line-through text-gray-400" : "text-gray-700"}`}>
        {task.title}
      </span>
      {currentTab === "Completed" && (
        <button
          onClick={() => onDelete(task.id)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
          </svg>
        </button>
      )}
    </li>
  );
}
