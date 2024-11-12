import { tabs } from "@/data/about.data";
import { TabId } from "@/types/components";

interface TabsProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => (
  <div className="flex justify-center mt-8">
    <div className="inline-flex bg-white dark:bg-gray-800 rounded-xl p-1.5 shadow-lg">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
            flex items-center gap-2
            ${
              activeTab === tab.id
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
        >
          <span>{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  </div>
);
