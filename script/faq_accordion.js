      // FAQ Accordion Functionality
      document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
          const faqItem = button.parentElement;
          const isActive = faqItem.classList.contains('active');
          
          // Close all other items
          document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
          });
          
          // Toggle current item if it wasn't active
          if (!isActive) {
            faqItem.classList.add('active');
          }
        });
      });