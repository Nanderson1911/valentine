const noButton = document.getElementById("no");
noButton.addEventListener("mouseover", () => {
 const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
 const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
 noButton.style.position = "absolute";
 noButton.style.left = `${x}px`;
 noButton.style.top = `${y}px`;
});
