import { ContactInfo, SocialLink } from "@/types/components";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: "github",
    url: "#",
    color: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "#",
    color: "hover:bg-blue-600",
  },
  {
    name: "Twitter",
    icon: "twitter",
    url: "#",
    color: "hover:bg-sky-500",
  },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: "envelope",
    label: "Email",
    value: "njonougaby45@gmail.com",
    href: "mailto:njonougaby45@gmail.com",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: "phone",
    label: "Téléphone",
    value: "+33 7 80 80 81 08",
    href: "tel:+33780808108",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: "map-marker-alt",
    label: "Localisation",
    value: "Ile de France, France",
    color: "from-orange-500 to-red-500",
  },
];
