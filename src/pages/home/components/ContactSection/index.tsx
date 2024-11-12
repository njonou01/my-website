import { contactInfo, socialLinks } from "@/data/contact.data";
import React from "react";
import { SubmitButton } from "./SubmitButton";
import { FormInput } from "./FormInput";
import { SocialLink } from "./SocialLinks";
import { ContactInfoItem } from "./ContactInfo";
import { useContactForm } from "../../hooks/useContactForm";

const ContactSection: React.FC = () => {
  const form = useContactForm();

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
              Contactez
            </span>{" "}
            <span className="text-gray-900 dark:text-white">Moi</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Je suis toujours ouvert aux nouvelles opportunités et
            collaborations. N'hésitez pas à me contacter pour discuter de vos
            projets.
          </p>
        </div>

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
      </div>
    </section>
  );
};

export default ContactSection;
