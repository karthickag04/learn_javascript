// ============================================================
// JAVASCRIPT IMAGE SLIDER
// ============================================================

console.log("=== JavaScript Image Slider ===\n");

/*
This image slider demonstrates:
- DOM manipulation
- Event listeners
- CSS transforms
- setInterval for autoplay
- Keyboard navigation
- Touch/swipe support (basic)
- Dynamic dot creation
- State management
*/


// ============================================================
// 1. SLIDER STATE AND CONFIGURATION
// ============================================================

const sliderState = {
    currentSlide: 0,
    isPlaying: false,
    autoPlayInterval: null,
    autoPlaySpeed: 3000, // milliseconds
    totalSlides: 0,
    touchStartX: 0,
    touchEndX: 0
};


// ============================================================
// 2. DOM ELEMENTS
// ============================================================

const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const dotsContainer = document.getElementById("dots-container");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const speedSlider = document.getElementById("speed-slider");
const speedValue = document.getElementById("speed-value");
const sliderContainer = document.getElementById("slider-container");

// Set total slides
sliderState.totalSlides = slides.length;


// ============================================================
// 3. INITIALIZATION
// ============================================================

function init() {
    // Create dot indicators
    createDots();
    
    // Set initial state
    updateSlider();
    
    // Update speed from slider
    updateSpeed();
    
    console.log(`Slider initialized with ${sliderState.totalSlides} slides`);
}


// ============================================================
// 4. DOT NAVIGATION CREATION
// ============================================================

function createDots() {
    // Clear existing dots
    dotsContainer.innerHTML = "";
    
    // Create a dot for each slide
    for (let i = 0; i < sliderState.totalSlides; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.dataset.index = i;
        
        // Add click event
        dot.addEventListener("click", () => {
            goToSlide(i);
        });
        
        dotsContainer.appendChild(dot);
    }
}


// ============================================================
// 5. SLIDE NAVIGATION FUNCTIONS
// ============================================================

function goToSlide(index) {
    // Handle wraparound
    if (index < 0) {
        sliderState.currentSlide = sliderState.totalSlides - 1;
    } else if (index >= sliderState.totalSlides) {
        sliderState.currentSlide = 0;
    } else {
        sliderState.currentSlide = index;
    }
    
    updateSlider();
    console.log(`Showing slide ${sliderState.currentSlide + 1} of ${sliderState.totalSlides}`);
}

function nextSlide() {
    goToSlide(sliderState.currentSlide + 1);
}

function prevSlide() {
    goToSlide(sliderState.currentSlide - 1);
}

function updateSlider() {
    // Move slider using CSS transform
    const translateX = -sliderState.currentSlide * 100;
    slider.style.transform = `translateX(${translateX}%)`;
    
    // Update dots
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll(".dot");
    
    dots.forEach((dot, index) => {
        if (index === sliderState.currentSlide) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}


// ============================================================
// 6. AUTOPLAY FUNCTIONS
// ============================================================

function startAutoPlay() {
    // Don't start if already playing
    if (sliderState.isPlaying) return;
    
    sliderState.isPlaying = true;
    sliderState.autoPlayInterval = setInterval(() => {
        nextSlide();
    }, sliderState.autoPlaySpeed);
    
    // Update button states
    playBtn.style.opacity = "0.5";
    pauseBtn.style.opacity = "1";
    
    console.log(`Autoplay started (${sliderState.autoPlaySpeed / 1000}s interval)`);
}

function stopAutoPlay() {
    if (!sliderState.isPlaying) return;
    
    sliderState.isPlaying = false;
    clearInterval(sliderState.autoPlayInterval);
    sliderState.autoPlayInterval = null;
    
    // Update button states
    playBtn.style.opacity = "1";
    pauseBtn.style.opacity = "0.5";
    
    console.log("Autoplay stopped");
}

function toggleAutoPlay() {
    if (sliderState.isPlaying) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
}

function updateSpeed() {
    // Get speed value (1-5 seconds)
    const speed = parseInt(speedSlider.value);
    sliderState.autoPlaySpeed = speed * 1000;
    speedValue.textContent = `${speed}s`;
    
    // Restart autoplay if running
    if (sliderState.isPlaying) {
        stopAutoPlay();
        startAutoPlay();
    }
}


// ============================================================
// 7. EVENT LISTENERS - BUTTONS
// ============================================================

// Navigation buttons
prevBtn.addEventListener("click", () => {
    prevSlide();
    // Pause autoplay when manually navigating
    if (sliderState.isPlaying) {
        stopAutoPlay();
    }
});

nextBtn.addEventListener("click", () => {
    nextSlide();
    if (sliderState.isPlaying) {
        stopAutoPlay();
    }
});

// Play/Pause buttons
playBtn.addEventListener("click", startAutoPlay);
pauseBtn.addEventListener("click", stopAutoPlay);

// Speed control
speedSlider.addEventListener("input", updateSpeed);


// ============================================================
// 8. EVENT LISTENERS - KEYBOARD
// ============================================================

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            event.preventDefault();
            prevSlide();
            break;
        case "ArrowRight":
            event.preventDefault();
            nextSlide();
            break;
        case " ": // Spacebar
            event.preventDefault();
            toggleAutoPlay();
            break;
        case "Home":
            event.preventDefault();
            goToSlide(0);
            break;
        case "End":
            event.preventDefault();
            goToSlide(sliderState.totalSlides - 1);
            break;
    }
});


// ============================================================
// 9. TOUCH/SWIPE SUPPORT
// ============================================================

sliderContainer.addEventListener("touchstart", (event) => {
    sliderState.touchStartX = event.touches[0].clientX;
}, { passive: true });

sliderContainer.addEventListener("touchmove", (event) => {
    sliderState.touchEndX = event.touches[0].clientX;
}, { passive: true });

sliderContainer.addEventListener("touchend", () => {
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; // minimum distance for swipe
    const diff = sliderState.touchStartX - sliderState.touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left - next slide
            nextSlide();
        } else {
            // Swiped right - previous slide
            prevSlide();
        }
    }
    
    // Reset touch positions
    sliderState.touchStartX = 0;
    sliderState.touchEndX = 0;
}


// ============================================================
// 10. PAUSE ON HOVER (OPTIONAL)
// ============================================================

sliderContainer.addEventListener("mouseenter", () => {
    if (sliderState.isPlaying) {
        clearInterval(sliderState.autoPlayInterval);
        console.log("Autoplay paused (hover)");
    }
});

sliderContainer.addEventListener("mouseleave", () => {
    if (sliderState.isPlaying) {
        sliderState.autoPlayInterval = setInterval(() => {
            nextSlide();
        }, sliderState.autoPlaySpeed);
        console.log("Autoplay resumed");
    }
});


// ============================================================
// 11. PRELOAD ANIMATION (OPTIONAL)
// ============================================================

function animateSlideIn() {
    const currentSlideElement = slides[sliderState.currentSlide];
    currentSlideElement.style.animation = "fadeIn 0.5s ease";
    
    setTimeout(() => {
        currentSlideElement.style.animation = "";
    }, 500);
}


// ============================================================
// 12. UTILITY FUNCTIONS
// ============================================================

// Get slide information
function getSlideInfo() {
    return {
        current: sliderState.currentSlide + 1,
        total: sliderState.totalSlides,
        isPlaying: sliderState.isPlaying,
        speed: sliderState.autoPlaySpeed / 1000
    };
}

// Debug function
function logSliderState() {
    console.log("Slider State:", {
        currentSlide: sliderState.currentSlide + 1,
        totalSlides: sliderState.totalSlides,
        isPlaying: sliderState.isPlaying,
        speed: `${sliderState.autoPlaySpeed / 1000}s`
    });
}


// ============================================================
// 13. INITIALIZE SLIDER
// ============================================================

// Initialize when DOM is ready
init();

console.log("\nSlider Controls:");
console.log("  - Arrow buttons: Navigate slides");
console.log("  - Dots: Jump to specific slide");
console.log("  - Play/Pause: Toggle autoplay");
console.log("  - Speed slider: Adjust autoplay speed");
console.log("  - Left/Right arrows: Keyboard navigation");
console.log("  - Spacebar: Toggle autoplay");
console.log("  - Swipe: Touch navigation on mobile");
