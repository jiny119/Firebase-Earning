// Load saved balance from localStorage
let balance = parseFloat(localStorage.getItem("balance")) || 0;
let referralEarnings = parseFloat(localStorage.getItem("referralEarnings")) || 0;
let referralsCount = parseInt(localStorage.getItem("referralsCount")) || 0;

// Update Balance on the page
function updateBalance() {
  document.getElementById("balance").innerText = `$${balance.toFixed(2)}`;
  localStorage.setItem("balance", balance.toFixed(2));
}

// Update Referral Earnings on the page
function updateReferralEarnings() {
  document.getElementById("referralEarnings").innerText = `$${referralEarnings.toFixed(2)}`;
  document.getElementById("referralsCount").innerText = referralsCount;
  localStorage.setItem("referralEarnings", referralEarnings.toFixed(2));
  localStorage.setItem("referralsCount", referralsCount);
}

// Watch ad logic (Free Ads Example)
document.getElementById("watchAdBtn").addEventListener("click", function() {
  balance += 0.15;  // Correct earning per ad
  updateBalance();
  alert("Ad watched! You earned $0.15.");

  // Open ad in new tab
  window.open("ad.html", "_blank");
});

// Fake withdrawal logic
document.getElementById("withdrawBtn").addEventListener("click", function() {
  if (referralsCount >= 10) {
    if (balance >= 50) {
      document.getElementById("fakeWithdrawalMsg").style.display = "block";
      setTimeout(function() {
        let method = prompt("Choose a withdrawal method: (JazzCash, EasyPaisa, Payoneer)");
        if (["JazzCash", "EasyPaisa", "Payoneer"].includes(method)) {
          alert(`Withdrawal request sent! Processing in 3 days. Method: ${method}`);
        } else {
          alert("Invalid withdrawal method.");
        }
      }, 3000);
    } else {
      alert("You need at least $50 to withdraw.");
    }
  } else {
    alert("You need at least 10 referrals to withdraw.");
  }
});

// Referral logic
document.getElementById("shareReferralBtn").addEventListener("click", function() {
  referralEarnings += 1;
  referralsCount++;
  updateReferralEarnings();

  let referralLink = "https://yourwebsite.com/referral?code=12345";
  navigator.clipboard.writeText(referralLink).then(function() {
    alert("Referral link copied! You earned $1.");
  }, function() {
    alert("Failed to copy link.");
  });
});

// Initialize on page load
updateBalance();
updateReferralEarnings();
