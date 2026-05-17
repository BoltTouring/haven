"use client";

import type { QuizAnswers, WeightPreset, ScoringWeights } from '@/types';

const LEGACY_STORAGE_KEYS = [
  'bitcoin-haven-quiz',
  'bitcoin-haven-preset',
  'bitcoin-haven-weights',
];

let volatileQuizAnswers: QuizAnswers | null = null;

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

// Keep quiz answers in client memory only. They are intentionally not written
// to localStorage, sessionStorage, cookies, URLs, or a backend.
export function saveQuizAnswers(answers: QuizAnswers): void {
  volatileQuizAnswers = answers;
}

// Load quiz answers from volatile client memory only.
export function loadQuizAnswers(): QuizAnswers | null {
  return volatileQuizAnswers;
}

export function hasQuizAnswers(): boolean {
  return volatileQuizAnswers !== null;
}

// Clear in-memory answers.
export function clearQuizAnswers(): void {
  volatileQuizAnswers = null;
}

// Remove data stored by older versions of the app. This only deletes legacy
// local browser data and does not store new information.
export function clearLegacyStoredQuizData(): void {
  if (typeof window === 'undefined') return;

  for (const key of LEGACY_STORAGE_KEYS) {
    try {
      window.localStorage.removeItem(key);
      window.sessionStorage.removeItem(key);
    } catch {
      // Storage can be unavailable in private or locked-down browser contexts.
    }
  }
}

// Weight settings are also intentionally memoryless.
export function saveWeightSettings(preset: WeightPreset, customWeights?: Partial<ScoringWeights>): void {
  void preset;
  void customWeights;
}

// Load weight settings without persistence.
export function loadWeightSettings(): { preset: WeightPreset; customWeights?: Partial<ScoringWeights> } {
  return { preset: 'balanced' };
}
