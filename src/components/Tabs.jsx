const TABS = ["All", "Active", "Completed"];

export default function Tabs({ currentTab, setCurrentTab }) {
  return (
    <div className="flex border-b border-gray-200 mb-4">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => setCurrentTab(tab)}
          className={`flex-1 py-2 text-sm font-medium transition-colors
            ${currentTab === tab
              ? " border-b-2 border-blue-500"
              : " hover:text-gray-700"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
