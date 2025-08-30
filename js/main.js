// ============================
// Trinity Avatar & House Logic
// ============================

// Avatar definitions
const avatars = [
  {id:"LEANNAvatar", name:"L.E.A.N.N.A"},
  {id:"AIVAAvatar", name:"A.I.V.A"},
  {id:"DIVAAvatar", name:"D.I.V.A"},
  {id:"NINAAvatar", name:"N.I.N.A"}
];

// Dynamically create avatar elements
const aiContainer = document.getElementById("ai-avatars");
avatars.forEach(a => {
  const img = document.createElement("img");
  img.src = `images/${a.id}.png`; // Place avatar images here
  img.id = a.id;
  img.className = "avatar";
  img.style.top = Math.random()*80 + "vh";
  img.style.left = Math.random()*90 + "vw";
  img.alt = a.name;
  aiContainer.appendChild(img);
});

// Random movement every 3 seconds
setInterval(() => {
  avatars.forEach(a => {
    const el = document.getElementById(a.id);
    if(el){
      el.style.top = Math.random()*80 + "vh";
      el.style.left = Math.random()*90 + "vw";
    }
  });
}, 3000);

// House definitions (clickable)
const houses = [
  {id:"house1", top:"20vh", left:"10vw"},
  {id:"house2", top:"60vh", left:"70vw"}
];

// Create houses dynamically
const houseContainer = document.getElementById("houses");
houses.forEach(h => {
  const img = document.createElement("img");
  img.src = "images/house.png"; // Place house images here
  img.id = h.id;
  img.className = "house";
  img.style.top = h.top;
  img.style.left = h.left;
  img.alt = "House";
  img.addEventListener("click", () => {
    // Move all avatars to this house
    avatars.forEach(a => {
      const el = document.getElementById(a.id);
      if(el){
        el.style.top = h.top;
        el.style.left = h.left;
      }
    });
    // Update construction log
    const log = document.getElementById("ai-log");
    if(log) log.textContent = `🏠 Trinity AIs are now inside ${h.id}, working...`;
  });
  houseContainer.appendChild(img);
});

// Optional: initial construction log
const log = document.getElementById("ai-log");
if(log) log.textContent = "Trinity AIs are initializing...";

