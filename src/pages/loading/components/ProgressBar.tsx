interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
  <div className="relative h-2">
    <div className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-700/50 overflow-hidden">
      <div className="absolute inset-0 opacity-25 bg-[length:20px_20px] bg-[linear-gradient(45deg,rgba(0,0,0,.1)25%,transparent_25%,transparent_50%,rgba(0,0,0,.1)50%,rgba(0,0,0,.1)75%,transparent_75%)] animate-[move-bg_1s_linear_infinite]" />
    </div>
    <div
      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 transition-all duration-300 ease-out"
      style={{ width: `${progress}%` }}
    >
      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white dark:bg-gray-800 border-2 border-indigo-500 shadow-lg shadow-indigo-500/50" />
    </div>
  </div>
);
