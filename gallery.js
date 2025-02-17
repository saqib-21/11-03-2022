function openSidebar() {
    document.getElementById("sidebar").classList.add("show");
    document.getElementById("overlay").classList.add("show");
  }

  function closeSidebar() {
    document.getElementById("sidebar").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");
  }

  document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slides");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;
    const slideWidth = document.querySelector(".slides img").clientWidth + 20;

    function slideTo(index) {
        gsap.to(slider, { x: -index * slideWidth, duration: 0.8, ease: "power2.inOut" });
    }

    nextBtn.addEventListener("click", function() {
        if (currentIndex < slider.children.length - 1) {
            currentIndex++;
            slideTo(currentIndex);
        }
    });

    prevBtn.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            slideTo(currentIndex);
        }
    });

    // Enable draggable feature with GSAP Draggable
    Draggable.create(slider, {
        type: "x",
        inertia: true,
        bounds: { minX: -(slider.children.length - 1) * slideWidth, maxX: 0 },
        edgeResistance: 0.8,
        onDragEnd: function() {
            currentIndex = Math.round(this.x / -slideWidth);
            slideTo(currentIndex);
        }
    });
});

