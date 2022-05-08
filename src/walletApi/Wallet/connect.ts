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
  const provider = (await detectEthereumProvider()) as MetaMaskProvider;
  if (typeof window.ethereum === "undefined") {
    return "Please install MetaMask";
  }
  const result = await provider.request({
    method: "eth_requestAccounts",
    params: [{ eth_accounts: {} }],
  });
};
