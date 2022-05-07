import detectEthereumProvider from "@metamask/detect-provider";
import type { MetaMaskProvider } from "./connect";

export const getAddress = async () => {
  const provider = (await detectEthereumProvider()) as MetaMaskProvider;
  try {
    const accounts = await provider.request({ method: "eth_accounts" });
    return accounts;
  } catch (err) {
    return err;
  }
};
