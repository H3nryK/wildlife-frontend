export interface Animal {
  id: string;
  name: string;
  species: string;
  age: number;
  health: number;
  location: {
    lat: number;
    lng: number;
  };
  description: string;
  imageUrl: string;
  supporters: number;
  lastUpdate: string;
  conservationStatus: 'Endangered' | 'Vulnerable' | 'Threatened' | 'Stable';
  trackingData: {
    deviceId: string;
    batteryLevel: number;
    lastPing: string;
  };
}