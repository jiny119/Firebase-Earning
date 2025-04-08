let balance = 0;
let referralEarnings = 0;
let referralsCount = 0; // Track number of referrals

// Update Balance on the page
function updateBalance() {
  document.getElementById("balance").innerText = `$${balance.toFixed(2)}`;
}

// Update Referral Earnings on the page
function updateReferralEarnings() {
  document.getElementById("referralEarnings").innerText = `$${referralEarnings.toFixed(2)}`;
  document.getElementById("referralsCount").innerText = referralsCount; // Update the referral count display
}

// Watch ad logic (Free Ads Example)
document.getElementById("watchAdBtn").addEventListener("click", function() {
  balance += 0.30;  // Example earning per ad
  updateBalance();
  
  // Free Ads Link (example from a free ad provider)
  let adContainer = document.getElementById("adContainer");
  
  // Remove previous ad if it exists
  let existingAd = adContainer.querySelector("iframe");
  if (existingAd) {
    adContainer.removeChild(existingAd);
  }
  
  // Create and append new ad iframe
  let adIframe = document.createElement("iframe");
  adIframe.src = "https://youtu.be/nluXR6rTWF0?si=audSIGdgcE3IdG8R"; // Example: Replace this with actual ad link (YouTube ad or similar)
  adIframe.width = "300";
  adIframe.height = "250";
  adContainer.appendChild(adIframe);

  alert("Ad watched! You earned $0.30.");
});

// Fake withdrawal logic (With added withdrawal methods)
document.getElementById("withdrawBtn").addEventListener("click", function() {
  if (referralsCount >= 10) { // Ensure that user has 10 referrals to withdraw
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
  } else {
    alert("You need at least 10 referrals to withdraw.");
  }
});

// Referral logic (Copy referral link)
document.getElementById("shareReferralBtn").addEventListener("click", function() {
  referralEarnings += 1;  // Example earnings per referral
  referralsCount++; // Increment referral count
  updateReferralEarnings();

  // Copy referral link to clipboard
  let referralLink = "https://yourwebsite.com/referral?code=12345"; // Example referral link
  navigator.clipboard.writeText(referralLink).then(function() {
    alert("Referral link copied to clipboard! You earned $1.");
  }, function() {
    alert("Failed to copy referral link.");
  });
});

// Initial balance setup
updateBalance();
updateReferralEarnings();
