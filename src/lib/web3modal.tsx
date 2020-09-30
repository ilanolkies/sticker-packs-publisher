import Web3Modal from "web3modal";

type VoidOrPromiseVoid =  void | Promise<void>

interface EventHandlers {
  handleClose(): VoidOrPromiseVoid
  handleAccountsChanged(accounts: string[]): VoidOrPromiseVoid
  handleChainChanged(chainId: number): VoidOrPromiseVoid
  handleNetworkChanged(networkId: number): VoidOrPromiseVoid
}

export const subscribeProvider = (provider: any, {
  handleClose,
  handleAccountsChanged,
  handleChainChanged,
  handleNetworkChanged
}: EventHandlers) => {
  if (!provider.on) {
    return;
  }

  provider.on("close", handleClose);
  provider.on("accountsChanged", handleAccountsChanged);
  provider.on("chainChanged", handleChainChanged);
  provider.on("networkChanged", handleNetworkChanged);
};

export const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions: []
});
