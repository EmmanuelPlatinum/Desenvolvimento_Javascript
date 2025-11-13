import { useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Header } from "@/components/resume/Header";
import { Summary } from "@/components/resume/Summary";
import { Experience } from "@/components/resume/Experience";
import { Education } from "@/components/resume/Education";
import { Skills } from "@/components/resume/Skills";
import { TechnicalArticle } from "@/components/TechnicalArticle";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Emmanuel Duarte de Oliveira - Desenvolvedor em Formação";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Currículo profissional de Emmanuel Duarte de Oliveira, estudante de Ciências da Computação especializado em Python, automação e desenvolvimento web. Cuiabá, MT.'
      );
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 
        'Emmanuel Duarte, desenvolvedor, Python, automação WhatsApp, Cuiabá, ciência da computação, UFMT, currículo, programador'
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
          <div style={{ '--delay': 5 } as React.CSSProperties}>
            <TechnicalArticle />
          </div>
        </div>
        
        <footer className="mt-12 pt-8 border-t border-border text-center text-foreground-secondary">
          <p className="text-sm">
            © 2024 Emmanuel Duarte de Oliveira. Currículo criado com React, TypeScript e Tailwind CSS.
          </p>
          <p className="text-xs mt-2 opacity-75">
            Última atualização: {new Date().toLocaleDateString('pt-BR')} | Cuiabá, MT
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;