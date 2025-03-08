import { Code2, Layout, Smartphone } from "lucide-react";

export default function AboutMe() {
  const skills = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Expert in React, TypeScript, and modern JavaScript",
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Responsive Design",
      description: "Creating beautiful interfaces for all screen sizes",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile-First Approach",
      description: "Ensuring great experience on all devices",
    },
  ];

  return (
    <section id="about" className="bg-gray-50 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-poppins mb-12 text-center text-3xl font-bold">About Me</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-xs transition-shadow hover:shadow-md"
            >
              <div className="mb-4 text-accent">{skill.icon}</div>
              <h3 className="mb-2 font-semibold">{skill.title}</h3>
              <p className="text-secondary">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
