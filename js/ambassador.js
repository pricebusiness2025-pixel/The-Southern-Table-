
// Ambassador credentials: TST code → 4-digit PIN
const ambassadorCredentials = {
  "TST001": "0105",
  "TST002": "0210",
  "TST003": "0315",
  "TST004": "0420",
  "TST005": "0525",
  "TST006": "0630",
  "TST007": "0735",
  "TST008": "0840",
  "TST009": "0945",
  "TST010": "1050",
  "TST011": "1155",
  "TST012": "1260",
  "TST013": "1365",
  "TST014": "1470",
  "TST015": "1575",
  "TST016": "1680",
  "TST017": "1785",
  "TST018": "1890",
  "TST019": "1995",
  "TST020": "2000",
};

// Login function with code + PIN verification
function handleLogin() {
  const codeInput = document.getElementById("ambassadorCode").value.trim().toUpperCase();
  const pinInput = document.getElementById("ambassadorPin").value.trim();
  const msg = document.getElementById("ambassadorMsg");

  if (ambassadorCredentials[codeInput] && ambassadorCredentials[codeInput] === pinInput) {
    msg.textContent = `Welcome, ${codeInput}.`;
    document.getElementById("ambassadorCode").value = "";
    document.getElementById("ambassadorPin").value = "";
  } else {
    msg.textContent = "Invalid code or PIN. Try again.";
  }
}

// Hook up button and Enter key
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("ambassadorLoginBtn");
  const inputCode = document.getElementById("ambassadorCode");
  const inputPin = document.getElementById("ambassadorPin");

  if (btn && inputCode && inputPin) {
    btn.addEventListener("click", handleLogin);
    inputCode.addEventListener("keydown", (e) => { if (e.key === "Enter") handleLogin(); });
    inputPin.addEventListener("keydown", (e) => { if (e.key === "Enter") handleLogin(); });
  }
});
  
