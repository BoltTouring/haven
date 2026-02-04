"use client";

import type { QuizAnswers, WeightPreset, ScoringWeights } from '@/types';

// Default quiz answers
export const defaultQuizAnswers: QuizAnswers = {
  citizenship: 'non-american',
  timeHorizon: '5-10y',
  hasKids: false,
  kidsAges: '',
  schoolingPriority: 'medium',
  costTolerance: 'medium',
  housingBudget: 'medium',
  safetyTolerance: 'medium',
  visaFlexibility: {
    canInvest: false,
    canWorkRemotely: true,
    isEntrepreneur: false,
  },
  climatePreference: 'any',
  urbanPreference: 'any',
  englishRequired: false,
  timezonePreference: 'any',
  bitcoinUsage: 'hodl',
  stabilityPriority: 'medium',
  dealBreakers: {
    noExtremeHeat: false,
    mustHaveTopSchools: false,
    mustBeLowTaxCrypto: false,
    mustBeVerySafe: false,
    mustBeEnglish: false,
    mustHaveFastInternet: false,
    noColdWinters: false,
  },
};

// Save quiz answers to localStorage
export function saveQuizAnswers(answers: QuizAnswers): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('bitcoin-haven-quiz', JSON.stringify(answers));
  }
}

// Load quiz answers from localStorage
export function loadQuizAnswers(): QuizAnswers {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('bitcoin-haven-quiz');
    if (saved) {
      try {
        return JSON.parse(saved) as QuizAnswers;
      } catch {
        return defaultQuizAnswers;
      }
    }
  }
  return defaultQuizAnswers;
}

// Clear quiz answers from localStorage
export function clearQuizAnswers(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('bitcoin-haven-quiz');
  }
}

// Save selected preset and custom weights
export function saveWeightSettings(preset: WeightPreset, customWeights?: Partial<ScoringWeights>): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('bitcoin-haven-preset', preset);
    if (customWeights) {
      localStorage.setItem('bitcoin-haven-weights', JSON.stringify(customWeights));
    }
  }
}

// Load weight settings
export function loadWeightSettings(): { preset: WeightPreset; customWeights?: Partial<ScoringWeights> } {
  if (typeof window !== 'undefined') {
    const preset = localStorage.getItem('bitcoin-haven-preset') as WeightPreset || 'balanced';
    const weightsJson = localStorage.getItem('bitcoin-haven-weights');
    const customWeights = weightsJson ? JSON.parse(weightsJson) : undefined;
    return { preset, customWeights };
  }
  return { preset: 'balanced' };
}

// Encode quiz answers to URL query string
export function encodeQuizToUrl(answers: QuizAnswers): string {
  const params = new URLSearchParams();

  params.set('cit', answers.citizenship);
  params.set('th', answers.timeHorizon);
  params.set('kids', answers.hasKids ? '1' : '0');
  if (answers.kidsAges) params.set('ka', answers.kidsAges);
  params.set('sp', answers.schoolingPriority);
  params.set('ct', answers.costTolerance);
  params.set('hb', answers.housingBudget);
  params.set('st', answers.safetyTolerance);
  params.set('vi', answers.visaFlexibility.canInvest ? '1' : '0');
  params.set('vw', answers.visaFlexibility.canWorkRemotely ? '1' : '0');
  params.set('ve', answers.visaFlexibility.isEntrepreneur ? '1' : '0');
  params.set('cp', answers.climatePreference);
  params.set('up', answers.urbanPreference);
  params.set('er', answers.englishRequired ? '1' : '0');
  params.set('tz', answers.timezonePreference);
  params.set('bu', answers.bitcoinUsage);
  params.set('stb', answers.stabilityPriority);

  // Deal breakers as a bitmask
  let db = 0;
  if (answers.dealBreakers.noExtremeHeat) db |= 1;
  if (answers.dealBreakers.mustHaveTopSchools) db |= 2;
  if (answers.dealBreakers.mustBeLowTaxCrypto) db |= 4;
  if (answers.dealBreakers.mustBeVerySafe) db |= 8;
  if (answers.dealBreakers.mustBeEnglish) db |= 16;
  if (answers.dealBreakers.mustHaveFastInternet) db |= 32;
  if (answers.dealBreakers.noColdWinters) db |= 64;
  params.set('db', db.toString());

  return params.toString();
}

// Decode quiz answers from URL query string
export function decodeQuizFromUrl(search: string): QuizAnswers | null {
  const params = new URLSearchParams(search);

  if (!params.has('cit')) return null;

  const db = parseInt(params.get('db') || '0', 10);

  return {
    citizenship: (params.get('cit') || 'non-american') as QuizAnswers['citizenship'],
    timeHorizon: (params.get('th') || '5-10y') as QuizAnswers['timeHorizon'],
    hasKids: params.get('kids') === '1',
    kidsAges: params.get('ka') || '',
    schoolingPriority: (params.get('sp') || 'medium') as QuizAnswers['schoolingPriority'],
    costTolerance: (params.get('ct') || 'medium') as QuizAnswers['costTolerance'],
    housingBudget: (params.get('hb') || 'medium') as QuizAnswers['housingBudget'],
    safetyTolerance: (params.get('st') || 'medium') as QuizAnswers['safetyTolerance'],
    visaFlexibility: {
      canInvest: params.get('vi') === '1',
      canWorkRemotely: params.get('vw') === '1',
      isEntrepreneur: params.get('ve') === '1',
    },
    climatePreference: (params.get('cp') || 'any') as QuizAnswers['climatePreference'],
    urbanPreference: (params.get('up') || 'any') as QuizAnswers['urbanPreference'],
    englishRequired: params.get('er') === '1',
    timezonePreference: (params.get('tz') || 'any') as QuizAnswers['timezonePreference'],
    bitcoinUsage: (params.get('bu') || 'hodl') as QuizAnswers['bitcoinUsage'],
    stabilityPriority: (params.get('stb') || 'medium') as QuizAnswers['stabilityPriority'],
    dealBreakers: {
      noExtremeHeat: (db & 1) !== 0,
      mustHaveTopSchools: (db & 2) !== 0,
      mustBeLowTaxCrypto: (db & 4) !== 0,
      mustBeVerySafe: (db & 8) !== 0,
      mustBeEnglish: (db & 16) !== 0,
      mustHaveFastInternet: (db & 32) !== 0,
      noColdWinters: (db & 64) !== 0,
    },
  };
}
