if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  }
document.addEventListener("DOMContentLoaded", function() {
    var bookWrap = document.getElementById("book-wrap");
    var haidariSchoolContent = document.getElementById("haidarischool");

    // Set initial style for #haidarischool content
    haidariSchoolContent.style.display = "none";
    
    // Simulate content loading (replace this with your actual loading logic)
    setTimeout(function() {
        // Update the style to make #haidarischool content visible
        haidariSchoolContent.style.display = "block";
        
        // Set display: none for the book-wrap
        bookWrap.style.display = "none";

        // Initialize ScrollReveal after content is loaded
        ScrollReveal({ duration: 1000 });

        ScrollReveal().reveal('.load-hidden', {
            delay: 75,
            duration: 1500,
            opacity: 0,
            distance: "50%",
            origin: "top",
            reset: true
        });

        ScrollReveal().reveal('.tagline', {
            delay: 80,
            duration: 1500,
            opacity: 0,
            distance: "50%",
            origin: "bottom",
            reset: true
        });

        ScrollReveal().reveal('.box', {
            delay: 100,
            duration: 2000,
            opacity: 0,
            distance: "100%",
            origin: "bottom",
            reset: false
        });
    }, 2000);  // Adjust the timeout according to your loading time
});
