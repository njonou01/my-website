import { useState } from "react";

interface UseFormInputProps {
  initialValue: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}

export const useFormInput = ({
  initialValue,
  name,
  type = "text",
  placeholder,
  required = true,
}: UseFormInputProps) => {
  const [value, setValue] = useState(initialValue);
  const [isActive, setIsActive] = useState(false);

  const inputProps = {
    name,
    type,
    value,
    placeholder,
    required,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValue(e.target.value),
    onFocus: () => setIsActive(true),
    onBlur: () => setIsActive(false),
  };

  return { value, setValue, isActive, inputProps };
};
