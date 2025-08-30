// ============================
// Ambassador Code & PIN Logic
// ============================

// Obfuscated PINs: first 2 digits = user number, last 2 = 05
const ambassadorPins = {
  "TST001":["0","1","0","5"], "TST002":["0","2","0","5"], "TST003":["0","3","0","5"],
  "TST004":["0","4","0","5"], "TST005":["0","5","0","5"], "TST006":["0","6","0","5"],
  "TST007":["0","7","0","5"], "TST008":["0","8","0","5"], "TST009":["0","9","0","5"],
  "TST010":["1","0","0","5"], "TST011":["1","1","0","5"], "TST012":["1","2","0","5"],
  "TST013":["1","3","0","5"], "TST014":["1","4","0","5"], "TST015":["1","5","0","5"],
  "TST016":["1","6","0","5"], "TST017":["1","7","0","5"], "TST018":["1","8","0","5"],
  "TST019":["1","9","0","5"], "TST020":["2","0","0","5"]
};

// Check Ambassador code + PIN
function checkCode() {
  const code = document.getElementById("ambassadorCode").value.trim().toUpperCase();
  const pin = document.getElementById("ambassadorPin").value.trim();
  const message = document.getElementById("exclusive-message");
  const products = document.getElementById("exclusive-products");

  if(ambassadorPins[code]){
    const expectedPin = ambassadorPins[code].join("");
    if(pin === expectedPin){
      message.textContent = `✅ Access granted. Welcome, Ambassador ${code}!`;
      message.className = "success";
      products.style.display = "block";
    } else {
      message.textContent = "❌ Invalid PIN. Please try again.";
      message.className = "error";
      products.style.display = "none";
    }
  } else {
    message.textContent = "❌ Invalid code. Please try again.";
    message.className = "error";
    products.style.display = "none";
  }
}
