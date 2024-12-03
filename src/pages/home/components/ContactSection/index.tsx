import { contactInfo, socialLinks } from "@/data/contact.data";
import React from "react";
import { SubmitButton } from "./SubmitButton";
import { FormInput } from "./FormInput";
import { SocialLink } from "./SocialLinks";
import { ContactInfoItem } from "./ContactInfo";
import { useContactForm } from "../../hooks/useContactForm";
import { useEffect } from "react";
import Section from "@/components/Section/Section";

const ContactSection: React.FC = () => {
  const form = useContactForm();
  const clearNotification = () => {
    form.setError(null);
    form.setSuccess(false);
  };
  return (
    <Section
      id="contact"
      description=" Je suis toujours ouvert aux nouvelles opportunités et
            collaborations. N'hésitez pas à me contacter pour discuter de vos
            projets."
      regularTitle=" moi"
      gradientTitle="Contactez "
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 space-y-8">
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 
                shadow-lg dark:shadow-gray-900/10
                border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Informations de Contact
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <ContactInfoItem key={idx} {...info} />
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                  Retrouvez-moi sur
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <SocialLink key={idx} {...social} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={form.handleSubmit}
            className="md:col-span-3 bg-white dark:bg-gray-800 rounded-2xl p-8 
                shadow-lg dark:shadow-gray-900/10
                border border-gray-100 dark:border-gray-700 
                space-y-6"
          >
            <Notification
              form={{ error: form.error, success: form.success }}
              clearMessages={clearNotification}
            />
            <div className="grid md:grid-cols-2 gap-6">
              <FormInput
                label="Nom complet"
                inputProps={form.name.inputProps}
                isActive={form.name.isActive}
              />
              <FormInput
                label="Email"
                inputProps={form.email.inputProps}
                isActive={form.email.isActive}
              />
            </div>

            <FormInput
              label="Sujet"
              inputProps={form.subject.inputProps}
              isActive={form.subject.isActive}
            />

            <FormInput
              label="Message"
              isTextArea
              inputProps={form.message.inputProps}
              isActive={form.message.isActive}
            />

            <SubmitButton isLoading={form.isLoading} />
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;

interface NotificationProps {
  form: {
    error: string | null;
    success: boolean;
  };
  clearMessages: () => void;
}

const Notification: React.FC<NotificationProps> = ({ form, clearMessages }) => {
  useEffect(() => {
    if (form.error || form.success) {
      const timer = setTimeout(() => {
        clearMessages();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [form.error, form.success, clearMessages]);

  return (
    <>
      {form.error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg">
          {form.error}
        </div>
      )}

      {form.success && (
        <div className="p-4 bg-green-50 text-green-600 rounded-lg">
          Message envoyé avec succès!
        </div>
      )}
    </>
  );
};
