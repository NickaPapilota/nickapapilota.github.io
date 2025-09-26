// music.js

const music = document.getElementById("bg-music");

// Toggle play/pause when called
function toggleMusic() {
  if (!music) return;

  if (music.paused) {
    music.play().catch(err => console.log("Autoplay blocked:", err));
  } else {
    music.pause();
  }
}

// Restore music state when the page loads
window.addEventListener("DOMContentLoaded", () => {
  if (!music) return;

  const savedTime = localStorage.getItem("musicTime");
  if (savedTime) {
    music.currentTime = parseFloat(savedTime);
  }

  const wasPlaying = localStorage.getItem("musicPlaying");
  if (wasPlaying === "true") {
    music.play().catch(err => console.log("Autoplay blocked until click:", err));
  }
});

// Save state before leaving the page
window.addEventListener("beforeunload", () => {
  if (!music) return;

  localStorage.setItem("musicTime", music.currentTime);
  localStorage.setItem("musicPlaying", !music.paused);
});
