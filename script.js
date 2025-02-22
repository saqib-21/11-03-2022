    function openSidebar() {
      document.getElementById("sidebar").classList.add("show");
      document.getElementById("overlay").classList.add("show");
    }

    function closeSidebar() {
      document.getElementById("sidebar").classList.remove("show");
      document.getElementById("overlay").classList.remove("show");
    }

    function updateCountUpTimer(startDate) {
        const now = new Date();
        const start = new Date(startDate);
        const diff = now - start; // Difference in milliseconds

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Update each row separately
        document.getElementById("days").innerHTML = `${days} Days`;
        document.getElementById("hours").innerHTML = `${hours} Hours`;
        document.getElementById("minutes").innerHTML = `${minutes} Minutes`;
        document.getElementById("seconds").innerHTML = `${seconds} Seconds`;
        document.getElementById('whole').innerHTML = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
    }

    // Initialize timer
    const startDate = "2022-03-11T18:26:00"; // Set your desired start date
    setInterval(() => updateCountUpTimer(startDate), 1000);


    let lastScrollTop = 0;
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scroll down -> Hide header
            header.style.top = "-80px"; // Move the header out of view
        } else {
            // Scroll up -> Show header
            header.style.top = "0";
        }
        lastScrollTop = currentScroll;
    });

   // Reveal elements on scroll

   document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".info-image , .info-text,.end-text , .bottom-image");
    const flowerSection = document.querySelector("footer");


    function revealImages() {
        images.forEach(img => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                img.classList.add("show");
            } else {
                img.classList.remove("show"); // Optional: Hide when scrolling back up
            }
        });

        // Fade out the flower section as user scrolls down
        if (window.scrollY > 700) { // Adjust scroll threshold as needed
            flowerSection.classList.add("hidden");
        } else {
            flowerSection.classList.remove("hidden");
        }
    }

    window.addEventListener("scroll", revealImages);
    revealImages(); // Run on page load to check already visible elements
});

