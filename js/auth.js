// Simple admin credentials (example)
const adminCredentials = {
  username: "Admin",
  pin: "0105" // first two digits user, last two by 5
};

function adminLogin() {
  const userInput = document.getElementById("adminUser").value;
  const pinInput = document.getElementById("adminPass").value;

  const message = document.getElementById("loginMessage");

  if (userInput === adminCredentials.username && pinInput === adminCredentials.pin) {
    if (message) message.innerText = "✅ Login successful!";
    // Unlock admin panel features here
  } else {
    if (message) message.innerText = "❌ Invalid credentials.";
  }
}
