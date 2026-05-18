function injectCommon() {
    const headerHtml = `
        <nav class="container">
            <a href="index.html" class="logo">
                <span class="brand-name" style="font-size: 1.8rem; color: var(--primary);">AURA</span>
            </a>
            <ul class="nav-links">
                <li><a href="index.html">首頁</a></li>
                <li><a href="about.html">關於我們</a></li>
                <li><a href="category-anti-aging.html">抗老系列</a></li>
                <li><a href="category-acne.html">抗痘系列</a></li>
                <li><a href="category-sensitive.html">敏感肌系列</a></li>
                <li><a href="category-dry.html">乾肌系列</a></li>
                <li><a href="category-tools.html">美容用具</a></li>
                <li><a href="contact.html">聯絡我們</a></li>
            </ul>
            <div class="nav-icons">
                <a href="#"><i class="fas fa-search"></i></a>
                <a href="#"><i class="fas fa-shopping-bag"></i></a>
                <a href="#"><i class="fas fa-user"></i></a>
            </div>
        </nav>
    `;
    
    const footerHtml = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <span class="brand-name" style="font-size: 1.5rem;">AURA</span>
                    <p style="margin-top: 20px; opacity: 0.7;">源自自然的純粹，為您打造閃耀美肌。</p>
                </div>
                <div class="footer-col">
                    <h4>快速連結</h4>
                    <ul class="footer-links">
                        <li><a href="about.html">關於我們</a></li>
                        <li><a href="contact.html">聯絡我們</a></li>
                        <li><a href="#">常見問題</a></li>
                        <li><a href="#">運送政策</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>追蹤我們</h4>
                    <div class="nav-icons" style="justify-content: flex-start;">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-line"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 AURA Skincare. All Rights Reserved.</p>
            </div>
        </div>
    `;

    const header = document.querySelector('header');
    if (header) header.innerHTML = headerHtml;
    
    const footer = document.querySelector('footer');
    if (footer) footer.innerHTML = footerHtml;

    // Highlight active link
    const currentPath = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = 'var(--primary)';
            link.style.fontWeight = 'bold';
        }
    });
}

document.addEventListener('DOMContentLoaded', injectCommon);
