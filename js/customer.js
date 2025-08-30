Capture ambassador code and link to sales
let currentAmbassadorCode = null;

function customerInit() {
  const codeInputBtn = document.querySelector("#ambassador-section button");
  if (codeInputBtn) {
    codeInputBtn.addEventListener("click", () => {
      currentAmbassadorCode = applyAmbassadorCode();
    });
  }
}

// Override recordSale to include ambassador code if present
function recordSaleCustomer(hoodieName) {
  recordSale(hoodieName, currentAmbassadorCode);
}

document.addEventListener("DOMContentLoaded", customerInit);
