import { useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Header } from "@/components/resume/Header";
import { Summary } from "@/components/resume/Summary";
import { Experience } from "@/components/resume/Experience";
import { Education } from "@/components/resume/Education";
import { Skills } from "@/components/resume/Skills";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "João Silva Santos - Desenvolvedor Web Full Stack";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Currículo profissional de João Silva Santos, Desenvolvedor Web Full Stack especializado em React, Node.js e TypeScript. 3+ anos de experiência criando aplicações web modernas.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background-secondary to-background">
      <ThemeToggle />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          <div style={{ '--delay': 0 } as React.CSSProperties}>
            <Header />
          </div>
          <div style={{ '--delay': 1 } as React.CSSProperties}>
            <Summary />
          </div>
          <div style={{ '--delay': 2 } as React.CSSProperties}>
            <Experience />
          </div>
          <div style={{ '--delay': 3 } as React.CSSProperties}>
            <Education />
          </div>
          <div style={{ '--delay': 4 } as React.CSSProperties}>
            <Skills />
          </div>
        </div>
        
        <footer className="mt-12 pt-8 border-t border-border text-center text-foreground-secondary">
          <p className="text-sm">
            © 2024 João Silva Santos. Currículo criado com React, TypeScript e Tailwind CSS.
          </p>
          <p className="text-xs mt-2 opacity-75">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;