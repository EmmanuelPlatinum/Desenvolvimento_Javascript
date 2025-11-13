// ============================================
// 1. TOGGLE DE TEMA (Modo Claro/Escuro)
// ============================================

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

// Carrega o tema salvo ou usa 'light' como padrão
let currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeButton();

// Evento de clique para alternar tema
themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeButton();
});

// Atualiza o texto do botão baseado no tema atual
function updateThemeButton() {
    if (currentTheme === 'light') {
        themeIcon.textContent = '🌙 Modo Escuro';
    } else {
        themeIcon.textContent = '☀️ Modo Claro';
    }
}

// ============================================
// 2. DATA E HORA DINÂMICA (Atualização em Tempo Real)
// ============================================

const currentDateTimeElement = document.getElementById('current-datetime');
const publishDateElement = document.getElementById('publish-date');

// Define a data de publicação (data atual)
const publishDate = new Date();
publishDateElement.textContent = `Publicado em: ${formatPublishDate(publishDate)}`;

// Atualiza o relógio a cada segundo
function updateClock() {
    const now = new Date();
    currentDateTimeElement.textContent = formatDateTime(now);
}

// Formata a data de publicação
function formatPublishDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}

// Formata a data e hora completa
function formatDateTime(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    return date.toLocaleString('pt-BR', options);
}

// Inicia o relógio e atualiza a cada segundo
updateClock();
setInterval(updateClock, 1000);

// ============================================
// 3. CONTADOR DE TEMPO DE LEITURA
// ============================================

const readingTimeElement = document.getElementById('reading-time');
const articleContent = document.querySelector('.article-content');

// Calcula o tempo de leitura baseado na contagem de palavras
function calculateReadingTime() {
    // Pega todo o texto do conteúdo do artigo
    const text = articleContent.textContent || articleContent.innerText;
    
    // Remove espaços extras e quebra em palavras
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;
    
    // Velocidade média de leitura: 200 palavras por minuto
    const wordsPerMinute = 200;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    
    // Atualiza o elemento na página
    readingTimeElement.textContent = `${minutes} min de leitura`;
    
    // Log para debug (opcional)
    console.log(`📚 Estatísticas do Artigo:`);
    console.log(`   Total de palavras: ${wordCount}`);
    console.log(`   Tempo estimado de leitura: ${minutes} minuto(s)`);
}

// Calcula o tempo de leitura quando a página carrega
calculateReadingTime();

// ============================================
// 4. ANIMAÇÃO DE ENTRADA (Opcional - Bônus)
// ============================================

// Adiciona animação suave ao scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// 5. LOG INICIAL
// ============================================

console.log('✅ Artigo Técnico carregado com sucesso!');
console.log('🎨 Funcionalidades ativas:');
console.log('   1. Toggle de Tema (Claro/Escuro)');
console.log('   2. Relógio em Tempo Real');
console.log('   3. Contador de Tempo de Leitura');
console.log('👨‍💻 Desenvolvido por: Emmanuel Duarte de Oliveira');
