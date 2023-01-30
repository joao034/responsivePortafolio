const nav = document.querySelector("nav");
const toggleBtn = document.createElement("button");
toggleBtn.innerHTML = "&#9776;";

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.appendChild(toggleBtn);
