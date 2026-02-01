const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const main = document.getElementById("main");
const heartColors = ["#ff4d6d", "#ff85a2", "#ffd6e0", "#ffffff"];
noButton.addEventListener("mouseover", () => {
 const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
 const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
 noButton.style.position = "absolute";
 noButton.style.left = `${x}px`;
 noButton.style.top = `${y}px`;
});
yesButton.addEventListener("click", () => {
 main.innerHTML = `
<div class="celebration">
<h1>It’s a date 💖</h1>
<p>Happy Valentine’s Day 💐</p>
</div>
 `;
 startHearts();
});
function startHearts() {
 setInterval(() => {
   const heart = document.createElement("div");
   heart.className = "heart";
   heart.innerText = "❤️";
   // random horizontal position
   heart.style.left = Math.random() * 100 + "vw";
   // random color
   const color =
     heartColors[Math.floor(Math.random() * heartColors.length)];
   heart.style.color = color;
   document.body.appendChild(heart);
   setTimeout(() => heart.remove(), 4000);
 }, 250);
}
