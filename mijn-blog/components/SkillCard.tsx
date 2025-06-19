"use client";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiDotnet,
  SiGit,
  SiGithub,
  SiGraphql,
  SiDocker,
} from "react-icons/si";

const iconMap: Record<string, React.ReactNode> = {
  HTML: <SiHtml5 className="text-orange-500" />,
  CSS: <SiCss3 className="text-blue-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  React: <SiReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  TailwindCSS: <SiTailwindcss className="text-sky-400" />,
  "Node.js": <SiNodedotjs className="text-green-600" />,
  NestJS: <SiNestjs className="text-red-500" />,
  ".NET": <SiDotnet className="text-purple-600" />,
  Git: <SiGit className="text-orange-600" />,
  GitHub: <SiGithub className="text-black dark:text-white" />,
  GraphQL: <SiGraphql className="text-pink-600" />,
  Docker: <SiDocker className="text-blue-400" />,
};

const skillData = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "TailwindCSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", ".NET", "GraphQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Docker"],
  },
];

export default function SkillSection() {
  return (
    <section className="section_container pb-20">
      <h2 className="text-2xl font-bold mb-6">Mijn skills</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillData.map(({ title, skills }) => (
          <div
            key={title}
            className="bg-white border border-sky-300 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-sky-300"
          >
            <h3 className="text-lg font-semibold text-center text-sky-600 mb-4">
              {title}
            </h3>
            <div className="grid grid-cols-2 gap-4 justify-items-center">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex flex-col items-center transition-transform transform hover:scale-105"
                >
                  <div className="text-3xl text-sky-500">
                    {iconMap[skill] ?? "❓"}
                  </div>
                  <span className="text-sm mt-1 text-gray-700 text-center">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
