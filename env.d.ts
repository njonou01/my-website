interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_EMAILJS_NOTIFICATION_TEMPLATE: string;
  readonly VITE_EMAILJS_CONFIRMATION_TEMPLATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
