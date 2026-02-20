export interface SectorProfile {
  key: string;
  labels: string[];
  positioning: string;
  offerStructure: string;
  priorityChannels: string[];
  pricingStrategy: string;
  storytellingAngle: string;
  clientSizeAdaptation: {
    small: string;
    medium: string;
    large: string;
  };
}
