import axios from 'axios';
import { Animal } from '../types/system';
import { NFT } from '../types/nft';
import { User } from '../types/user';
import { config } from './config';

const api = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: config.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const animalService = {
  getAll: async (): Promise<Animal[]> => {
    const { data } = await api.get('/animals');
    return data;
  },

  getById: async (id: string): Promise<Animal> => {
    const { data } = await api.get(`/animals/${id}`);
    return data;
  },

  getLiveData: async (id: string): Promise<Animal['trackingData']> => {
    const { data } = await api.get(`/animals/${id}/live`);
    return data;
  },
};

export const nftService = {
  getMarketplace: async (): Promise<NFT[]> => {
    const { data } = await api.get('/nfts/marketplace');
    return data;
  },

  mint: async (animalId: string): Promise<NFT> => {
    const { data } = await api.post('/nfts/mint', { animalId });
    return data;
  },

  transfer: async (nftId: string, to: string): Promise<void> => {
    await api.post(`/nfts/${nftId}/transfer`, { to });
  },
};

export const userService = {
  getProfile: async (): Promise<User> => {
    const { data } = await api.get('/user/profile');
    return data;
  },

  updateProfile: async (updates: Partial<User>): Promise<User> => {
    const { data } = await api.patch('/user/profile', updates);
    return data;
  },

  getNotifications: async (): Promise<User['notifications']> => {
    const { data } = await api.get('/user/notifications');
    return data;
  },
};