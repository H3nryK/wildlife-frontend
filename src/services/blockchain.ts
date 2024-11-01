// import { ethers } from 'ethers';
// import { NFT } from '../types/nft';

// export class BlockchainService {
//   // private provider: ethers.providers.Web3Provider;
//   // private contract: ethers.Contract;

//   // constructor() {
//   //   this.provider = new ethers.providers.Web3Provider(window.ethereum);
//   //   // Contract ABI and address would be imported from configuration
//   //   this.contract = new ethers.Contract(
//   //     process.env.REACT_APP_CONTRACT_ADDRESS!,
//   //     [], // ABI would go here
//   //     this.provider.getSigner()
//   //   );
//   // }

//   async connectWallet(): Promise<string> {
//     await this.provider.send('eth_requestAccounts', []);
//     const signer = this.provider.getSigner();
//     return signer.getAddress();
//   }

//   async mintNFT(metadata: NFT['metadata']): Promise<string> {
//     const transaction = await this.contract.mint(metadata);
//     const receipt = await transaction.wait();
//     return receipt.transactionHash;
//   }

//   async transferNFT(tokenId: string, to: string): Promise<string> {
//     const transaction = await this.contract.transferFrom(
//       await this.provider.getSigner().getAddress(),
//       to,
//       tokenId
//     );
//     const receipt = await transaction.wait();
//     return receipt.transactionHash;
//   }

//   async getNFTMetadata(tokenId: string): Promise<NFT['metadata']> {
//     return await this.contract.tokenURI(tokenId);
//   }
// }