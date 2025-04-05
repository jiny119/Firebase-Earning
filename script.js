let balance = 0;
let referralEarnings = 0;

// Update Balance on the page
function updateBalance() {
  document.getElementById("balance").innerText = `$${balance.toFixed(2)}`;
}

// Update Referral Earnings on the page
function updateReferralEarnings() {
  document.getElementById("referralEarnings").innerText = `$${referralEarnings.toFixed(2)}`;
}

// Watch ad logic
document.getElementById("watchAdBtn").addEventListener("click", function() {
  balance += 0.30;  // Example earning per ad
  updateBalance();
});

// Fake withdrawal logic
document.getElementById("withdrawBtn").addEventListener("click", function() {
  if (balance >= 50) {
    document.getElementById("fakeWithdrawalMsg").style.display = "block";
    setTimeout(function() {
      alert("Withdrawal successful (fake transaction).");
    }, 3000); // Fake transaction after 3 seconds
  } else {
    alert("You need at least $50 to withdraw.");
  }
});

// Referral logic
document.getElementById("shareReferralBtn").addEventListener("click", function() {
  referralEarnings += 1;  // Example earnings per referral
  updateReferralEarnings();
  alert("Referral link shared! You earned $1.");
});

// Initial balance setup
updateBalance();
updateReferralEarnings();
