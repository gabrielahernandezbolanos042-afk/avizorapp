// This file replaces the original React application logic with vanilla JavaScript
// to create a traditional, static-like website experience.

document.addEventListener('DOMContentLoaded', () => {

    // --- Login Modal Logic ---
    const loginModal = document.getElementById('login-modal');
    const openLoginButtons = document.querySelectorAll('.open-login-modal');
    const closeLoginButton = document.querySelector('.close-login-modal');
    // FIX: Cast loginForm to HTMLFormElement to resolve errors when accessing the `elements` property.
    const loginForm = document.getElementById('login-form') as HTMLFormElement;

    const openModal = () => {
        if (loginModal) {
            loginModal.classList.remove('opacity-0', 'pointer-events-none');
        }
    };

    const closeModal = () => {
        if (loginModal) {
            loginModal.classList.add('opacity-0', 'pointer-events-none');
        }
    };

    openLoginButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    if (closeLoginButton) {
      closeLoginButton.addEventListener('click', closeModal);
    }
    
    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            // Closes the modal if the backdrop is clicked
            if (e.target === loginModal) {
                closeModal();
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Intento de inicio de sesión con:', { 
                email: (loginForm.elements.namedItem('login-email') as HTMLInputElement).value, 
                password: (loginForm.elements.namedItem('login-password') as HTMLInputElement).value
            });
            // Here you would implement authentication logic
            closeModal(); // Close modal after submission attempt
        });
    }

    // Show modal on page load, as per original app's behavior.
    openModal();


    // --- Mobile Menu Logic ---
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuButton && mobileMenu) {
        const menuIconPath = menuButton.querySelector('svg path');
        const menuIconOpen = 'M4 6h16M4 12h16m-7 6h7';
        const menuIconClose = 'M6 18L18 6M6 6l12 12';

        menuButton.addEventListener('click', () => {
            const isMenuOpen = !mobileMenu.classList.contains('hidden');
            if (isMenuOpen) {
                mobileMenu.classList.add('hidden');
                if (menuIconPath) menuIconPath.setAttribute('d', menuIconOpen);
            } else {
                mobileMenu.classList.remove('hidden');
                if (menuIconPath) menuIconPath.setAttribute('d', menuIconClose);
            }
        });
        
        // Close mobile menu when a link or button inside it is clicked
        mobileMenu.querySelectorAll('a, button').forEach(item => {
            item.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                if (menuIconPath) menuIconPath.setAttribute('d', menuIconOpen);
            });
        });
    }


    // --- Contact Form Logic ---
    const contactForm = document.getElementById('contact-form') as HTMLFormElement;
    const formContainer = document.getElementById('form-container');
    const successMessage = document.getElementById('success-message');

    if (contactForm && formContainer && successMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            console.log({
                name: (contactForm.elements.namedItem('name') as HTMLInputElement).value,
                email: (contactForm.elements.namedItem('email') as HTMLInputElement).value,
                message: (contactForm.elements.namedItem('message') as HTMLInputElement).value,
            });

            formContainer.classList.add('hidden');
            successMessage.classList.remove('hidden');

            contactForm.reset();

            setTimeout(() => {
                formContainer.classList.remove('hidden');
                successMessage.classList.add('hidden');
            }, 5000);
        });
    }

});