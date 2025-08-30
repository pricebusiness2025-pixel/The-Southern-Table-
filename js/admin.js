// ============================
// Admin Login & Chat Logic
// ============================

const adminCredentials = {
  username: "Admin",
  password: "0105" // example: first two digits user, last two 05
};

function adminLogin() {
  const user = document.getElementById("adminUser").value.trim();
  const pass = document.getElementById("adminPass").value.trim();
  const message = document.getElementById("admin-message");

  if(user === adminCredentials.username && pass === adminCredentials.password){
    message.textContent = "✅ Admin logged in successfully.";
    message.className = "success";

    // Optional: show chat / control panel
    openAdminPanel();
  } else {
    message.textContent = "❌ Invalid credentials.";
    message.className = "error";
  }
}

function openAdminPanel() {
  // Example: simple chat log + input
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

    // Optional: simple response from Trinity
    const aiResponse = document.createElement("div");
    aiResponse.textContent = `Trinity: Command received -> "${input.value}"`;
    aiResponse.style.color = "gold";
    log.appendChild(aiResponse);

    log.scrollTop = log.scrollHeight;
    input.value = "";
  }
}


