-------------------------
// Global Variables
// -------------------------
let totalSales = 0;
let weeklyGoal = 10;
let avatars = []; // each avatar = { element, bubble, name }
let aiLog = document.getElementById("ai-log");

// Hoodie catalog
const hoodies = [
  { name: "Southern Table Hoodie - Black", price: 80 },
  { name: "Southern Table Hoodie - Grey", price: 80 },
  { name: "Southern Table Hoodie - Gold", price: 80 },
  { name: "Southern Table Hoodie - Garnet", price: 80 }
];

// Ambassador points tracking
let ambassadorPoints = {};

// -------------------------
// Render Hoodies
// -------------------------
function renderHoodies() {
  const hoodiesSection = document.getElementById("hoodies");
  if (!hoodiesSection) return;

  hoodiesSection.innerHTML = "<h2>Southern Table Hoodies</h2>";
  hoodies.forEach(hoodie => {
    const div = document.createElement("div");
    div.className = "product";
    div.style.marginBottom = "15px";
    div.innerHTML = `
      <strong>${hoodie.name}</strong> - $${hoodie.price}
      <button class="cta-button" onclick="recordSale('${hoodie.name}')">Add to Cart</button>
    `;
    hoodiesSection.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", renderHoodies);

// -------------------------
// Avatar Setup
// -------------------------
function initAvatars(names) {
  const container = document.getElementById("ai-avatars");
  if (!container) return;

  names.forEach(name => {
    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.style.position = "absolute";
    avatar.style.bottom = "0px";
    avatar.style.left = Math.floor(Math.random() * 80) + "px";
    avatar.innerText = name;

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.innerText = "Working...";
    avatar.appendChild(bubble);

    container.appendChild(avatar);
    avatars.push({ element: avatar, bubble: bubble, name: name });
  });
}
