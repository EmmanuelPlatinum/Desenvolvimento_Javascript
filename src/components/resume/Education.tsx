import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bacharelado em Ciências da Computação",
    institution: "Universidade Federal de Mato Grosso (UFMT)",
    period: "2021 - 2025",
    status: "6º Semestre - Cursando"
  },
  {
    degree: "Ensino Médio Completo",
    institution: "Escola Estadual de Mato Grosso",
    period: "2016 - 2018",
    status: "Concluído"
  },
  {
    degree: "Capacitação em Programação Python",
    institution: "Cyber E-Dux Educação e Tecnologia",
    period: "2023 - 450h",
    status: "Certificação"
  },
  {
    degree: "Desenvolvimento Web Back-End",
    institution: "SENAC MT",
    period: "2022 - 96h",
    status: "Certificação"
  },
  {
    degree: "Programação para Robótica",
    institution: "SENAC MT", 
    period: "2022 - 60h",
    status: "Certificação"
  },
  {
    degree: "Qualificação em Hardware e Redes",
    institution: "FEOSC-MT",
    period: "2021 - 160h",
    status: "Certificação"
  }
];

export function Education() {
  return (
    <section className="resume-section">
      <h2 className="resume-heading">Formação Acadêmica</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-accent/30 rounded-lg border border-border/50">
            <div className="flex items-start gap-3">
              <GraduationCap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {edu.degree}
                </h3>
                <p className="text-foreground-secondary">
                  {edu.institution}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2 md:mt-0 text-foreground-secondary">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{edu.period}</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                {edu.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}