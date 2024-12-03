import emailjs from "@emailjs/browser";
import { EmailData, EmailResponse } from "../types/email";
import { emailConfig, validateEmailConfig } from "../config";

emailjs.init(emailConfig.publicKey);

const sendNotificationEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.notificationTemplate,
      {
        ...data,
        date: new Date().toLocaleString("fr-FR", {
          dateStyle: "long",
          timeStyle: "short",
        }),
      }
    );

    return response.status === 200;
  } catch (error) {
    console.error("Erreur lors de l'envoi de la notification:", error);
    return false;
  }
};

const sendConfirmationEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.confirmationTemplate,
      {
        ...data,
        current_year: new Date().getFullYear(),
      }
    );

    return response.status === 200;
  } catch (error) {
    console.error("Erreur lors de l'envoi de la confirmation:", error);
    return false;
  }
};

export const sendContactEmails = async (
  data: EmailData
): Promise<EmailResponse> => {
  try {
    validateEmailConfig();

    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        success: false,
        error: "Tous les champs sont requis",
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        error: "Email invalide",
      };
    }

    const [notificationSent, confirmationSent] = await Promise.all([
      sendNotificationEmail(data),
      sendConfirmationEmail(data),
    ]);

    if (!notificationSent || !confirmationSent) {
      return {
        success: false,
        error: "Erreur lors de l'envoi des emails",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Erreur:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Une erreur inattendue est survenue",
    };
  }
};
