export interface ConservationStats {
    totalAnimals: number;
    totalSupporters: number;
    totalContributions: number;
    activeProjects: number;
    successStories: number;
    monthlyGrowth: {
      supporters: number;
      contributions: number;
    };
  }