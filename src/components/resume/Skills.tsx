import { Code, Database, Globe, Smartphone, Settings, Cloud } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript ES6+"]
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"]
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Git", "GitHub Actions", "Vercel", "Linux", "CI/CD"]
  },
  {
    icon: Settings,
    title: "Ferramentas",
    skills: ["VS Code", "Figma", "Postman", "Jest", "Cypress", "Webpack", "Vite"]
  }
];

export function Skills() {
  return (
    <section className="resume-section">
      <h2 className="resume-heading">Habilidades Técnicas</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="p-4 bg-accent/20 rounded-lg border border-border/30">
            <div className="flex items-center gap-3 mb-4">
              <category.icon className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}