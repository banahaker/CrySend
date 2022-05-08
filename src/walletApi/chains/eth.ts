import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
declare var window: any;

export async function sendETH(value: number, addressTo?: string) {
  const PROVIDER = (await detectEthereumProvider()) as typeof window.ethereum;
  const provider = new ethers.providers.Web3Provider(PROVIDER);
  const signer = provider.getSigner();
  const gasPrice = await provider.getGasPrice();
  const address = await signer.getAddress();
  const nonce = await provider.getTransactionCount(address, "latest");
  const tx = {
    from: address,
    to: addressTo,
    value: ethers.utils.parseEther(`${value}`),
    gasPrice: gasPrice,
    gasLimit: ethers.utils.hexlify(100000),
    nonce: nonce + 1,
  };
  console.log(tx);
  const transaction = await signer.sendTransaction(tx);
  return transaction;
}
