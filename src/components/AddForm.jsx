import { useState } from "react";

export default function AddForm({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const title = inputValue.trim();
    if (!title) return;
    onAdd(title);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Add new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
      >
        Add
      </button>
    </div>
  );
}
