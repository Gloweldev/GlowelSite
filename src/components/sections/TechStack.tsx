import { ArrowRight } from "lucide-react";
import Image from "next/image";

const TechStack = () => {
  const categories = [
    {
      name: "Frontend",
      techs: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ],
    },
    {
      name: "Backend",
      techs: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        // Prisma isn't in devicon officially usually, using GraphQL as replacement or just an uploaded SVG approach. Since I have URLs, I'll use generic SVGs.
        { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      ],
    },
    {
      name: "IA / ML",
      techs: [
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Keras", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
        { name: "Scikit-Learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      ],
    },
    {
      name: "Cloud & DevOps",
      techs: [
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", invert: true },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase mb-4 block">
            Stack tecnológico
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Tecnología probada en producción
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Trabajamos exclusivamente con las herramientas más confiables de la
            industria para garantizar arquitecturas escalables y alto rendimiento.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6 text-center lg:text-left lg:pl-4 border-l-2 border-slate-800 hidden lg:block">
                {category.name}
              </h3>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6 text-center lg:hidden">
                {category.name}
              </h3>
              
              <div className="space-y-4">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group flex items-center gap-4 px-5 py-4 bg-slate-800/40 hover:bg-slate-800 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
                  >
                    <div className="w-6 h-6 relative opacity-60 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Image
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        fill
                        className={`object-contain ${tech.invert ? "invert" : ""}`}
                      />
                    </div>
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
