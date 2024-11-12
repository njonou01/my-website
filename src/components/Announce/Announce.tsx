import { Status } from "@/types/components";

type AnnounceProps = {
  status: Status;
  index: number;
};
export const Anounce: React.FC<AnnounceProps> = ({ status, index }) => {
  return (
    <div
      key={index}
      className="flex-1 bg-white dark:bg-gray-800 backdrop-blur-sm
              border border-gray-200 dark:border-gray-700
              shadow-lg dark:shadow-gray-900/10
              rounded-2xl px-6 py-4 
              hover:transform hover:scale-[1.02]
              hover:shadow-xl dark:hover:shadow-gray-900/20
              transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 bg-gradient-to-br ${status.gradient} rounded-xl 
                     flex items-center justify-center transform transition-transform
                     duration-300 hover:rotate-12 shadow-lg`}
        >
          <span className="text-2xl text-white">{status.emoji}</span>
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">
            {status.title}
          </p>
          <p className="text-indigo-600 dark:text-indigo-400">
            {status.details}
          </p>
        </div>
      </div>
    </div>
  );
};
