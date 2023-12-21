document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="./index.html"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('./index.html')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });