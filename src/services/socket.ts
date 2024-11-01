import io, { Socket } from 'socket.io-client';
import { Animal } from '../types/system';
import { config } from './config';
 
export class WebSocketService {
  private socket: Socket;
  private connected: boolean = false;

  constructor() {
    this.socket = io(config.apiBaseUrl);
    this.setupListeners();
  }

  private setupListeners() {
    this.socket.on('connect', () => {
      this.connected = true;
      console.log('WebSocket connected');
    });

    this.socket.on('disconnect', () => {
      this.connected = false;
      console.log('WebSocket disconnected');
    });
  }

  subscribeToAnimal(animalId: string, callback: (data: Animal['trackingData']) => void) {
    this.socket.on(`animal:${animalId}`, callback);
    this.socket.emit('subscribe', { animalId });
  }

  unsubscribeFromAnimal(animalId: string) {
    this.socket.off(`animal:${animalId}`);
    this.socket.emit('unsubscribe', { animalId });
  }

  subscribeToAlerts(callback: (alert: unknown) => void) {
    this.socket.on('alerts', callback);
  }

  disconnect() {
    this.socket.disconnect();
  }
}