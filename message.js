function openSidebar() {
  document.getElementById("sidebar").classList.add("show");
  document.getElementById("overlay").classList.add("show");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
}
document.addEventListener("DOMContentLoaded", function () {
  const messages = [
      "I LOVE YOU!",
      "You are amazing!",
      "Keep pushing forward!",
      "Today is your day!",
      "Believe in yourself!",
      "The best is yet to come!",
      "Never stop dreaming!",
      "Every moment is a fresh beginning."
  ];

  const images = [
      "images/butterfly (1).JPG",
  ];

  let lastContent = null; // Stores the last displayed message/image
  let isLetterOpen = false; // Tracks whether the letter is open

  function getRandomContent() {
      if (isLetterOpen) return; // If the letter is already open, don't change it!

      const letterContent = document.getElementById("letterContent");
      letterContent.innerHTML = ""; // Clear previous content

      let newContent;
      do {
          const isText = Math.random() < 0.5;
          if (isText) {
              newContent = messages[Math.floor(Math.random() * messages.length)];
              letterContent.textContent = newContent;
          } else {
              const randomImage = images[Math.floor(Math.random() * images.length)];
              newContent = `<img src="${randomImage}" alt="Random Image" style="width: 100%;">`;
              letterContent.innerHTML = newContent;
          }
      } while (newContent === lastContent); // Ensure it's different from the last one

      lastContent = newContent; // Store new content
      isLetterOpen = true; // Mark the letter as opened
  }

  function closeLetter() {
      isLetterOpen = false; // Allow new content when reopened
  }

  const letterImage = document.querySelector(".letter-image");

  // Open on hover or click, but only set content once per opening
  letterImage.addEventListener("mouseenter", getRandomContent);
  letterImage.addEventListener("click", getRandomContent);

  // Reset when the letter closes (mouse leaves)
  letterImage.addEventListener("mouseleave", closeLetter);
});
