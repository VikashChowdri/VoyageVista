/*=============== CONTACT FORM VALIDATION ===============*/
const contactForm = document.querySelector('.contact__form');
const contactInputs = document.querySelectorAll('.contact__form-input');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Simple validation
    contactInputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '';
      }
    });
    
    if (isValid) {
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'contact__success-message';
      successMessage.innerHTML = `
        <i class="ri-check-line"></i>
        <p>Your message has been sent successfully!</p>
      `;
      
      contactForm.appendChild(successMessage);
      
      // Reset form
      contactForm.reset();
      
      // Remove success message after 3 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 3000);
    }
  });
  
  // Reset validation on input
  contactInputs.forEach(input => {
    input.addEventListener('input', function() {
      this.style.borderColor = '';
    });
  });
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const contactSr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
});

contactSr.reveal('.contact__hero-title, .contact__hero-description');
contactSr.reveal('.contact__form-container', { origin: 'left' });
contactSr.reveal('.contact__info', { origin: 'right' });
contactSr.reveal('.support__card', { interval: 100 });
contactSr.reveal('.map__container', { delay: 600 });