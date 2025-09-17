import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Especialista em Automação WhatsApp Empresarial",
    company: "Freelancer / Projetos Independentes",
    period: "2023 - Presente",
    description: [
      "Desenvolvimento de automações inteligentes para WhatsApp Business utilizando Python",
      "Criação de chatbots personalizados com integração CRM para otimizar processos comerciais",
      "Implementação de soluções que aumentaram a eficiência de comunicação empresarial em 70%",
      "Gestão completa de fluxos de atendimento automatizado e follow-up de clientes"
    ]
  },
  {
    title: "Consultor Google Maps Empresarial",
    company: "Marketing Digital / Freelancer",
    period: "2023 - Presente",
    description: [
      "Criação e otimização de perfis empresariais no Google Maps para aumentar visibilidade local",
      "Implementação de estratégias de SEO local que resultaram em +150% de visualizações",
      "Gestão completa de informações empresariais, fotos profissionais e avaliações",
      "Consultoria em marketing digital e presença online para pequenas e médias empresas"
    ]
  },
  {
    title: "Técnico em Suporte e Hardware",
    company: "Projetos Acadêmicos e Voluntários",
    period: "2021 - 2023",
    description: [
      "Manutenção preventiva e corretiva de computadores, servidores e equipamentos de rede",
      "Suporte técnico presencial e remoto para sistemas Windows e Linux",
      "Instalação e configuração de redes locais, roteadores e pontos de acesso",
      "Diagnóstico e resolução de problemas de hardware, software e conectividade"
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