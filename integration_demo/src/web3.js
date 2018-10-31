import Web3 from 'web3'; // Must specfiy node_modules to avoid importing itself

let web3;
// Instantiate new web3 global instance
if (typeof window !== 'undefined' && // Check we're on the client-side
           (typeof window.web3 === 'undefined' ||
           typeof window.web3.currentProvider === 'undefined')) {
    alert('MetaMask is not installed')
}

// Instantiate new web3 local instance
if (typeof window !== 'undefined' && // Check we're on the client-side
    typeof window.web3 !== 'undefined' &&
    typeof window.web3.currentProvider !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
}

// Get current provider
export function getCurrentProvider() {
  return web3.currentProvider;
}

// Export web3 object instance
const web3ForExport = web3; // To avoid error from exporting non-read-only variable
export default web3ForExport;
