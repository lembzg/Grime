window.checkWallet = function checkWallet() {
  if (window.ethereum) {
    alert("Wallet detected");
  } else {
    alert("No wallet found. Install MetaMask.");
  }
};

window.checkAddress = async function checkAddress() {
  if (!window.ethereum) {
    alert("No wallet found. Install MetaMask.");
    return;
  }
  try {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    alert("Connected address:\n" + accounts[0]);
  } catch (err) {
    console.error(err);
    alert("Could not connect: " + (err?.message || err));
  }
};

window.switchPlasma = async function switchPlasma(){
    const plasmaChain = await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
            chainId: '9746',
            chainName: 'Plasma Testnet',
            nativeCurrency: {
            name: 'XPL',
            symbol: 'XPL',
            decimals: 18,
            },
    rpcUrls: ['	https://testnet-rpc.plasma.to'],
    blockExplorerUrls: ['https://testnet.plasmascan.to'],
    }],
    })

    alert("switched to plasma chain")
}


