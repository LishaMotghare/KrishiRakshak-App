export type Language = 'mr' | 'hi' | 'en';

export interface CropDiagnosis {
  id?: string;
  cropName: string;
  cropKey: string;
  diseaseName: string;
  scientificName?: string;
  confidence: number;
  severity: 'कमी' | 'मध्यम' | 'गंभीर' | 'Low' | 'Medium' | 'High';
  symptoms: string[];
  causes: string;
  organicSolution: string;
  chemicalSolution: string;
  pumpDosage: string;
  prevention: string;
  estimatedCost?: string;
  image?: string;
  date?: string;
}

export interface WeatherData {
  cityKey: string;
  cityName: Record<Language, string>;
  region: Record<Language, string>;
  temp: number;
  humidity: number;
  windSpeed: number;
  rainChance: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'partlyCloudy';
  sprayStatus: 'safe' | 'caution' | 'unsafe';
  sprayAdvice: Record<Language, string>;
}

export interface MandiRate {
  cropName: Record<Language, string>;
  market: Record<Language, string>;
  minPrice: number;
  maxPrice: number;
  modalPrice: number;
  trend: 'up' | 'down' | 'stable';
  unit: string;
}

export interface SchemeInfo {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  subsidy: Record<Language, string>;
  eligibility: Record<Language, string>;
  documents: Record<Language, string[]>;
  link: string;
  badge: Record<Language, string>;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}
