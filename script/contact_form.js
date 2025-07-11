            // Form submission handler
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                const submitBtn = document.querySelector('.submit-btn');
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                
                emailjs.sendForm('service_mhegrho', 'template_8wi6etb', this)
                    .then(() => {
                        document.getElementById('contactForm').reset();
                        document.getElementById('formSuccess').style.display = 'block';
                        submitBtn.innerHTML = 'Send Message';
                        submitBtn.disabled = false;
                        
                        // Hide success message after 5 seconds
                        setTimeout(() => {
                            document.getElementById('formSuccess').style.display = 'none';
                        }, 5000);
                    })
                    .catch((error) => {
                        alert('Error sending message. Please try again or call us.');
                        console.error('EmailJS Error:', error);
                        submitBtn.innerHTML = 'Send Message';
                        submitBtn.disabled = false;
                    });
            });