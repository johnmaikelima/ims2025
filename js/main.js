// Header Component
const headerHTML = `
<nav class="container">
    <div class="header-nav">
        <div class="logo">
            <a href="index.html">
                <img src="images/logo.png" alt="IMS Manutenção Logo">
            </a>
        </div>
        
        <button class="mobile-menu-btn" onclick="toggleMobileMenu()">☰</button>
        
        <ul class="nav-menu" id="navMenu">
            <li class="dropdown">
                <button class="dropdown-toggle">Serviços</button>
                <div class="dropdown-menu">
                    <a href="servicos/eletrica-industrial.html">Elétrica Industrial</a>
                    <a href="servicos/mecanica-industrial.html">Mecânica Industrial</a>
                    <a href="servicos/manutencao-hidraulica-pneumatica.html">Manutenção Hidráulica e Pneumática</a>
                    <a href="servicos/integridade-estrutural.html">Integridade Estrutural</a>
                </div>
            </li>
            <li class="dropdown">
                <button class="dropdown-toggle">Informações</button>
                <div class="dropdown-menu">
                    <a href="informacoes/manutencao-industrial.html">Manutenção Industrial</a>
                    <a href="informacoes/manutencao-eletrica-industrial.html">Elétrica Industrial</a>
                    <a href="informacoes/manutencao-mecanica-industrial.html">Mecânica Industrial</a>
                    <a href="informacoes/manutencao-preventiva-industrial.html">Manutenção Preventiva</a>
                    <a href="informacoes/manutencao-de-equipamentos-industriais.html">Manutenção de Equipamentos</a>
                    <a href="informacoes/manutencao-de-maquinas.html">Manutenção de Máquinas</a>
                    <a href="informacoes/manutencao-de-exaustor-industrial.html">Manutenção de Exaustores</a>
                    <a href="informacoes/manutencao-de-balancas-industriais.html">Manutenção de Balanças</a>
                    <a href="informacoes/sistema-de-manutencao-industrial.html">Sistema de Manutenção</a>
                    <a href="informacoes/empresas-de-manutencao-industrial.html">Empresas de Manutenção</a>
                    <a href="informacoes/mecanico-de-manutencao-industrial.html">Mecânico de Manutenção</a>
                    <a href="informacoes/empresa-de-montagem-industrial.html">Empresa de Montagem</a>
                    <a href="informacoes/empresa-de-montagem-de-paineis-eletricos.html">Montagem de Painéis Elétricos</a>
                    <a href="informacoes/instalacao-de-painel-eletrico-industrial.html">Instalação de Painel Elétrico</a>
                    <a href="informacoes/montagem-de-paineis-eletricos-em-sp.html">Montagem de Painéis Elétricos SP</a>
                    <a href="informacoes/manutencao-eletrica-industrial-em-alto-tiete.html">Manutenção Elétrica Alto Tietê</a>
                    <a href="informacoes/manutencao-eletrica-industrial-em-aruja.html">Manutenção Elétrica Arujá</a>
                    <a href="informacoes/manutencao-eletrica-industrial-em-itaquaquecetuba.html">Manutenção Elétrica Itaquaquecetuba</a>
                    <a href="informacoes/manutencao-eletrica-industrial-em-suzano.html">Manutenção Elétrica Suzano</a>
                    <a href="informacoes/manutencao-eletrica-industrial-em-mogi-das-cruzes.html">Manutenção Elétrica Mogi</a>
                    <a href="informacoes/manutencao-eletrica-industrial-em-vale.html">Manutenção Elétrica Vale</a>
                    <a href="informacoes/manutencao-eletrica-industrial-em-abcd.html">Manutenção Elétrica ABCD</a>
                    <a href="informacoes/manutencao-eletrica-industrial-em-jundiai.html">Manutenção Elétrica Jundiaí</a>
                    <a href="informacoes/manutencao-eletrica-industrial-em-campinas.html">Manutenção Elétrica Campinas</a>
                    <a href="informacoes/manutencao-eletrica-industrial-em-itu.html">Manutenção Elétrica Itu</a>
                    <a href="informacoes/manutencao-eletrica-industrial-em-votorantim.html">Manutenção Elétrica Votorantim</a>
                    <a href="informacoes/manutencao-eletrica-industrial-em-sorocaba.html">Manutenção Elétrica Sorocaba</a>
                    <a href="informacoes/manutencao-eletrica-industrial-em-aluminio.html">Manutenção Elétrica Alumínio</a>
                    <a href="informacoes/manutencao-eletrica-industrial-em-valinhos.html">Manutenção Elétrica Valinhos</a>
                    <a href="informacoes/eletricista-industrial.html">Eletricista Industrial</a>
                    <a href="informacoes/mecanico-industrial-alto-tiete.html">Mecânico Industrial Alto Tietê</a>
                    <a href="informacoes/mecanico-industrial-aruja.html">Mecânico Industrial Arujá</a>
                    <a href="informacoes/mecanico-industrial-itaquaquecetuba.html">Mecânico Industrial Itaquaquecetuba</a>
                    <a href="informacoes/mecanico-industrial-suzano.html">Mecânico Industrial Suzano</a>
                    <a href="informacoes/mecanico-industrial-mogi.html">Mecânico Industrial Mogi</a>
                    <a href="informacoes/mecanico-industrial-vale.html">Mecânico Industrial Vale</a>
                    <a href="informacoes/mecanico-industrial-abcd.html">Mecânico Industrial ABCD</a>
                    <a href="informacoes/mecanico-industrial-jundiai.html">Mecânico Industrial Jundiaí</a>
                    <a href="informacoes/mecanico-industrial-campinas.html">Mecânico Industrial Campinas</a>
                    <a href="informacoes/mecanico-industrial-itu.html">Mecânico Industrial Itu</a>
                    <a href="informacoes/mecanico-industrial-votorantim.html">Mecânico Industrial Votorantim</a>
                    <a href="informacoes/mecanico-industrial-sorocaba.html">Mecânico Industrial Sorocaba</a>
                    <a href="informacoes/mecanico-industrial-aluminio.html">Mecânico Industrial Alumínio</a>
                    <a href="informacoes/mecanico-industrial-valinhos.html">Mecânico Industrial Valinhos</a>
                    <a href="informacoes/mecanico-industrial-guarulhos.html">Mecânico Industrial Guarulhos</a>
                    <a href="informacoes/mecanico-industrial-sp.html">Mecânico Industrial SP</a>
                    <a href="informacoes/manutencao-eletrica-industrial-em-guarulhos.html">Manutenção Elétrica Guarulhos</a>
                    <a href="informacoes/manutencao-eletrica-industrial-em-sp.html">Manutenção Elétrica SP</a>
                </div>
            </li>
            <li><a href="produtos.html">Produtos</a></li>
            <li><a href="sobre.html">Sobre Nós</a></li>
            <li><a href="solicitar-orcamento.html">Contato</a></li>
        </ul>
        
        <div class="whatsapp-wrapper">
            <span class="whatsapp-cta-badge">Atendimento via WhatsApp</span>
            <a href="https://wa.me/5511991248868?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." 
               target="_blank" 
               class="whatsapp-header-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
                </svg>
                <span>Fale Conosco!</span>
            </a>
        </div>
    </div>
</nav>
`;

// Footer Component
const footerHTML = `
<div class="container">
    <div class="footer-content">
        <div class="footer-section">
            <h3>IMS Manutenção</h3>
            <p>Soluções completas em manutenção elétrica e mecânica industrial.</p>
            <p style="margin-top: 1rem;"><strong>CNPJ:</strong> 42.907.482/0001-08</p>
        </div>
        <div class="footer-section">
            <h3>Serviços</h3>
            <ul>
                <li><a href="servicos/eletrica-industrial.html">Elétrica Industrial</a></li>
                <li><a href="servicos/mecanica-industrial.html">Mecânica Industrial</a></li>
                <li><a href="servicos/manutencao-hidraulica-pneumatica.html">Hidráulica e Pneumática</a></li>
                <li><a href="servicos/integridade-estrutural.html">Integridade Estrutural</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Links Rápidos</h3>
            <ul>
                <li><a href="sobre.html">Sobre Nós</a></li>
                <li><a href="produtos.html">Produtos</a></li>
                <li><a href="solicitar-orcamento.html">Solicitar Orçamento</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Contato</h3>
            <p>📍 Guarulhos – São Paulo</p>
            <p>📱 Tel: (11) 99124-8868</p>
            <p>📧 orcamento@imsmanutencao.com.br</p>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2025 IMS Manutenção. Todos os direitos reservados.</p>
    </div>
</div>
`;

// Load Header and Footer
document.addEventListener('DOMContentLoaded', function() {
    const headerElement = document.getElementById('header');
    const footerElement = document.getElementById('footer');
    
    // Detectar nível da página
    const pageLevel = document.body.getAttribute('data-page-level') || 'root';
    const pathPrefix = pageLevel === 'root' ? '' : '../';
    
    // Ajustar caminhos no header
    let adjustedHeaderHTML = headerHTML
        .replace(/href="index.html"/g, `href="${pathPrefix}index.html"`)
        .replace(/href="sobre.html"/g, `href="${pathPrefix}sobre.html"`)
        .replace(/href="produtos.html"/g, `href="${pathPrefix}produtos.html"`)
        .replace(/href="solicitar-orcamento.html"/g, `href="${pathPrefix}solicitar-orcamento.html"`)
        .replace(/src="images\/logo.png"/g, `src="${pathPrefix}images/logo.png"`)
        .replace(/href="servicos\//g, `href="${pathPrefix}servicos/`)
        .replace(/href="informacoes\//g, `href="${pathPrefix}informacoes/`);
    
    // Ajustar caminhos no footer
    let adjustedFooterHTML = footerHTML
        .replace(/href="servicos\//g, `href="${pathPrefix}servicos/`)
        .replace(/href="sobre.html"/g, `href="${pathPrefix}sobre.html"`)
        .replace(/href="produtos.html"/g, `href="${pathPrefix}produtos.html"`)
        .replace(/href="solicitar-orcamento.html"/g, `href="${pathPrefix}solicitar-orcamento.html"`);
    
    if (headerElement) {
        headerElement.innerHTML = adjustedHeaderHTML;
    }
    
    if (footerElement) {
        footerElement.innerHTML = adjustedFooterHTML;
    }
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('active');
    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-advance slides every 5 seconds
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// Sidebar Component para páginas de informações
const sidebarHTML = `
<div class="bg-gray-50 p-6 rounded-lg sticky top-4">
    <h3 class="text-xl font-bold mb-4">Artigos Relacionados</h3>
    <ul class="space-y-3">
        <li><a href="manutencao-industrial.html" class="text-blue-600 hover:underline">Manutenção Industrial</a></li>
        <li><a href="eletricista-industrial.html" class="text-blue-600 hover:underline">Eletricista Industrial</a></li>
        <li><a href="manutencao-de-maquinas.html" class="text-blue-600 hover:underline">Manutenção de Máquinas</a></li>
        <li><a href="empresas-de-manutencao-industrial.html" class="text-blue-600 hover:underline">Empresas de Manutenção Industrial</a></li>
        <li><a href="mecanico-de-manutencao-industrial.html" class="text-blue-600 hover:underline">Mecânico de Manutenção Industrial</a></li>
        <li><a href="empresa-de-montagem-industrial.html" class="text-blue-600 hover:underline">Empresa de Montagem Industrial</a></li>
        <li><a href="empresa-de-montagem-de-paineis-eletricos.html" class="text-blue-600 hover:underline">Empresa de Montagem de Painéis Elétricos</a></li>
        <li><a href="instalacao-de-painel-eletrico-industrial.html" class="text-blue-600 hover:underline">Instalação de Painel Elétrico Industrial</a></li>
        <li><a href="montagem-de-paineis-eletricos-em-sp.html" class="text-blue-600 hover:underline">Montagem de Painéis Elétricos em SP</a></li>
        <li><a href="manutencao-eletrica-industrial.html" class="text-blue-600 hover:underline">Manutenção Elétrica Industrial</a></li>
        <li><a href="manutencao-mecanica-industrial.html" class="text-blue-600 hover:underline">Manutenção Mecânica Industrial</a></li>
        <li><a href="manutencao-preventiva-industrial.html" class="text-blue-600 hover:underline">Manutenção Preventiva Industrial</a></li>
        <li><a href="integridade-estrutural.html" class="text-blue-600 hover:underline">Integridade Estrutural</a></li>
        <li><a href="manutencao-de-exaustor-industrial.html" class="text-blue-600 hover:underline">Manutenção de Exaustor Industrial</a></li>
        <li><a href="manutencao-de-balancas-industriais.html" class="text-blue-600 hover:underline">Manutenção de Balanças Industriais</a></li>
        <li><a href="sistema-de-manutencao-industrial.html" class="text-blue-600 hover:underline">Sistema de Manutenção Industrial</a></li>
        <li><a href="manutencao-de-equipamentos-industriais.html" class="text-blue-600 hover:underline">Manutenção de Equipamentos</a></li>
        <li><a href="mecanico-industrial-alto-tiete.html" class="text-blue-600 hover:underline">Mecânico Industrial Alto Tietê</a></li>
        <li><a href="mecanico-industrial-aruja.html" class="text-blue-600 hover:underline">Mecânico Industrial Arujá</a></li>
        <li><a href="mecanico-industrial-itaquaquecetuba.html" class="text-blue-600 hover:underline">Mecânico Industrial Itaquaquecetuba</a></li>
        <li><a href="mecanico-industrial-suzano.html" class="text-blue-600 hover:underline">Mecânico Industrial Suzano</a></li>
        <li><a href="mecanico-industrial-mogi.html" class="text-blue-600 hover:underline">Mecânico Industrial Mogi</a></li>
        <li><a href="mecanico-industrial-vale.html" class="text-blue-600 hover:underline">Mecânico Industrial Vale</a></li>
        <li><a href="mecanico-industrial-abcd.html" class="text-blue-600 hover:underline">Mecânico Industrial ABCD</a></li>
        <li><a href="mecanico-industrial-jundiai.html" class="text-blue-600 hover:underline">Mecânico Industrial Jundiaí</a></li>
        <li><a href="mecanico-industrial-campinas.html" class="text-blue-600 hover:underline">Mecânico Industrial Campinas</a></li>
        <li><a href="mecanico-industrial-itu.html" class="text-blue-600 hover:underline">Mecânico Industrial Itu</a></li>
        <li><a href="mecanico-industrial-votorantim.html" class="text-blue-600 hover:underline">Mecânico Industrial Votorantim</a></li>
        <li><a href="mecanico-industrial-sorocaba.html" class="text-blue-600 hover:underline">Mecânico Industrial Sorocaba</a></li>
        <li><a href="mecanico-industrial-aluminio.html" class="text-blue-600 hover:underline">Mecânico Industrial Alumínio</a></li>
        <li><a href="mecanico-industrial-valinhos.html" class="text-blue-600 hover:underline">Mecânico Industrial Valinhos</a></li>
        <li><a href="mecanico-industrial-guarulhos.html" class="text-blue-600 hover:underline">Mecânico Industrial Guarulhos</a></li>
        <li><a href="mecanico-industrial-sp.html" class="text-blue-600 hover:underline">Mecânico Industrial SP</a></li>
        <li><a href="manutencao-eletrica-industrial-em-guarulhos.html" class="text-blue-600 hover:underline">Manutenção Elétrica Guarulhos</a></li>
        <li><a href="manutencao-eletrica-industrial-em-sp.html" class="text-blue-600 hover:underline">Manutenção Elétrica SP</a></li>
    </ul>
</div>
`;


// Region Tabs functionality - Usando event delegation
document.addEventListener('DOMContentLoaded', function() {
    
    // Carregar sidebar se existir
    const sidebarElement = document.getElementById('article-sidebar');
    if (sidebarElement) {
        sidebarElement.innerHTML = sidebarHTML;
    }
    
    // Adicionar event listeners aos botões de região
    const regionButtons = document.querySelectorAll('.region-btn');
    
    regionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const regionId = this.getAttribute('data-region');
            
            // Esconder todas as regiões
            document.querySelectorAll('.region-content').forEach(el => {
                el.style.display = 'none';
            });
            
            // Remover estilo ativo de todos os botões
            document.querySelectorAll('.region-btn').forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-gray-100', 'text-gray-700');
            });
            
            // Mostrar região selecionada
            const regionElement = document.getElementById('region-' + regionId);
            if (regionElement) {
                regionElement.style.display = 'grid';
            }
            
            // Ativar botão selecionado
            this.classList.remove('bg-gray-100', 'text-gray-700');
            this.classList.add('bg-blue-600', 'text-white');
        });
    });
    
    // Google Tag (gtag.js)
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17014999584';
    document.head.appendChild(gtagScript);
    
    const gtagConfig = document.createElement('script');
    gtagConfig.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-17014999584');
    `;
    document.head.appendChild(gtagConfig);
});
