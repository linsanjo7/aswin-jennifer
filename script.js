function showRoseShower() {

// Remove any previous petals
document.querySelectorAll(".rose-petal").forEach(p => p.remove());

for (let i = 0; i < 200; i++) {

const petal = document.createElement("span");
petal.className = "rose-petal";

petal.style.left = Math.random() * 100 + "vw";

const size = 5 + Math.random() * 5;
petal.style.width = size + "px";
petal.style.height = (size * 1.4) + "px";

petal.style.opacity = 0.2 + Math.random() * 0.25;

petal.style.animationDuration = (10 + Math.random() * 5) + "s";
petal.style.animationDelay = Math.random() * 5 + "s";

petal.style.setProperty(
"--drift",
(Math.random() - 0.5) * 150 + "px"
);

document.body.appendChild(petal);

setTimeout(() => petal.remove(), 22000);
}
}

function openInvitation() {

const opening = document.getElementById("opening");

// Start envelope opening animation
opening.classList.add("opening-active");

// Wait for the envelope animation to finish
setTimeout(function () {

opening.style.display = "none";

document.getElementById("invitation").style.display = "block";

window.scrollTo({
top: 0,
behavior: "smooth"
});

// Start rose petal shower
showRoseShower();

}, 1600);

}


/* =========================
COUNTDOWN
========================= */

const weddingDate = new Date(
"2026-12-10T00:00:00+04:00"
).getTime();

function updateCountdown() {

const now = new Date().getTime();
const distance = weddingDate - now;

if (distance <= 0) {
document.getElementById("days").innerText = "00";
document.getElementById("hours").innerText = "00";
document.getElementById("minutes").innerText = "00";
document.getElementById("seconds").innerText = "00";
return;
}

const days = Math.floor(
distance / (1000 * 60 * 60 * 24)
);

const hours = Math.floor(
(distance / (1000 * 60 * 60)) % 24
);

const minutes = Math.floor(
(distance / (1000 * 60)) % 60
);

const seconds = Math.floor(
(distance / 1000) % 60
);

document.getElementById("days").innerText =
String(days).padStart(2, "0");

document.getElementById("hours").innerText =
String(hours).padStart(2, "0");

document.getElementById("minutes").innerText =
String(minutes).padStart(2, "0");

document.getElementById("seconds").innerText =
String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
ADD TO CALENDAR (Abu Dhabi time)
========================= */

const EVENTS = {
  nikkah:    { title: "Nikkah - Jennifer & Aswin",    start: "20261210", end: "20261211", allDay: true,  loc: "Abu Dhabi, UAE" },
  mehndi:    { title: "Mehndi - Jennifer & Aswin",    start: "20261218T180000", end: "20261218T210000", loc: "ADCB Building, Tower A, Abu Dhabi" },
  reception: { title: "Reception - Jennifer & Aswin", start: "20261220T170000", end: "20261220T200000", loc: "ADCB Building, Tower B, Abu Dhabi" }
};

function addToCalendar(key) {
  const e = EVENTS[key];
  const url = "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" + encodeURIComponent(e.title) +
    "&dates=" + e.start + "/" + e.end +
    (e.allDay ? "" : "&ctz=Asia/Dubai") +
    "&details=" + encodeURIComponent("Marriage ceremony of Jennifer and Aswin") +
    "&location=" + encodeURIComponent(e.loc);
  window.open(url, "_blank");
}
