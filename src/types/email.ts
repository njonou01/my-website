export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  error?: string;
}

export interface EmailConfig {
  serviceId: string;
  publicKey: string;
  notificationTemplate: string;
  confirmationTemplate: string;
}
