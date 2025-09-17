import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="resume-section bg-gradient-to-r from-background to-background-secondary border-b-2 border-primary/20">
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
          João Silva Santos
        </h1>
        <h2 className="text-xl md:text-2xl text-primary font-medium mb-4">
          Desenvolvedor Web Full Stack
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-4 text-foreground-secondary">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <a href="mailto:joao.silva@email.com" className="contact-link">
              joao.silva@email.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <span>(11) 99999-9999</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>São Paulo, SP</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="outline" className="flex items-center gap-2" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            GitHub
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
        
        <Button variant="outline" className="flex items-center gap-2" asChild>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-4 w-4" />
            LinkedIn
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
        
        <Button variant="outline" className="flex items-center gap-2" asChild>
          <a href="/portfolio" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            Portfólio
          </a>
        </Button>
        
        <Button className="flex items-center gap-2 bg-primary hover:bg-primary-dark" asChild>
          <a href="/curriculo.pdf" download>
            <Download className="h-4 w-4" />
            Baixar Currículo PDF
          </a>
        </Button>
      </div>
    </header>
  );
}