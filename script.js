
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
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000001"
    },
    cristoeshow: {
        nome: "Cristo é Show",
        icone: "fas fa-star",
        descricao: "O Cristo é Show é um movimento que evangeliza através da arte, música e cultura. Reunimos jovens e adultos para celebrar a fé de forma criativa e dinâmica, levando a mensagem de Cristo através de apresentações artísticas.",
        reuniao: "A definir",
        horario: "A definir",
        local: "Salão Paroquial",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000002"
    },
    missaosaofrancisco: {
        nome: "Missão São Francisco",
        icone: "fas fa-dove",
        descricao: "A Missão São Francisco é inspirada na espiritualidade franciscana, dedicada à evangelização e ao serviço aos mais necessitados. Seguimos os passos de São Francisco de Assis, levando paz, amor e esperança à nossa comunidade.",
        reuniao: "A definir",
        horario: "A definir",
        local: "Salão Paroquial",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000003"
    },
    pazcom: {
        nome: "PaZcom - Pastoral da Comunicação",
        icone: "fas fa-bullhorn",
        descricao: "A PaZcom é responsável pela comunicação e divulgação das atividades paroquiais. Gerenciamos redes sociais, site, boletim informativo e transmissões online das celebrações, conectando a comunidade através dos meios digitais.",
        reuniao: "Segunda segunda-feira do mês",
        horario: "20h00",
        local: "Sala da Comunicação",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000004"
    },
    acolhida: {
        nome: "Pastoral da Acolhida",
        icone: "fas fa-hand-holding-heart",
        descricao: "A Pastoral da Acolhida é responsável por receber e acolher os fiéis nas celebrações, tornando a igreja um ambiente acolhedor e fraterno. Também auxilia nas informações e orientações aos visitantes.",
        reuniao: "Última terça-feira do mês",
        horario: "19h30",
        local: "Salão Paroquial",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000005"
    },
    batismo: {
        nome: "Pastoral do Batismo",
        icone: "fas fa-water",
        descricao: "A Pastoral do Batismo prepara pais e padrinhos para o sacramento do Batismo, através de encontros de formação sobre o significado e a importância deste primeiro sacramento na vida cristã.",
        reuniao: "Todo terceiro sábado do mês",
        horario: "14h00",
        local: "Salão Paroquial",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000006"
    },
    catequese: {
        nome: "Pastoral da Catequese",
        icone: "fas fa-book-bible",
        descricao: "A Pastoral da Catequese é responsável pela formação cristã de crianças, jovens e adultos, preparando-os para os sacramentos da Primeira Eucaristia, Crisma e Batismo. Utilizamos métodos dinâmicos e participativos.",
        reuniao: "Sábados (catequese) e Quartas (formação)",
        horario: "14h00 - 16h00",
        local: "Salas de Catequese",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a) Geral" }
        ],
        whatsapp: "5500000000007"
    },
    ministros: {
        nome: "Pastoral dos Ministros",
        icone: "fas fa-bread-slice",
        descricao: "A Pastoral dos Ministros Extraordinários da Sagrada Comunhão forma e coordena os ministros que auxiliam na distribuição da Eucaristia durante as celebrações e levam a comunhão aos enfermos e idosos.",
        reuniao: "A definir",
        horario: "A definir",
        local: "Igreja Matriz",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000008"
    },
    cerimoniarios: {
        nome: "Pastoral dos Cerimoniários",
        icone: "fas fa-book-reader",
        descricao: "A Pastoral dos Cerimoniários é responsável pela organização e coordenação das celebrações litúrgicas, garantindo que todos os ritos sejam realizados com reverência e dignidade.",
        reuniao: "A definir",
        horario: "A definir",
        local: "Igreja Matriz",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000009"
    },
    coroinhas: {
        nome: "Pastoral dos Coroinhas",
        icone: "fas fa-child",
        descricao: "A Pastoral dos Coroinhas forma crianças e adolescentes para o serviço no altar, ensinando-os sobre a liturgia e a importância de servir a Deus nas celebrações eucarísticas.",
        reuniao: "A definir",
        horario: "A definir",
        local: "Igreja Matriz",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000010"
    },
    dizimo: {
        nome: "Pastoral do Dízimo",
        icone: "fas fa-hand-holding-usd",
        descricao: "A Pastoral do Dízimo promove a formação e conscientização sobre a importância do dízimo como expressão de gratidão a Deus e compromisso com a comunidade, sustentando as atividades paroquiais.",
        reuniao: "A definir",
        horario: "A definir",
        local: "Salão Paroquial",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000011"
    },
    familiar: {
        nome: "Pastoral Familiar",
        icone: "fas fa-home",
        descricao: "A Pastoral Familiar acompanha e fortalece as famílias da comunidade, oferecendo suporte espiritual, orientação e momentos de partilha. Promovemos encontros, palestras e acompanhamento personalizado.",
        reuniao: "Primeiro domingo do mês",
        horario: "Após a missa das 11h",
        local: "Salão Paroquial",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000012"
    },
    liturgia: {
        nome: "Pastoral da Liturgia",
        icone: "fas fa-cross",
        descricao: "A Pastoral da Liturgia prepara e anima as celebrações litúrgicas, cuidando de todos os detalhes para que as missas e celebrações sejam momentos de encontro profundo com Deus. Inclui leitores, acólitos e equipe de celebração.",
        reuniao: "Primeira quarta-feira do mês",
        horario: "19h30",
        local: "Igreja Matriz",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000013"
    },
    surdos: {
        nome: "Pastoral dos Surdos",
        icone: "fas fa-american-sign-language-interpreting",
        descricao: "A Pastoral dos Surdos promove o acolhimento e a evangelização da comunidade surda, oferecendo tradução em Libras durante as celebrações e atividades específicas para pessoas com deficiência auditiva.",
        reuniao: "A definir",
        horario: "A definir",
        local: "Salão Paroquial",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000014"
    },
    pequeninos: {
        nome: "Pastoral dos Pequeninos do Senhor",
        icone: "fas fa-baby",
        descricao: "A Pastoral dos Pequeninos do Senhor cuida da evangelização e acompanhamento das crianças pequenas, oferecendo atividades lúdicas e catequéticas adequadas à idade, enquanto os pais participam das celebrações.",
        reuniao: "A definir",
        horario: "Durante as missas",
        local: "Sala dos Pequeninos",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000015"
    },
    tercohomens: {
        nome: "Terço dos Homens",
        icone: "fas fa-male",
        descricao: "O Terço dos Homens é um movimento de espiritualidade que reúne homens para rezar o terço e fortalecer sua fé. Buscamos ser homens de oração, bons pais, maridos e cidadãos.",
        reuniao: "Toda quarta-feira",
        horario: "19h30",
        local: "Igreja Matriz",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000016"
    },
    social: {
        nome: "Pastoral Social",
        icone: "fas fa-hands-helping",
        descricao: "A Pastoral Social realiza ações de caridade e assistência aos necessitados da comunidade. Desenvolvemos projetos de distribuição de alimentos, roupas, apoio a famílias carentes e visitas a asilos.",
        reuniao: "Segunda terça-feira do mês",
        horario: "19h30",
        local: "Centro Comunitário",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000017"
    },
    santateresinha: {
        nome: "Grupo de Oração Santa Teresinha",
        icone: "fas fa-pray",
        descricao: "O Grupo de Oração Santa Teresinha é um grupo de oração carismática que se reúne para louvor, adoração e intercessão. Seguimos a espiritualidade de Santa Teresinha do Menino Jesus.",
        reuniao: "A definir",
        horario: "A definir",
        local: "Salão Paroquial",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000018"
    },
    dombosco: {
        nome: "Grupo de Jovens Dom Bosco",
        icone: "fas fa-user-friends",
        descricao: "O Grupo de Jovens Dom Bosco reúne adolescentes e jovens adultos para momentos de oração, formação e fraternidade, inspirados na pedagogia salesiana. Realizamos encontros semanais, retiros e ações sociais.",
        reuniao: "Todo sábado",
        horario: "19h00",
        local: "Salão da Juventude",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000019"
    },
    tercomulheres: {
        nome: "Terço das Mulheres",
        icone: "fas fa-female",
        descricao: "O Terço das Mulheres é um movimento de espiritualidade que reúne mulheres para rezar o terço e fortalecer sua fé. Buscamos ser mulheres de oração, testemunhando o amor de Deus em nossas famílias e comunidade.",
        reuniao: "A definir",
        horario: "A definir",
        local: "Igreja Matriz",
        coordenadores: [
            { nome: "Coordenador(a)", cargo: "Coordenador(a)" }
        ],
        whatsapp: "5500000000020"
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
let pastoralCards = null;
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
    updatePastoralsPosition();
}

function updatePastoralsPosition() {
    if (!pastoralsSlider) {
        pastoralsSlider = document.getElementById('pastoralsSlider');
    }
    if (!pastoralCards || pastoralCards.length === 0) {
        pastoralCards = pastoralsSlider ? pastoralsSlider.querySelectorAll('.pastoral-card') : null;
        totalPastoralCards = pastoralCards ? pastoralCards.length : 0;
    }
    
    if (!pastoralsSlider || !pastoralCards || pastoralCards.length === 0) return;
    
    visiblePastoralCards = getVisiblePastoralCards();
    const firstCard = pastoralCards[0];
    if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gap = 24;
        pastoralSlideWidth = cardWidth + gap;
        pastoralsSlider.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        pastoralsSlider.style.transform = 'translateX(-' + (currentPastoralSlide * pastoralSlideWidth) + 'px)';
    }
}

function slidePastorals(direction) {
    // Garantir que o slider está inicializado
    if (!pastoralsSlider) {
        pastoralsSlider = document.getElementById('pastoralsSlider');
    }
    if (!pastoralCards || pastoralCards.length === 0) {
        pastoralCards = pastoralsSlider ? pastoralsSlider.querySelectorAll('.pastoral-card') : null;
        totalPastoralCards = pastoralCards ? pastoralCards.length : 0;
    }
    
    if (!pastoralsSlider || totalPastoralCards === 0) {
        console.log('Slider não encontrado ou sem cards');
        return;
    }
    
    visiblePastoralCards = getVisiblePastoralCards();
    const maxSlide = Math.max(0, totalPastoralCards - visiblePastoralCards);
    
    console.log('Direction:', direction, 'Current:', currentPastoralSlide, 'Max:', maxSlide, 'Total:', totalPastoralCards);
    
    currentPastoralSlide += direction;
    
    if (currentPastoralSlide < 0) {
        currentPastoralSlide = maxSlide;
    } else if (currentPastoralSlide > maxSlide) {
        currentPastoralSlide = 0;
    }
    
    updatePastoralsPosition();
}

// Initialize pastorals on DOM ready and window load
document.addEventListener('DOMContentLoaded', function() {
    setupPastoralsCarousel();
});

window.addEventListener('load', function() {
    setupPastoralsCarousel();
});

// Recalculate on resize
window.addEventListener('resize', function() {
    currentPastoralSlide = 0;
    updatePastoralsPosition();
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
// SANTO DO DIA - BANCO DE DADOS LOCAL
// ============================================
const santosDoAno = {
    // Janeiro
    '1-1': { nome: 'Santa Maria, Mãe de Deus', frase: '"Eis aqui a serva do Senhor."' },
    '1-2': { nome: 'São Basílio Magno e São Gregório', frase: '"Quem ama a pobreza possui o tesouro inesgotável."' },
    '1-3': { nome: 'Santíssimo Nome de Jesus', frase: '"Não há outro nome pelo qual possamos ser salvos."' },
    '1-4': { nome: 'Santa Ângela de Foligno', frase: '"O amor não conhece limites."' },
    '1-5': { nome: 'São João Nepomuceno Neumann', frase: '"Tudo para a maior glória de Deus."' },
    '1-6': { nome: 'Epifania do Senhor', frase: '"Viemos adorar o Rei."' },
    '1-7': { nome: 'São Raimundo de Peñafort', frase: '"A misericórdia é maior que qualquer pecado."' },
    '1-9': { nome: 'Santa Juliana', frase: '"Cristo é a minha força."' },
    '1-10': { nome: 'São Gregório de Nissa', frase: '"Deus é amor infinito."' },
    '1-13': { nome: 'Santo Hilário de Poitiers', frase: '"A fé busca compreender."' },
    '1-15': { nome: 'São Paulo Eremita', frase: '"No silêncio, encontramos Deus."' },
    '1-17': { nome: 'Santo Antão', frase: '"Conheça-te a ti mesmo."' },
    '1-20': { nome: 'São Sebastião', frase: '"Sou soldado de Cristo."' },
    '1-21': { nome: 'Santa Inês', frase: '"Prefiro a morte à perda da pureza."' },
    '1-22': { nome: 'São Vicente', frase: '"A caridade é o vínculo da perfeição."' },
    '1-24': { nome: 'São Francisco de Sales', frase: '"Nada por força, tudo por amor."' },
    '1-25': { nome: 'Conversão de São Paulo', frase: '"Já não sou eu quem vive, mas Cristo vive em mim."' },
    '1-26': { nome: 'São Timóteo e São Tito', frase: '"Combati o bom combate."' },
    '1-27': { nome: 'Santa Ângela Merici', frase: '"Eduquem com amor."' },
    '1-28': { nome: 'São Tomás de Aquino', frase: '"A graça não destrói a natureza, mas a aperfeiçoa."' },
    '1-31': { nome: 'São João Bosco', frase: '"Educar é coisa do coração."' },
    // Fevereiro
    '2-1': { nome: 'Santa Veridiana', frase: '"Na simplicidade está a santidade."' },
    '2-2': { nome: 'Apresentação do Senhor', frase: '"Meus olhos viram a vossa salvação."' },
    '2-3': { nome: 'São Brás', frase: '"Senhor, concedei a cura aos que invocam minha intercessão."' },
    '2-4': { nome: 'São João de Brito', frase: '"Fortalecei aqueles que têm a missão de evangelizar."' },
    '2-5': { nome: 'Santa Águeda', frase: '"Jesus Cristo é meu único tesouro."' },
    '2-6': { nome: 'São Paulo Miki', frase: '"Não há caminho para a salvação senão Cristo."' },
    '2-7': { nome: 'Santa Juliana', frase: '"O amor de Deus nos sustenta."' },
    '2-8': { nome: 'Santa Josefina Bakhita', frase: '"Se eu encontrasse aqueles negreiros, ajoelhar-me-ia para beijar-lhes as mãos."' },
    '2-9': { nome: 'Santa Apolônia', frase: '"A fé nos dá coragem."' },
    '2-10': { nome: 'Santa Escolástica', frase: '"Quem ama mais, pode mais."' },
    '2-11': { nome: 'Nossa Senhora de Lourdes', frase: '"Sou a Imaculada Conceição."' },
    '2-12': { nome: 'Santa Eulália', frase: '"Cristo é minha força na perseguição."' },
    '2-14': { nome: 'São Cirilo e São Metódio', frase: '"Aquele que não conhece as Escrituras não conhece a Cristo."' },
    '2-17': { nome: 'Sete Fundadores dos Servitas', frase: '"Servir a Maria é servir a Cristo."' },
    '2-18': { nome: 'São Francisco Regis Clet', frase: '"A missão é minha vida."' },
    '2-21': { nome: 'São Pedro Damião', frase: '"A oração é a respiração da alma."' },
    '2-22': { nome: 'Cátedra de São Pedro', frase: '"Tu és Pedro, e sobre esta pedra edificarei minha Igreja."' },
    '2-23': { nome: 'São Policarpo', frase: '"Há 86 anos sirvo a Cristo e Ele nunca me fez mal."' },
    // Março
    '3-3': { nome: 'Santa Catarina Drexel', frase: '"O amor de Deus é para todos."' },
    '3-4': { nome: 'São Casimiro', frase: '"É melhor morrer do que pecar."' },
    '3-7': { nome: 'Santas Perpétua e Felicidade', frase: '"Não tememos a morte por amor a Cristo."' },
    '3-8': { nome: 'São João de Deus', frase: '"Fazei o bem a vós mesmos, irmãos, fazendo-o aos pobres."' },
    '3-9': { nome: 'Santa Francisca Romana', frase: '"A caridade começa em casa."' },
    '3-17': { nome: 'São Patrício', frase: '"Cristo comigo, Cristo diante de mim."' },
    '3-19': { nome: 'São José', frase: '"José, não temas receber Maria."' },
    '3-25': { nome: 'Anunciação do Senhor', frase: '"Eis aqui a serva do Senhor, faça-se em mim segundo a vossa palavra."' },
    // Abril
    '4-2': { nome: 'São Francisco de Paula', frase: '"A caridade é o maior dom."' },
    '4-4': { nome: 'Santo Isidoro', frase: '"A ignorância é a mãe de todos os erros."' },
    '4-5': { nome: 'São Vicente Ferrer', frase: '"Temei a Deus e dai-lhe glória."' },
    '4-7': { nome: 'São João Batista de la Salle', frase: '"A educação transforma vidas."' },
    '4-11': { nome: 'Santo Estanislau', frase: '"A verdade prevalece."' },
    '4-13': { nome: 'São Martinho I', frase: '"A fé não se negocia."' },
    '4-21': { nome: 'Santo Anselmo', frase: '"Creio para compreender."' },
    '4-23': { nome: 'São Jorge', frase: '"Combater o mal com coragem e fé."' },
    '4-24': { nome: 'São Fidélis de Sigmaringa', frase: '"A fé é o tesouro mais precioso."' },
    '4-25': { nome: 'São Marcos', frase: '"Ide por todo o mundo e pregai o Evangelho."' },
    '4-28': { nome: 'São Pedro Chanel', frase: '"O martírio é o supremo testemunho."' },
    '4-29': { nome: 'Santa Catarina de Sena', frase: '"Sede quem Deus quis que fôsseis e incendiareis o mundo."' },
    '4-30': { nome: 'São Pio V', frase: '"A defesa da fé é nosso dever."' },
    // Maio
    '5-1': { nome: 'São José Operário', frase: '"O trabalho dignifica o homem."' },
    '5-2': { nome: 'Santo Atanásio', frase: '"A verdade não pode ser destruída."' },
    '5-3': { nome: 'São Filipe e São Tiago', frase: '"Senhor, mostra-nos o Pai."' },
    '5-12': { nome: 'Santos Nereu e Aquileu', frase: '"O sangue dos mártires é semente de cristãos."' },
    '5-13': { nome: 'Nossa Senhora de Fátima', frase: '"Rezai o terço todos os dias."' },
    '5-14': { nome: 'São Matias', frase: '"Escolhido para servir."' },
    '5-15': { nome: 'Santo Isidoro Lavrador', frase: '"O trabalho pode ser oração."' },
    '5-18': { nome: 'São João I', frase: '"A Igreja é perseguida, mas não vencida."' },
    '5-20': { nome: 'São Bernardino de Sena', frase: '"O Nome de Jesus é nosso refúgio."' },
    '5-22': { nome: 'Santa Rita de Cássia', frase: '"Senhor, dai-me a força para suportar os espinhos desta vida."' },
    '5-25': { nome: 'São Beda', frase: '"O estudo das Escrituras é o caminho para Deus."' },
    '5-26': { nome: 'São Filipe Néri', frase: '"A alegria é a marca dos santos."' },
    '5-27': { nome: 'Santo Agostinho de Cantuária', frase: '"A missão é o coração da Igreja."' },
    '5-31': { nome: 'Visitação de Nossa Senhora', frase: '"Minha alma engrandece o Senhor."' },
    // Junho
    '6-1': { nome: 'São Justino', frase: '"A verdade é uma só: Cristo."' },
    '6-2': { nome: 'Santos Marcelino e Pedro', frase: '"Unidos no martírio, unidos na glória."' },
    '6-3': { nome: 'São Carlos Lwanga e Companheiros', frase: '"Preferimos a morte a pecar."' },
    '6-5': { nome: 'São Bonifácio', frase: '"Evangelizar é nossa missão."' },
    '6-6': { nome: 'São Norberto', frase: '"A vida religiosa é caminho de santidade."' },
    '6-9': { nome: 'Santo Efrém', frase: '"A poesia pode louvar a Deus."' },
    '6-11': { nome: 'São Barnabé', frase: '"Era um homem bom, cheio do Espírito Santo e de fé."' },
    '6-13': { nome: 'Santo Antônio', frase: '"Se procuras milagres, olha para Cristo."' },
    '6-19': { nome: 'São Romualdo', frase: '"No silêncio encontramos Deus."' },
    '6-21': { nome: 'São Luís Gonzaga', frase: '"Que me importa o mundo se tenho o céu?"' },
    '6-22': { nome: 'São Paulino de Nola', frase: '"A caridade supera todas as riquezas."' },
    '6-24': { nome: 'Nascimento de São João Batista', frase: '"Preparai o caminho do Senhor."' },
    '6-27': { nome: 'São Cirilo de Alexandria', frase: '"Maria é verdadeiramente Mãe de Deus."' },
    '6-28': { nome: 'Santo Irineu', frase: '"A glória de Deus é o homem vivo."' },
    '6-29': { nome: 'São Pedro e São Paulo', frase: '"Tu és o Cristo, o Filho do Deus vivo."' },
    // Julho
    '7-3': { nome: 'São Tomé', frase: '"Meu Senhor e meu Deus!"' },
    '7-4': { nome: 'Santa Isabel de Portugal', frase: '"A paz é fruto da caridade."' },
    '7-6': { nome: 'Santa Maria Goretti', frase: '"Perdoo o meu agressor."' },
    '7-11': { nome: 'São Bento', frase: '"Ora et labora - Reza e trabalha."' },
    '7-13': { nome: 'Santo Henrique', frase: '"O poder deve servir ao bem comum."' },
    '7-14': { nome: 'São Camilo de Lellis', frase: '"Servir os doentes é servir a Cristo."' },
    '7-15': { nome: 'São Boaventura', frase: '"A sabedoria vem de Deus."' },
    '7-16': { nome: 'Nossa Senhora do Carmo', frase: '"Quem usa o escapulário terá minha proteção."' },
    '7-22': { nome: 'Santa Maria Madalena', frase: '"Vi o Senhor!"' },
    '7-23': { nome: 'Santa Brígida', frase: '"O amor de Cristo é minha vida."' },
    '7-25': { nome: 'São Tiago Maior', frase: '"Podemos beber o cálice do Senhor."' },
    '7-26': { nome: 'São Joaquim e Santa Ana', frase: '"Pais de Maria, avós de Jesus."' },
    '7-29': { nome: 'Santa Marta', frase: '"Senhor, se estivesses aqui."' },
    '7-31': { nome: 'Santo Inácio de Loyola', frase: '"Tudo para a maior glória de Deus."' },
    // Agosto
    '8-1': { nome: 'Santo Afonso de Ligório', frase: '"Maria é o caminho mais curto para Jesus."' },
    '8-4': { nome: 'São João Maria Vianney', frase: '"O sacerdócio é o amor do Coração de Jesus."' },
    '8-6': { nome: 'Transfiguração do Senhor', frase: '"Este é o meu Filho amado, escutai-o."' },
    '8-7': { nome: 'São Sisto II e Companheiros', frase: '"Unidos na fé, unidos no martírio."' },
    '8-8': { nome: 'São Domingos', frase: '"A verdade vos libertará."' },
    '8-10': { nome: 'São Lourenço', frase: '"Os pobres são o tesouro da Igreja."' },
    '8-11': { nome: 'Santa Clara', frase: '"Olha para Cristo, contempla Cristo."' },
    '8-14': { nome: 'São Maximiliano Kolbe', frase: '"O ódio não é criativo. Somente o amor o é."' },
    '8-15': { nome: 'Assunção de Nossa Senhora', frase: '"Maria foi elevada ao céu em corpo e alma."' },
    '8-19': { nome: 'São João Eudes', frase: '"O Coração de Jesus é nosso refúgio."' },
    '8-20': { nome: 'São Bernardo', frase: '"Encontrar Jesus é encontrar a vida."' },
    '8-21': { nome: 'São Pio X', frase: '"Restaurar todas as coisas em Cristo."' },
    '8-22': { nome: 'Nossa Senhora Rainha', frase: '"Maria é Rainha do céu e da terra."' },
    '8-23': { nome: 'Santa Rosa de Lima', frase: '"Sem cruz não há glória."' },
    '8-24': { nome: 'São Bartolomeu', frase: '"Eis um verdadeiro israelita."' },
    '8-27': { nome: 'Santa Mônica', frase: '"As lágrimas de uma mãe não são em vão."' },
    '8-28': { nome: 'Santo Agostinho', frase: '"Nosso coração está inquieto até repousar em Vós."' },
    '8-29': { nome: 'Martírio de São João Batista', frase: '"Importa que Ele cresça e eu diminua."' },
    // Setembro
    '9-3': { nome: 'São Gregório Magno', frase: '"O pastor deve conhecer suas ovelhas."' },
    '9-8': { nome: 'Natividade de Nossa Senhora', frase: '"Maria, aurora da salvação."' },
    '9-9': { nome: 'São Pedro Claver', frase: '"Escravo dos escravos para sempre."' },
    '9-12': { nome: 'Santíssimo Nome de Maria', frase: '"O nome de Maria é doçura."' },
    '9-13': { nome: 'São João Crisóstomo', frase: '"A boca de ouro da Igreja."' },
    '9-14': { nome: 'Exaltação da Santa Cruz', frase: '"Gloriamo-nos na Cruz de Cristo."' },
    '9-15': { nome: 'Nossa Senhora das Dores', frase: '"Uma espada traspassará a tua alma."' },
    '9-16': { nome: 'Santos Cornélio e Cipriano', frase: '"A unidade da Igreja é essencial."' },
    '9-17': { nome: 'Santa Hildegarda', frase: '"Somos plumas no sopro de Deus."' },
    '9-19': { nome: 'São Januário', frase: '"O sangue dos mártires é testemunho de fé."' },
    '9-20': { nome: 'Santos André Kim e Companheiros', frase: '"A fé cresce na perseguição."' },
    '9-21': { nome: 'São Mateus', frase: '"Segue-me."' },
    '9-23': { nome: 'São Pio de Pietrelcina', frase: '"Reze, espere e não se preocupe."' },
    '9-27': { nome: 'São Vicente de Paulo', frase: '"Os pobres são nossos mestres."' },
    '9-28': { nome: 'São Venceslau', frase: '"A paz de Cristo é nosso ideal."' },
    '9-29': { nome: 'Santos Miguel, Gabriel e Rafael', frase: '"Os anjos são mensageiros de Deus."' },
    '9-30': { nome: 'São Jerônimo', frase: '"Ignorar as Escrituras é ignorar a Cristo."' },
    // Outubro
    '10-1': { nome: 'Santa Teresinha', frase: '"Quero passar meu céu fazendo bem à terra."' },
    '10-2': { nome: 'Santos Anjos da Guarda', frase: '"Deus envia seus anjos para nos proteger."' },
    '10-4': { nome: 'São Francisco de Assis', frase: '"Senhor, fazei-me instrumento de vossa paz."' },
    '10-5': { nome: 'Santa Faustina', frase: '"Jesus, eu confio em Vós."' },
    '10-6': { nome: 'São Bruno', frase: '"No silêncio encontramos Deus."' },
    '10-7': { nome: 'Nossa Senhora do Rosário', frase: '"O Rosário é a arma mais poderosa."' },
    '10-9': { nome: 'São Dionísio e Companheiros', frase: '"O martírio é supremo testemunho de amor."' },
    '10-11': { nome: 'São João XXIII', frase: '"Que todos sejam um."' },
    '10-12': { nome: 'Nossa Senhora Aparecida', frase: '"Maria, Padroeira do Brasil."' },
    '10-15': { nome: 'Santa Teresa de Ávila', frase: '"Deus escreve direito por linhas tortas."' },
    '10-16': { nome: 'Santa Margarida Maria Alacoque', frase: '"O Sagrado Coração de Jesus nos ama."' },
    '10-17': { nome: 'Santo Inácio de Antioquia', frase: '"Sou trigo de Deus."' },
    '10-18': { nome: 'São Lucas', frase: '"Maria guardava tudo em seu coração."' },
    '10-19': { nome: 'Santos João de Brébeuf e Companheiros', frase: '"Pela fé, até o martírio."' },
    '10-22': { nome: 'São João Paulo II', frase: '"Não tenham medo!"' },
    '10-23': { nome: 'São João de Capistrano', frase: '"A defesa da fé é nosso dever."' },
    '10-24': { nome: 'Santo Antônio Maria Claret', frase: '"O amor de Deus me impele."' },
    '10-28': { nome: 'São Simão e São Judas', frase: '"Apóstolos fiéis até o fim."' },
    // Novembro
    '11-1': { nome: 'Todos os Santos', frase: '"Somos chamados à santidade."' },
    '11-2': { nome: 'Finados', frase: '"A morte não é o fim."' },
    '11-3': { nome: 'São Martinho de Lima', frase: '"Servir aos pobres é servir a Cristo."' },
    '11-4': { nome: 'São Carlos Borromeu', frase: '"A reforma da Igreja começa em nós."' },
    '11-9': { nome: 'Dedicação da Basílica de Latrão', frase: '"A Igreja é a casa de Deus."' },
    '11-10': { nome: 'São Leão Magno', frase: '"Pedro fala pela boca de Leão."' },
    '11-11': { nome: 'São Martinho de Tours', frase: '"Dar ao pobre é vestir a Cristo."' },
    '11-12': { nome: 'São Josafá', frase: '"A unidade da Igreja é nosso ideal."' },
    '11-15': { nome: 'Santo Alberto Magno', frase: '"A ciência e a fé se complementam."' },
    '11-16': { nome: 'Santa Margarida da Escócia', frase: '"Servir é reinar."' },
    '11-17': { nome: 'Santa Isabel da Hungria', frase: '"Os pobres são Cristo em nosso meio."' },
    '11-18': { nome: 'Dedicação das Basílicas de São Pedro e São Paulo', frase: '"Sobre esta pedra edificarei minha Igreja."' },
    '11-21': { nome: 'Apresentação de Nossa Senhora', frase: '"Maria se consagrou a Deus desde pequena."' },
    '11-22': { nome: 'Santa Cecília', frase: '"Cantai ao Senhor um cântico novo."' },
    '11-23': { nome: 'São Clemente I', frase: '"A unidade na caridade."' },
    '11-24': { nome: 'Santos André Dung-Lac e Companheiros', frase: '"Estou pronto para morrer pela fé."' },
    '11-25': { nome: 'Santa Catarina de Alexandria', frase: '"A verdade é mais forte que a perseguição."' },
    '11-30': { nome: 'Santo André', frase: '"Encontramos o Messias!"' },
    // Dezembro
    '12-3': { nome: 'São Francisco Xavier', frase: '"Quantas almas deixam de ir ao céu por falta de missionários."' },
    '12-4': { nome: 'São João Damasceno', frase: '"Defendemos a fé com palavras e imagens."' },
    '12-6': { nome: 'São Nicolau', frase: '"A generosidade é marca do cristão."' },
    '12-7': { nome: 'Santo Ambrósio', frase: '"Onde está Pedro, ali está a Igreja."' },
    '12-8': { nome: 'Imaculada Conceição', frase: '"Maria foi preservada do pecado original."' },
    '12-9': { nome: 'São Juan Diego', frase: '"Eu não sou digno de ver a Virgem."' },
    '12-12': { nome: 'Nossa Senhora de Guadalupe', frase: '"Não estou eu aqui, que sou tua Mãe?"' },
    '12-13': { nome: 'Santa Luzia', frase: '"A luz de Cristo ilumina as trevas."' },
    '12-14': { nome: 'São João da Cruz', frase: '"Na noite escura, a luz da fé nos guia."' },
    '12-21': { nome: 'São Pedro Canísio', frase: '"A catequese é essencial."' },
    '12-23': { nome: 'São João de Kenty', frase: '"A caridade cobre multidão de pecados."' },
    '12-25': { nome: 'Natal do Senhor', frase: '"Hoje vos nasceu o Salvador."' },
    '12-26': { nome: 'Santo Estêvão', frase: '"Senhor, não lhes imputeis este pecado."' },
    '12-27': { nome: 'São João Evangelista', frase: '"Deus é amor."' },
    '12-28': { nome: 'Santos Inocentes', frase: '"As crianças são mártires de Cristo."' },
    '12-29': { nome: 'São Tomás Becket', frase: '"A Igreja é livre."' },
    '12-31': { nome: 'São Silvestre I', frase: '"A paz de Cristo reine em vossos corações."' }
};

async function carregarSantoDodia() {
    const santoData = document.getElementById('santoData');
    const santoNome = document.getElementById('santoNome');
    const santoFrase = document.getElementById('santoFrase');
    const santoImagem = document.getElementById('santoImagem');
    
    if (!santoNome) return;
    
    // Definir a data atual
    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = hoje.getMonth() + 1;
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    if (santoData) {
        santoData.textContent = dia + ' de ' + meses[hoje.getMonth()];
    }
    
    // Buscar santo do banco de dados local
    const chaveData = mes + '-' + dia;
    const santoHoje = santosDoAno[chaveData];
    
    let nomeSanto = 'Santo do Dia';
    
    if (santoHoje) {
        nomeSanto = santoHoje.nome;
        santoNome.textContent = santoHoje.nome;
        if (santoFrase) {
            santoFrase.textContent = santoHoje.frase || '';
        }
    } else {
        santoNome.textContent = 'Santo do Dia';
        if (santoFrase) {
            santoFrase.textContent = '"Todos somos chamados à santidade."';
        }
    }
    
    // Tentar buscar a imagem do santo
    if (santoImagem) {
        // Mostrar ícone de loading
        santoImagem.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        // Tentar buscar imagem
        const imagemUrl = await buscarImagemSanto(nomeSanto);
        
        if (imagemUrl) {
            const img = document.createElement('img');
            img.src = imagemUrl;
            img.alt = nomeSanto;
            img.style.cssText = 'width: 100%; height: 100%; object-fit: cover; border-radius: 50%;';
            
            img.onload = function() {
                santoImagem.innerHTML = '';
                santoImagem.appendChild(img);
            };
            
            img.onerror = function() {
                console.log('Erro ao carregar imagem, usando ícone padrão');
                santoImagem.innerHTML = '<i class="fas fa-cross"></i>';
            };
        } else {
            santoImagem.innerHTML = '<i class="fas fa-cross"></i>';
        }
    }
}

// Função para buscar imagem do santo com múltiplas fontes
async function buscarImagemSanto(nomeSanto) {
    // Lista de proxies CORS para tentar
    const corsProxies = [
        'https://api.allorigins.win/raw?url=',
        'https://corsproxy.io/?',
        'https://api.codetabs.com/v1/proxy?quest='
    ];
    
    // Fonte 1: Canção Nova
    const imagemCancaoNova = await tentarBuscarImagemCancaoNova(corsProxies);
    if (imagemCancaoNova) return imagemCancaoNova;
    
    // Fonte 2: Padre Marcelo Rossi
    const imagemPadreMarcelo = await tentarBuscarImagemPadreMarcelo(corsProxies);
    if (imagemPadreMarcelo) return imagemPadreMarcelo;
    
    // Fonte 3: Imagem genérica baseada no nome do santo
    const imagemGenerica = gerarImagemSantoLocal(nomeSanto);
    if (imagemGenerica) return imagemGenerica;
    
    return null;
}

// Tentar buscar imagem da Canção Nova
async function tentarBuscarImagemCancaoNova(proxies) {
    for (const proxy of proxies) {
        try {
            const targetUrl = 'https://santo.cancaonova.com/';
            const response = await fetch(proxy + encodeURIComponent(targetUrl), {
                method: 'GET',
                headers: { 'Accept': 'text/html' }
            });
            
            if (!response.ok) continue;
            
            const html = await response.text();
            
            // Procurar pela imagem do santo no HTML
            const imgPatterns = [
                /src=["']([^"']*santo[^"']*\.(?:jpg|jpeg|png|gif|webp))/i,
                /src=["']([^"']*uploads[^"']*\.(?:jpg|jpeg|png|gif|webp))/i,
                /src=["']([^"']*wp-content[^"']*\.(?:jpg|jpeg|png|gif|webp))/i,
                /<img[^>]*class=["'][^"']*wp-post-image[^"']*["'][^>]*src=["']([^"']+)/i,
                /<img[^>]*src=["']([^"']+)[^>]*class=["'][^"']*wp-post-image/i
            ];
            
            for (const pattern of imgPatterns) {
                const match = html.match(pattern);
                if (match && match[1]) {
                    let imgUrl = match[1];
                    
                    // Se a URL for relativa, adicionar o domínio
                    if (imgUrl.startsWith('/')) {
                        imgUrl = 'https://santo.cancaonova.com' + imgUrl;
                    } else if (!imgUrl.startsWith('http')) {
                        imgUrl = 'https://santo.cancaonova.com/' + imgUrl;
                    }
                    
                    // Verificar se a imagem é válida (não é ícone, logo, etc)
                    if (!imgUrl.includes('logo') && !imgUrl.includes('icon') && !imgUrl.includes('favicon')) {
                        console.log('Imagem encontrada na Canção Nova:', imgUrl);
                        return imgUrl;
                    }
                }
            }
        } catch (error) {
            console.log('Proxy falhou para Canção Nova:', proxy);
            continue;
        }
    }
    return null;
}

// Tentar buscar imagem do site do Padre Marcelo Rossi
async function tentarBuscarImagemPadreMarcelo(proxies) {
    for (const proxy of proxies) {
        try {
            const targetUrl = 'https://www.padremarcelorossi.com.br/detalheSantoDoDia.php';
            const response = await fetch(proxy + encodeURIComponent(targetUrl), {
                method: 'GET',
                headers: { 'Accept': 'text/html' }
            });
            
            if (!response.ok) continue;
            
            const html = await response.text();
            
            // Procurar pela imagem do santo no HTML
            const imgPatterns = [
                /src=["']([^"']*santos?[^"']*\.(?:jpg|jpeg|png|gif|webp))/i,
                /src=["']([^"']*imagens?[^"']*\.(?:jpg|jpeg|png|gif|webp))/i,
                /<img[^>]*src=["']([^"']+\.(?:jpg|jpeg|png|gif|webp))/i
            ];
            
            for (const pattern of imgPatterns) {
                const match = html.match(pattern);
                if (match && match[1]) {
                    let imgUrl = match[1];
                    
                    // Se a URL for relativa, adicionar o domínio
                    if (imgUrl.startsWith('/')) {
                        imgUrl = 'https://www.padremarcelorossi.com.br' + imgUrl;
                    } else if (!imgUrl.startsWith('http')) {
                        imgUrl = 'https://www.padremarcelorossi.com.br/' + imgUrl;
                    }
                    
                    // Verificar se a imagem é válida
                    if (!imgUrl.includes('logo') && !imgUrl.includes('icon') && !imgUrl.includes('banner') && !imgUrl.includes('header')) {
                        console.log('Imagem encontrada no site do Padre Marcelo:', imgUrl);
                        return imgUrl;
                    }
                }
            }
        } catch (error) {
            console.log('Proxy falhou para Padre Marcelo:', proxy);
            continue;
        }
    }
    return null;
}

// Gerar URL de imagem genérica baseada no santo (usando serviços de placeholder ou ícones)
function gerarImagemSantoLocal(nomeSanto) {
    // Banco de imagens locais para santos mais populares
    // As imagens devem estar em assets/images/santos/
    const santosComImagem = {
        'Nossa Senhora Aparecida': 'aparecida.jpg',
        'Nossa Senhora de Fátima': 'fatima.jpg',
        'Nossa Senhora de Lourdes': 'lourdes.jpg',
        'Nossa Senhora de Guadalupe': 'guadalupe.jpg',
        'Nossa Senhora das Dores': 'dores.jpg',
        'Nossa Senhora do Rosário': 'rosario.jpg',
        'São José': 'jose.jpg',
        'São João Bosco': 'dombosco.jpg',
        'São Francisco de Assis': 'francisco.jpg',
        'Santo Antônio': 'antonio.jpg',
        'São Jorge': 'jorge.jpg',
        'Santa Teresinha': 'teresinha.jpg',
        'São Pio de Pietrelcina': 'padrepio.jpg',
        'São João Paulo II': 'joaopauloii.jpg',
        'Santa Rita de Cássia': 'rita.jpg',
        'São Sebastião': 'sebastiao.jpg',
        'São Pedro': 'pedro.jpg',
        'São Paulo': 'paulo.jpg',
        'Imaculada Conceição': 'imaculada.jpg',
        'Natal do Senhor': 'natal.jpg'
    };
    
    // Verificar se temos imagem local para este santo
    for (const [santo, arquivo] of Object.entries(santosComImagem)) {
        if (nomeSanto.toLowerCase().includes(santo.toLowerCase()) || 
            santo.toLowerCase().includes(nomeSanto.toLowerCase())) {
            const imagemLocal = 'assets/images/santos/' + arquivo;
            console.log('Usando imagem local:', imagemLocal);
            return imagemLocal;
        }
    }
    
    return null;
}

// Inicializar liturgia e santo do dia
document.addEventListener('DOMContentLoaded', function() {
    carregarLiturgiaDodia();
    carregarSantoDodia();
});
// ============================================
// EVENTOS BANNER CAROUSEL
// ============================================
let currentBannerSlide = 0;
const totalBanners = 4;

function slideBanner(direction) {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dot');
    
    if (slides.length === 0) return;
    
    slides[currentBannerSlide].classList.remove('active');
    dots[currentBannerSlide].classList.remove('active');
    
    currentBannerSlide += direction;
    
    if (currentBannerSlide < 0) {
        currentBannerSlide = slides.length - 1;
    } else if (currentBannerSlide >= slides.length) {
        currentBannerSlide = 0;
    }
    
    slides[currentBannerSlide].classList.add('active');
    dots[currentBannerSlide].classList.add('active');
}

function goToBanner(index) {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dot');
    
    if (slides.length === 0) return;
    
    slides[currentBannerSlide].classList.remove('active');
    dots[currentBannerSlide].classList.remove('active');
    
    currentBannerSlide = index;
    
    slides[currentBannerSlide].classList.add('active');
    dots[currentBannerSlide].classList.add('active');
}

// Auto slide banners
setInterval(function() {
    slideBanner(1);
}, 5000);

// ============================================
// EVENTOS MODAL
// ============================================
const eventosData = {
    libras: {
        titulo: "Curso Libras na Prática",
        icone: "fas fa-american-sign-language-interpreting",
        tag: "Formação",
        descricao: "O Curso de Libras na Prática é uma oportunidade única para aprender a Língua Brasileira de Sinais. O curso é voltado para todos que desejam se comunicar com a comunidade surda e contribuir para a inclusão nas celebrações e atividades da paróquia. As aulas são ministradas por professores qualificados e incluem prática conversacional, vocabulário religioso e litúrgico.",
        detalhes: [
            { icone: "fas fa-calendar", texto: "Início das aulas: Em breve" },
            { icone: "fas fa-clock", texto: "Horário: A definir" },
            { icone: "fas fa-map-marker-alt", texto: "Local: Salão Paroquial" },
            { icone: "fas fa-users", texto: "Vagas limitadas" },
            { icone: "fas fa-certificate", texto: "Certificado ao final do curso" }
        ]
    },
    seminario: {
        titulo: "Seminário de Vida",
        icone: "fas fa-dove",
        tag: "Espiritualidade",
        descricao: "O Seminário de Vida é uma experiência transformadora de encontro com Deus. Durante os encontros, você terá a oportunidade de renovar sua fé, conhecer mais profundamente o amor de Deus e descobrir uma nova vida em Cristo. São momentos de oração, louvor, pregação e partilha que tocam o coração e transformam vidas.",
        detalhes: [
            { icone: "fas fa-calendar", texto: "Data: A definir" },
            { icone: "fas fa-clock", texto: "Duração: Vários encontros" },
            { icone: "fas fa-map-marker-alt", texto: "Local: Salão Paroquial" },
            { icone: "fas fa-heart", texto: "Experiência de conversão e renovação" },
            { icone: "fas fa-users", texto: "Aberto a todos os interessados" }
        ]
    },
    rebanhao: {
        titulo: "Rebanhão",
        icone: "fas fa-users",
        tag: "Jovens",
        descricao: "O Rebanhão é um encontro especial voltado para os jovens da nossa comunidade. É um momento de louvor, adoração, pregação e muita comunhão entre os jovens. Venha viver essa experiência única de encontro com Jesus e fazer novas amizades com outros jovens que buscam crescer na fé.",
        detalhes: [
            { icone: "fas fa-calendar", texto: "Data: A definir" },
            { icone: "fas fa-clock", texto: "Horário: A definir" },
            { icone: "fas fa-map-marker-alt", texto: "Local: A definir" },
            { icone: "fas fa-music", texto: "Louvor e adoração" },
            { icone: "fas fa-users", texto: "Para jovens de todas as idades" }
        ]
    },
    musicos: {
        titulo: "Formação de Músicos",
        icone: "fas fa-music",
        tag: "Música",
        descricao: "A Formação de Músicos é um curso de capacitação para todos que desejam servir nas celebrações litúrgicas através da música. O curso aborda técnica vocal, instrumental, liturgia e espiritualidade do músico. É uma oportunidade de aprimorar seu dom e colocá-lo a serviço de Deus e da comunidade.",
        detalhes: [
            { icone: "fas fa-calendar", texto: "Início: A definir" },
            { icone: "fas fa-clock", texto: "Horário: A definir" },
            { icone: "fas fa-map-marker-alt", texto: "Local: Salão Paroquial" },
            { icone: "fas fa-guitar", texto: "Para cantores e instrumentistas" },
            { icone: "fas fa-book", texto: "Formação litúrgica incluída" }
        ]
    }
};

function openEventoModal(eventoKey) {
    const modal = document.getElementById('eventoModal');
    const data = eventosData[eventoKey];
    
    if (!data || !modal) return;
    
    document.getElementById('eventoModalIcon').innerHTML = '<i class="' + data.icone + '"></i>';
    document.getElementById('eventoModalTag').textContent = data.tag;
    document.getElementById('eventoModalTitle').textContent = data.titulo;
    document.getElementById('eventoModalDescription').textContent = data.descricao;
    
    let detalhesHTML = '<h5>Informações</h5><ul>';
    data.detalhes.forEach(function(detalhe) {
        detalhesHTML += '<li><i class="' + detalhe.icone + '"></i><span>' + detalhe.texto + '</span></li>';
    });
    detalhesHTML += '</ul>';
    
    document.getElementById('eventoModalDetails').innerHTML = detalhesHTML;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEventoModal() {
    const modal = document.getElementById('eventoModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Fechar modal ao clicar fora
document.addEventListener('click', function(e) {
    if (e.target.id === 'eventoModal') {
        closeEventoModal();
    }
});