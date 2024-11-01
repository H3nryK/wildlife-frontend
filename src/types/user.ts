export interface User {
    id: string;
    address: string;
    username: string;
    profileImage?: string;
    ownedNFTs: string[];
    watchlist: string[];
    contributions: Array<{
      animalId: string;
      amount: number;
      timestamp: string;
    }>;
    notifications: Array<{
      id: string;
      type: 'update' | 'alert' | 'transaction';
      message: string;
      read: boolean;
      timestamp: string;
    }>;
  }