import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileAvatar } from "@/components/ProfileAvatar";

export function Header() {
  return (
    <header className="resume-section bg-gradient-to-br from-background via-background-secondary to-background border-b-2 border-primary/20">
      <div className="text-center mb-8">
        {/* Foto de Perfil */}
        <div className="mb-6">
          <ProfileAvatar size="xl" showBorder={true} className="mx-auto" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          Emmanuel Duarte de Oliveira
        </h1>
        <h2 className="text-xl md:text-2xl text-primary font-medium mb-6">
          Desenvolvedor em Formação | Ciência da Computação
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-foreground-secondary">
          <div className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="h-4 w-4 text-primary" />
            <a href="mailto:oliveiraemmanuel658@gmail.com" className="contact-link">
              oliveiraemmanuel658@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <a href="tel:+5565984799180" className="contact-link">
              (65) 98479-9180
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Cuiabá, Mato Grosso</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        <Button variant="outline" className="flex items-center gap-2 hover:bg-primary/10 hover:border-primary transition-all" asChild>
          <a href="https://github.com/EmmanuelPlatinum" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            GitHub
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
        
        <Button variant="outline" className="flex items-center gap-2 hover:bg-primary/10 hover:border-primary transition-all" asChild>
          <a href="https://linkedin.com/in/emmanuel-duarte-de-oliveira" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-4 w-4" />
            LinkedIn
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
        
        <Button variant="outline" className="flex items-center gap-2 hover:bg-primary/10 hover:border-primary transition-all" asChild>
          <a href="https://instagram.com/emmanuel" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-4 w-4" />
            Instagram
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
        
        <Button className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300" asChild>
          <a href="/curriculo-emmanuel.pdf" download="Curriculo-Emmanuel-Duarte-Oliveira.pdf">
            <Download className="h-4 w-4" />
            Baixar Currículo PDF
          </a>
        </Button>
      </div>
    </header>
  );
}