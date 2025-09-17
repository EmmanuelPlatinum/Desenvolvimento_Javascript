import { Code, Database, Globe, Smartphone, Settings, Cloud } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programação",
    skills: ["Python", "JavaScript", "HTML5", "CSS3", "SQL", "Git", "GitHub"]
  },
  {
    icon: Database,
    title: "Backend & Automação",
    skills: ["Node.js", "APIs REST", "Automação WhatsApp", "Chatbots", "Integração CRM"]
  },
  {
    icon: Settings,
    title: "Ferramentas & Office",
    skills: ["Excel", "Word", "PowerPoint", "Notion", "VS Code", "Postman"]
  },
  {
    icon: Smartphone,
    title: "Hardware & Suporte",
    skills: ["Manutenção PC", "Redes", "Suporte Técnico", "Linux", "Windows", "Hardware"]
  },
  {
    icon: Globe,
    title: "Marketing Digital",
    skills: ["Google Maps", "SEO Local", "Perfis Empresariais", "Gestão Online"]
  },
  {
    icon: Cloud,
    title: "Idiomas & Soft Skills",
    skills: ["Português (Nativo)", "Inglês (Intermediário)", "Trabalho em Equipe", "Comunicação"]
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