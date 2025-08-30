-------------------------
// Global Variables
// -------------------------
let totalSales = 0;
let weeklyGoal = 10;
let avatars = []; // each avatar = { element, bubble, name }
let aiLog = document.getElementById("ai-log");
let currentAmbassadorCode = null;
let ambassadorPoints = {};

// Hoodie catalog
const hoodies = [
  { name: "Southern Table Hoodie - Black", price: 80 },
  { name: "Southern Table Hoodie - Grey", price: 80 },
  { name: "Southern Table Hoodie - Gold", price: 80 },
  { name: "Southern Table Hoodie - Garnet", price: 80 }
];

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

// -------------------------
// Apply Ambassador Code
// -------------------------
function applyAmbassadorCode() {
  const input = document.getElementById("ambassadorCode");
  if (!input) return;
  const code = input.value.toUpperCase();
  if (!code) return;

  if (!ambassadorPoints[code]) ambassadorPoints[code] = 0;

  const message = document.getElementById("ambassadorMessage");
  if (message) message.innerText = `Code ${code} applied! Ambassador will earn points.`;

  currentAmbassadorCode = code;
}

// -------------------------
// Record Sale
// -------------------------
function recordSale(hoodieName) {
  totalSales++;
  updateLog(`💛 1 ${hoodieName} sold! Total this week: ${totalSales}/${weeklyGoal}`);

  // Update ambassador points
  if (currentAmbassadorCode && ambassadorPoints[currentAmbassadorCode] !== undefined) {
    ambassadorPoints[currentAmbassadorCode]++;
    updateLog(`🏆 Ambassador ${currentAmbassadorCode} earned a point! Total: ${ambassadorPoints[currentAmbassadorCode]}`);
  }

  // Trigger avatar celebration
  avatars.forEach(avatar => {
    avatar.bubble.innerText = "Woohoo!";
    avatar.element.classList.add("jump");
    setTimeout(() => {
      avatar.element.classList.remove("jump");
      avatar.bubble.innerText = "Packing hoodie!";
    }, 600);
  });

  // Weekly goal check
  if (totalSales >= weeklyGoal) {
    updateLog(`🎉 Weekly goal achieved! Trinity avatars are thrilled! 🎉`);
    totalSales = 0;
  }

  // Update totalSales display if exists
  const totalDisplay = document.getElementById("totalSales");
  if (totalDisplay) totalDisplay.innerText = totalSales;
}

// -------------------------
// Utility: Update AI Log
// -------------------------
function updateLog(message) {
  if (!aiLog) return;
  const div = document.createElement("div");
  div.innerText = message;
  aiLog.appendChild(div);
  aiLog.scrollTop = aiLog.scrollHeight;
}
