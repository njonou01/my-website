import { SkillCategory } from "@/types/props.type";

export const skillCategories: SkillCategory[] = [
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    description: "Infrastructure cloud et automatisation",
    color: "from-sky-500 to-blue-500",
    skills: [
      {
        name: "Cloud Services",
        description: "Services et infrastructure cloud",
        tools: [
          {
            name: "AWS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
          },
          {
            name: "GCP",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
          },
          {
            name: "Azure",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
          },
          {
            name: "Heroku",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
          },
        ],
        projects: ["Déploiement d'applications", "Infrastructure as Code"],
      },
      {
        name: "DevOps Tools",
        description: "Outils d'automatisation et déploiement",
        tools: [
          {
            name: "Docker",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          },
          {
            name: "Kubernetes",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
          },
          {
            name: "Jenkins",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
          },
          {
            name: "GitLab",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
          },
        ],
        projects: ["CI/CD Pipeline", "Containerisation"],
      },
      {
        name: "Infrastructure & Monitoring",
        description: "Gestion et surveillance d'infrastructure",
        tools: [
          {
            name: "Terraform",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
          },
          {
            name: "Ansible",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
          },
          {
            name: "Grafana",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
          },
          {
            name: "Prometheus",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
          },
        ],
        projects: ["Infrastructure Monitoring", "Automatisation"],
      },
      {
        name: "Version Control & Tools",
        description: "Gestion de version et outils de développement",
        tools: [
          {
            name: "Git",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          },
          {
            name: "GitHub",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          },
          {
            name: "VS Code",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          },
          {
            name: "Bash",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
          },
        ],
        projects: ["Gestion de versions", "Scripts d'automatisation"],
      },
    ],
  },
  {
    title: "Data Science & ML",
    icon: "🤖",
    description: "Analyse de données et machine learning",
    color: "from-blue-500 to-indigo-500",
    skills: [
      {
        name: "Machine Learning",
        description: "Développement de modèles prédictifs et classification",
        tools: [
          {
            name: "TensorFlow",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
          },
          {
            name: "Scikit-learn",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
          },
          {
            name: "Python",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          },
          {
            name: "Pandas",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
          },
        ],
        projects: ["Système de recommandation", "Analyse de sentiments"],
      },
      {
        name: "Deep Learning",
        description: "Réseaux de neurones et apprentissage profond",
        tools: [
          {
            name: "PyTorch",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
          },
          { name: "Keras", logo: "https://keras.io/img/logo.png" },
          {
            name: "NumPy",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
          },
        ],
        projects: ["Classification d'images", "NLP"],
      },
    ],
  },
  {
    title: "Développement Web",
    icon: "🌐",
    description: "Développement frontend et backend",
    color: "from-violet-500 to-purple-500",
    skills: [
      {
        name: "Frontend",
        description: "Interfaces utilisateur modernes",
        tools: [
          {
            name: "React",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
          {
            name: "TypeScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          },
          {
            name: "Next.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          },
          {
            name: "Tailwind CSS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
          },
        ],
        projects: ["Portfolio", "Dashboard"],
      },

      {
        name: "Backend",
        description: "APIs et services web",
        tools: [
          {
            name: "Node.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          },
          {
            name: "Express",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          },
          {
            name: "Laravel",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
          },
          {
            name: "Django",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
          },
        ],
        projects: ["API REST", "Authentification"],
      },
    ],
  },
  {
    title: "Bases de Données",
    icon: "🗄️",
    description: "Gestion et modélisation des données",
    color: "from-orange-500 to-red-500",
    skills: [
      {
        name: "SQL",
        description: "Bases de données relationnelles",
        tools: [
          {
            name: "MySQL",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          },
          {
            name: "PostgreSQL",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          },
          {
            name: "SQLite",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
          },
        ],
        projects: ["Modélisation BDD", "Optimisation requêtes"],
      },
      {
        name: "NoSQL",
        description: "Bases de données non-relationnelles",
        tools: [
          {
            name: "MongoDB",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          },
          {
            name: "Redis",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
          },
          {
            name: "Neo4j",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",
          },
        ],
        projects: ["Base graphe", "Cache distribué"],
      },
    ],
  },
];
