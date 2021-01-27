require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remember pupil give entire bone vibrant'; 
let testAccounts = [
"0x4aad809146d5f4a1a6648e4313a63021f3c4da2aa6b9332da164c161dfdf667e",
"0x6db295dd25b31cf363a5f95d014d8b347b3dcd9629e931ee4e8ea20c1a6baeee",
"0x6ce492376cdc304297e7980b1accd5070e28a5c9a4a90d8826402b3ca699d5d1",
"0x7a5fd5e87ccf63d06786e3bda2d6e2fab259a19145c288bfa7b79173d46de7b3",
"0x5c943f8b96c8eff178190bf5cda2216df02dc1279aaf75e1007098e8de7bd0d1",
"0x1ad67b463c9c411b9a0054136270dd0d5456d4da33619152c0aef3ca151b3126",
"0x1ea14139a45d74b7db5d9583c8e3086d0ed64552e9f9e1312595cbbbe995da36",
"0xbe6a5deecd4cb48e95271304f02c408198aff31f385e8f454565a520a9d74c5c",
"0x066c9598b68e6089a03dbe3a26b45e2c23ced7878cc53d3b24494670340501d2",
"0xd1af60d35798475fb04b0839c007774c83b95323e33e66d79ea589faf9036278"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
