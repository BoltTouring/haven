import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatScore(score: number): string {
  return score.toFixed(1);
}

export function getScoreColor(score: number): string {
  if (score >= 8) return 'text-green-600';
  if (score >= 6) return 'text-yellow-600';
  if (score >= 4) return 'text-orange-600';
  return 'text-red-600';
}

export function getScoreBgColor(score: number): string {
  if (score >= 8) return 'bg-green-500';
  if (score >= 6) return 'bg-yellow-500';
  if (score >= 4) return 'bg-orange-500';
  return 'bg-red-500';
}

export function getTierLabel(tier: string): string {
  const labels: Record<string, string> = {
    'low': 'Budget-Friendly',
    'medium': 'Moderate',
    'high': 'Premium',
    'very-high': 'Luxury',
    'very-safe': 'Very Safe',
    'safe': 'Safe',
    'moderate': 'Moderate',
    'developing': 'Developing',
  };
  return labels[tier] || tier;
}

export function getContinentLabel(continent: string): string {
  const labels: Record<string, string> = {
    'north-america': 'North America',
    'central-america': 'Central America',
    'caribbean': 'Caribbean',
    'europe': 'Europe',
    'middle-east': 'Middle East',
    'asia': 'Asia',
    'oceania': 'Oceania',
  };
  return labels[continent] || continent;
}

export function getClimateLabel(climate: string): string {
  const labels: Record<string, string> = {
    'tropical': 'Tropical',
    'subtropical': 'Subtropical',
    'mediterranean': 'Mediterranean',
    'temperate': 'Temperate',
    'alpine': 'Alpine',
    'desert': 'Desert',
  };
  return labels[climate] || climate;
}

export function getTimezoneLabel(tz: string): string {
  const labels: Record<string, string> = {
    'americas': 'Americas (UTC-8 to UTC-3)',
    'europe-africa': 'Europe/Africa (UTC-1 to UTC+3)',
    'middle-east': 'Middle East (UTC+3 to UTC+4)',
    'asia-pacific': 'Asia/Pacific (UTC+5 to UTC+12)',
    'any': 'Any Timezone',
  };
  return labels[tz] || tz;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
