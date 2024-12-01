document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('strategyForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Basic form validation
        if (!data.name || !data.email || !data.website) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // URL validation
        try {
            new URL(data.website);
        } catch (_) {
            alert('Please enter a valid website URL');
            return;
        }

        // Here you would typically send the data to your server
        console.log('Form submitted:', data);
        alert('Thanks! We\'ll be in touch soon.');
        form.reset();
    });
});
