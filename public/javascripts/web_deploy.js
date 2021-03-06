window.onload = function() {
  let testnet_url = 'http://localhost:7545';

  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider(testnet_url));
  }

  fetch('/contracts/Details.json')
    .then(Details => Details.json())
    .then(function(Details) {
      var MyContract = TruffleContract(Details);
      MyContract.setProvider(new Web3.providers.HttpProvider(testnet_url));
      MyContract.deployed().then(function(instance) {
        window.instance = instance;
      });
    });
};
