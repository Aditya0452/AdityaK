function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    let button = document.querySelector(".theme-toggle");

    if (document.body.classList.contains("dark-theme")) {
        button.textContent = "☀ Light Mode";
    } else {
        button.textContent = "🌙 Dark Mode";
    }
}

// Select the iframe
const pdfFrame = document.getElementById('pdf-frame');

// Variables for tracking zoom level
let currentScale = 1;

// Initialize Hammer.js for touch gestures
const hammer = new Hammer(pdfFrame);
hammer.get('pinch').set({ enable: true });

// Pinch-to-Zoom Event
hammer.on('pinch', (event) => {
    currentScale = Math.min(Math.max(currentScale * event.scale, 0.5), 3); // Limits zoom from 0.5x to 3x
    pdfFrame.style.transform = `scale(${currentScale})`;
});

// Reset the pinch zoom scale
hammer.on('pinchend', () => {
    hammer.get('pinch').set({ enable: true });
});

function openFullImage() {
    document.getElementById("profile-popup").classList.add("active");
}

function closeFullImage() {
    document.getElementById("profile-popup").classList.remove("active");
}


document.addEventListener("DOMContentLoaded", () => {
    const backendURL = "mongodb+srv://kudipudiaditya2002:aditya2002@aditya.fagxw.mongodb.net/?retryWrites=true&w=majority&appName=Aditya"; // Replace with your actual backend URL

    // Update visitor count
    fetch(`${backendURL}/update-visit`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("views").textContent = data.count;
        })
        .catch(error => console.error("Error updating views:", error));
});
