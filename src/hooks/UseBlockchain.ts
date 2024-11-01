// import { useState, useCallback } from 'react';
// // import { BlockchainService } from '../services/blockchain';

// // const blockchain = new BlockchainService();

// export const useBlockchain = () => {
//   const [address, setAddress] = useState<string>();
//   const [isConnecting, setIsConnecting] = useState(false);

//   const connect = useCallback(async () => {
//     try {
//       setIsConnecting(true);
//       // const userAddress = await blockchain.connectWallet();
//       setAddress(userAddress);
//       return userAddress;
//     } catch (error) {
//       console.error('Failed to connect wallet:', error);
//       throw error;
//     } finally {
//       setIsConnecting(false);
//     }
//   }, []);

//   return {
//     address,
//     isConnecting,
//     connect,
//   };
// };