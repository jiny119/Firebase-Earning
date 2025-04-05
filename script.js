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

// Watch ad logic (Free Ads Example)
document.getElementById("watchAdBtn").addEventListener("click", function() {
  balance += 0.30;  // Example earning per ad
  updateBalance();
  
  // Free Ads Link (example from a free ad provider)
  let adIframe = document.createElement("iframe");
  adIframe.src = "https://youtu.be/nluXR6rTWF0?si=audSIGdgcE3IdG8R"; // Example: Replace this with actual ad link (YouTube ad or similar)
  adIframe.width = "300";
  adIframe.height = "250";
  document.getElementById("adContainer").appendChild(adIframe);

  alert("Ad watched! You earned $0.30.");
});

// Fake withdrawal logic (With added withdrawal methods)
document.getElementById("withdrawBtn").addEventListener("click", function() {
  if (balance >= 50) {
    document.getElementById("fakeWithdrawalMsg").style.display = "block";
    setTimeout(function() {
      let withdrawalMethod = prompt("Choose a withdrawal method: (JazzCash, EasyPaisa, Payoneer)");
      if (withdrawalMethod === "JazzCash" || withdrawalMethod === "EasyPaisa" || withdrawalMethod === "Payoneer") {
        alert(`Withdrawal request sent! Processing will take 3 days. Method: ${withdrawalMethod}`);
      } else {
        alert("Invalid withdrawal method.");
      }
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
