document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-icon');

    socialLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const confirmVisit = confirm(`Are you sure you want to visit: ${this.alt}?`);
            if (!confirmVisit) {
                event.preventDefault(); 
            }
        });
    });
});
