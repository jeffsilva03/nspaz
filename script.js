// ============================================
// Igreja Matriz Nossa Senhora da Paz
// JavaScript - Premium Features v2.0
// ============================================

// Data das Pastorais
const pastoraisData = {
    apostolado: {
        nome: "Apostolado da Oração",
        icone: "fas fa-praying-hands",
        descricao: "O Apostolado da Oração é um movimento de espiritualidade que promove a oração e a devoção ao Sagrado Coração de Jesus. Nosso objetivo é unir fiéis na oração diária pelas intenções do Papa e da Igreja, transformando a vida cotidiana em oferenda a Deus.",
        reuniao: "Toda primeira sexta-feira do mês",
        horario: "19h30",
        local: "Salão Paroquial",
        coordenadores: [
            { nome: "Maria da Silva", cargo: "Coordenadora" },
            { nome: "João Santos", cargo: "Vice-coordenador" }
        ],
        whatsapp: "5500000000001"
    },
    ecc: {
        nome: "ECC - Encontro de Casais com Cristo",
        icone: "fas fa-hands-helping",
        descricao: "O ECC é um movimento que busca fortalecer o sacramento do matrimônio e a vida familiar através de encontros, retiros e acompanhamento de casais. Trabalhamos para que cada casal viva plenamente sua vocação ao amor.",
        reuniao: "Segundo sábado do mês",
        horario: "15h00",
        local: "Salão Paroquial",
        coordenadores: [
            { nome: "Carlos e Ana Oliveira", cargo: "Casal Coordenador" }
        ],
        whatsapp: "5500000000002"
    },
    catequese: {
        nome: "Pastoral da Catequese",
        icone: "fas fa-book-bible",
        descricao: "A Pastoral da Catequese é responsável pela formação cristã de crianças, jovens e adultos, preparando-os para os sacramentos da Primeira Eucaristia, Crisma e Batismo. Utilizamos métodos dinâmicos e participativos.",
        reuniao: "Sábados (catequese) e Quartas (formação)",
        horario: "14h00 - 16h00",
        local: "Salas de Catequese",
        coordenadores: [
            { nome: "Tereza Ferreira", cargo: "Coordenadora Geral" },
            { nome: "Paulo Mendes", cargo: "Coordenador de Crisma" }
        ],
        whatsapp: "5500000000003"
    },
    liturgia: {
        nome: "Pastoral da Liturgia",
        icone: "fas fa-cross",
        descricao: "A Pastoral da Liturgia prepara e anima as celebrações litúrgicas, cuidando de todos os detalhes para que as missas e celebrações sejam momentos de encontro profundo com Deus. Inclui leitores, acólitos e equipe de celebração.",
        reuniao: "Primeira quarta-feira do mês",
        horario: "19h30",
        local: "Igreja Matriz",
        coordenadores: [
            { nome: "Padre José", cargo: "Assessor" },
            { nome: "Rita Almeida", cargo: "Coordenadora" }
        ],
        whatsapp: "5500000000004"
    },
    jovens: {
        nome: "Grupo de Jovens",
        icone: "fas fa-user-friends",
        descricao: "O Grupo de Jovens reúne adolescentes e jovens adultos para momentos de oração, formação e fraternidade. Realizamos encontros semanais, retiros, ações sociais e participamos ativamente da vida da paróquia.",
        reuniao: "Todo sábado",
        horario: "19h00",
        local: "Salão da Juventude",
        coordenadores: [
            { nome: "Lucas Ribeiro", cargo: "Coordenador" },
            { nome: "Beatriz Costa", cargo: "Vice-coordenadora" }
        ],
        whatsapp: "5500000000005"
    },
    acolhida: {
        nome: "Pastoral da Acolhida",
        icone: "fas fa-hand-holding-heart",
        descricao: "A Pastoral da Acolhida é responsável por receber e acolher os fiéis nas celebrações, tornando a igreja um ambiente acolhedor e fraterno. Também auxilia nas informações e orientações aos visitantes.",
        reuniao: "Última terça-feira do mês",
        horario: "19h30",
        local: "Salão Paroquial",
        coordenadores: [
            { nome: "Dona Francisca", cargo: "Coordenadora" }
        ],
        whatsapp: "5500000000006"
    },
    batismo: {
        nome: "Pastoral do Batismo",
        icone: "fas fa-water",
        descricao: "A Pastoral do Batismo prepara pais e padrinhos para o sacramento do Batismo, através de encontros de formação sobre o significado e a importância deste primeiro sacramento na vida cristã.",
        reuniao: "Todo terceiro sábado do mês",
        horario: "14h00",
        local: "Salão Paroquial",
        coordenadores: [
            { nome: "Sandra Lima", cargo: "Coordenadora" }
        ],
        whatsapp: "5500000000007"
    },
    familiar: {
        nome: "Pastoral Familiar",
        icone: "fas fa-home",
        descricao: "A Pastoral Familiar acompanha e fortalece as famílias da comunidade, oferecendo suporte espiritual, orientação e momentos de partilha. Promovemos encontros, palestras e acompanhamento personalizado.",
        reuniao: "Primeiro domingo do mês",
        horario: "Após a missa das 11h",
        local: "Salão Paroquial",
        coordenadores: [
            { nome: "Roberto e Márcia Souza", cargo: "Casal Coordenador" }
        ],
        whatsapp: "5500000000008"
    },
    musica: {
        nome: "Pastoral da Música",
        icone: "fas fa-music",
        descricao: "A Pastoral da Música é responsável pela animação musical das celebrações. Nosso coral e grupo de instrumentistas trabalham para louvar a Deus através da música, tornando as missas mais participativas.",
        reuniao: "Quartas e Sextas (ensaios)",
        horario: "20h00",
        local: "Sala do Coral",
        coordenadores: [
            { nome: "Maestro Pedro", cargo: "Regente" },
            { nome: "Juliana Santos", cargo: "Coordenadora" }
        ],
        whatsapp: "5500000000009"
    },
    social: {
        nome: "Pastoral Social",
        icone: "fas fa-hands",
        descricao: "A Pastoral Social realiza ações de caridade e assistência aos necessitados da comunidade. Desenvolvemos projetos de distribuição de alimentos, roupas, apoio a famílias carentes e visitas a asilos.",
        reuniao: "Segunda terça-feira do mês",
        horario: "19h30",
        local: "Centro Comunitário",
        coordenadores: [
            { nome: "Irmã Conceição", cargo: "Assessora" },
            { nome: "Antônio Pereira", cargo: "Coordenador" }
        ],
        whatsapp: "5500000000010"
    },
    terco: {
        nome: "Terço dos Homens",
        icone: "fas fa-dove",
        descricao: "O Terço dos Homens é um movimento de espiritualidade que reúne homens para rezar o terço e fortalecer sua fé. Buscamos ser homens de oração, bons pais, maridos e cidadãos.",
        reuniao: "Toda quarta-feira",
        horario: "19h30",
        local: "Igreja Matriz",
        coordenadores: [
            { nome: "Marcos Vieira", cargo: "Coordenador" }
        ],
        whatsapp: "5500000000011"
    },
    comunicacao: {
        nome: "PaZcom - Pastoral da Comunicação",
        icone: "fas fa-bullhorn",
        descricao: "A PaZcom é responsável pela comunicação e divulgação das atividades paroquiais. Gerenciamos redes sociais, site, boletim informativo e transmissões online das celebrações.",
        reuniao: "Segunda segunda-feira do mês",
        horario: "20h00",
        local: "Sala da Comunicação",
        coordenadores: [
            { nome: "Felipe Araújo", cargo: "Coordenador" },
            { nome: "Camila Ramos", cargo: "Social Media" }
        ],
        whatsapp: "5500000000012"
    }
};

// ============================================
// PRELOADER - ANIMAÇÃO AVANÇADA
// ============================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const logo = document.getElementById('preloaderLogo');
    
    // Adicionar mais partículas dinamicamente
    createFloatingParticles();
    
    // Tempo total da animação: 2.5 segundos
    setTimeout(() => {
        // Fade out suave do preloader
        preloader.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        preloader.style.opacity = '0';
        preloader.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 800);
    }, 5200);
});

// Criar partículas flutuantes ao redor da logo
function createFloatingParticles() {
    const container = document.querySelector('.preloader-particles');
    if (!container) return;
    
    const particleCount = 12;
    const colors = ['#C9A860', '#E8D4A8', '#A88940'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        // Posição aleatória em círculo
        const angle = (i / particleCount) * Math.PI * 2;
        const radius = 80 + Math.random() * 40;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        particle.style.cssText = `
            position: absolute;
            width: ${4 + Math.random() * 6}px;
            height: ${4 + Math.random() * 6}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            left: 50%;
            top: 50%;
            transform: translate(${x}px, ${y}px);
            opacity: ${0.4 + Math.random() * 0.6};
            box-shadow: 0 0 ${10 + Math.random() * 10}px currentColor;
            animation: floatRandom ${2 + Math.random() * 3}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        container.appendChild(particle);
    }
    
    // Adicionar animação CSS dinamicamente
    if (!document.getElementById('particle-animation')) {
        const style = document.createElement('style');
        style.id = 'particle-animation';
        style.textContent = `
            @keyframes floatRandom {
                0%, 100% { 
                    transform: translate(var(--x), var(--y)) translateY(0) scale(1);
                    opacity: 0.6;
                }
                50% { 
                    transform: translate(var(--x), var(--y)) translateY(-20px) scale(1.2);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Definir variáveis CSS para cada partícula
    document.querySelectorAll('.floating-particle').forEach((particle, index) => {
        const angle = (index / particleCount) * Math.PI * 2;
        const radius = 80 + Math.random() * 40;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        particle.style.setProperty('--x', `${x}px`);
        particle.style.setProperty('--y', `${y}px`);
    });
}

// ============================================
// NAVBAR
// ============================================
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Scroll effect - Logo change based on hero section
const heroSection = document.getElementById('inicio');

function updateNavbar() {
    const heroHeight = heroSection ? heroSection.offsetHeight : 0;
    const scrollPosition = window.scrollY;
    
    // Change logo when scrolling past hero section
    if (scrollPosition > heroHeight - 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (scrollPosition > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
}

window.addEventListener('scroll', updateNavbar);
window.addEventListener('load', updateNavbar);

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// COUNTER ANIMATION
// ============================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number[data-count]');
            counters.forEach(counter => animateCounter(counter));
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    counterObserver.observe(heroStats);
}

// ============================================
// PASTORAIS - Modal data is already defined above
// ============================================

// ============================================
// MODAL FUNCTIONS
// ============================================
function openPastoralModal(pastoralKey) {
    const modal = document.getElementById('pastoralModal');
    const data = pastoraisData[pastoralKey];
    
    if (!data) return;
    
    // Update modal content
    document.getElementById('modalIcon').innerHTML = `<i class="${data.icone}"></i>`;
    document.getElementById('modalTitle').textContent = data.nome;
    document.getElementById('modalDescription').textContent = data.descricao;
    document.getElementById('modalReuniao').textContent = data.reuniao;
    document.getElementById('modalHorario').textContent = data.horario;
    document.getElementById('modalLocal').textContent = data.local;
    
    // Update coordenadores
    const coordenadoresContainer = document.getElementById('modalCoordenadores');
    coordenadoresContainer.innerHTML = data.coordenadores.map(coord => `
        <div class="coordenador-item">
            <div class="coordenador-avatar"><i class="fas fa-user"></i></div>
            <div class="coordenador-info">
                <span class="coordenador-nome">${coord.nome}</span>
                <span class="coordenador-cargo">${coord.cargo}</span>
            </div>
        </div>
    `).join('');
    
    // Update WhatsApp link
    document.getElementById('modalWhatsapp').href = `https://wa.me/${data.whatsapp}`;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePastoralModal() {
    const modal = document.getElementById('pastoralModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on overlay click
document.getElementById('pastoralModal').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closePastoralModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePastoralModal();
    }
});

// ============================================
// GALLERY CAROUSEL
// ============================================
let currentGallerySlide = 0;
const gallerySlider = document.getElementById('gallerySlider');
let galleryItems = [];
let totalGallerySlides = 0;
let isGalleryTransitioning = false;
let gallerySlideWidth = 0;

function setupGalleryCarousel() {
    if (!gallerySlider) return;
    
    galleryItems = gallerySlider.querySelectorAll('.galeria-item');
    totalGallerySlides = galleryItems.length;
    
    if (totalGallerySlides === 0) return;
    
    // Clone first 3 items and append to end
    for (let i = 0; i < 3; i++) {
        if (galleryItems[i]) {
            const clone = galleryItems[i].cloneNode(true);
            gallerySlider.appendChild(clone);
        }
    }
    
    // Clone last 3 items and prepend to start
    for (let i = totalGallerySlides - 1; i >= Math.max(0, totalGallerySlides - 3); i--) {
        if (galleryItems[i]) {
            const clone = galleryItems[i].cloneNode(true);
            gallerySlider.insertBefore(clone, gallerySlider.firstChild);
        }
    }
    
    // Calculate slide width
    const firstItem = gallerySlider.querySelector('.galeria-item');
    if (firstItem) {
        gallerySlideWidth = firstItem.offsetWidth + 24; // width + gap
    }
    
    // Position at initial slide
    currentGallerySlide = 3;
    updateGalleryPosition(false);
}

function updateGalleryPosition(animate = true) {
    if (!gallerySlider) return;
    
    if (!animate) {
        gallerySlider.style.transition = 'none';
    } else {
        gallerySlider.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    }
    
    gallerySlider.style.transform = `translateX(-${currentGallerySlide * gallerySlideWidth}px)`;
}

function slideGallery(direction) {
    if (isGalleryTransitioning || !gallerySlider) return;
    
    isGalleryTransitioning = true;
    currentGallerySlide += direction;
    
    updateGalleryPosition(true);
    
    setTimeout(() => {
        if (currentGallerySlide >= totalGallerySlides + 3) {
            currentGallerySlide = 3;
            updateGalleryPosition(false);
        } else if (currentGallerySlide < 3) {
            currentGallerySlide = totalGallerySlides;
            updateGalleryPosition(false);
        }
        
        isGalleryTransitioning = false;
    }, 500);
}

// Initialize gallery
document.addEventListener('DOMContentLoaded', () => {
    setupGalleryCarousel();
});

// Recalculate on resize
window.addEventListener('resize', () => {
    if (gallerySlider) {
        const firstItem = gallerySlider.querySelector('.galeria-item');
        if (firstItem) {
            gallerySlideWidth = firstItem.offsetWidth + 24;
            updateGalleryPosition(false);
        }
    }
});

// ============================================
// PASTORALS CAROUSEL
// ============================================
let currentPastoralSlide = 0;
let pastoralsSlider = null;
let pastoralCards = [];
let totalPastoralCards = 0;
let pastoralSlideWidth = 0;
let visiblePastoralCards = 4;

function getVisiblePastoralCards() {
    const width = window.innerWidth;
    if (width <= 768) return 1;
    if (width <= 992) return 2;
    if (width <= 1200) return 3;
    return 4;
}

function setupPastoralsCarousel() {
    pastoralsSlider = document.getElementById('pastoralsSlider');
    if (!pastoralsSlider) {
        console.log('Pastorals slider not found');
        return;
    }
    
    pastoralCards = pastoralsSlider.querySelectorAll('.pastoral-card');
    totalPastoralCards = pastoralCards.length;
    
    console.log('Pastorals found:', totalPastoralCards);
    
    if (totalPastoralCards === 0) return;
    
    // Calculate initial width
    setTimeout(() => {
        updatePastoralsPosition();
    }, 100);
}

function updatePastoralsPosition() {
    if (!pastoralsSlider || pastoralCards.length === 0) return;
    
    visiblePastoralCards = getVisiblePastoralCards();
    const firstCard = pastoralCards[0];
    if (firstCard) {
        pastoralSlideWidth = firstCard.offsetWidth + 24; // width + gap
        pastoralsSlider.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        pastoralsSlider.style.transform = `translateX(-${currentPastoralSlide * pastoralSlideWidth}px)`;
    }
}

function slidePastorals(direction) {
    if (!pastoralsSlider) {
        pastoralsSlider = document.getElementById('pastoralsSlider');
        pastoralCards = pastoralsSlider ? pastoralsSlider.querySelectorAll('.pastoral-card') : [];
        totalPastoralCards = pastoralCards.length;
    }
    
    if (!pastoralsSlider || totalPastoralCards === 0) return;
    
    visiblePastoralCards = getVisiblePastoralCards();
    const maxSlide = Math.max(0, totalPastoralCards - visiblePastoralCards);
    
    currentPastoralSlide += direction;
    
    if (currentPastoralSlide < 0) {
        currentPastoralSlide = maxSlide;
    } else if (currentPastoralSlide > maxSlide) {
        currentPastoralSlide = 0;
    }
    
    updatePastoralsPosition();
}

// Initialize pastorals on window load
window.addEventListener('load', () => {
    setupPastoralsCarousel();
});

// Recalculate on resize
window.addEventListener('resize', () => {
    currentPastoralSlide = 0;
    if (pastoralsSlider) {
        updatePastoralsPosition();
    }
});

// ============================================
// BACK TO TOP
// ============================================
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// FORM HANDLING
// ============================================
const contatoForm = document.getElementById('contatoForm');
if (contatoForm) {
    contatoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contatoForm);
        const data = Object.fromEntries(formData);
        
        // Here you would normally send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contatoForm.reset();
    });
}

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        console.log('Newsletter subscription:', email);
        alert('Cadastro realizado com sucesso!');
        newsletterForm.reset();
    });
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.missa-card, .evento-card, .pastoral-card, .galeria-item, .contato-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animationObserver.observe(el);
});

// Add animate-in class styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ============================================
// SCROLL REVEAL DELAY
// ============================================
function addStaggerDelay() {
    const staggerContainers = [
        '.missas-grid',
        '.pastorais-grid',
        '.galeria-grid',
        '.contato-cards'
    ];
    
    staggerContainers.forEach(containerSelector => {
        const container = document.querySelector(containerSelector);
        if (container) {
            const children = container.children;
            Array.from(children).forEach((child, index) => {
                child.style.transitionDelay = `${index * 0.1}s`;
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', addStaggerDelay);
// ============================================
// SACERDOTES CAROUSEL
// ============================================
let currentSacerdote = 0;
const sacerdoteSlides = document.querySelectorAll('.sacerdote-slide');
const sacerdoteDots = document.querySelectorAll('.sacerdote-dots .dot');
const totalSacerdotes = sacerdoteSlides.length;

function changeSacerdote(direction) {
    currentSacerdote += direction;
    
    if (currentSacerdote < 0) {
        currentSacerdote = totalSacerdotes - 1;
    } else if (currentSacerdote >= totalSacerdotes) {
        currentSacerdote = 0;
    }
    
    updateSacerdoteDisplay();
}

function goToSacerdote(index) {
    currentSacerdote = index;
    updateSacerdoteDisplay();
}

function updateSacerdoteDisplay() {
    sacerdoteSlides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSacerdote) {
            slide.classList.add('active');
        }
    });
    
    sacerdoteDots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSacerdote) {
            dot.classList.add('active');
        }
    });
}

// Auto-rotate sacerdotes every 8 seconds
setInterval(() => {
    if (document.visibilityState === 'visible') {
        changeSacerdote(1);
    }
}, 8000);

// ============================================
// COOKIE BANNER
// ============================================
function initCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    if (!cookieBanner) return;
    
    const cookieChoice = localStorage.getItem('cookieConsent');
    
    if (!cookieChoice) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 2000);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieBanner();
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    hideCookieBanner();
}

function hideCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    if (cookieBanner) {
        cookieBanner.classList.remove('show');
    }
}

// Initialize cookie banner
document.addEventListener('DOMContentLoaded', initCookieBanner);

// ============================================
// LITURGIA DO DIA - API
// ============================================
async function carregarLiturgiaDodia() {
    const liturgiaData = document.getElementById('liturgiaData');
    const liturgiaNome = document.getElementById('liturgiaNome');
    const liturgiaCor = document.getElementById('liturgiaCor');
    const leiturasLista = document.getElementById('leiturasLista');
    
    if (!leiturasLista) return;
    
    try {
        const response = await fetch('https://liturgia.up.railway.app/v2/');
        const data = await response.json();
        
        // Atualizar data
        if (liturgiaData) {
            liturgiaData.textContent = data.data || new Date().toLocaleDateString('pt-BR');
        }
        
        // Atualizar nome da liturgia
        if (liturgiaNome) {
            liturgiaNome.textContent = data.liturgia || 'Liturgia do dia';
        }
        
        // Atualizar cor litúrgica
        if (liturgiaCor && data.cor) {
            const corClass = data.cor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            liturgiaCor.textContent = data.cor;
            liturgiaCor.className = 'liturgia-cor ' + corClass;
        }
        
        // Montar lista de leituras
        let leiturasHTML = '';
        
        // Primeira Leitura
        if (data.leituras?.primeiraLeitura?.length > 0) {
            const primeiraLeitura = data.leituras.primeiraLeitura[0];
            leiturasHTML += `
                <div class="leitura-item">
                    <div class="leitura-icon"><i class="fas fa-book"></i></div>
                    <div class="leitura-info">
                        <span class="leitura-tipo">1ª Leitura</span>
                        <span class="leitura-referencia">${primeiraLeitura.referencia || ''}</span>
                    </div>
                </div>
            `;
        }
        
        // Segunda Leitura (se houver)
        if (data.leituras?.segundaLeitura?.length > 0) {
            const segundaLeitura = data.leituras.segundaLeitura[0];
            leiturasHTML += `
                <div class="leitura-item">
                    <div class="leitura-icon"><i class="fas fa-book"></i></div>
                    <div class="leitura-info">
                        <span class="leitura-tipo">2ª Leitura</span>
                        <span class="leitura-referencia">${segundaLeitura.referencia || ''}</span>
                    </div>
                </div>
            `;
        }
        
        // Salmo
        if (data.leituras?.salmo?.length > 0) {
            const salmo = data.leituras.salmo[0];
            leiturasHTML += `
                <div class="leitura-item">
                    <div class="leitura-icon"><i class="fas fa-music"></i></div>
                    <div class="leitura-info">
                        <span class="leitura-tipo">Salmo</span>
                        <span class="leitura-referencia">${salmo.referencia || ''}</span>
                    </div>
                </div>
            `;
        }
        
        // Evangelho
        if (data.leituras?.evangelho?.length > 0) {
            const evangelho = data.leituras.evangelho[0];
            leiturasHTML += `
                <div class="leitura-item">
                    <div class="leitura-icon"><i class="fas fa-cross"></i></div>
                    <div class="leitura-info">
                        <span class="leitura-tipo">Evangelho</span>
                        <span class="leitura-referencia">${evangelho.referencia || ''}</span>
                    </div>
                </div>
            `;
        }
        
        leiturasLista.innerHTML = leiturasHTML || '<p style="text-align: center; color: var(--gray);">Não foi possível carregar as leituras.</p>';
        
    } catch (error) {
        console.error('Erro ao carregar liturgia:', error);
        leiturasLista.innerHTML = '<p style="text-align: center; color: var(--gray);">Não foi possível carregar as leituras. Tente novamente mais tarde.</p>';
    }
}

// ============================================
// SANTO DO DIA - WEB SCRAPING via CORS proxy
// ============================================
async function carregarSantoDodia() {
    const santoData = document.getElementById('santoData');
    const santoNome = document.getElementById('santoNome');
    const santoFrase = document.getElementById('santoFrase');
    const santoImagem = document.getElementById('santoImagem');
    
    if (!santoNome) return;
    
    // Definir a data atual
    const hoje = new Date();
    const dia = hoje.getDate();
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    if (santoData) {
        santoData.textContent = `${dia} de ${meses[hoje.getMonth()]}`;
    }
    
    // Lista de santos com frases (banco local de frases conhecidas)
    const santosFrases = {
        'são joão de brito': '"Ó santo sacerdote, exímio missionário e evangelizador, fortalecei e encorajai aqueles que têm a mesma missão."',
        'nossa senhora de lourdes': '"Sou a Imaculada Conceição."',
        'santa escolástica': '"Quem ama o perigo nele perecerá."',
        'são brás': '"Senhor, concedei a todos que invocam minha intercessão a cura de suas doenças."',
        'santa águeda': '"Jesus Cristo é meu único tesouro."',
        'são paulo miki': '"Não há caminho para a salvação senão aquele que vos mostro."',
        'são cirilo': '"Aquele que não conhece as Escrituras não conhece a Cristo."',
        'são metodio': '"Trabalhemos juntos pela unidade da fé."',
        'são pedro canísio': '"Ó Senhor, fazei-me conhecer os mistérios de vossa divina bondade."',
        'santo andré dung lac': '"Estou pronto para morrer pela fé em Cristo."',
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
    
    // Tentar buscar informações do santo
    try {
        // Como não temos uma API pública direta para o santo do dia, 
        // vamos usar dados estáticos baseados na data
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
        
        const chaveData = `${hoje.getMonth() + 1}-${dia}`;
        const santoHoje = santosDoMes[chaveData];
        
        if (santoHoje) {
            santoNome.textContent = santoHoje.nome;
            if (santoFrase && santoHoje.frase) {
                santoFrase.textContent = santoHoje.frase;
            } else if (santoFrase) {
                santoFrase.textContent = '';
            }
        } else {
            // Buscar da página da Canção Nova via proxy ou mostrar mensagem padrão
            santoNome.textContent = 'Santo do Dia';
            if (santoFrase) {
                santoFrase.textContent = '';
            }
            
            // Tentar buscar via API alternativa
            await buscarSantoViaCancaoNova();
        }
        
        // Tentar buscar imagem do santo
        await buscarImagemSanto();
        
    } catch (error) {
        console.error('Erro ao carregar santo do dia:', error);
        santoNome.textContent = 'Santo do Dia';
        if (santoFrase) {
            santoFrase.textContent = '';
        }
    }
}

// Função auxiliar para tentar buscar santo da Canção Nova
async function buscarSantoViaCancaoNova() {
    const santoNome = document.getElementById('santoNome');
    const santoFrase = document.getElementById('santoFrase');
    
    try {
        // Usar um proxy CORS público (em produção, configure seu próprio proxy)
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const targetUrl = encodeURIComponent('https://santo.cancaonova.com/');
        
        const response = await fetch(proxyUrl + targetUrl);
        const data = await response.json();
        
        if (data.contents) {
            // Extrair o nome do santo do HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(data.contents, 'text/html');
            const titulo = doc.querySelector('h1');
            
            if (titulo && santoNome) {
                // Limpar o nome (remover "Santo do Dia - " se presente)
                let nomeSanto = titulo.textContent.trim();
                nomeSanto = nomeSanto.replace(/^Santo do Dia\s*[-–]\s*/i, '');
                santoNome.textContent = nomeSanto || 'Santo do Dia';
            }
        }
    } catch (error) {
        console.error('Erro ao buscar santo via Canção Nova:', error);
        // Mantém o texto padrão já definido
    }
}


// Função para buscar imagem do santo
async function buscarImagemSanto() {
    const santoImagem = document.getElementById('santoImagem');
    if (!santoImagem) return;
    
    try {
        // Usar um proxy CORS público
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const targetUrl = encodeURIComponent('https://santo.cancaonova.com/');
        
        const response = await fetch(proxyUrl + targetUrl);
        const data = await response.json();
        
        if (data.contents) {
            // Extrair a imagem do santo do HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(data.contents, 'text/html');
            
            // Tentar encontrar a imagem principal do santo
            const imagemSanto = doc.querySelector('img[src*="santo"]') || 
                               doc.querySelector('.wp-post-image') || 
                               doc.querySelector('article img') ||
                               doc.querySelector('.entry-content img');
            
            if (imagemSanto && imagemSanto.src) {
                // Criar elemento de imagem
                const img = document.createElement('img');
                img.src = imagemSanto.src;
                img.alt = 'Santo do Dia';
                img.onerror = function() {
                    // Se a imagem falhar ao carregar, mantém o placeholder
                    console.log('Erro ao carregar imagem do santo');
                };
                img.onload = function() {
                    // Substituir o placeholder pela imagem
                    santoImagem.innerHTML = '';
                    santoImagem.appendChild(img);
                };
            }
        }
    } catch (error) {
        console.error('Erro ao buscar imagem do santo:', error);
        // Mantém o placeholder se houver erro
    }
}

// Inicializar liturgia e santo do dia
document.addEventListener('DOMContentLoaded', () => {
    carregarLiturgiaDodia();
    carregarSantoDodia();
});