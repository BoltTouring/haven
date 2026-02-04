import type {
  Jurisdiction,
  QuizAnswers,
  ScoringWeights,
  ScoredJurisdiction,
  WeightPreset
} from '@/types';

// Weight presets
export const weightPresets: Record<WeightPreset, ScoringWeights> = {
  balanced: {
    taxHodl: 1.0,
    taxTrade: 0.8,
    regulation: 0.9,
    safety: 1.0,
    stability: 0.9,
    costLiving: 0.8,
    housing: 0.7,
    education: 0.6,
    visa: 0.8,
    infra: 0.7,
    lifestyle: 0.7,
    cryptoCommunity: 0.6,
  },
  'tax-efficiency': {
    taxHodl: 1.5,
    taxTrade: 1.3,
    regulation: 1.0,
    safety: 0.6,
    stability: 0.5,
    costLiving: 0.5,
    housing: 0.4,
    education: 0.3,
    visa: 0.7,
    infra: 0.5,
    lifestyle: 0.4,
    cryptoCommunity: 0.6,
  },
  'family-first': {
    taxHodl: 0.6,
    taxTrade: 0.4,
    regulation: 0.6,
    safety: 1.5,
    stability: 1.3,
    costLiving: 0.9,
    housing: 1.0,
    education: 1.5,
    visa: 0.8,
    infra: 1.0,
    lifestyle: 1.0,
    cryptoCommunity: 0.3,
  },
  'safety-stability': {
    taxHodl: 0.5,
    taxTrade: 0.4,
    regulation: 0.8,
    safety: 1.5,
    stability: 1.5,
    costLiving: 0.6,
    housing: 0.5,
    education: 0.8,
    visa: 0.7,
    infra: 1.0,
    lifestyle: 0.8,
    cryptoCommunity: 0.4,
  },
  custom: {
    taxHodl: 1.0,
    taxTrade: 1.0,
    regulation: 1.0,
    safety: 1.0,
    stability: 1.0,
    costLiving: 1.0,
    housing: 1.0,
    education: 1.0,
    visa: 1.0,
    infra: 1.0,
    lifestyle: 1.0,
    cryptoCommunity: 1.0,
  },
};

// Adjust weights based on quiz answers
function adjustWeightsForUser(
  baseWeights: ScoringWeights,
  answers: QuizAnswers
): ScoringWeights {
  const weights = { ...baseWeights };

  // Bitcoin usage affects tax weights
  if (answers.bitcoinUsage === 'hodl') {
    weights.taxHodl *= 1.3;
    weights.taxTrade *= 0.5;
  } else if (answers.bitcoinUsage === 'trade') {
    weights.taxHodl *= 0.8;
    weights.taxTrade *= 1.3;
  } else if (answers.bitcoinUsage === 'business') {
    weights.taxTrade *= 1.4;
    weights.regulation *= 1.3;
    weights.cryptoCommunity *= 1.2;
  }

  // Family considerations
  if (answers.hasKids) {
    weights.education *= 1.5;
    weights.safety *= 1.3;
    weights.infra *= 1.2;
  }

  // Schooling priority
  if (answers.schoolingPriority === 'high') {
    weights.education *= 1.5;
  } else if (answers.schoolingPriority === 'low') {
    weights.education *= 0.5;
  }

  // Cost tolerance
  if (answers.costTolerance === 'low') {
    weights.costLiving *= 1.5;
    weights.housing *= 1.4;
  } else if (answers.costTolerance === 'high') {
    weights.costLiving *= 0.5;
    weights.housing *= 0.5;
  }

  // Safety priority
  if (answers.safetyTolerance === 'low') {
    weights.safety *= 1.5;
    weights.stability *= 1.3;
  } else if (answers.safetyTolerance === 'high') {
    weights.safety *= 0.7;
  }

  // Stability priority
  if (answers.stabilityPriority === 'high') {
    weights.stability *= 1.4;
    weights.regulation *= 1.2;
  } else if (answers.stabilityPriority === 'low') {
    weights.stability *= 0.6;
  }

  // Infrastructure for remote workers
  if (answers.visaFlexibility.canWorkRemotely) {
    weights.infra *= 1.3;
  }

  return weights;
}

// Calculate lifestyle match score
function calculateLifestyleMatch(
  jurisdiction: Jurisdiction,
  answers: QuizAnswers
): { score: number; matches: string[] } {
  let score = jurisdiction.scores.lifestyleBase;
  const matches: string[] = [];

  // Climate matching
  if (answers.climatePreference !== 'any') {
    const climateMatch = {
      warm: ['tropical', 'subtropical', 'desert', 'mediterranean'],
      temperate: ['temperate', 'mediterranean'],
      cold: ['alpine', 'temperate'],
    };

    if (climateMatch[answers.climatePreference]?.includes(jurisdiction.tags.climate)) {
      score += 1;
      matches.push(`${jurisdiction.tags.climate} climate matches preference`);
    } else {
      score -= 1;
    }
  }

  // Urban preference
  if (answers.urbanPreference !== 'any') {
    const urbanMatch = {
      urban: ['major-city', 'city'],
      nature: ['town', 'island'],
      mixed: ['mixed', 'city'],
    };

    if (urbanMatch[answers.urbanPreference]?.includes(jurisdiction.tags.urbanity)) {
      score += 0.5;
      matches.push(`${jurisdiction.tags.urbanity} setting matches preference`);
    }
  }

  // English requirement
  if (answers.englishRequired && jurisdiction.tags.englishFriendly) {
    score += 1;
    matches.push('English-friendly environment');
  } else if (answers.englishRequired && !jurisdiction.tags.englishFriendly) {
    score -= 2;
  }

  // Timezone preference
  if (answers.timezonePreference !== 'any' &&
      answers.timezonePreference === jurisdiction.tags.timezoneBand) {
    score += 0.5;
    matches.push('Timezone matches preference');
  }

  // Family-friendly bonus
  if (answers.hasKids && jurisdiction.tags.familyFriendly) {
    score += 1;
    matches.push('Family-friendly destination');
  }

  return { score: Math.max(0, Math.min(10, score)), matches };
}

// Calculate American-specific modifier
function calculateAmericanModifier(
  jurisdiction: Jurisdiction,
  answers: QuizAnswers
): { modifier: number; warnings: string[] } {
  const warnings: string[] = [];

  // Non-Americans don't get any modifier
  if (answers.citizenship === 'non-american') {
    return { modifier: 0, warnings: [] };
  }

  // Americans (including dual citizens treated as American)
  let modifier = 0;

  // Puerto Rico gets a massive boost for Americans
  if (jurisdiction.id === 'puerto-rico') {
    modifier = 25; // Huge boost
    warnings.push('🇺🇸 Act 60 allows 0% capital gains for US citizens who become bona fide residents');
    return { modifier, warnings };
  }

  // For all other jurisdictions, Americans face worldwide taxation
  if (jurisdiction.tags.noCapitalGains && jurisdiction.id !== 'puerto-rico') {
    // Zero-tax jurisdictions don't eliminate US tax obligations
    modifier = -5;
    warnings.push('⚠️ US citizens are taxed on worldwide income regardless of residence');
    warnings.push('Moving here won\'t eliminate federal tax on Bitcoin gains');

    // Slightly less penalty for jurisdictions with other strong benefits
    if (jurisdiction.scores.safety >= 8 || jurisdiction.scores.education >= 8) {
      modifier = -3;
      warnings.push('However, strong lifestyle benefits may still make this attractive');
    }
  }

  // Germany/Portugal holding period rules can still benefit Americans
  // (reduces local tax, even if US tax still applies)
  if (jurisdiction.specialRules.holdingPeriodRule) {
    modifier += 1;
    warnings.push('Holding period rules may provide some local tax benefits');
  }

  return { modifier, warnings };
}

// Check deal breakers
function checkDealBreakers(
  jurisdiction: Jurisdiction,
  answers: QuizAnswers
): string[] {
  const violations: string[] = [];

  if (answers.dealBreakers.noExtremeHeat) {
    if (['tropical', 'desert'].includes(jurisdiction.tags.climate)) {
      violations.push('Climate may be too hot');
    }
  }

  if (answers.dealBreakers.mustHaveTopSchools) {
    if (jurisdiction.scores.education < 7) {
      violations.push('Education quality below top-tier');
    }
  }

  if (answers.dealBreakers.mustBeLowTaxCrypto) {
    if (jurisdiction.scores.taxHodl < 8) {
      violations.push('Bitcoin taxation not optimal');
    }
  }

  if (answers.dealBreakers.mustBeVerySafe) {
    if (jurisdiction.tags.safetyTier !== 'very-safe') {
      violations.push('Safety level below "very safe"');
    }
  }

  if (answers.dealBreakers.mustBeEnglish) {
    if (!jurisdiction.tags.englishFriendly) {
      violations.push('Not primarily English-speaking');
    }
  }

  if (answers.dealBreakers.mustHaveFastInternet) {
    if (jurisdiction.scores.infra < 7) {
      violations.push('Infrastructure/internet quality concerns');
    }
  }

  if (answers.dealBreakers.noColdWinters) {
    if (['alpine', 'temperate'].includes(jurisdiction.tags.climate)) {
      violations.push('May have cold winters');
    }
  }

  return violations;
}

// Calculate visa accessibility score adjustment
function calculateVisaBonus(
  jurisdiction: Jurisdiction,
  answers: QuizAnswers
): number {
  let bonus = 0;
  const routes = jurisdiction.tags.visaRoutes;

  if (answers.visaFlexibility.canInvest &&
      (routes.includes('investment') || routes.includes('golden-visa') || routes.includes('citizenship-by-investment'))) {
    bonus += 1;
  }

  if (answers.visaFlexibility.isEntrepreneur && routes.includes('entrepreneur')) {
    bonus += 1;
  }

  if (answers.visaFlexibility.canWorkRemotely && routes.includes('digital-nomad')) {
    bonus += 1;
  }

  // US citizens have automatic access to Puerto Rico
  if ((answers.citizenship === 'american' || answers.citizenship === 'dual') &&
      jurisdiction.id === 'puerto-rico') {
    bonus += 2; // No visa needed at all
  }

  return bonus;
}

// Main scoring function
export function scoreJurisdictions(
  jurisdictions: Jurisdiction[],
  answers: QuizAnswers,
  preset: WeightPreset = 'balanced',
  customWeights?: Partial<ScoringWeights>
): ScoredJurisdiction[] {
  // Get base weights from preset
  let weights = { ...weightPresets[preset] };

  // Apply custom weights if provided
  if (customWeights) {
    weights = { ...weights, ...customWeights };
  }

  // Adjust weights based on user answers
  weights = adjustWeightsForUser(weights, answers);

  // Score each jurisdiction
  const scored = jurisdictions.map(jurisdiction => {
    const scoreBreakdown: ScoredJurisdiction['scoreBreakdown'] = [];
    let totalWeightedScore = 0;
    let totalWeight = 0;

    // Calculate lifestyle match
    const { score: lifestyleScore, matches: lifestyleMatches } =
      calculateLifestyleMatch(jurisdiction, answers);

    // Calculate American modifier
    const { modifier: americanModifier, warnings: americanWarnings } =
      calculateAmericanModifier(jurisdiction, answers);

    // Check deal breakers
    const dealBreakerViolations = checkDealBreakers(jurisdiction, answers);

    // Calculate visa bonus
    const visaBonus = calculateVisaBonus(jurisdiction, answers);

    // Score criteria
    const criteria = [
      {
        key: 'taxHodl',
        label: 'Tax (HODL)',
        score: jurisdiction.scores.taxHodl,
        userMatch: answers.bitcoinUsage === 'hodl' && jurisdiction.scores.taxHodl >= 8
      },
      {
        key: 'taxTrade',
        label: 'Tax (Trading/Business)',
        score: jurisdiction.scores.taxTrade,
        userMatch: answers.bitcoinUsage !== 'hodl' && jurisdiction.scores.taxTrade >= 8
      },
      {
        key: 'regulation',
        label: 'Regulatory Clarity',
        score: jurisdiction.scores.regulation,
        userMatch: jurisdiction.scores.regulation >= 8
      },
      {
        key: 'safety',
        label: 'Safety',
        score: jurisdiction.scores.safety,
        userMatch: answers.safetyTolerance === 'low' && jurisdiction.scores.safety >= 8
      },
      {
        key: 'stability',
        label: 'Political Stability',
        score: jurisdiction.scores.stability,
        userMatch: answers.stabilityPriority === 'high' && jurisdiction.scores.stability >= 8
      },
      {
        key: 'costLiving',
        label: 'Cost of Living',
        score: jurisdiction.scores.costLiving,
        userMatch: answers.costTolerance === 'low' && jurisdiction.scores.costLiving >= 7
      },
      {
        key: 'housing',
        label: 'Housing Affordability',
        score: jurisdiction.scores.housing,
        userMatch: answers.housingBudget !== 'very-high' && jurisdiction.scores.housing >= 7
      },
      {
        key: 'education',
        label: 'Education Quality',
        score: jurisdiction.scores.education,
        userMatch: answers.hasKids && jurisdiction.scores.education >= 8
      },
      {
        key: 'visa',
        label: 'Visa Accessibility',
        score: Math.min(10, jurisdiction.scores.visa + visaBonus),
        userMatch: jurisdiction.scores.visa + visaBonus >= 8
      },
      {
        key: 'infra',
        label: 'Infrastructure',
        score: jurisdiction.scores.infra,
        userMatch: answers.visaFlexibility.canWorkRemotely && jurisdiction.scores.infra >= 8
      },
      {
        key: 'lifestyle',
        label: 'Lifestyle Match',
        score: lifestyleScore,
        userMatch: lifestyleScore >= 7
      },
      {
        key: 'cryptoCommunity',
        label: 'Bitcoin Community',
        score: jurisdiction.scores.cryptoCommunity,
        userMatch: answers.bitcoinUsage === 'business' && jurisdiction.scores.cryptoCommunity >= 7
      },
    ];

    criteria.forEach(c => {
      const weight = weights[c.key as keyof ScoringWeights];
      const weightedScore = c.score * weight;
      totalWeightedScore += weightedScore;
      totalWeight += weight;

      scoreBreakdown.push({
        criterion: c.label,
        rawScore: c.score,
        weight,
        weightedScore,
        userMatch: c.userMatch,
      });
    });

    // Calculate base score (weighted average)
    let finalScore = totalWeight > 0 ? (totalWeightedScore / totalWeight) : 0;

    // Apply American modifier
    finalScore += americanModifier;

    // Apply deal breaker penalty (harsh but not disqualifying)
    if (dealBreakerViolations.length > 0) {
      finalScore -= dealBreakerViolations.length * 3;
    }

    // Compile matched preferences
    const matchedPreferences = [
      ...lifestyleMatches,
      ...scoreBreakdown.filter(s => s.userMatch).map(s => `Strong ${s.criterion.toLowerCase()}`),
    ];

    // Compile all warnings
    const warnings = [
      ...americanWarnings,
      ...dealBreakerViolations,
    ];

    return {
      ...jurisdiction,
      finalScore: Math.max(0, finalScore),
      scoreBreakdown,
      americanModifier,
      matchedPreferences,
      warnings,
    };
  });

  // Sort by final score (descending)
  return scored.sort((a, b) => b.finalScore - a.finalScore);
}

// Get recommended preset based on answers
export function getRecommendedPreset(answers: QuizAnswers): WeightPreset {
  // Count priorities
  const taxFocus = answers.bitcoinUsage === 'business' || answers.bitcoinUsage === 'trade';
  const familyFocus = answers.hasKids && answers.schoolingPriority === 'high';
  const safetyFocus = answers.safetyTolerance === 'low' && answers.stabilityPriority === 'high';

  if (taxFocus && !familyFocus && !safetyFocus) return 'tax-efficiency';
  if (familyFocus) return 'family-first';
  if (safetyFocus && !familyFocus) return 'safety-stability';
  return 'balanced';
}
