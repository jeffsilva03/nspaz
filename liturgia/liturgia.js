// ============================================
// Liturgia Diária - JavaScript
// Igreja Matriz Nossa Senhora da Paz
// ============================================

// ============================================
// NAVBAR FUNCTIONALITY
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const backToTop = document.getElementById('backToTop');
    
    // Scroll handler for navbar
    function handleScroll() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
            backToTop?.classList.add('visible');
        } else {
            navbar.classList.remove('scrolled');
            backToTop?.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    // Mobile menu toggle
    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu?.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn?.classList.remove('active');
            mobileMenu?.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Back to top
    backToTop?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ============================================
// HERO PARTICLES
// ============================================
function createHeroParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 8}s`;
        particle.style.animationDuration = `${6 + Math.random() * 4}s`;
        container.appendChild(particle);
    }
}

// ============================================
// SIDEBAR NAVIGATION
// ============================================
function initSidebarNavigation() {
    const sidebar = document.getElementById('liturgiaSidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.leitura-section');
    const progressBar = document.getElementById('readingProgress');
    
    if (!sidebar || sidebarLinks.length === 0) return;
    
    // Smooth scroll to section
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });
    
    // Update active link on scroll
    function updateActiveLink() {
        const scrollPos = window.scrollY + 200;
        
        sections.forEach(section => {
            if (section.style.display === 'none') return;
            
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                sidebarLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // Update progress bar
        if (progressBar) {
            const mainContent = document.querySelector('.liturgia-content');
            if (mainContent) {
                const contentTop = mainContent.offsetTop;
                const contentHeight = mainContent.offsetHeight;
                const scrollProgress = Math.min(100, Math.max(0, 
                    ((window.scrollY - contentTop + window.innerHeight / 2) / contentHeight) * 100
                ));
                progressBar.style.width = `${scrollProgress}%`;
            }
        }
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

// ============================================
// FORMAT DATE
// ============================================
function formatDate(dateString) {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    // Parse the date string (expected format: "04/02/2025" or similar)
    let date;
    if (dateString && dateString.includes('/')) {
        const parts = dateString.split('/');
        date = new Date(parts[2], parts[1] - 1, parts[0]);
    } else {
        date = new Date();
    }
    
    const diaSemana = diasSemana[date.getDay()];
    const dia = date.getDate();
    const mes = meses[date.getMonth()];
    const ano = date.getFullYear();
    
    return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}

// ============================================
// FORMAT LITURGY TEXT
// ============================================
function formatLiturgiaText(texto) {
    if (!texto) return '<p>Texto não disponível.</p>';
    
    // Split by line breaks and wrap in paragraphs
    const paragraphs = texto.split('\n').filter(p => p.trim());
    
    return paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
}

// ============================================
// EXTRACT EVANGELIST NAME
// ============================================
function extractEvangelist(referencia) {
    if (!referencia) return '...';
    
    const ref = referencia.toLowerCase();
    
    if (ref.includes('mateus') || ref.includes('mt')) return 'São Mateus';
    if (ref.includes('marcos') || ref.includes('mc')) return 'São Marcos';
    if (ref.includes('lucas') || ref.includes('lc')) return 'São Lucas';
    if (ref.includes('joão') || ref.includes('jo')) return 'São João';
    
    return referencia.split(' ')[0];
}

// ============================================
// SET LITURGICAL COLOR
// ============================================
function setLiturgicalColor(cor) {
    const corIndicator = document.getElementById('corIndicator');
    const infoCor = document.getElementById('infoLiturgiaCor');
    
    if (!cor) return;
    
    const corNormalizada = cor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    if (corIndicator) {
        corIndicator.className = 'info-icon cor-indicator ' + corNormalizada;
    }
    
    if (infoCor) {
        infoCor.textContent = cor;
    }
}

// ============================================
// LOAD LITURGY DATA
// ============================================
async function carregarLiturgia() {
    try {
        const response = await fetch('https://liturgia.up.railway.app/v2/');
        const data = await response.json();
        
        console.log('Liturgia data:', data);
        
        // Update hero date
        const heroData = document.getElementById('heroData');
        if (heroData && data.data) {
            heroData.textContent = formatDate(data.data);
        }
        
        // Update info bar
        const infoLiturgiaNome = document.getElementById('infoLiturgiaNome');
        if (infoLiturgiaNome && data.liturgia) {
            infoLiturgiaNome.textContent = data.liturgia;
        }
        
        // Set liturgical color
        if (data.cor) {
            setLiturgicalColor(data.cor);
        }
        
        // Check if there's a second reading
        const hasSegundaLeitura = data.leituras?.segundaLeitura?.length > 0;
        
        if (hasSegundaLeitura) {
            // Show second reading section and sidebar link
            document.getElementById('segunda-leitura').style.display = 'block';
            document.getElementById('sidebarSegundaLeitura').style.display = 'flex';
            document.getElementById('evangelhoNumber').textContent = '04';
            document.getElementById('evangelhoBadgeNumber').textContent = '04';
        }
        
        // First Reading
        if (data.leituras?.primeiraLeitura?.length > 0) {
            const primeiraLeitura = data.leituras.primeiraLeitura[0];
            
            const refEl = document.getElementById('primeiraLeituraRef');
            if (refEl) {
                refEl.querySelector('span').textContent = primeiraLeitura.referencia || '';
            }
            
            const textoEl = document.getElementById('primeiraLeituraTexto');
            if (textoEl) {
                textoEl.innerHTML = formatLiturgiaText(primeiraLeitura.texto);
            }
        }
        
        // Psalm
        if (data.leituras?.salmo?.length > 0) {
            const salmo = data.leituras.salmo[0];
            
            const refEl = document.getElementById('salmoRef');
            if (refEl) {
                refEl.querySelector('span').textContent = salmo.referencia || '';
            }
            
            const refraoEl = document.getElementById('salmoRefrao');
            if (refraoEl && salmo.refrao) {
                refraoEl.querySelector('.refrao-texto').textContent = salmo.refrao;
            }
            
            const textoEl = document.getElementById('salmoTexto');
            if (textoEl) {
                textoEl.innerHTML = formatLiturgiaText(salmo.texto);
            }
        }
        
        // Second Reading (if exists)
        if (hasSegundaLeitura) {
            const segundaLeitura = data.leituras.segundaLeitura[0];
            
            const refEl = document.getElementById('segundaLeituraRef');
            if (refEl) {
                refEl.querySelector('span').textContent = segundaLeitura.referencia || '';
            }
            
            const textoEl = document.getElementById('segundaLeituraTexto');
            if (textoEl) {
                textoEl.innerHTML = formatLiturgiaText(segundaLeitura.texto);
            }
        }
        
        // Gospel
        if (data.leituras?.evangelho?.length > 0) {
            const evangelho = data.leituras.evangelho[0];
            
            const refEl = document.getElementById('evangelhoRef');
            if (refEl) {
                refEl.querySelector('span').textContent = evangelho.referencia || '';
            }
            
            const autorEl = document.getElementById('evangelhoAutor');
            if (autorEl) {
                autorEl.textContent = extractEvangelist(evangelho.referencia);
            }
            
            const textoEl = document.getElementById('evangelhoTexto');
            if (textoEl) {
                textoEl.innerHTML = formatLiturgiaText(evangelho.texto);
            }
        }
        
        // Re-initialize sidebar after content is loaded
        initSidebarNavigation();
        
    } catch (error) {
        console.error('Erro ao carregar liturgia:', error);
        
        // Show error message
        const sections = ['primeiraLeituraTexto', 'salmoTexto', 'segundaLeituraTexto', 'evangelhoTexto'];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.innerHTML = '<p style="color: var(--gray); text-align: center;">Não foi possível carregar a liturgia. Por favor, tente novamente mais tarde.</p>';
            }
        });
    }
}

// ============================================
// LOAD SANTO DO DIA
// ============================================
async function carregarSantoDoDia() {
    const santoNome = document.getElementById('santoNome');
    const santoFrase = document.getElementById('santoFrase');
    const santoImagem = document.getElementById('santoImagemWrapper');
    
    if (!santoNome) return;
    
    // Known saints with phrases
    const santosFrases = {
        'são joão de brito': '"Ó santo sacerdote, exímio missionário e evangelizador, fortalecei e encorajai aqueles que têm a mesma missão."',
        'nossa senhora de lourdes': '"Sou a Imaculada Conceição."',
        'santa escolástica': '"Quem ama o perigo nele perecerá."',
        'são brás': '"Senhor, concedei a todos que invocam minha intercessão a cura de suas doenças."',
        'santa águeda': '"Jesus Cristo é meu único tesouro."',
        'são paulo miki': '"Não há caminho para a salvação senão aquele que vos mostro."',
        'são cirilo': '"Aquele que não conhece as Escrituras não conhece a Cristo."',
        'são metodio': '"Trabalhemos juntos pela unidade da fé."',
        'são josé': '"Ele era justo e não quis difamá-la."',
        'santo antônio': '"Se procuras milagres, olha: morte, erro, calamidade, demônio e lepra fogem."',
        'são francisco de assis': '"Começa fazendo o que é necessário, depois o que é possível, e de repente estarás fazendo o impossível."',
        'santa teresinha': '"Quero passar meu céu fazendo bem à terra."',
        'são pio': '"Reze, espere e não se preocupe."',
        'são bento': '"Ora et labora - Reza e trabalha."',
        'nossa senhora da paz': '"Deixo-vos a paz, a minha paz vos dou."',
        'santa rita de cássia': '"Senhor, dai-me a força para suportar os espinhos desta vida."',
        'são joão paulo ii': '"Não tenham medo. Abram, escancarei as portas a Cristo!"',
        'são maximiliano kolbe': '"O ódio não é uma força criativa. Somente o amor o é."',
    };
    
    // Saints by date
    const hoje = new Date();
    const santosDoMes = {
        '2-4': { nome: 'São João de Brito', frase: santosFrases['são joão de brito'] },
        '2-3': { nome: 'São Brás', frase: santosFrases['são brás'] },
        '2-5': { nome: 'Santa Águeda', frase: santosFrases['santa águeda'] },
        '2-6': { nome: 'São Paulo Miki e Companheiros', frase: santosFrases['são paulo miki'] },
        '2-10': { nome: 'Santa Escolástica', frase: santosFrases['santa escolástica'] },
        '2-11': { nome: 'Nossa Senhora de Lourdes', frase: santosFrases['nossa senhora de lourdes'] },
        '2-14': { nome: 'São Cirilo e São Metódio', frase: santosFrases['são cirilo'] },
        '1-24': { nome: 'Nossa Senhora da Paz', frase: santosFrases['nossa senhora da paz'] },
    };
    
    const chaveData = `${hoje.getMonth() + 1}-${hoje.getDate()}`;
    const santoHoje = santosDoMes[chaveData];
    
    if (santoHoje) {
        santoNome.textContent = santoHoje.nome;
        if (santoFrase && santoHoje.frase) {
            santoFrase.querySelector('p').textContent = santoHoje.frase;
        }
    } else {
        // Try to fetch from Canção Nova
        try {
            const proxyUrl = 'https://api.allorigins.win/get?url=';
            const targetUrl = encodeURIComponent('https://santo.cancaonova.com/');
            
            const response = await fetch(proxyUrl + targetUrl);
            const data = await response.json();
            
            if (data.contents) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data.contents, 'text/html');
                const titulo = doc.querySelector('h1');
                
                if (titulo) {
                    let nomeSanto = titulo.textContent.trim();
                    nomeSanto = nomeSanto.replace(/^Santo do Dia\s*[-–]\s*/i, '');
                    santoNome.textContent = nomeSanto || 'Santo do Dia';
                }
                
                // Try to get saint image
                const imagemSanto = doc.querySelector('img[src*="santo"]') || 
                                   doc.querySelector('.wp-post-image') || 
                                   doc.querySelector('article img');
                
                if (imagemSanto && imagemSanto.src && santoImagem) {
                    const img = document.createElement('img');
                    img.src = imagemSanto.src;
                    img.alt = 'Santo do Dia';
                    img.onload = function() {
                        santoImagem.innerHTML = '';
                        santoImagem.appendChild(img);
                    };
                }
            }
        } catch (error) {
            console.error('Erro ao buscar santo do dia:', error);
            santoNome.textContent = 'Santo do Dia';
        }
    }
}

// ============================================
// SHARE FUNCTIONALITY
// ============================================
function initShareButton() {
    const btnCompartilhar = document.getElementById('btnCompartilhar');
    
    if (!btnCompartilhar) return;
    
    btnCompartilhar.addEventListener('click', async () => {
        const shareData = {
            title: 'Liturgia Diária - Igreja Matriz Nossa Senhora da Paz',
            text: 'Confira a liturgia do dia de hoje!',
            url: window.location.href
        };
        
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback: copy to clipboard
                await navigator.clipboard.writeText(window.location.href);
                alert('Link copiado para a área de transferência!');
            }
        } catch (error) {
            console.log('Erro ao compartilhar:', error);
        }
    });
}

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createHeroParticles();
    carregarLiturgia();
    carregarSantoDoDia();
    initShareButton();
    
    // Initialize sidebar after a small delay to ensure content is loaded
    setTimeout(initSidebarNavigation, 500);
});