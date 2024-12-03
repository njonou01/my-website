import { EmailConfig } from "./types/email";

export const emailConfig: EmailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  notificationTemplate: import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE,
  confirmationTemplate: import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE,
};

export const validateEmailConfig = (): void => {
  const missingVars = Object.entries(emailConfig).filter(([, value]) => !value);
  if (missingVars.length > 0) {
    throw new Error(
      `Variables d'environnement manquantes: ${missingVars
        .map(([key]) => key)
        .join(", ")}`
    );
  }
};
