
//OGGGGGGG
function openSidebar() {
    document.getElementById("sidebar").classList.add("show");
    document.getElementById("overlay").classList.add("show");
  }

  function closeSidebar() {
    document.getElementById("sidebar").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");
  }


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

  new Vue({
    el: "#app",
    data() {
      return {
        isOpenedTop: false,
        items: [
          {
            img3: "images/IMG_5176tulip (2).JPEG",
            img2: "images/IMG_5176tulip (3).JPEG",
            img1: "images/IMG_5337.JPEG",
            title: "Tulip Date",
            isOpen: false,
          },
          {
            img1: "images/IMG_6004.JPG",
            img2: "images/IMG_6382.JPG",
            img3: "images/IMG_6384.JPG",
            title: "Greenhouse Date",
            isOpen: false,
          },
          {
            img1: "images/butterfly.jpg",
            img2: "images/butterfly (1).JPG",
            img3: "images/butterfly (2).JPG",
            title: "Butterfly Date",
            isOpen: false,
          },
          {
            img1: "images/IMG_9174.jpg",
            img2: "images/IMG_5337.JPEG",
            img3: "images/IMG_5666.JPG",
            title: "BEACH",
            isOpen: false,
          },
          {
            img1: "images/museum1.jpg",
            img2: "images/museum2.jpg",
            img3: "images/museum3.jpg",
            title: "MUSEUM",
            isOpen: false,
          },
          {
            img1: "images/aquarium1.jpg",
            img2: "images/aquarium2.jpg",
            img3: "images/aquarium3.jpg",
            title: "AQUARIUM",
            isOpen: false,
          },
          {
            img1: "images/aurora1.jpg",
            img2: "images/aurora2.jpg",
            img3: "images/aurora3.jpg",
            title: "AURORA",
            isOpen: false,
          },
          {
            img1: "images/IMG_1567.jpg",
            img3: "images/raptors (1).JPG",
            img2: "images/raptors (2).JPG",
            title: "Raptors Game",
            isOpen: false,
          },
        ],
      };
    },
    methods: {
      topOpen() {
        this.isOpenedTop = !this.isOpenedTop;
      },
  
      open(idx, isOpen) {
        if (this.isOpenedTop) {
          this.items[idx].isOpen = !isOpen;
        }
      },
  
      reset() {
        this.items.forEach((item) => (item.isOpen = false));
        this.isOpenedTop = false;
      },
    },
  });

