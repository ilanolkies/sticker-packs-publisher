import Web3 from 'web3'

// https://github.com/Web3Modal/web3modal/blob/master/example/src/App.tsx#L141
export function initWeb3(provider: any) {
  const web3: any = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: "chainId",
        call: "eth_chainId",
        outputFormatter: web3.utils.hexToNumber
      }
    ]
  });

  return web3;
}
