import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function TechnicalArticle() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [readingTime, setReadingTime] = useState(0);
  const { theme, toggleTheme } = useTheme();

  // Atualiza data e hora a cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calcula tempo de leitura baseado no conteúdo
  useEffect(() => {
    const articleContent = document.querySelector('.article-content');
    if (articleContent) {
      const text = articleContent.textContent || '';
      const wordCount = text.trim().split(/\s+/).length;
      const wordsPerMinute = 200; // Velocidade média de leitura
      const minutes = Math.ceil(wordCount / wordsPerMinute);
      setReadingTime(minutes);
    }
  }, []);

  const formatDateTime = (date: Date) => {
    return date.toLocaleString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <article className="resume-section animate-fade-in bg-card border border-border rounded-lg shadow-lg overflow-hidden">
      {/* Cabeçalho do Artigo */}
      <header className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 md:p-8 border-b border-border">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm text-foreground-secondary">
            <Clock className="w-4 h-4" />
            <span>{readingTime} min de leitura</span>
          </div>
          
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md"
            aria-label="Alternar tema"
          >
            {theme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
          </button>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
          Como construir interfaces web modernas com JavaScript
        </h1>
        
        <div className="flex items-center gap-2 text-sm text-foreground-secondary">
          <Calendar className="w-4 h-4" />
          <time dateTime={currentDateTime.toISOString()}>
            Publicado em: {currentDateTime.toLocaleDateString('pt-BR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
        </div>
      </header>

      {/* Conteúdo do Artigo */}
      <div className="article-content p-6 md:p-8 prose prose-slate dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Introdução</h2>
          <p className="text-foreground-secondary leading-relaxed mb-4">
            O desenvolvimento web moderno é sustentado por três pilares fundamentais: HTML, CSS e JavaScript. 
            Cada tecnologia desempenha um papel crucial na criação de experiências web ricas e interativas. 
            Este artigo explora como essas tecnologias trabalham em conjunto para construir interfaces modernas e responsivas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">🏗️ HTML: A Estrutura</h2>
          <p className="text-foreground-secondary leading-relaxed mb-4">
            HTML (HyperText Markup Language) é a espinha dorsal de qualquer página web. Ele define a estrutura 
            e o significado semântico do conteúdo. Com HTML5, ganhamos elementos semânticos como 
            <code className="px-2 py-1 bg-muted rounded text-sm">&lt;article&gt;</code>, 
            <code className="px-2 py-1 bg-muted rounded text-sm mx-1">&lt;section&gt;</code>, e 
            <code className="px-2 py-1 bg-muted rounded text-sm">&lt;header&gt;</code> que tornam o código 
            mais legível e acessível.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="text-sm text-foreground-secondary italic">
              💡 Dica: Sempre use elementos semânticos apropriados para melhorar a acessibilidade e SEO.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">🎨 CSS: O Estilo</h2>
          <p className="text-foreground-secondary leading-relaxed mb-4">
            CSS (Cascading Style Sheets) é responsável pela apresentação visual. Ele transforma a estrutura HTML 
            em designs atraentes e funcionais. Com CSS moderno, temos ferramentas poderosas como Flexbox, Grid, 
            animações e variáveis CSS que permitem criar layouts complexos e responsivos com facilidade.
          </p>
          <p className="text-foreground-secondary leading-relaxed mb-4">
            Frameworks como Tailwind CSS revolucionaram o desenvolvimento ao oferecer classes utilitárias que 
            aceleram o processo de estilização mantendo a consistência do design.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">⚡ JavaScript: O Comportamento</h2>
          <p className="text-foreground-secondary leading-relaxed mb-4">
            JavaScript é a linguagem que traz vida às páginas web. Ele permite criar interações dinâmicas, 
            manipular o DOM, fazer requisições assíncronas e construir aplicações complexas. Com o advento de 
            frameworks modernos como React, Vue e Angular, JavaScript se tornou ainda mais poderoso.
          </p>
          <p className="text-foreground-secondary leading-relaxed mb-4">
            Funcionalidades como o alternador de tema desta página, o relógio em tempo real no rodapé e o 
            contador de tempo de leitura demonstram o poder do JavaScript em criar experiências interativas 
            e personalizadas para os usuários.
          </p>
          <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
            <p className="text-sm text-foreground font-medium">
              📊 Este artigo está demonstrando JavaScript em ação com três funcionalidades interativas:
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-foreground-secondary space-y-1">
              <li>Toggle de tema claro/escuro (botão no topo)</li>
              <li>Relógio em tempo real (rodapé, atualizado a cada segundo)</li>
              <li>Estimativa de tempo de leitura (baseado na contagem de palavras)</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">🔄 Trabalhando em Conjunto</h2>
          <p className="text-foreground-secondary leading-relaxed mb-4">
            A verdadeira magia acontece quando essas três tecnologias trabalham harmoniosamente. HTML fornece 
            a estrutura semântica, CSS cria a experiência visual atraente, e JavaScript adiciona a interatividade 
            que os usuários esperam de aplicações web modernas.
          </p>
          <p className="text-foreground-secondary leading-relaxed mb-4">
            Ao dominar esses três pilares e entender como eles se complementam, desenvolvedores podem criar 
            experiências web que são não apenas funcionais, mas também acessíveis, performáticas e agradáveis 
            de usar.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">🎯 Conclusão</h2>
          <p className="text-foreground-secondary leading-relaxed mb-4">
            O desenvolvimento web moderno exige proficiência nessas tecnologias fundamentais. Seja construindo 
            um simples site pessoal ou uma aplicação empresarial complexa, a combinação de HTML semântico, 
            CSS bem estruturado e JavaScript interativo é a chave para o sucesso.
          </p>
          <p className="text-foreground-secondary leading-relaxed">
            Continue aprendendo, experimentando e construindo. O futuro da web está em constante evolução, 
            e dominar essas habilidades fundamentais é o primeiro passo para criar experiências web 
            verdadeiramente excepcionais.
          </p>
        </section>
      </div>

      {/* Rodapé do Artigo com Relógio */}
      <footer className="bg-gradient-to-r from-muted/30 to-transparent p-6 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-foreground-secondary">
            <span className="font-medium">Autor:</span> Emmanuel Duarte de Oliveira
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground-secondary font-mono">
            <Clock className="w-4 h-4 animate-pulse" />
            <time dateTime={currentDateTime.toISOString()}>
              {formatDateTime(currentDateTime)}
            </time>
          </div>
        </div>
      </footer>
    </article>
  );
}
