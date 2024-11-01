import { useQuery, useQueryClient } from 'react-query';
import { animalService } from '../services/api';
import { Animal } from '../types/system';
import { useState, useEffect } from 'react';
import { WebSocketService } from '../services/socket';

const websocket = new WebSocketService();

export const useAnimalData = (animalId?: string) => {
  const queryClient = useQueryClient();
  const [liveData, setLiveData] = useState<Animal['trackingData']>();

  const { data: animal, isLoading } = useQuery(
    ['animal', animalId],
    () => animalId ? animalService.getById(animalId) : null,
    {
      enabled: !!animalId,
    }
  );

  useEffect(() => {
    if (animalId) {
      websocket.subscribeToAnimal(animalId, (data) => {
        setLiveData(data);
        queryClient.setQueryData(['animal', animalId], (old: Animal | undefined) => 
          old ? { ...old, trackingData: data } : old
        );
      });
    }

    return () => {
      if (animalId) {
        websocket.unsubscribeFromAnimal(animalId);
      }
    };
  }, [animalId, queryClient]);

  return {
    animal,
    liveData,
    isLoading,
  };
};