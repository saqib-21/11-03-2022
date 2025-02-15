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
    }

    // Initialize timer
    const startDate = "2022-03-11T06:30:00"; // Set your desired start date
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
    const images = document.querySelectorAll(".info-image , .info-text");
    const flowerSection = document.querySelector(".flower-section");
    const flowerSection2 = document.querySelector(".flower-section-2");


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
            flowerSection2.classList.add("hidden");
        } else {
            flowerSection.classList.remove("hidden");
            flowerSection2.classList.remove("hidden");
        }
    }

    window.addEventListener("scroll", revealImages);
    revealImages(); // Run on page load to check already visible elements
});

// Select elements
const audioPlayer = document.getElementById("audioPlayer");
const songTitle = document.getElementById("songTitle");
const artistName = document.getElementById("artistName");
const coverImage = document.getElementById("coverImage");
const progressBar = document.getElementById("progressBar");
const playPauseButton = document.getElementById("playPauseBtn");
const playIcon = document.getElementById("playIcon"); // Play icon
const pauseIcon = document.getElementById("pauseIcon"); // Pause icon

// Define the playlist
let songs = [
    { title: "The Avatar's Love", artist: "Artist A", src: "SIDE A/1.The Avatar's Love.mp3", cover: "images/cover.jpg" },
    { title: "Crew (feat. Brent Faiyaz & Shy Glizzy)", artist: "Artist B", src: "SIDE A/2.Crew (feat. Brent Faiyaz & Shy Glizzy).mp3", cover: "images/cover.jpg" },
    { title: "Redbone", artist: "Artist B", src: "SIDE A/3.Redbone.mp3", cover: "images/cover.jpg" },
    { title: "GRAVITY (FEAT. TYLER, THE CREATOR)", artist: "Artist B", src: "SIDE A/4.GRAVITY (FEAT. TYLER, THE CREATOR).mp3", cover: "images/cover.jpg" },
    { title: "Best Part (feat. H.E.R.)", artist: "Artist B", src: "SIDE A/5.Best Part (feat. H.E.R.).mp3", cover: "images/cover.jpg" },
    { title: "See You Again (feat. Kali Uchis)", artist: "Artist B", src: "SIDE A/6.See You Again (feat. Kali Uchis).mp3", cover: "images/cover.jpg" }
];

let currentSongIndex = 0;
let isPlaying = false; // Tracks if a song is playing

/** Load song and auto-play if needed */
function loadSong(index, autoPlay = false) {
    let song = songs[index];

    // Reset progress bar
    progressBar.value = 0;
    progressBar.style.background = `linear-gradient(to right, #79253D 0%, #e0e0e0 0%)`;

    requestAnimationFrame(() => {
        songTitle.textContent = song.title;
        artistName.textContent = song.artist;
        audioPlayer.src = song.src;
        coverImage.src = song.cover;
    });

    // If autoPlay is true, start playing the song immediately
    if (autoPlay) {
        audioPlayer.play();
        updatePlayPauseButton(true);
        isPlaying = true;
    } else {
        updatePlayPauseButton(false);
        isPlaying = false;
    }
}

/** Play / Pause Toggle */
function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        updatePlayPauseButton(true);
        isPlaying = true;
    } else {
        audioPlayer.pause();
        updatePlayPauseButton(false);
        isPlaying = false;
    }
}

/** Ensure Play Button Shows First, and Pause Only After Playing */
function updatePlayPauseButton(isPlaying) {
    if (isPlaying) {
        playIcon.style.display = "none"; // Hide play icon
        pauseIcon.style.display = "inline"; // Show pause icon
    } else {
        playIcon.style.display = "inline"; // Show play icon
        pauseIcon.style.display = "none"; // Hide pause icon
    }
}

/** Play Next Song and Auto-Play */
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex, true); // Auto-play next song
}

/** Play Previous Song and Auto-Play */
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex, true); // Auto-play previous song
}

/** Update progress bar as song plays */
audioPlayer.addEventListener("timeupdate", () => {
    if (audioPlayer.duration) {
        let progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progress;
        progressBar.style.background = `linear-gradient(to right, #79253D ${progress}%, #e0e0e0 ${progress}%)`; // Fill color
    }
});

/** Auto-Play Next Song When Current Song Ends */
audioPlayer.addEventListener("ended", () => {
    nextSong(); // Automatically play next song when the current one ends
});

/** Seek to selected part of the song */
progressBar.addEventListener("input", () => {
    audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

/** Load First Song on Page Load */
window.onload = () => {
    loadSong(currentSongIndex);
};
