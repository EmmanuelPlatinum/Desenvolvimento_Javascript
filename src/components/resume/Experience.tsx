import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Desenvolvedor Full Stack Sênior",
    company: "TechCorp Solutions",
    period: "Janeiro 2022 - Presente",
    description: [
      "Liderou o desenvolvimento de aplicações web complexas usando React, TypeScript e Node.js",
      "Implementou arquiteturas escaláveis que aumentaram a performance em 40%",
      "Mentoria de desenvolvedores júniores e coordenação de equipes ágeis",
      "Integração com APIs RESTful e GraphQL, implementação de testes automatizados"
    ]
  },
  {
    title: "Desenvolvedor Frontend",
    company: "StartupTech Brasil",
    period: "Março 2021 - Dezembro 2021",
    description: [
      "Desenvolveu interfaces responsivas e interativas usando React e Tailwind CSS",
      "Colaborou com designers UX/UI para criar experiências de usuário excepcionais",
      "Otimizou aplicações para SEO e performance, resultando em 60% mais conversões",
      "Implementou ferramentas de analytics e tracking para métricas de negócio"
    ]
  },
  {
    title: "Desenvolvedor Web Júnior",
    company: "Agência Digital Criativa",
    period: "Junho 2020 - Fevereiro 2021",
    description: [
      "Criou websites e landing pages para diversos clientes usando HTML5, CSS3 e JavaScript",
      "Implementou sistemas de gerenciamento de conteúdo (CMS) personalizados",
      "Garantiu compatibilidade cross-browser e responsividade móvel",
      "Trabalhou em equipe seguindo metodologias ágeis e versionamento Git"
    ]
  }
];

export function Experience() {
  return (
    <section className="resume-section">
      <h2 className="resume-heading">Experiência Profissional</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 text-primary font-medium mb-2">
                  <Building2 className="h-4 w-4" />
                  {exp.company}
                </div>
              </div>
              <div className="flex items-center gap-2 text-foreground-secondary text-sm md:text-base">
                <Calendar className="h-4 w-4" />
                {exp.period}
              </div>
            </div>
            <ul className="space-y-2">
              {exp.description.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-foreground-secondary">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}