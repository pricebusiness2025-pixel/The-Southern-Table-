// ============================
// Trinity Avatar & House Logic
// ============================

const avatars = [
  {id:"LEANNAvatar", name:"L.E.A.N.N.A"},
  {id:"AIVAAvatar", name:"A.I.V.A"},
  {id:"DIVAAvatar", name:"D.I.V.A"},
  {id:"NINAAvatar", name:"N.I.N.A"}
];

// Create avatars dynamically
const aiContainer = document.getElementById("ai-avatars");
avatars.forEach(a => {
  const img = document.createElement("img");
  img.src = `images/${a.id}.png`;
  img.id = a.id;
  img.className = "avatar";
  img.style.top = Math.random()*80 + "vh";
  img.style.left = Math.random()*90 + "vw";
  img.alt = a.name;
  aiContainer.appendChild(img);

  // Speech bubble on hover
  img.addEventListener("mouseenter", () => {
    const bubble = document.createElement("div");
    bubble.className = "speech-bubble";
    bubble.textContent = `${a.name}: Ready to work!`;
    bubble.style.position = "absolute";
    bubble.style.background = "gold";
    bubble.style.color = "#000";
    bubble.style.padding = "3px 6px";
    bubble.style.borderRadius = "5px";
    bubble.style.top = (parseFloat(img.style.top)-3) + "vh";
    bubble.style.left = img.style.left;
    img.parentNode.appendChild(bubble);
    setTimeout(() => bubble.remove(), 2000);
  });
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

// House logic
const houses = [
  {id:"house1", top:"20vh", left:"10vw"},
  {id:"house2", top:"60vh", left:"70vw"}
];

const houseContainer = document.getElementById("houses");
houses.forEach(h => {
  const img = document.createElement("img");
  img.src = "images/house.png";
  img.id = h.id;
  img.className = "house";
  img.style.top = h.top;
  img.style.left = h.left;
  img.alt = "House";

  img.addEventListener("click", () => {
    avatars.forEach(a => {
      const el = document.getElementById(a.id);
      if(el){
        el.style.top = h.top;
        el.style.left = h.left;
      }
    });
    startAvatarTask(h.id);
  });

  houseContainer.appendChild(img);
});

// ============================
// Avatar Construction Tasks
// ============================
function startAvatarTask(houseId) {
  const log = document.getElementById("ai-log");
  if(!log) return;

  const tasks = [
    "🛠️ Mixing materials...",
    "✏️ Sketching new hoodie designs...",
    "📦 Packing hoodie orders...",
    "🔧 Fixing machinery..."
  ];

  let i = 0;
  const interval = setInterval(() => {
    log.textContent = `🏠 ${houseId} - ${tasks[i]}`;
    i++;
    if(i >= tasks.length) clearInterval(interval);
  }, 2000);
}

// ============================
// Admin Login & Chat
// ============================
const adminCredentials = {
  username: "Admin",
  password: "0105"
};

function adminLogin() {
  const user = document.getElementById("adminUser").value.trim();
  const pass = document.getElementById("adminPass").value.trim();
  const message = document.getElementById("admin-message");

  if(user === adminCredentials.username && pass === adminCredentials.password){
    message.textContent = "✅ Admin logged in successfully.";
    message.className = "success";
    openAdminPanel();
  } else {
    message.textContent = "❌ Invalid credentials.";
    message.className = "error";
  }
}

function openAdminPanel() {
  let chatDiv = document.getElementById("admin-chat");
  if(!chatDiv){
    chatDiv = document.createElement("div");
    chatDiv.id = "admin-chat";
    chatDiv.style.border = "1px solid #000";
    chatDiv.style.padding = "10px";
    chatDiv.style.marginTop = "10px";

    const log = document.createElement("div");
    log.id = "chat-log";
    log.style.height = "100px";
    log.style.overflowY = "auto";
    log.style.background = "#f0f0f0";
    log.style.padding = "5px";
    log.style.marginBottom = "5px";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "chat-input";
    input.placeholder = "Type a command or message";
    input.style.width = "80%";

    const sendBtn = document.createElement("button");
    sendBtn.textContent = "Send";
    sendBtn.onclick = sendAdminMessage;

    chatDiv.appendChild(log);
    chatDiv.appendChild(input);
    chatDiv.appendChild(sendBtn);

    document.getElementById("admin-login").appendChild(chatDiv);
  }
}

function sendAdminMessage() {
  const input = document.getElementById("chat-input");
  const log = document.getElementById("chat-log");
  if(input && log && input.value.trim() !== ""){
    const msg = document.createElement("div");
    msg.textContent = `Admin: ${input.value}`;
    log.appendChild(msg);

    // Check if it is a command
    if(input.value.startsWith("move") || input.value.startsWith("task")){
      handleAdminCommand(input.value);
    } else {
      const aiResponse = document.createElement("div");
      aiResponse.textContent = `Trinity: Command received -> "${input.value}"`;
      aiResponse.style.color = "gold";
      log.appendChild(aiResponse);
    }

    log.scrollTop = log.scrollHeight;
    input.value = "";
  }
}

// ============================
// Admin Command Parser
// ============================
function handleAdminCommand(cmd) {
  const parts = cmd.split(" ");
  if(parts[0] === "move" && document.getElementById(parts[1]) && document.getElementById(parts[2])){
    const avatarEl = document.getElementById(parts[1]);
    const houseEl = document.getElementById(parts[2]);
    avatarEl.style.top = houseEl.style.top;
    avatarEl.style.left = houseEl.style.left;
    const log = document.getElementById("ai-log");
    if(log) log.textContent = `${parts[1]} moved to ${parts[2]}`;
  } else if(parts[0] === "task" && document.getElementById(parts[1])){
    startAvatarTask(parts[1]);
  }
   }
    
