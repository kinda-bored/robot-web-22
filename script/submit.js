      document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        this.style.display = 'none';
        document.getElementById('thankyou').style.display = 'block';
      });