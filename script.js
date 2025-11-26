function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let ampm = "AM";
    if (hours >= 12) { ampm = "PM"; }
    if (hours > 12) { hours -= 12; }
    if (hours === 0) { hours = 12; }

    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.getDate();

    // Add leading zero
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Update HTML
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("ampm").textContent = ampm;
    document.getElementById("day").textContent = day;
}

setInterval(updateClock, 1000);
updateClock();
