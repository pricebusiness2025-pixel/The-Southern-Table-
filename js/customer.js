// ============================
// Customer / Shop Logic
// ============================

// Example hoodie catalog
const hoodies = [
  {name:"Classic Crunchy Hoodie", price:"$45"},
  {name:"Gold Label Hoodie", price:"$60"},
  {name:"Founders Edition Hoodie", price:"$75"}
];

// Reference to Hoodies section
const hoodiesSection = document.getElementById("hoodies");

// Function to display catalog
function displayCatalog() {
  if(!hoodiesSection) return;

  const list = document.createElement("ul");
  hoodies.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price}`;
    list.appendChild(li);
  });
  hoodiesSection.appendChild(list);
}

// Call displayCatalog on page load
displayCatalog();

// Optional: handle Shop Hoodie button click
const shopButton = hoodiesSection.querySelector(".cta-button");
if(shopButton){
  shopButton.addEventListener("click", () => {
    const log = document.getElementById("ai-log");
    if(log) log.textContent = "🛒 A.I.V.A is processing your hoodie order...";
    alert("Hoodie added to cart! (Simulated)");
  });
}

