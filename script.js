const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateCountdown() {
    const now = new Date();
    const year = now.getFullYear();
    const nextYear = new Date(`January 1, ${year + 1} 00:00:00`);
    const timeLeft = nextYear - now;

    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((timeLeft / 1000 / 60) % 60);
    const secondsLeft = Math.floor((timeLeft / 1000) % 60);

    daysElement.textContent = String(daysLeft).padStart(2, '0');
    hoursElement.textContent = String(hoursLeft).padStart(2, '0');
    minutesElement.textContent = String(minutesLeft).padStart(2, '0');
    secondsElement.textContent = String(secondsLeft).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
