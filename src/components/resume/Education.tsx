import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bacharelado em Ciência da Computação",
    institution: "Universidade Federal de São Paulo (UNIFESP)",
    period: "2018 - 2022",
    status: "Concluído"
  },
  {
    degree: "Técnico em Informática",
    institution: "ETEC São Paulo",
    period: "2016 - 2017",
    status: "Concluído"
  },
  {
    degree: "Certificação AWS Solutions Architect",
    institution: "Amazon Web Services",
    period: "2023",
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