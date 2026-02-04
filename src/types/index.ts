// Types for Bitcoin Haven Finder

export type Climate = 'tropical' | 'subtropical' | 'mediterranean' | 'temperate' | 'alpine' | 'desert';
export type Urbanity = 'major-city' | 'city' | 'town' | 'island' | 'mixed';
export type CostTier = 'low' | 'medium' | 'high' | 'very-high';
export type SafetyTier = 'very-safe' | 'safe' | 'moderate' | 'developing';
export type TimezoneBand = 'americas' | 'europe-africa' | 'asia-pacific' | 'middle-east';
export type VisaRoute = 'investment' | 'entrepreneur' | 'golden-visa' | 'digital-nomad' | 'employment' | 'citizenship-by-investment' | 'territory-resident';
export type Continent = 'north-america' | 'central-america' | 'caribbean' | 'europe' | 'middle-east' | 'asia' | 'oceania';

export interface JurisdictionScores {
  taxHodl: number;        // 0-10: Tax friendliness for long-term holders
  taxTrade: number;       // 0-10: Tax friendliness for active traders/businesses
  regulation: number;     // 0-10: Regulatory clarity & Bitcoin friendliness
  safety: number;         // 0-10: Personal safety
  stability: number;      // 0-10: Political stability & press freedom
  costLiving: number;     // 0-10: Cost of living affordability (10 = very affordable)
  housing: number;        // 0-10: Housing affordability (10 = very affordable)
  education: number;      // 0-10: Education quality
  visa: number;           // 0-10: Visa/residency accessibility
  infra: number;          // 0-10: Infrastructure & internet quality
  lifestyleBase: number;  // 0-10: Base lifestyle score
  cryptoCommunity: number; // 0-10: Local Bitcoin community & adoption
}

export interface JurisdictionNotes {
  tax: string;
  visa: string;
  safety: string;
  education: string;
  cost: string;
  cryptoCommunity: string;
  infra: string;
  lifestyle: string;
}

export interface JurisdictionImage {
  url: string;
  alt: string;
  creditName: string;
  creditUrl: string;
  sourceName: string;
}

export interface SpecialRules {
  americanTaxNote?: string;
  holdingPeriodRule?: string;
  act60?: string;
  nhrProgram?: string;
  freeZone?: string;
  legalTender?: string;
  other?: string;
}

export interface Jurisdiction {
  id: string;
  name: string;
  country: string;
  region: string;
  slug: string;
  continent: Continent;
  shortBlurb: string;
  longDescription: string;
  tags: {
    climate: Climate;
    urbanity: Urbanity;
    englishFriendly: boolean;
    costTier: CostTier;
    safetyTier: SafetyTier;
    visaRoutes: VisaRoute[];
    timezoneBand: TimezoneBand;
    familyFriendly: boolean;
    bitcoinLegalTender: boolean;
    noCapitalGains: boolean;
    euMember: boolean;
  };
  scores: JurisdictionScores;
  notes: JurisdictionNotes;
  images: JurisdictionImage[];
  specialRules: SpecialRules;
  rank: number; // Base rank from research (1 = best)
  isHonorableMention: boolean;
}

// Quiz Types
export type Citizenship = 'american' | 'non-american' | 'dual';
export type TimeHorizon = '3-5y' | '5-10y' | 'forever';
export type Priority = 'low' | 'medium' | 'high';
export type BitcoinUsage = 'hodl' | 'trade' | 'business';
export type ClimatePreference = 'warm' | 'temperate' | 'cold' | 'any';
export type UrbanPreference = 'urban' | 'nature' | 'mixed' | 'any';

export interface QuizAnswers {
  citizenship: Citizenship;
  timeHorizon: TimeHorizon;
  hasKids: boolean;
  kidsAges?: string;
  schoolingPriority: Priority;
  costTolerance: Priority; // low = needs affordable, high = can afford expensive
  housingBudget: 'low' | 'medium' | 'high' | 'very-high';
  safetyTolerance: Priority; // low = needs very safe, high = flexible
  visaFlexibility: {
    canInvest: boolean;
    canWorkRemotely: boolean;
    isEntrepreneur: boolean;
  };
  climatePreference: ClimatePreference;
  urbanPreference: UrbanPreference;
  englishRequired: boolean;
  timezonePreference: TimezoneBand | 'any';
  bitcoinUsage: BitcoinUsage;
  stabilityPriority: Priority;
  dealBreakers: {
    noExtremeHeat: boolean;
    mustHaveTopSchools: boolean;
    mustBeLowTaxCrypto: boolean;
    mustBeVerySafe: boolean;
    mustBeEnglish: boolean;
    mustHaveFastInternet: boolean;
    noColdWinters: boolean;
  };
}

// Scoring Types
export type WeightPreset = 'balanced' | 'tax-efficiency' | 'family-first' | 'safety-stability' | 'custom';

export interface ScoringWeights {
  taxHodl: number;
  taxTrade: number;
  regulation: number;
  safety: number;
  stability: number;
  costLiving: number;
  housing: number;
  education: number;
  visa: number;
  infra: number;
  lifestyle: number;
  cryptoCommunity: number;
}

export interface ScoredJurisdiction extends Jurisdiction {
  finalScore: number;
  scoreBreakdown: {
    criterion: string;
    rawScore: number;
    weight: number;
    weightedScore: number;
    userMatch: boolean;
  }[];
  americanModifier: number;
  matchedPreferences: string[];
  warnings: string[];
}

// Filter Types
export interface ResultFilters {
  continent?: Continent;
  climate?: Climate;
  costTier?: CostTier;
  timezoneBand?: TimezoneBand;
  englishFriendly?: boolean;
  familyFriendly?: boolean;
}
