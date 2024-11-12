import { useFormInput } from "../../hooks/useFormInput";

interface FormInputProps {
  label: string;
  isTextArea?: boolean;
  rows?: number;
  inputProps: ReturnType<typeof useFormInput>["inputProps"];
  isActive: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  isTextArea = false,
  rows = 5,
  inputProps,
  isActive,
}) => {
  const InputComponent = isTextArea ? "textarea" : "input";

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <InputComponent
        {...inputProps}
        rows={isTextArea ? rows : undefined}
        className={`w-full px-4 py-3 rounded-xl 
          border-2 bg-gray-50/50 dark:bg-gray-900/30
          text-gray-900 dark:text-white
          placeholder-gray-500 dark:placeholder-gray-400
          outline-none transition-all duration-300
          ${
            isActive
              ? "border-indigo-500 dark:border-indigo-500 shadow-sm shadow-indigo-500/10"
              : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
          }`}
      />
    </div>
  );
};
