export const techLogos = [
  {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Python",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "TypeScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "NodeJS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "AWS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Docker",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "TensorFlow",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "PyTorch",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "Numpy",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "Pandas",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "FastAPI",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Tailwind",
    url: "https://static.cdnlogo.com/logos/t/58/tailwind-css.svg",
  },
  {
    name: "Next.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
];

export const skills = [
  { title: "Machine Learning Engineer", icon: "🤖" },
  { title: "Data Scientist", icon: "📊" },
  { title: "Full Stack Developer", icon: "💻" },
];

export const displayedTechs = [
  { name: "Python", logo: techLogos.find((t) => t.name === "Python")?.url },
  { name: "React", logo: techLogos.find((t) => t.name === "React")?.url },
  { name: "AWS", logo: techLogos.find((t) => t.name === "AWS")?.url },
  {
    name: "TensorFlow",
    logo: techLogos.find((t) => t.name === "TensorFlow")?.url,
  },
];

export const loadingStates = [
  { text: "Initialisation...", icon: "⚡️" },
  { text: "Chargement des modules...", icon: "📦" },
  { text: "Configuration de l'environnement...", icon: "⚙️" },
  { text: "Finalisation...", icon: "✨" },
];
