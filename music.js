function openSidebar() {
    document.getElementById("sidebar").classList.add("show");
    document.getElementById("overlay").classList.add("show");
  }

  function closeSidebar() {
    document.getElementById("sidebar").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");
  }

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
  { title: "The Avatar's Love", artist: "SIDE A", src: "SIDE A/1.The Avatar's Love.mp3", cover: "images/Black Melancholy Album Cover.png" },
  { title: "Crew (feat. Brent Faiyaz & Shy Glizzy)", artist: "SIDE A", src: "SIDE A/2.Crew (feat. Brent Faiyaz & Shy Glizzy).mp3", cover: "images/Black Melancholy Album Cover.png" },
  { title: "Redbone", artist: "SIDE A", src: "SIDE A/3.Redbone.mp3", cover: "images/Black Melancholy Album Cover.png" },
  { title: "GRAVITY (FEAT. TYLER, THE CREATOR)", artist: "SIDE A", src: "SIDE A/4.GRAVITY (FEAT. TYLER, THE CREATOR).mp3", cover: "images/Black Melancholy Album Cover.png" },
  { title: "Best Part (feat. H.E.R.)", artist: "SIDE A", src: "SIDE A/5.Best Part (feat. H.E.R.).mp3", cover: "images/Black Melancholy Album Cover.png" },
  { title: "See You Again (feat. Kali Uchis)", artist: "SIDE A", src: "SIDE A/6.See You Again (feat. Kali Uchis).mp3", cover: "images/Black Melancholy Album Cover.png" },
  { title: "Cyanide", artist: "SIDE B", src: "SIDE B/7.CYANIDE.mp3", cover: "images/cover.jpg" },
  { title: "All The Stars (with SZA)", artist: "SIDE B", src: "SIDE B/8.All The Stars (with SZA).mp3", cover: "images/cover.jpg" },
  { title: "Prom", artist: "SIDE B", src: "SIDE B/9.Prom.mp3", cover: "images/cover.jpg" },
  { title: "20 Something", artist: "SIDE B", src: "SIDE B/10.20 Something.mp3", cover: "images/cover.jpg" },
  { title: "Ghost in the Machine (feat. Phoebe Bridgers)", artist: "SIDE B", src: "SIDE B/11.Ghost in the Machine (feat. Phoebe Bridgers).mp3", cover: "images/cover.jpg" },
  { title: "Too Late", artist: "SIDE B", src: "SIDE B/12.Too Late.mp3", cover: "images/cover.jpg" }
  // Add more songs as needed
];

let currentSongIndex = 0;

/** Load song but do NOT auto-play */
function loadSong(index) {
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

  updatePlayPauseButton(false); // Show play button initially
}

/** Play / Pause Toggle */
function togglePlay() {
  if (audioPlayer.paused) {
      audioPlayer.play();
      updatePlayPauseButton(true);
  } else {
      audioPlayer.pause();
      updatePlayPauseButton(false);
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

/** Play Next Song but DO NOT Auto-Play */
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
}

/** Play Previous Song but DO NOT Auto-Play */
function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
}

/** Update progress bar as song plays */
audioPlayer.addEventListener("timeupdate", () => {
  if (audioPlayer.duration) {
      let progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      progressBar.value = progress;
      progressBar.style.background = `linear-gradient(to right, #79253D ${progress}%, #e0e0e0 ${progress}%)`; // Fill color
  }
});

/** When song ends, reset play button */
audioPlayer.addEventListener("ended", () => {
  updatePlayPauseButton(false); // Show play button when song finishes
});

/** Seek to selected part of the song */
progressBar.addEventListener("input", () => {
  audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

/** Load First Song on Page Load */
window.onload = () => {
  loadSong(currentSongIndex);
};
