let rainbowInterval;
let audio = new Audio('Song.mp3');
let dropdownInterval;
let dropdownDirectionX = 1;
let dropdownDirectionY = 1;

function toggleDropdown() {
    document.getElementById("colorDropdown").classList.toggle("show");
}

function changeColor(color) {
    clearInterval(rainbowInterval); // Clear the rainbow interval if it's active
    clearInterval(dropdownInterval);
    document.body.style.backgroundColor = color;
    audio.pause(); // Pause the song when switching from rainbow color
    audio.currentTime = 0; // Reset the song to start over
    document.getElementById("colorDropdown").style.position = "initial";
}

function startRainbow() {
    clearInterval(rainbowInterval); // Clear any previous interval
    rainbowInterval = setInterval(changeRainbowColor, 427); // Adjust the interval duration as needed
    audio.play(); // Play the song when rainbow color is picked
}

function moveDropdown() {
    const dropdown = document.getElementById("colorDropdown");
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    dropdown.style.position = "absolute";
    dropdown.style.left = "0px";
    dropdown.style.top = "0px";
    dropdownInterval = setInterval(() => {
        let currentLeft = parseInt(dropdown.style.left) || 0;
        let currentTop = parseInt(dropdown.style.top) || 0;
        if (currentLeft >= screenWidth - dropdown.offsetWidth || currentLeft <= 0) {
            dropdownDirectionX *= -1;
        }
        if (currentTop >= screenHeight - dropdown.offsetHeight || currentTop <= 0) {
            dropdownDirectionY *= -1;
        }
        dropdown.style.left = currentLeft + 5 * dropdownDirectionX + "px";
        dropdown.style.top = currentTop + 5 * dropdownDirectionY + "px";
    }, 50);
}

function changeRainbowColor() {
    const hue = Math.floor(Math.random() * 360);
    document.body.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    moveDropdown();
}
