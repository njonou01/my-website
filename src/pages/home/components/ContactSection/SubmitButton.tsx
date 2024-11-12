interface SubmitButtonProps {
  isLoading: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isLoading }) => (
  <button
    type="submit"
    disabled={isLoading}
    className={`w-full py-4 px-6 rounded-xl text-white font-medium
      shadow-lg transition-all duration-300
      ${
        isLoading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:shadow-xl hover:-translate-y-0.5"
      }`}
  >
    <span className="relative z-10 flex items-center justify-center gap-2">
      {isLoading ? (
        <>
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Envoi en cours...
        </>
      ) : (
        <>
          Envoyer le message
          <i className="fas fa-paper-plane group-hover:translate-x-1 transition-transform duration-300" />
        </>
      )}
    </span>
  </button>
);
