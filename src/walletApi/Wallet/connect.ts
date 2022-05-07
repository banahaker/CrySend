declare var window: any;
import detectEthereumProvider from "@metamask/detect-provider";
import { providers } from "ethers";

export interface MetaMaskProvider extends providers.ExternalProvider {
  isMetaMask: boolean;
  providers?: MetaMaskProvider[];
  isConnected: () => boolean;
  request: (request: {
    method: string;
    params?: any[] | undefined;
  }) => Promise<any>;
  on: (event: string, callback: (param: any) => void) => void;
}

export const connectWallet = async () => {
  const isWalletInstalled = window.ethereum.isMetamaskInstalled;
  const provider = (await detectEthereumProvider()) as MetaMaskProvider;
  if (isWalletInstalled) {
    try {
      await provider.request({
        method: "eth_requestAccounts",
        params: [{ eth_accounts: {} }],
      });
    } catch (error) {
      return error as string;
    }
  } else {
    return "Please install MetaMask";
  }
};
