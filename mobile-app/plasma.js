function checkWallet() {
  if (window.ethereum) {
    alert("Wallet detected");
  } else {
    alert("No wallet found. Install MetaMask.");
  }
}