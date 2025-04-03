document.addEventListener('DOMContentLoaded', function() {
    // Navigation Tabs
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Show corresponding section
            const targetSection = item.getAttribute('data-section');
            sections.forEach(section => {
                if (section.id === targetSection) {
                    section.classList.remove('hidden');
                    section.classList.add('active');
                } else {
                    section.classList.add('hidden');
                    section.classList.remove('active');
                }
            });
        });
    });

    // FAQ Accordions
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const button = item.querySelector('button');
        const content = item.querySelector('.faq-content');

        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other FAQs
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                faq.querySelector('.faq-content').classList.add('hidden');
            });

            // Toggle current FAQ
            if (!isActive) {
                item.classList.add('active');
                content.classList.remove('hidden');
            }
        });
    });
});