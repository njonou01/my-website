import { useState } from "react";
import { useFormInput } from "./useFormInput";

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const name = useFormInput({
    initialValue: "",
    name: "name",
    placeholder: "Votre nom",
  });

  const email = useFormInput({
    initialValue: "",
    name: "email",
    type: "email",
    placeholder: "votre@email.com",
  });

  const subject = useFormInput({
    initialValue: "",
    name: "subject",
    placeholder: "Le sujet de votre message",
  });

  const message = useFormInput({
    initialValue: "",
    name: "message",
    placeholder: "Votre message...",
  });

  const resetForm = () => {
    name.setValue("");
    email.setValue("");
    subject.setValue("");
    message.setValue("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simuler l'envoi
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    resetForm();
  };

  return {
    name,
    email,
    subject,
    message,
    isLoading,
    handleSubmit,
  };
};
