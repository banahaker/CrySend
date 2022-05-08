import { ethers } from "ethers";
import { abi } from "./cdr.abi";
import detectEthereumProvider from "@metamask/detect-provider";
const contractAddress = "0x047275256B3528463476fDecA97e3806493A61Eb";
declare var window: any;

export async function sendCDR(value: number, addressTo: string) {
  const PROVIDER = (await detectEthereumProvider()) as typeof window.ethereum;
  const provider = new ethers.providers.Web3Provider(PROVIDER);
  const signer = provider.getSigner();

  const target = addressTo;
  const CDRContract = new ethers.Contract(contractAddress, abi, signer);
  const success = await CDRContract.transfer(target, BigInt(value * 1e18));
  return success;
}
