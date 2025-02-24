new Vue({
    el: "#app",
    data() {
      return {
        isOpenedTop: true,
        items: [
          {
            img1: "images/beach1.jpg",
            img2: "images/beach2.jpg",
            img3: "images/beach3.jpg",
            title: "BEACH",
            isOpen: false,
          },
          {
            img1: "images/adventure1.jpg",
            img2: "images/adventure2.jpg",
            img3: "images/adventure3.jpg",
            title: "ADVENTURE",
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
            img1: "images/sky1.jpg",
            img2: "images/sky2.jpg",
            img3: "images/sky3.jpg",
            title: "SKY",
            isOpen: false,
          },
          {
            img1: "images/sky1.jpg",
            img2: "images/sky2.jpg",
            img3: "images/sky3.jpg",
            title: "SKY",
            isOpen: false,
          },
          {
            img1: "images/sky1.jpg",
            img2: "images/sky2.jpg",
            img3: "images/sky3.jpg",
            title: "SKY",
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