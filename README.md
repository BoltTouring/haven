# Bitcoin Haven Finder

A modern, responsive web app that helps Bitcoiners find the best jurisdiction (country/region) to relocate to long-term. Features personalized recommendations based on a quiz, with special logic for Americans vs non-Americans due to U.S. worldwide taxation rules.

## Features

- **Interactive Quiz**: 11-step questionnaire covering citizenship, family situation, budget, lifestyle preferences, and deal-breakers
- **Smart Scoring**: Deterministic algorithm with user-adjustable weight presets (Balanced, Tax Efficiency, Family First, Safety & Stability)
- **American-Specific Logic**: Puerto Rico strongly favored for U.S. citizens due to Act 60 benefits; other zero-tax jurisdictions appropriately penalized for Americans who can't escape federal taxation
- **11 Jurisdictions**: UAE (Dubai), Switzerland (Zug), Singapore, El Salvador, Portugal, Cayman Islands, Puerto Rico, plus honorable mentions (Malta, Germany, Hong Kong, Panama)
- **Rich Detail Pages**: Each jurisdiction includes tax info, visa routes, safety notes, crypto community info, and a photo gallery with proper attributions
- **Results Filtering**: Filter by continent, climate, cost tier, timezone, English-friendliness, and family-friendliness
- **Responsive Design**: Mobile-first approach with beautiful desktop experience
- **Persistent State**: Quiz answers saved to localStorage and can be encoded in URL for sharing

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui-style components, Radix UI primitives
- **Icons**: Lucide React
- **Charts**: Recharts
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd bitcoin-haven

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home/Landing page
│   ├── layout.tsx         # Root layout with header/footer
│   ├── quiz/              # Quiz page
│   ├── results/           # Results page
│   ├── j/[slug]/          # Jurisdiction detail pages
│   └── about/             # Methodology page
├── components/
│   ├── ui/                # Reusable UI components (Button, Card, etc.)
│   ├── quiz/              # Quiz-specific components
│   ├── results/           # Results-specific components
│   └── jurisdiction/      # Jurisdiction detail components
├── data/
│   └── jurisdictions.ts   # All jurisdiction data in one file
├── lib/
│   ├── utils.ts           # Utility functions
│   ├── scoring.ts         # Scoring algorithm
│   └── quiz-store.ts      # Quiz state persistence
└── types/
    └── index.ts           # TypeScript type definitions
```

## How to Add a New Jurisdiction

1. Open `src/data/jurisdictions.ts`
2. Add a new object to the `jurisdictions` array following this structure:

```typescript
{
  id: 'unique-id',
  name: 'Display Name',
  country: 'Country Name',
  region: 'Specific Region',
  slug: 'url-slug',
  continent: 'europe', // or: 'north-america', 'central-america', 'caribbean', 'middle-east', 'asia', 'oceania'
  rank: 12, // Position in base ranking
  isHonorableMention: true, // Set to false for top jurisdictions
  shortBlurb: 'One-line description...',
  longDescription: `Multi-paragraph description...`,
  tags: {
    climate: 'mediterranean', // tropical, subtropical, mediterranean, temperate, alpine, desert
    urbanity: 'city', // major-city, city, town, island, mixed
    englishFriendly: true,
    costTier: 'medium', // low, medium, high, very-high
    safetyTier: 'safe', // very-safe, safe, moderate, developing
    visaRoutes: ['investment', 'entrepreneur'], // investment, entrepreneur, golden-visa, digital-nomad, employment, citizenship-by-investment, territory-resident
    timezoneBand: 'europe-africa', // americas, europe-africa, middle-east, asia-pacific
    familyFriendly: true,
    bitcoinLegalTender: false,
    noCapitalGains: true,
    euMember: false,
  },
  scores: {
    taxHodl: 8,        // 0-10
    taxTrade: 7,       // 0-10
    regulation: 7,     // 0-10
    safety: 8,         // 0-10
    stability: 8,      // 0-10
    costLiving: 6,     // 0-10 (10 = very affordable)
    housing: 5,        // 0-10 (10 = very affordable)
    education: 7,      // 0-10
    visa: 7,           // 0-10
    infra: 8,          // 0-10
    lifestyleBase: 7,  // 0-10
    cryptoCommunity: 6,// 0-10
  },
  notes: {
    tax: 'Tax details...',
    visa: 'Visa/residency info...',
    safety: 'Safety notes...',
    education: 'Education quality...',
    cost: 'Cost of living details...',
    cryptoCommunity: 'Crypto scene...',
    infra: 'Infrastructure notes...',
    lifestyle: 'Lifestyle description...',
  },
  specialRules: {
    // Optional special rules
    holdingPeriodRule: 'If applicable...',
    americanTaxNote: 'For American-specific notes...',
  },
  images: [
    {
      url: 'https://images.unsplash.com/...',
      alt: 'Description',
      creditName: 'Photographer Name',
      creditUrl: 'https://unsplash.com/@photographer',
      sourceName: 'Unsplash',
    },
    // Add 6-10 images per jurisdiction
  ],
}
```

## How Scoring Works

### Base Score Calculation

Each jurisdiction has 12 criteria scored 0-10:
- Tax (HODL) - Capital gains tax for long-term holders
- Tax (Trading/Business) - Tax treatment for active trading
- Regulatory Clarity - Legal framework for crypto
- Safety - Personal safety and crime rates
- Political Stability - Government stability
- Cost of Living - Daily expense affordability (10 = very affordable)
- Housing - Real estate affordability (10 = very affordable)
- Education - School quality
- Visa Accessibility - Ease of obtaining residency
- Infrastructure - Internet, utilities, banking
- Lifestyle - Climate, culture fit
- Crypto Community - Local adoption and scene

### Weight Presets

Users can choose from presets that adjust criterion weights:

| Preset | Tax | Safety | Education | Cost | Infrastructure |
|--------|-----|--------|-----------|------|----------------|
| Balanced | 1.0 | 1.0 | 0.6 | 0.8 | 0.7 |
| Tax Efficiency | 1.5 | 0.6 | 0.3 | 0.5 | 0.5 |
| Family First | 0.6 | 1.5 | 1.5 | 0.9 | 1.0 |
| Safety & Stability | 0.5 | 1.5 | 0.8 | 0.6 | 1.0 |

### American Modifier

For U.S. citizens (and dual citizens):
- **Puerto Rico**: +25 points (Act 60 allows 0% capital gains while retaining citizenship)
- **Other zero-tax jurisdictions**: -5 points (or -3 if strong lifestyle benefits) because U.S. worldwide taxation still applies

### Deal Breakers

When users select deal-breakers, violating jurisdictions receive -3 points per violation.

### Final Formula

```
Final Score = (Σ criterion_score × weight) / (Σ weights) + american_modifier - (violations × 3)
```

## Disclaimer

**This tool is for informational purposes only and does not constitute legal, tax, or financial advice.**

Tax laws and regulations change frequently and vary based on individual circumstances. Before making any relocation or tax planning decisions:

- Consult with a qualified tax professional in your home country
- Work with an immigration attorney for visa/residency questions
- Speak with a local tax advisor in your target jurisdiction
- Verify all information independently with official sources

The authors and publishers accept no liability for any decisions made based on this information.

## Image Credits

All images are from [Unsplash](https://unsplash.com) and are used under the Unsplash License. Individual photographer credits are displayed in the image gallery modal for each jurisdiction.

## License

MIT License - See LICENSE file for details.
