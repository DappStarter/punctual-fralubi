require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remain soft gesture glove flat spray'; 
let testAccounts = [
"0x41817ae2a615684d5520cc00b2b77ee6d2c3d0064758c779f5c820c42f3380f1",
"0x34ee2deea459dd8e0e6b997a07c1d4db7753f0f92ff488d432fae4ac6fde5129",
"0xecf407cde96cc205e7fec8b32c6c24ee55178ba1a3ebd71072fe4812b43ab8e9",
"0xd92bfd97860ddb3983fc21d1ca59cf994696d21ee79c5cb03da0a956e203b840",
"0x1314a250868906777f1702e3ae1a7a424521dc2e59276ee97a2d2e799b6ca9f8",
"0x0a672acac962a326a6e2baa0ad5eb6c6aaa56341c3acc9e798609007d63da741",
"0x63da99152d04f9c80a9d3bfae958f469e1458cbf1d0274d5465cc34b61d0b204",
"0xad18aa4d19ba2bd54aec23768a557d4b857a0d035b39459a9561ed93b82f9053",
"0x27b8cc37a93489c8d51ad788164f713acd99f03660c8b857fd3e541734931c99",
"0xce03197b2e107ffb44f2e1e5ad83be88bfd78f21e17eb2e6051c4dfb0b4e2cf7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
