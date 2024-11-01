export interface NFT {
    id: string;
    tokenId: string;
    animalId: string;
    owner: string;
    price: number;
    currency: 'ETH' | 'ICP';
    metadata: {
      name: string;
      description: string;
      image: string;
      attributes: Array<{
        trait_type: string;
        value: string | number;
      }>;
    };
    history: Array<{
      type: 'mint' | 'transfer' | 'sale';
      from: string;
      to: string;
      price?: number;
      timestamp: string;
    }>;
}