import { useQuery, useMutation, useQueryClient } from 'react-query';
import { nftService } from '../services/api';
// import { BlockchainService } from '../services/blockchain';

// const blockchain = new BlockchainService();

export const useNFTData = () => {
  const queryClient = useQueryClient();

  const { data: nfts, isLoading } = useQuery(
    'nfts',
    nftService.getMarketplace
  );

  const mintMutation = useMutation(
    // async (animalId: string) => {
    //   const nft = await nftService.mint(animalId);
    //   const txHash = await blockchain.mintNFT(nft.metadata);
    //   return { nft, txHash };
    // },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('nfts');
      },
    }
  );

  const transferMutation = useMutation(
    // async ({ nftId, to }: { nftId: string; to: string }) => {
    //   await nftService.transfer(nftId, to);
    //   return blockchain.transferNFT(nftId, to);
    // },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('nfts');
      },
    }
  );

  return {
    nfts,
    isLoading,
    mint: mintMutation.mutate,
    transfer: transferMutation.mutate,
    isMinting: mintMutation.isLoading,
    isTransferring: transferMutation.isLoading,
  };
};