function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (!menuToggle) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'menu-toggle';
        toggleBtn.innerHTML = '=';
        toggleBtn.setAttribute('aria-label', 'Toggle menu');
        document.querySelector('nav').prepend(toggleBtn);

        toggleBtn.addEventListener('click', function() {
            navUl.classList.toggle('active');
            this.innerHTML = navUl.classList.contains('active') ? 'X' : '=';
        });
    }

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (navUl.classList.contains('active')) {
                navUl.classList.remove('active');
                document.querySelector('.menu-toggle').innerHTML = '=';
            }
        });
    });

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const inputs = this.querySelectorAll('input, textarea');
            let isValid = true;

            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#e74c3c';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });

            if (isValid) {
                alert('Thank you! Your message has been sent successfully.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
});