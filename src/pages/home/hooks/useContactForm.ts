import { useState } from "react";
import { useFormInput } from "./useFormInput";
import { sendContactEmails } from "../../../lib/email";
import { EmailData } from "@/types/email";

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

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
    if (isLoading) return; // Ne pas réinitialiser pendant le chargement
    name.setValue("");
    email.setValue("");
    subject.setValue("");
    message.setValue("");
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return; // Éviter les soumissions multiples

    try {
      setIsLoading(true);
      setError(null);

      const data: EmailData = {
        name: capitalize(name.value),
        email: email.value,
        subject: subject.value,
        message: message.value,
      };

      const { success, error: emailError } = await sendContactEmails(data);

      if (success) {
        resetForm();
        setSuccess(true);
      } else {
        setError(emailError || "Une erreur est survenue lors de l'envoi");
      }
    } catch (err) {
      setError("Une erreur inattendue est survenue");
      console.error("Erreur lors de l'envoi:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    name,
    email,
    subject,
    success,
    message,
    setError,
    setSuccess,
    isLoading,
    error,
    handleSubmit,
    resetForm,
  };
};
function capitalize(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
