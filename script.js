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
// PRELOADER
// ============================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1500);
});

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