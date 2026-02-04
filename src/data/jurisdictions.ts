import type { Jurisdiction } from '@/types';

export const jurisdictions: Jurisdiction[] = [
  // ============================================
  // #1 - UNITED ARAB EMIRATES (DUBAI)
  // ============================================
  {
    id: 'uae-dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Dubai',
    slug: 'uae-dubai',
    continent: 'middle-east',
    rank: 1,
    isHonorableMention: false,
    shortBlurb: 'Modern tax-free Bitcoin hub in the desert with luxury lifestyle and zero personal income tax.',
    longDescription: `The UAE – especially Dubai – has catapulted to the top of Bitcoin-friendly lists in recent years. Zero personal income tax (no tax on Bitcoin gains) and a proactive government approach to blockchain have made it a magnet for Bitcoin wealth. Dubai and Abu Dhabi offer special economic zones and licensing regimes (e.g. Dubai's VARA regulator in the DIFC free zone) to foster the industry.

Beyond taxes, the lifestyle is very appealing: ultra-modern infrastructure, luxury amenities, and a very safe environment. The UAE consistently ranks among the world's safest nations. Many expatriates speak English, and there's an established community of Bitcoin entrepreneurs and influencers now in Dubai.

Drawbacks: The cost of living is high – housing in upscale areas, international school fees, etc., are expensive. Culturally, one must respect local laws (which are conservative by Western standards). Summers are extremely hot (thankfully, air conditioning is everywhere).`,
    tags: {
      climate: 'desert',
      urbanity: 'major-city',
      englishFriendly: true,
      costTier: 'very-high',
      safetyTier: 'very-safe',
      visaRoutes: ['investment', 'entrepreneur', 'golden-visa', 'employment'],
      timezoneBand: 'middle-east',
      familyFriendly: true,
      bitcoinLegalTender: false,
      noCapitalGains: true,
      euMember: false,
    },
    scores: {
      taxHodl: 10,
      taxTrade: 10,
      regulation: 9,
      safety: 9,
      stability: 8,
      costLiving: 3,
      housing: 3,
      education: 8,
      visa: 8,
      infra: 10,
      lifestyleBase: 8,
      cryptoCommunity: 9,
    },
    notes: {
      tax: 'Zero personal income tax – no tax on Bitcoin gains, dividends, or capital. One of the world\'s most tax-friendly jurisdictions for Bitcoiners.',
      visa: 'UAE offers investor visas for property or business investment, and a "Golden Visa" for entrepreneurs/investors. Setting up a company in a free zone is a common route to residency.',
      safety: 'Consistently ranks among the world\'s safest nations with very low crime rates and strict law enforcement.',
      education: 'Excellent international schools available, though fees are expensive. Good options for K-12 and higher education.',
      cost: 'High cost of living – housing in upscale areas, international school fees, and luxury lifestyle come at a premium.',
      cryptoCommunity: 'Thriving Bitcoin scene with over 1,000 Bitcoin companies operating in Dubai\'s crypto-friendly free zones. Major conferences and large expat community.',
      infra: 'World-class infrastructure: ultra-modern cities, excellent internet, reliable power, and top-tier banking services.',
      lifestyle: 'Luxury amenities, vibrant expat community, excellent dining and entertainment. Summers are extremely hot but AC is ubiquitous.',
    },
    specialRules: {
      freeZone: 'Dubai\'s VARA regulator in the DIFC free zone provides a clear licensing regime for Bitcoin businesses.',
      other: 'Cultural considerations: local laws are conservative by Western standards. Respect for local customs is expected.',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200', alt: 'Dubai skyline with Burj Khalifa', creditName: 'David Rodrigo', creditUrl: 'https://unsplash.com/@davidrodrigoo', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200', alt: 'Dubai Marina at night', creditName: 'Nick Fewings', creditUrl: 'https://unsplash.com/@jannerboy62', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200', alt: 'Dubai Palm Jumeirah aerial view', creditName: 'Christoph Schulz', creditUrl: 'https://unsplash.com/@christophschulz', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200', alt: 'Dubai Downtown business district', creditName: 'ZQ Lee', creditUrl: 'https://unsplash.com/@zqlee', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=1200', alt: 'Dubai Desert Safari', creditName: 'Sven Scheuermeier', creditUrl: 'https://unsplash.com/@sveninho', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1200', alt: 'Dubai Mall interior', creditName: 'Alexandr Bormotin', creditUrl: 'https://unsplash.com/@bormot', sourceName: 'Unsplash' },
    ],
  },

  // ============================================
  // #2 - SWITZERLAND (ZUG)
  // ============================================
  {
    id: 'switzerland-zug',
    name: 'Zug (Crypto Valley)',
    country: 'Switzerland',
    region: 'Canton of Zug',
    slug: 'switzerland-zug',
    continent: 'europe',
    rank: 2,
    isHonorableMention: false,
    shortBlurb: 'Alpine quality of life meets Bitcoin innovation in the famous "Crypto Valley" with tax-free capital gains.',
    longDescription: `Switzerland is often seen as the gold standard for Bitcoin-friendly living. The canton of Zug, nicknamed "Crypto Valley," hosts over 1,100 blockchain companies and even accepts Bitcoin for some government services. In 2023, CoinDesk ranked Zug the #1 global crypto hub, citing its "regulatory clarity, crypto-friendly banks and a lively crypto job market."

For individuals, Swiss tax policy is very favorable: personal capital gains are tax-free in most cases (as long as you're not classified as a professional trader) and Bitcoin is treated as an asset for wealth tax. This means a long-term Bitcoin HODLer in Switzerland might pay no tax on their Bitcoin gains.

The regulatory environment is clear and supportive – FINMA (the Swiss regulator) provides consistent rules with no sudden shocks, guidelines for ICOs, exchanges, etc., and some towns accept Bitcoin for tax payments. Quality of life is extraordinary: Switzerland is extremely safe, politically stable, and boasts clean cities, efficient public transport, and stunning nature.

Drawbacks: The cost of living is extremely high. Zurich, Geneva, Zug – all are among the priciest cities globally. Obtaining residency can be tricky for non-EU citizens unless you have a job or significant assets. Wealthy individuals sometimes use lump-sum taxation schemes to become Swiss residents.`,
    tags: {
      climate: 'alpine',
      urbanity: 'city',
      englishFriendly: true,
      costTier: 'very-high',
      safetyTier: 'very-safe',
      visaRoutes: ['investment', 'entrepreneur', 'employment'],
      timezoneBand: 'europe-africa',
      familyFriendly: true,
      bitcoinLegalTender: false,
      noCapitalGains: true,
      euMember: false,
    },
    scores: {
      taxHodl: 10,
      taxTrade: 7,
      regulation: 10,
      safety: 10,
      stability: 10,
      costLiving: 2,
      housing: 2,
      education: 10,
      visa: 5,
      infra: 10,
      lifestyleBase: 9,
      cryptoCommunity: 10,
    },
    notes: {
      tax: 'Personal capital gains are tax-free for non-professional traders. Bitcoin is subject to wealth tax. Professional traders may face income tax on gains.',
      visa: 'Obtaining residency can be tricky for non-EU citizens. Typically requires a job offer or significant investment. Lump-sum taxation available for the wealthy.',
      safety: 'Extremely safe – one of the world\'s most peaceful countries with very low crime and excellent rule of law.',
      education: 'World-class education system. Top-ranked universities and excellent international schools. Among the highest education indices globally.',
      cost: 'Extremely high cost of living. Zurich and Zug are among the world\'s most expensive cities. Premium prices for everything.',
      cryptoCommunity: 'The epicenter of Bitcoin in Europe. Over 1,100 blockchain companies in Zug alone. Ranked #1 global crypto hub by CoinDesk in 2023.',
      infra: 'World-class infrastructure: clean cities, efficient public transport, excellent internet, and the famous Swiss precision.',
      lifestyle: 'Stunning Alpine scenery, outdoor activities, high quality of life. Clean air, beautiful lakes, and excellent work-life balance.',
    },
    specialRules: {
      holdingPeriodRule: 'No specific holding period required – capital gains are generally tax-free for individual investors not classified as professional traders.',
      other: 'Some municipalities accept Bitcoin for tax payments. FINMA provides clear regulatory guidelines for Bitcoin businesses.',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1200', alt: 'Zug lakefront with mountains', creditName: 'Ricardo Gomez Angel', creditUrl: 'https://unsplash.com/@rgaleriacom', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200', alt: 'Swiss Alps panorama', creditName: 'Sven Scheuermeier', creditUrl: 'https://unsplash.com/@sveninho', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1504218727796-db522606b16f?w=1200', alt: 'Zurich old town', creditName: 'Henrique Ferreira', creditUrl: 'https://unsplash.com/@rickyrish', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1559128010-7c1ad6c27e1e?w=1200', alt: 'Swiss mountain village', creditName: 'Gabriel Garcia Marengo', creditUrl: 'https://unsplash.com/@gbrsm', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200', alt: 'Swiss Alps in winter', creditName: 'Omer Sattaf', creditUrl: 'https://unsplash.com/@omersattaf', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=1200', alt: 'Lake Lucerne Switzerland', creditName: 'Patrick Robert Doyle', creditUrl: 'https://unsplash.com/@teapowered', sourceName: 'Unsplash' },
    ],
  },

  // ============================================
  // #3 - SINGAPORE
  // ============================================
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    region: 'Singapore',
    slug: 'singapore',
    continent: 'asia',
    rank: 3,
    isHonorableMention: false,
    shortBlurb: 'Global financial haven with zero capital gains tax, world-class infrastructure, and Asia\'s Bitcoin hub.',
    longDescription: `Singapore is a top choice for Bitcoiners who value a metropolitan lifestyle and robust financial services. This city-state has zero capital gains tax, meaning individuals pay no tax on Bitcoin profits or stock gains. It's no surprise many Bitcoin funds and wealthy investors base themselves in Singapore for this reason.

The Monetary Authority of Singapore (MAS) provides a clear regulatory framework, licensing Bitcoin exchanges and fintech under the Payment Services Act. Singapore combines this with a high degree of innovation and tech adoption, making it a leading Bitcoin hub in Asia.

Quality of life: The country is known for its cleanliness, efficiency, and safety (among the safest in the world). English is an official language, making it easy for foreigners. Schools and universities are top-notch, healthcare is excellent, and infrastructure is ultra-modern.

Drawbacks: Cost of living is very high – Singapore often ties with Hong Kong, New York, or Zurich as the most expensive city. While there's no cap-gains tax, business income from Bitcoin could be taxable. The government's stance is paternalistic with strict laws on behavior.`,
    tags: {
      climate: 'tropical',
      urbanity: 'major-city',
      englishFriendly: true,
      costTier: 'very-high',
      safetyTier: 'very-safe',
      visaRoutes: ['investment', 'entrepreneur', 'employment'],
      timezoneBand: 'asia-pacific',
      familyFriendly: true,
      bitcoinLegalTender: false,
      noCapitalGains: true,
      euMember: false,
    },
    scores: {
      taxHodl: 10,
      taxTrade: 8,
      regulation: 9,
      safety: 10,
      stability: 10,
      costLiving: 2,
      housing: 2,
      education: 10,
      visa: 6,
      infra: 10,
      lifestyleBase: 8,
      cryptoCommunity: 9,
    },
    notes: {
      tax: 'Zero capital gains tax – individuals pay no tax on Bitcoin profits. However, if trading is your business or you receive Bitcoin as salary, that may be taxable at normal income rates.',
      visa: 'Investor/entrepreneur visas available but require significant capital or a strong business plan. Employment passes for skilled workers. Not as easy as some jurisdictions.',
      safety: 'Among the safest cities in the world with extremely low crime rates. Strict law enforcement ensures security.',
      education: 'Top-tier education system – Singapore leads global student rankings. Excellent international schools and universities.',
      cost: 'Very high cost of living – often ranked with Hong Kong and Zurich as the world\'s most expensive. Housing, cars, and most goods come at a premium.',
      cryptoCommunity: 'Leading Bitcoin hub in Asia. Major exchanges, fintech startups, and vibrant community. An estimated 43% of young adults in Singapore own crypto.',
      infra: 'Ultra-modern infrastructure: world-class internet, efficient public transport, reliable utilities, and excellent banking services.',
      lifestyle: 'Clean, efficient city with excellent dining, shopping, and cultural options. Gateway to Asia. Tropical climate year-round.',
    },
    specialRules: {
      other: 'While Singapore has no cap-gains tax, it will tax business income – so if you trade Bitcoin as a business, that could be taxable. Payment Services Act provides clear Bitcoin licensing.',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200', alt: 'Singapore Marina Bay skyline', creditName: 'Swapnil Bapat', creditUrl: 'https://unsplash.com/@swapnilbapat', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=1200', alt: 'Gardens by the Bay Singapore', creditName: 'Coleen Rivas', creditUrl: 'https://unsplash.com/@coleenr', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200', alt: 'Singapore Chinatown', creditName: 'Mike Enerio', creditUrl: 'https://unsplash.com/@mikeenerio', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=1200', alt: 'Singapore skyline night', creditName: 'Peter Nguyen', creditUrl: 'https://unsplash.com/@peterng1618', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1555217851-6141535c9797?w=1200', alt: 'Singapore Merlion', creditName: 'Lily Banse', creditUrl: 'https://unsplash.com/@lvnatikk', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200', alt: 'Singapore food street', creditName: 'Bady Abbas', creditUrl: 'https://unsplash.com/@bady', sourceName: 'Unsplash' },
    ],
  },

  // ============================================
  // #4 - EL SALVADOR
  // ============================================
  {
    id: 'el-salvador',
    name: 'El Salvador (Bitcoin Beach)',
    country: 'El Salvador',
    region: 'El Zonte / San Salvador',
    slug: 'el-salvador',
    continent: 'central-america',
    rank: 4,
    isHonorableMention: false,
    shortBlurb: 'The world\'s first Bitcoin nation with legal tender status, zero Bitcoin tax, and tropical beach lifestyle.',
    longDescription: `El Salvador put itself on the Bitcoin map by becoming the first country to adopt Bitcoin as legal tender in 2021. President Nayib Bukele's bold move means that businesses must accept Bitcoin (via the Chivo wallet) alongside the USD.

For expats: foreign investors pay no capital gains tax on Bitcoin – Bitcoin profits are exempt from tax by law. The government actively courts Bitcoiners, selling "Volcano Bonds", planning a Bitcoin City near a volcano, and offering fast-track residency for Bitcoin investors.

Beyond Bitcoin, El Salvador offers an affordable cost of living (you get much more for your money than in developed countries) and warm Pacific beaches (it's a surfer's paradise in spots like El Zonte, aka "Bitcoin Beach").

Drawbacks: The country historically had high crime, though there have been major improvements – crime rates have plummeted with the 2023 homicide rate falling to 2.4 per 100k, the lowest in the Americas after Canada. Infrastructure is developing. Education and healthcare are below first-world standards.`,
    tags: {
      climate: 'tropical',
      urbanity: 'mixed',
      englishFriendly: false,
      costTier: 'low',
      safetyTier: 'moderate',
      visaRoutes: ['investment', 'entrepreneur', 'digital-nomad'],
      timezoneBand: 'americas',
      familyFriendly: false,
      bitcoinLegalTender: true,
      noCapitalGains: true,
      euMember: false,
    },
    scores: {
      taxHodl: 10,
      taxTrade: 10,
      regulation: 8,
      safety: 6,
      stability: 5,
      costLiving: 9,
      housing: 9,
      education: 4,
      visa: 8,
      infra: 5,
      lifestyleBase: 7,
      cryptoCommunity: 9,
    },
    notes: {
      tax: 'Zero capital gains tax on Bitcoin by law. Bitcoin profits are exempt from taxation. One of the most Bitcoin-friendly tax regimes in the world.',
      visa: 'Fast-track residency available for Bitcoin investors. Government actively courts Bitcoiners with welcoming policies. Relatively easy process.',
      safety: 'Major improvements in recent years – 2023 homicide rate of 2.4 per 100k is the lowest in the Americas after Canada. Controversial crackdown has dramatically reduced crime, though some concerns remain.',
      education: 'Below first-world standards. Expat families often rely on private schools or overseas options for quality education.',
      cost: 'Very affordable cost of living – you get much more for your money than in developed countries. Great value for digital nomads and retirees.',
      cryptoCommunity: 'The birthplace of Bitcoin adoption! "Bitcoin Beach" (El Zonte), Volcano Bonds, Bitcoin City plans. Extremely engaged Bitcoin community and government support.',
      infra: 'Developing infrastructure – may find inconsistent services outside urban or resort areas. Internet and power can be unreliable in some locations.',
      lifestyle: 'Tropical Pacific beaches, surfer\'s paradise, warm climate year-round. El Zonte is a famous Bitcoin destination. Spanish is the main language.',
    },
    specialRules: {
      legalTender: 'Bitcoin is legal tender alongside USD since 2021. A 2025 update relaxed requirements – Bitcoin is no longer mandatory for merchants but remains widely accepted.',
      other: 'Government is actively building "Bitcoin City" near a volcano. Volcano Bonds offer unique investment opportunity.',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=1200', alt: 'Tropical beach sunset', creditName: 'Sean O.', creditUrl: 'https://unsplash.com/@seano', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200', alt: 'Central American coastline', creditName: 'Sean O.', creditUrl: 'https://unsplash.com/@seano', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200', alt: 'Latin American city', creditName: 'Jezael Melgoza', creditUrl: 'https://unsplash.com/@jezar', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200', alt: 'Volcano landscape', creditName: 'Kalen Emsley', creditUrl: 'https://unsplash.com/@kalenemsley', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200', alt: 'Tropical palm beach', creditName: 'Jasper Boer', creditUrl: 'https://unsplash.com/@jasperboer', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200', alt: 'Surfing waves', creditName: 'Jeremy Bishop', creditUrl: 'https://unsplash.com/@jeremybishop', sourceName: 'Unsplash' },
    ],
  },

  // ============================================
  // #5 - PORTUGAL
  // ============================================
  {
    id: 'portugal',
    name: 'Portugal (Lisbon)',
    country: 'Portugal',
    region: 'Lisbon / Algarve',
    slug: 'portugal',
    continent: 'europe',
    rank: 5,
    isHonorableMention: false,
    shortBlurb: 'EU charm with tax-free long-term Bitcoin gains, vibrant Lisbon tech scene, and Mediterranean lifestyle.',
    longDescription: `Portugal has been a favorite among Bitcoiners, especially from Europe, thanks to its favorable tax stance on Bitcoin. In 2023 Portugal updated its policy – Bitcoin held less than 12 months is taxed at 28%, but any gains on Bitcoin held for a year or more remain tax-free for individuals. Long-term Bitcoin HODLers still pay 0%.

Moreover, Portugal's Non-Habitual Resident (NHR) program can offer 10-year tax breaks on foreign-sourced income. Lifestyle: Portugal offers a lovely quality of life with a relatively low cost (one of Western Europe's most affordable countries). Mild Mediterranean climate, beautiful beaches in the Algarve, history and culture in Lisbon and Porto, and a growing international community.

Lisbon has become a Bitcoin hub in the EU, hosting conferences and a vibrant startup scene. Safety is excellent – Portugal consistently ranks top 5–10 globally for peace and safety. English is widely spoken in urban areas.

Drawbacks: Bureaucracy can be slow. Short-term traders now face 28% tax. Real estate costs in Lisbon have climbed due to expat demand.`,
    tags: {
      climate: 'mediterranean',
      urbanity: 'city',
      englishFriendly: true,
      costTier: 'medium',
      safetyTier: 'very-safe',
      visaRoutes: ['golden-visa', 'digital-nomad', 'entrepreneur', 'investment'],
      timezoneBand: 'europe-africa',
      familyFriendly: true,
      bitcoinLegalTender: false,
      noCapitalGains: false,
      euMember: true,
    },
    scores: {
      taxHodl: 10,
      taxTrade: 5,
      regulation: 7,
      safety: 9,
      stability: 9,
      costLiving: 7,
      housing: 6,
      education: 7,
      visa: 8,
      infra: 8,
      lifestyleBase: 9,
      cryptoCommunity: 8,
    },
    notes: {
      tax: 'Long-term holders (>12 months) pay 0% on Bitcoin gains. Short-term gains taxed at 28%. NHR program offers 10-year tax breaks on foreign income.',
      visa: 'Multiple options: Golden Visa (investment), D7 "digital nomad" visa for remote workers, entrepreneur visa. Popular with Bitcoin investors.',
      safety: 'Consistently ranks top 5–10 globally for peace and safety. Very low crime rates, welcoming to foreigners.',
      education: 'Good education system with quality international schools in major cities. Not top-tier like Switzerland but solid European standard.',
      cost: 'One of Western Europe\'s most affordable countries, though Lisbon real estate has climbed due to expat demand. Still cheaper than London or Paris.',
      cryptoCommunity: 'Lisbon has become a Bitcoin hub in the EU – conferences, startups, vibrant tech scene. Growing international community of digital nomads.',
      infra: 'Good infrastructure: reliable internet, modern amenities in cities. Some bureaucracy can be slow.',
      lifestyle: 'Beautiful Mediterranean climate, Atlantic beaches, historic cities, excellent food and wine. English widely spoken in urban areas.',
    },
    specialRules: {
      holdingPeriodRule: 'Bitcoin held >12 months is tax-free. Under 12 months faces 28% capital gains tax.',
      nhrProgram: 'Non-Habitual Resident (NHR) program offers 10-year tax benefits on foreign-sourced income for new residents.',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200', alt: 'Lisbon colorful streets', creditName: 'Daniel Seßler', creditUrl: 'https://unsplash.com/@danielsessler', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200', alt: 'Lisbon Tram 28', creditName: 'Liam McKay', creditUrl: 'https://unsplash.com/@liammckay', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?w=1200', alt: 'Porto riverside', creditName: 'Elton Luz', creditUrl: 'https://unsplash.com/@eltonluz', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1536599018102-9f803c979e15?w=1200', alt: 'Algarve beaches', creditName: 'Marek Okon', creditUrl: 'https://unsplash.com/@marekokon', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200', alt: 'Sintra Palace', creditName: 'Chirayu Trivedi', creditUrl: 'https://unsplash.com/@chirayu', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=1200', alt: 'Lisbon waterfront', creditName: 'Diego Garcia', creditUrl: 'https://unsplash.com/@diegogarcia', sourceName: 'Unsplash' },
    ],
  },

  // ============================================
  // #6 - CAYMAN ISLANDS
  // ============================================
  {
    id: 'cayman-islands',
    name: 'Cayman Islands',
    country: 'Cayman Islands',
    region: 'Grand Cayman',
    slug: 'cayman-islands',
    continent: 'caribbean',
    rank: 6,
    isHonorableMention: false,
    shortBlurb: 'Legendary Caribbean tax haven with zero taxes, white sand beaches, and upscale expat lifestyle.',
    longDescription: `The Cayman Islands are legendary zero-tax jurisdictions. Cayman imposes no income tax, no capital gains tax, no estate or corporate taxes – revenue comes from import duties and fees. For Bitcoiners, this means you can realize unlimited Bitcoin profits and pay 0% in taxes.

It's no wonder many Bitcoin hedge funds, exchanges, and high-net-worth individuals are legally based in Cayman. The Cayman Islands also has a stable government (British Overseas Territory) and a high standard of living.

Lifestyle: Grand Cayman offers gorgeous white sand beaches, turquoise waters (Seven Mile Beach is famous), and a tight-knit upscale expat community. Crime is low and amenities are oriented toward luxury tourism and finance expats. Everyone speaks English.

Drawbacks: Island life is not for everyone. Grand Cayman is small and can feel isolating. Cost of living is high because most goods are imported. Limited cultural/urban excitement. Getting residency usually requires significant investment ($1–2M+).`,
    tags: {
      climate: 'tropical',
      urbanity: 'island',
      englishFriendly: true,
      costTier: 'very-high',
      safetyTier: 'very-safe',
      visaRoutes: ['investment', 'citizenship-by-investment'],
      timezoneBand: 'americas',
      familyFriendly: true,
      bitcoinLegalTender: false,
      noCapitalGains: true,
      euMember: false,
    },
    scores: {
      taxHodl: 10,
      taxTrade: 10,
      regulation: 8,
      safety: 9,
      stability: 9,
      costLiving: 2,
      housing: 2,
      education: 6,
      visa: 4,
      infra: 7,
      lifestyleBase: 7,
      cryptoCommunity: 7,
    },
    notes: {
      tax: 'Zero income tax, zero capital gains tax, zero estate or corporate taxes. One of the world\'s purest tax havens. Unlimited Bitcoin profits at 0%.',
      visa: 'Residency requires significant investment – typically $1–2 million in real estate or business for residency certificates. Not easy for everyone.',
      safety: 'Very safe British Overseas Territory with low crime rates. Stable government and rule of law.',
      education: 'Good private schools available but options are limited by island size. Families may need to consider boarding school or remote options.',
      cost: 'High cost of living – most goods are imported. Groceries, cars, electricity, and beachside housing are expensive.',
      cryptoCommunity: 'Major jurisdiction for Bitcoin hedge funds and exchanges due to tax status. Finance-oriented expat community with Bitcoin presence.',
      infra: 'Good infrastructure for an island – reliable utilities, internet, banking. Some limitations due to size.',
      lifestyle: 'Beautiful beaches (Seven Mile Beach), diving, yachting, tropical paradise. Can feel isolating – not much urban excitement or cultural scene.',
    },
    specialRules: {
      other: 'British Overseas Territory with stable governance. Popular domicile for Bitcoin hedge funds and exchanges.',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200', alt: 'Seven Mile Beach Cayman', creditName: 'Joel Vodell', creditUrl: 'https://unsplash.com/@joelvodell', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200', alt: 'Cayman Islands aerial view', creditName: 'Fernando Jorge', creditUrl: 'https://unsplash.com/@fernandojorge', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1559128010-7c1ad6c27e1e?w=1200', alt: 'Caribbean turquoise waters', creditName: 'Shifaaz Shamoon', creditUrl: 'https://unsplash.com/@sotti', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200', alt: 'Tropical beach sunset', creditName: 'Sean Oulashin', creditUrl: 'https://unsplash.com/@oulashinsean', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200', alt: 'Caribbean diving', creditName: 'Jakob Owens', creditUrl: 'https://unsplash.com/@jakobowens1', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200', alt: 'White sand Caribbean beach', creditName: 'Sean O.', creditUrl: 'https://unsplash.com/@seano', sourceName: 'Unsplash' },
    ],
  },

  // ============================================
  // #7 - PUERTO RICO
  // ============================================
  {
    id: 'puerto-rico',
    name: 'Puerto Rico',
    country: 'United States (Territory)',
    region: 'San Juan / Dorado',
    slug: 'puerto-rico',
    continent: 'caribbean',
    rank: 7,
    isHonorableMention: false,
    shortBlurb: 'The only way for Americans to pay 0% on Bitcoin gains while keeping citizenship – Act 60\'s powerful tax benefits.',
    longDescription: `Puerto Rico deserves special mention for Americans. Under Act 60 (formerly Acts 20/22), U.S. citizens who become bona fide Puerto Rico residents can enjoy 0% capital gains tax and 0% tax on dividend/interest going forward. This includes Bitcoin gains on assets acquired after moving to PR.

You essentially opt out of U.S. federal tax on Puerto Rico-sourced investment income, while still retaining your U.S. passport. Many Bitcoin millionaires relocated to PR after 2017 and 2020 for this reason.

Lifestyle: PR offers a tropical island lifestyle with American familiarity. Uses USD, federal law applies in areas like defense and trade. Growing community of mainland American expats in areas like Dorado Beach and Condado. Beautiful beaches, rainforests, rich Latin culture.

Drawbacks: Infrastructure challenges – the island has been plagued by power grid issues and hurricane damage. Healthcare quality varies. Crime is higher than mainland U.S. averages. Act 60 has strict residency rules (183+ days/year, annual donations). Pre-move appreciation is still US-taxable.`,
    tags: {
      climate: 'tropical',
      urbanity: 'mixed',
      englishFriendly: true,
      costTier: 'medium',
      safetyTier: 'moderate',
      visaRoutes: ['territory-resident'],
      timezoneBand: 'americas',
      familyFriendly: true,
      bitcoinLegalTender: false,
      noCapitalGains: true,
      euMember: false,
    },
    scores: {
      taxHodl: 10,
      taxTrade: 10,
      regulation: 7,
      safety: 6,
      stability: 7,
      costLiving: 7,
      housing: 6,
      education: 6,
      visa: 10,
      infra: 5,
      lifestyleBase: 7,
      cryptoCommunity: 8,
    },
    notes: {
      tax: 'Act 60: 0% capital gains, dividends, and interest for bona fide PR residents. Only applies to gains on assets acquired after moving. Pre-move appreciation still US-taxable if realized within 10 years.',
      visa: 'No visa needed for US citizens – automatic right to reside. Must become bona fide resident (183+ days/year, make PR primary home, sever mainland ties). Annual donation requirements.',
      safety: 'Higher crime than mainland US averages, though expats often live in gated communities with private security. Violent crime mostly localized.',
      education: 'Varies – some good private and international schools. Quality may not match top mainland options. Limited choices in some areas.',
      cost: 'Lower than many US cities, though wealthy enclaves like Dorado have seen prices rise. Generally affordable with a moderate budget.',
      cryptoCommunity: 'Growing community of mainland American Bitcoin expats. Act 60 has attracted significant Bitcoin wealth to areas like Dorado and Condado.',
      infra: 'Infrastructure challenges – power grid issues and hurricane damage remain concerns. Healthcare quality varies; complex conditions may require mainland travel.',
      lifestyle: 'Tropical beaches, rainforests, rich Latin culture. San Juan has good dining and nightlife. American familiarity with Caribbean charm.',
    },
    specialRules: {
      act60: 'Act 60 (formerly Acts 20/22) allows 0% capital gains, dividends, and interest for bona fide PR residents. Must live 183+ days/year, make annual donations, and only new gains qualify. Benefits slated through at least 2035.',
      americanTaxNote: 'This is the only way for US citizens to legally pay 0% on Bitcoin gains while retaining citizenship. Any appreciation before becoming PR resident is still subject to US tax if realized within 10 years.',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200', alt: 'Old San Juan colorful streets', creditName: 'Fernando Jorge', creditUrl: 'https://unsplash.com/@fernandojorge', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1562618817-9532c252e08a?w=1200', alt: 'Puerto Rico beach', creditName: 'Ben Ostrower', creditUrl: 'https://unsplash.com/@benostrower', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1200', alt: 'El Yunque rainforest', creditName: 'Brian Yurasits', creditUrl: 'https://unsplash.com/@brian_yuri', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1200', alt: 'San Juan at night', creditName: 'Willian Justen', creditUrl: 'https://unsplash.com/@willianjusten', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=1200', alt: 'Puerto Rico coastline', creditName: 'Fernando Jorge', creditUrl: 'https://unsplash.com/@fernandojorge', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1599076315968-e0867873dff5?w=1200', alt: 'Condado San Juan', creditName: 'Nathália Rosa', creditUrl: 'https://unsplash.com/@nathalia_rosa', sourceName: 'Unsplash' },
    ],
  },

  // ============================================
  // HONORABLE MENTIONS
  // ============================================

  // MALTA
  {
    id: 'malta',
    name: 'Malta',
    country: 'Malta',
    region: 'Valletta',
    slug: 'malta',
    continent: 'europe',
    rank: 8,
    isHonorableMention: true,
    shortBlurb: 'The "Blockchain Island" with comprehensive Bitcoin legal framework and Mediterranean lifestyle.',
    longDescription: `Malta earned the nickname "Blockchain Island" for its early embrace of Bitcoin regulation. The Virtual Financial Assets (VFA) Act provides a comprehensive legal framework for Bitcoin businesses, making it attractive for exchanges and blockchain companies.

For individuals, Malta offers favorable tax treatment if structured correctly – long-term holdings might not incur capital gains tax. It's English-speaking and part of the EU, providing access to the European market.

Many Bitcoin companies set up in Malta in 2018, though banking for Bitcoin ventures proved difficult, slowing its momentum. Still, Malta can be attractive with its warm Mediterranean climate and clear Bitcoin regulations.

Drawbacks: Banking access for Bitcoin businesses has been challenging. Tax rules require careful structuring. Small island with limited entertainment options.`,
    tags: {
      climate: 'mediterranean',
      urbanity: 'island',
      englishFriendly: true,
      costTier: 'medium',
      safetyTier: 'safe',
      visaRoutes: ['investment', 'entrepreneur', 'citizenship-by-investment', 'employment'],
      timezoneBand: 'europe-africa',
      familyFriendly: true,
      bitcoinLegalTender: false,
      noCapitalGains: false,
      euMember: true,
    },
    scores: {
      taxHodl: 7,
      taxTrade: 6,
      regulation: 9,
      safety: 8,
      stability: 8,
      costLiving: 6,
      housing: 5,
      education: 6,
      visa: 7,
      infra: 7,
      lifestyleBase: 7,
      cryptoCommunity: 7,
    },
    notes: {
      tax: 'Favorable tax treatment possible with careful structuring. Long-term holdings may not incur capital gains tax. Nuanced rules require professional advice.',
      visa: 'EU member with various residency options including investment visas and citizenship-by-investment program.',
      safety: 'Safe EU country with low crime rates. Stable democratic government.',
      education: 'Decent education options with international schools. English-speaking environment.',
      cost: 'Moderate cost of living for Europe, though housing demand has pushed prices up.',
      cryptoCommunity: 'Early blockchain hub with comprehensive VFA Act. Many Bitcoin companies established here in 2018.',
      infra: 'Good infrastructure for a small island. Some banking difficulties for Bitcoin businesses.',
      lifestyle: 'Warm Mediterranean climate, historic sites, English-speaking. Small island can feel limiting.',
    },
    specialRules: {
      other: 'Virtual Financial Assets (VFA) Act provides comprehensive Bitcoin regulation. Banking for Bitcoin ventures has been challenging.',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1200', alt: 'Valletta Malta harbor', creditName: 'Sven Huls', creditUrl: 'https://unsplash.com/@svenhuls', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200', alt: 'Malta Blue Lagoon', creditName: 'Kurt Cotoaga', creditUrl: 'https://unsplash.com/@kyyhky', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1563522773-c4a4edb8f695?w=1200', alt: 'Mdina Malta', creditName: 'Matthew Osborn', creditUrl: 'https://unsplash.com/@matthewosborn', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=1200', alt: 'Malta coastline', creditName: 'Ran Berkovich', creditUrl: 'https://unsplash.com/@berko', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1555217851-6141535c9797?w=1200', alt: 'Valletta streets', creditName: 'Alex Munsell', creditUrl: 'https://unsplash.com/@alexmunsell', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=1200', alt: 'Malta architecture', creditName: 'Nick Fewings', creditUrl: 'https://unsplash.com/@jannerboy62', sourceName: 'Unsplash' },
    ],
  },

  // GERMANY
  {
    id: 'germany',
    name: 'Germany',
    country: 'Germany',
    region: 'Berlin / Munich',
    slug: 'germany',
    continent: 'europe',
    rank: 9,
    isHonorableMention: true,
    shortBlurb: 'Major economy with explicit 0% tax on Bitcoin held over 1 year – a long-term HODL paradise.',
    longDescription: `Germany is perhaps the most Bitcoin-friendly major economy. Germany explicitly exempts Bitcoin held more than 1 year from any tax – sell after a year and pay 0%. This strongly incentivizes long-term holding strategies.

Shorter-term trades are taxed at regular income rates (up to 45%). Germany is very stable with excellent infrastructure and education, making it a solid choice for those wanting an EU base with strong fundamentals.

Berlin has a vibrant tech and startup scene with an active Bitcoin community. Munich offers more traditional German quality of life.

Drawbacks: High taxes on other income and complexity in distinguishing what is taxable (staking, for example, may reset the one-year holding period in some cases). Weather is temperate to cold. Language barrier outside major cities.`,
    tags: {
      climate: 'temperate',
      urbanity: 'major-city',
      englishFriendly: true,
      costTier: 'medium',
      safetyTier: 'very-safe',
      visaRoutes: ['entrepreneur', 'employment', 'investment'],
      timezoneBand: 'europe-africa',
      familyFriendly: true,
      bitcoinLegalTender: false,
      noCapitalGains: false,
      euMember: true,
    },
    scores: {
      taxHodl: 10,
      taxTrade: 4,
      regulation: 8,
      safety: 9,
      stability: 9,
      costLiving: 6,
      housing: 5,
      education: 9,
      visa: 6,
      infra: 9,
      lifestyleBase: 7,
      cryptoCommunity: 7,
    },
    notes: {
      tax: 'Bitcoin held >1 year is explicitly tax-free (0%). Short-term trades taxed at regular income rates (up to 45%). Staking may reset the holding period.',
      visa: 'EU member with entrepreneur and employment visas. Not the easiest but achievable with right qualifications.',
      safety: 'Very safe with excellent rule of law. One of Europe\'s most stable countries.',
      education: 'Excellent education system with many free universities. Strong international schools in major cities.',
      cost: 'Moderate for Western Europe. Berlin is relatively affordable; Munich more expensive.',
      cryptoCommunity: 'Berlin has vibrant tech/startup scene with active Bitcoin community. Growing blockchain presence.',
      infra: 'Excellent infrastructure: reliable utilities, good internet, efficient transport.',
      lifestyle: 'Rich culture, history, good work-life balance. Temperate climate with cold winters. Language barrier outside cities.',
    },
    specialRules: {
      holdingPeriodRule: 'Bitcoin held >1 year is explicitly exempt from tax. Shorter trades taxed at income rates. Staking income may have different rules and could reset holding period.',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200', alt: 'Berlin skyline', creditName: 'Adam Vradenburg', creditUrl: 'https://unsplash.com/@adamvradenburg', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200', alt: 'Munich city center', creditName: 'Jan Antonin Kolar', creditUrl: 'https://unsplash.com/@jankolar', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=1200', alt: 'Brandenburg Gate Berlin', creditName: 'Claudio Schwarz', creditUrl: 'https://unsplash.com/@purzlbaum', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1554072675-66db59dba46f?w=1200', alt: 'German Alps Bavaria', creditName: 'Sven Scheuermeier', creditUrl: 'https://unsplash.com/@sveninho', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1449452198679-05c7fd30f416?w=1200', alt: 'Berlin East Side Gallery', creditName: 'Theo Crazzolara', creditUrl: 'https://unsplash.com/@theocrazzolara', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1551952237-954a0e664dca?w=1200', alt: 'Frankfurt financial district', creditName: 'Roman Kraft', creditUrl: 'https://unsplash.com/@romankraft', sourceName: 'Unsplash' },
    ],
  },

  // HONG KONG
  {
    id: 'hong-kong',
    name: 'Hong Kong',
    country: 'Hong Kong SAR',
    region: 'Hong Kong',
    slug: 'hong-kong',
    continent: 'asia',
    rank: 10,
    isHonorableMention: true,
    shortBlurb: 'Revitalized Asian Bitcoin hub with no capital gains tax and world-class financial infrastructure.',
    longDescription: `After a period of uncertainty, Hong Kong in 2023 reintroduced a friendly regime for Bitcoin trading platforms and does not tax personal capital gains (much like Singapore). It's historically been a Bitcoin and finance hub in Asia.

The city offers world-class financial services, excellent infrastructure, and a vibrant international community. English is widely spoken, and it serves as a gateway to mainland China and Asia.

Drawbacks: The concerns here are more political – with China's influence, some expatriates feel less secure about long-term freedoms. Cost of living is extremely high, among the highest in the world. Housing is notoriously expensive and cramped.`,
    tags: {
      climate: 'subtropical',
      urbanity: 'major-city',
      englishFriendly: true,
      costTier: 'very-high',
      safetyTier: 'safe',
      visaRoutes: ['investment', 'entrepreneur', 'employment'],
      timezoneBand: 'asia-pacific',
      familyFriendly: true,
      bitcoinLegalTender: false,
      noCapitalGains: true,
      euMember: false,
    },
    scores: {
      taxHodl: 10,
      taxTrade: 8,
      regulation: 7,
      safety: 8,
      stability: 6,
      costLiving: 1,
      housing: 1,
      education: 8,
      visa: 6,
      infra: 10,
      lifestyleBase: 7,
      cryptoCommunity: 8,
    },
    notes: {
      tax: 'No capital gains tax on personal Bitcoin profits – similar to Singapore. Business income may be taxable.',
      visa: 'Various investment and employment visa options. Quality Migrant Admission Scheme for talented individuals.',
      safety: 'Generally safe with low street crime. Some political concerns regarding China\'s influence.',
      education: 'Excellent international schools and universities. Strong education system.',
      cost: 'Among the world\'s most expensive cities. Housing is notoriously expensive and cramped.',
      cryptoCommunity: 'Revitalized Bitcoin hub with friendly 2023 regulations. Strong fintech and finance infrastructure.',
      infra: 'World-class infrastructure: excellent internet, efficient transport, modern amenities.',
      lifestyle: 'Vibrant international city, excellent food, cultural mix. Gateway to Asia. Very dense urban environment.',
    },
    specialRules: {
      other: '2023 regulations reintroduced friendly regime for Bitcoin trading platforms. Some concerns about long-term political stability under China\'s influence.',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200', alt: 'Hong Kong skyline', creditName: 'Ryan Tiang', creditUrl: 'https://unsplash.com/@ryantiang', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1576788369575-4ab045b9287e?w=1200', alt: 'Hong Kong harbor night', creditName: 'Florian Wehde', creditUrl: 'https://unsplash.com/@florianwehde', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=1200', alt: 'Hong Kong neon streets', creditName: 'Manson Yim', creditUrl: 'https://unsplash.com/@mansonyms', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1532332248682-206cc786359f?w=1200', alt: 'Victoria Peak view', creditName: 'Ruslan Bardash', creditUrl: 'https://unsplash.com/@ruslanbar', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1558431382-27f86c740734?w=1200', alt: 'Hong Kong street market', creditName: 'Florian Wehde', creditUrl: 'https://unsplash.com/@florianwehde', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1594973782943-3314fe063f68?w=1200', alt: 'Hong Kong tram', creditName: 'Redd F', creditUrl: 'https://unsplash.com/@rfredd', sourceName: 'Unsplash' },
    ],
  },

  // PANAMA
  {
    id: 'panama',
    name: 'Panama',
    country: 'Panama',
    region: 'Panama City',
    slug: 'panama',
    continent: 'central-america',
    rank: 11,
    isHonorableMention: true,
    shortBlurb: 'Territorial taxation paradise with modern city living, USD currency, and Latin American value.',
    longDescription: `Panama is known for territorial taxation – foreign-source income is not taxed in Panama, which can include Bitcoin earnings if structured correctly. Many expats enjoy Panama for its combination of modern city living in Panama City, use of the U.S. dollar, and relative affordability compared to the U.S.

The country has proposed Bitcoin-friendly laws (though as of 2025 a bill to regulate Bitcoin was partially vetoed). Safety is decent – better than most of Central America. It offers a higher-development alternative to El Salvador without the official Bitcoin legal tender status.

Panama City offers modern amenities, international banking, and a cosmopolitan atmosphere. The country serves as a regional hub with the famous Canal.

Drawbacks: Bitcoin regulations remain somewhat unclear after the partial veto. Not as Bitcoin-focused as El Salvador. Tropical climate with humidity.`,
    tags: {
      climate: 'tropical',
      urbanity: 'city',
      englishFriendly: true,
      costTier: 'medium',
      safetyTier: 'moderate',
      visaRoutes: ['investment', 'entrepreneur', 'digital-nomad'],
      timezoneBand: 'americas',
      familyFriendly: true,
      bitcoinLegalTender: false,
      noCapitalGains: true,
      euMember: false,
    },
    scores: {
      taxHodl: 9,
      taxTrade: 8,
      regulation: 5,
      safety: 6,
      stability: 7,
      costLiving: 7,
      housing: 7,
      education: 5,
      visa: 8,
      infra: 7,
      lifestyleBase: 7,
      cryptoCommunity: 5,
    },
    notes: {
      tax: 'Territorial taxation – foreign-source income is not taxed. Bitcoin earnings can qualify if structured correctly.',
      visa: 'Various residency options including investment visas. Friendly Nations Visa popular with many nationalities.',
      safety: 'Better than most of Central America but not at developed nation standards. Safe in expat areas.',
      education: 'International schools available in Panama City. Quality varies.',
      cost: 'Relatively affordable compared to US. Good value for modern city living. Uses USD.',
      cryptoCommunity: 'Growing but not as developed as other hubs. Bitcoin-friendly laws proposed but partially vetoed.',
      infra: 'Good infrastructure in Panama City. Modern amenities, international banking hub.',
      lifestyle: 'Modern city living, tropical climate, canal and beaches nearby. English widely spoken in business circles.',
    },
    specialRules: {
      other: 'Territorial taxation system. Bitcoin bill partially vetoed as of 2025 – regulations remain somewhat unclear. Uses USD as currency.',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=1200', alt: 'Panama City skyline', creditName: 'Fernando Jorge', creditUrl: 'https://unsplash.com/@fernandojorge', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200', alt: 'Panama Canal', creditName: 'Walter Hupiu', creditUrl: 'https://unsplash.com/@whupiu', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200', alt: 'Casco Viejo Panama', creditName: 'Yolanda Sun', creditUrl: 'https://unsplash.com/@yolandasun', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200', alt: 'Caribbean beaches', creditName: 'Sean O.', creditUrl: 'https://unsplash.com/@seano', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200', alt: 'Modern cityscape night', creditName: 'Pedro Lastra', creditUrl: 'https://unsplash.com/@peterlaster', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1559128010-7c1ad6c27e1e?w=1200', alt: 'Tropical islands', creditName: 'Shifaaz Shamoon', creditUrl: 'https://unsplash.com/@sotti', sourceName: 'Unsplash' },
    ],
  },

  // THAILAND
  {
    id: 'thailand',
    name: 'Thailand (Bangkok/Chiang Mai)',
    country: 'Thailand',
    region: 'Bangkok / Chiang Mai / Phuket',
    slug: 'thailand',
    continent: 'asia',
    rank: 12,
    isHonorableMention: true,
    shortBlurb: 'Affordable tropical paradise with new tax-free Bitcoin trading through 2029 and easy long-term visas.',
    longDescription: `Thailand has long been popular with digital nomads for its affordable living, sunny climate, and welcoming culture – and now it's giving Bitcoin investors reasons to cheer. The Thai government approved a tax exemption (through 2029) on personal income from Bitcoin trading on licensed exchanges. If you trade Bitcoin on a Thai-regulated exchange, any profits are tax-free for the next 5 years (2025–2029).

Thailand also offers a 10-year Long Term Resident (LTR) visa for wealthy individuals, investors, and retirees (criteria include about $1M in assets or $80k/year income) – a program designed to attract high-net-worth expats, including Bitcoin-rich individuals.

Quality of life is a major draw. Places like Bangkok, Chiang Mai, and Phuket offer vibrant lifestyles at a fraction of Western costs. You can rent a luxury condo in Bangkok for what a basic apartment costs in New York or London. Thai food, beaches, and hospitality are world-renowned.

Drawbacks: Profits made on overseas or unlicensed exchanges might not qualify for the exemption, so one would use local exchanges. Thai banks sometimes have inconsistent policies on Bitcoin-related inflows. The government has gone back and forth on regulations in the past.`,
    tags: {
      climate: 'tropical',
      urbanity: 'major-city',
      englishFriendly: true,
      costTier: 'low',
      safetyTier: 'safe',
      visaRoutes: ['investment', 'digital-nomad', 'entrepreneur'],
      timezoneBand: 'asia-pacific',
      familyFriendly: true,
      bitcoinLegalTender: false,
      noCapitalGains: true,
      euMember: false,
    },
    scores: {
      taxHodl: 9,
      taxTrade: 9,
      regulation: 6,
      safety: 7,
      stability: 6,
      costLiving: 9,
      housing: 9,
      education: 6,
      visa: 8,
      infra: 7,
      lifestyleBase: 9,
      cryptoCommunity: 6,
    },
    notes: {
      tax: 'Tax exemption through 2029 on Bitcoin trading profits from licensed Thai exchanges. 0% capital gains for qualifying trades. Foreign income generally not taxed if not remitted.',
      visa: '10-year Long Term Resident (LTR) visa for wealthy individuals ($1M+ assets or $80k/year income). Also tourist visas, retirement visas, and Elite visas available.',
      safety: 'Generally safe – violent crime is rare, though petty theft can happen in tourist spots. Political stability has improved.',
      education: 'International schools available in Bangkok and other major cities. Quality varies but good options exist for expat families.',
      cost: 'Extremely affordable – rent a luxury condo for a fraction of Western prices. Food, transport, and entertainment are very cheap.',
      cryptoCommunity: 'Growing Bitcoin community, especially in Bangkok and Chiang Mai. Licensed exchanges operate locally. Digital nomad scene is strong.',
      infra: 'Good infrastructure in major cities. High-speed internet widely available. Modern hospitals and amenities.',
      lifestyle: 'World-renowned beaches, cuisine, and hospitality. Vibrant expat communities. Tropical climate year-round.',
    },
    specialRules: {
      holdingPeriodRule: 'Tax exemption runs through 2029 for profits on licensed Thai exchanges. Must use regulated local exchanges to qualify.',
      other: 'LTR visa program targets wealthy individuals and digital nomads. Banks may have varying policies on Bitcoin-related transfers.',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200', alt: 'Bangkok temples', creditName: 'Florian Wehde', creditUrl: 'https://unsplash.com/@florianwehde', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200', alt: 'Thailand beach', creditName: 'Sumit Chinchane', creditUrl: 'https://unsplash.com/@sumitchinchane', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200', alt: 'Chiang Mai', creditName: 'Mathew Schwartz', creditUrl: 'https://unsplash.com/@cadophoto', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1200', alt: 'Thai street food', creditName: 'Lisheng Chang', creditUrl: 'https://unsplash.com/@changlisheng', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=1200', alt: 'Phuket coastline', creditName: 'Sumit Chinchane', creditUrl: 'https://unsplash.com/@sumitchinchane', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200', alt: 'Bangkok skyline night', creditName: 'Florian Wehde', creditUrl: 'https://unsplash.com/@florianwehde', sourceName: 'Unsplash' },
    ],
  },

  // GEORGIA
  {
    id: 'georgia',
    name: 'Georgia (Tbilisi)',
    country: 'Georgia',
    region: 'Tbilisi',
    slug: 'georgia',
    continent: 'europe',
    rank: 13,
    isHonorableMention: true,
    shortBlurb: 'True 0% Bitcoin tax, ultra-low costs, easy residency, and a growing expat hub in the Caucasus.',
    longDescription: `Georgia (the country in the Caucasus) is a hidden gem among Bitcoin-friendly jurisdictions. It offers a true 0% tax on Bitcoin gains for individuals. Georgian tax authorities explicitly exempt profits from selling Bitcoin from income tax, as long as it's your own assets and not part of a business.

Georgia's tax system is largely territorial – foreign-sourced income is not taxed even if you become a tax resident, and there are no wealth or inheritance taxes. This ultra-friendly regime, combined with very low living costs, has made Tbilisi a growing hub for Bitcoin expats and nomads.

Getting set up is straightforward. Many nationalities can stay visa-free for 365 days, and to maintain tax residency you only need to spend half the year in-country. You can formalize residency by buying property over ~$100k or starting a business. Georgia even has a favorable "virtual zone" regime for IT businesses with 0% corporate tax on export income.

Drawbacks: Georgia borders Russia and has ongoing territorial disputes, though Tbilisi itself remains peaceful. Language can be a barrier outside expat circles. Infrastructure is developing but not first-world.`,
    tags: {
      climate: 'temperate',
      urbanity: 'city',
      englishFriendly: false,
      costTier: 'low',
      safetyTier: 'safe',
      visaRoutes: ['investment', 'entrepreneur', 'digital-nomad'],
      timezoneBand: 'middle-east',
      familyFriendly: false,
      bitcoinLegalTender: false,
      noCapitalGains: true,
      euMember: false,
    },
    scores: {
      taxHodl: 10,
      taxTrade: 10,
      regulation: 7,
      safety: 7,
      stability: 5,
      costLiving: 10,
      housing: 10,
      education: 5,
      visa: 9,
      infra: 6,
      lifestyleBase: 7,
      cryptoCommunity: 6,
    },
    notes: {
      tax: 'True 0% tax on Bitcoin gains for individuals. Territorial system means foreign income is also untaxed. No wealth or inheritance tax.',
      visa: 'Visa-free for 365 days for many nationalities. Easy residency via property purchase (~$100k) or business registration. Very welcoming to foreigners.',
      safety: 'Tbilisi is generally safe with low violent crime. Some geopolitical concerns due to proximity to Russia and territorial disputes.',
      education: 'Limited international school options. Not ideal for families seeking top-tier education.',
      cost: 'Extremely low cost of living – rent, food, and transport cost a fraction of Western prices. Great value for digital nomads.',
      cryptoCommunity: 'Growing expat and Bitcoin community in Tbilisi. Co-working spaces and cafes cater to digital nomads. Cheap electricity attracted Bitcoin miners.',
      infra: 'Developing infrastructure. High-speed internet available in cities. Some services may be inconsistent outside Tbilisi.',
      lifestyle: 'Unique cultural blend of European and Asian influences. Charming old town, growing modern sector, excellent wine and cuisine.',
    },
    specialRules: {
      freeZone: '"Virtual Zone" companies enjoy 0% corporate tax on export income – popular for IT and Bitcoin businesses.',
      other: 'Cheap hydroelectric power has attracted Bitcoin miners. Very easy to set up residency compared to most countries.',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200', alt: 'Tbilisi old town', creditName: 'Julia Sese', creditUrl: 'https://unsplash.com/@juliasese', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1558431382-92e6d5d51e68?w=1200', alt: 'Georgian mountains', creditName: 'Shalva Manvelidze', creditUrl: 'https://unsplash.com/@shalvamanvelidze', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200', alt: 'Tbilisi architecture', creditName: 'Julia Sese', creditUrl: 'https://unsplash.com/@juliasese', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1542820229-081e0c12af0b?w=1200', alt: 'Georgian wine country', creditName: 'Shalva Manvelidze', creditUrl: 'https://unsplash.com/@shalvamanvelidze', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1583266335095-b57a6d3c7a66?w=1200', alt: 'Tbilisi cityscape', creditName: 'Julia Sese', creditUrl: 'https://unsplash.com/@juliasese', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1555217851-6141535c9797?w=1200', alt: 'Georgian church', creditName: 'Shalva Manvelidze', creditUrl: 'https://unsplash.com/@shalvamanvelidze', sourceName: 'Unsplash' },
    ],
  },

  // URUGUAY
  {
    id: 'uruguay',
    name: 'Uruguay (Montevideo)',
    country: 'Uruguay',
    region: 'Montevideo / Punta del Este',
    slug: 'uruguay',
    continent: 'south-america',
    rank: 14,
    isHonorableMention: true,
    shortBlurb: 'South America\'s safest country with 5-10 year tax holiday on foreign income and strong institutions.',
    longDescription: `Uruguay is a safe, understated country in South America with excellent institutions. New residents get a 5-year (up to 10-year) tax holiday on all foreign-sourced income – which would include Bitcoin profits made abroad or on foreign exchanges. Even after that period, foreign income can remain untaxed and local Bitcoin gains are taxed at only 12%.

Uruguay is politically stable and offers a high quality of life, often ranking highest in Latin America for safety, democracy, and infrastructure. It's sometimes called the "Switzerland of South America" for its stability and banking sector.

The country offers easy residency via property investment (~$380k) or income qualifications. Montevideo has a European feel with good restaurants, beaches, and a growing tech scene. Punta del Este is a glamorous beach resort popular with wealthy South Americans.

Drawbacks: Relatively small country with limited entertainment compared to major cities. Cost of living is higher than neighboring countries. Spanish is essential outside expat areas.`,
    tags: {
      climate: 'temperate',
      urbanity: 'city',
      englishFriendly: false,
      costTier: 'medium',
      safetyTier: 'very-safe',
      visaRoutes: ['investment', 'entrepreneur', 'digital-nomad'],
      timezoneBand: 'americas',
      familyFriendly: true,
      bitcoinLegalTender: false,
      noCapitalGains: true,
      euMember: false,
    },
    scores: {
      taxHodl: 9,
      taxTrade: 8,
      regulation: 7,
      safety: 9,
      stability: 9,
      costLiving: 6,
      housing: 6,
      education: 7,
      visa: 7,
      infra: 7,
      lifestyleBase: 7,
      cryptoCommunity: 4,
    },
    notes: {
      tax: '5-10 year tax holiday on foreign-sourced income for new residents. After that, foreign income can remain untaxed. Local Bitcoin gains taxed at only 12%.',
      visa: 'Easy residency via property investment (~$380k) or income qualifications. Welcoming to foreign investors and retirees.',
      safety: 'Safest country in South America. Strong rule of law, stable democracy, low corruption. Often called "Switzerland of South America."',
      education: 'Good public education system by regional standards. International schools available in Montevideo.',
      cost: 'Higher than neighboring countries but reasonable by Western standards. Punta del Este is expensive; Montevideo more affordable.',
      cryptoCommunity: 'Small but growing. Not a major Bitcoin hub but regulations are favorable and banking is sophisticated.',
      infra: 'Good infrastructure for the region. Reliable utilities, decent internet, modern healthcare.',
      lifestyle: 'European-influenced culture, excellent beef and wine, beautiful beaches. Laid-back lifestyle with good work-life balance.',
    },
    specialRules: {
      holdingPeriodRule: 'Tax holiday of 5-10 years on foreign-sourced income for new residents. Very favorable for Bitcoin holders with offshore gains.',
      other: 'Strong banking sector with experience handling international clients. Stable currency pegged approach.',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1586981267466-fc5b9a80e8a9?w=1200', alt: 'Montevideo waterfront', creditName: 'Jimmy Conover', creditUrl: 'https://unsplash.com/@jconover', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1597933607810-0f212d1d9f50?w=1200', alt: 'Punta del Este', creditName: 'Josefina Lacroze', creditUrl: 'https://unsplash.com/@josefinalacroze', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1569959220744-ff553533f492?w=1200', alt: 'Uruguay countryside', creditName: 'Ramiro Pianarosa', creditUrl: 'https://unsplash.com/@rpianarosa', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200', alt: 'Uruguay beach', creditName: 'Sean O.', creditUrl: 'https://unsplash.com/@seano', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=1200', alt: 'Colonial architecture', creditName: 'Jimmy Conover', creditUrl: 'https://unsplash.com/@jconover', sourceName: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200', alt: 'South American vineyard', creditName: 'Kym Ellis', creditUrl: 'https://unsplash.com/@kymellis', sourceName: 'Unsplash' },
    ],
  },
];

// Helper function to get jurisdiction by slug
export function getJurisdictionBySlug(slug: string): Jurisdiction | undefined {
  return jurisdictions.find(j => j.slug === slug);
}

// Helper function to get jurisdictions by continent
export function getJurisdictionsByContinent(continent: string): Jurisdiction[] {
  return jurisdictions.filter(j => j.continent === continent);
}

// Helper function to get top jurisdictions (non-honorable mentions)
export function getTopJurisdictions(): Jurisdiction[] {
  return jurisdictions.filter(j => !j.isHonorableMention).sort((a, b) => a.rank - b.rank);
}

// Helper function to get honorable mentions
export function getHonorableMentions(): Jurisdiction[] {
  return jurisdictions.filter(j => j.isHonorableMention).sort((a, b) => a.rank - b.rank);
}
