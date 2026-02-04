import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, MapPin, Globe, Check, AlertTriangle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getJurisdictionBySlug, jurisdictions } from "@/data/jurisdictions";
import { formatScore, getScoreColor, getTierLabel, getClimateLabel, getContinentLabel, getTimezoneLabel } from "@/lib/utils";
import { ImageGallery } from "@/components/jurisdiction/ImageGallery";
import { ScoreChart } from "@/components/jurisdiction/ScoreChart";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return jurisdictions.map((j) => ({
    slug: j.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const jurisdiction = getJurisdictionBySlug(slug);

  if (!jurisdiction) {
    return { title: "Not Found" };
  }

  return {
    title: `${jurisdiction.name} | Bitcoin Haven Finder`,
    description: jurisdiction.shortBlurb,
    openGraph: {
      title: `${jurisdiction.name} - Bitcoin Haven Finder`,
      description: jurisdiction.shortBlurb,
      images: jurisdiction.images[0]?.url ? [jurisdiction.images[0].url] : [],
    },
  };
}

export default async function JurisdictionPage({ params }: Props) {
  const { slug } = await params;
  const j = getJurisdictionBySlug(slug);

  if (!j) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 lg:h-96 bg-slate-900">
        <Image
          src={j.images[0]?.url || "/placeholder.jpg"}
          alt={j.images[0]?.alt || j.name}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-4 left-4">
          <Button asChild variant="secondary" size="sm" className="gap-2">
            <Link href="/results">
              <ArrowLeft className="w-4 h-4" />
              Back to Results
            </Link>
          </Button>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">#{j.rank}</Badge>
              {j.isHonorableMention && (
                <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                  Honorable Mention
                </Badge>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              {j.name}
            </h1>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-4 h-4" />
              <span>{j.country}</span>
              {j.region !== j.country && (
                <>
                  <span className="text-white/50">•</span>
                  <span>{j.region}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 whitespace-pre-line">{j.longDescription}</p>
              </CardContent>
            </Card>

            {/* Tax Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  💰 Bitcoin Taxation
                  {j.tags.noCapitalGains && (
                    <Badge variant="success">0% Capital Gains</Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">{j.notes.tax}</p>
                {j.specialRules.holdingPeriodRule && (
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-800">{j.specialRules.holdingPeriodRule}</p>
                    </div>
                  </div>
                )}
                {j.specialRules.act60 && (
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-green-800">{j.specialRules.act60}</p>
                    </div>
                  </div>
                )}
                {j.specialRules.americanTaxNote && (
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-amber-800">{j.specialRules.americanTaxNote}</p>
                    </div>
                  </div>
                )}
                <div className="flex gap-4 pt-2">
                  <ScoreDisplay label="HODL Tax Score" score={j.scores.taxHodl} />
                  <ScoreDisplay label="Trading Tax Score" score={j.scores.taxTrade} />
                </div>
              </CardContent>
            </Card>

            {/* Visa & Residency */}
            <Card>
              <CardHeader>
                <CardTitle>✈️ Visa & Residency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">{j.notes.visa}</p>
                <div className="flex flex-wrap gap-2">
                  {j.tags.visaRoutes.map((route) => (
                    <Badge key={route} variant="outline">
                      {route.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </Badge>
                  ))}
                </div>
                <ScoreDisplay label="Visa Accessibility" score={j.scores.visa} />
              </CardContent>
            </Card>

            {/* Safety & Stability */}
            <Card>
              <CardHeader>
                <CardTitle>🛡️ Safety & Stability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">{j.notes.safety}</p>
                <div className="flex gap-4">
                  <ScoreDisplay label="Safety" score={j.scores.safety} />
                  <ScoreDisplay label="Political Stability" score={j.scores.stability} />
                </div>
              </CardContent>
            </Card>

            {/* Cost of Living */}
            <Card>
              <CardHeader>
                <CardTitle>💵 Cost of Living</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">{j.notes.cost}</p>
                <div className="flex gap-4">
                  <ScoreDisplay label="Affordability" score={j.scores.costLiving} />
                  <ScoreDisplay label="Housing" score={j.scores.housing} />
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>🎓 Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">{j.notes.education}</p>
                <ScoreDisplay label="Education Quality" score={j.scores.education} />
              </CardContent>
            </Card>

            {/* Bitcoin Community */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  ₿ Bitcoin Community
                  {j.tags.bitcoinLegalTender && (
                    <Badge variant="default">BTC Legal Tender</Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">{j.notes.cryptoCommunity}</p>
                {j.specialRules.legalTender && (
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-800">{j.specialRules.legalTender}</p>
                  </div>
                )}
                {j.specialRules.freeZone && (
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">{j.specialRules.freeZone}</p>
                  </div>
                )}
                <div className="flex gap-4">
                  <ScoreDisplay label="Regulation" score={j.scores.regulation} />
                  <ScoreDisplay label="Bitcoin Community" score={j.scores.cryptoCommunity} />
                </div>
              </CardContent>
            </Card>

            {/* Infrastructure */}
            <Card>
              <CardHeader>
                <CardTitle>🌐 Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">{j.notes.infra}</p>
                <ScoreDisplay label="Infrastructure Score" score={j.scores.infra} />
              </CardContent>
            </Card>

            {/* Lifestyle */}
            <Card>
              <CardHeader>
                <CardTitle>🏖️ Lifestyle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">{j.notes.lifestyle}</p>
                <ScoreDisplay label="Lifestyle Score" score={j.scores.lifestyleBase} />
              </CardContent>
            </Card>

            {/* Image Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>📸 Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <ImageGallery images={j.images} jurisdictionName={j.name} />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Score Chart */}
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Score Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ScoreChart scores={j.scores} />
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Continent</dt>
                    <dd className="font-medium">{getContinentLabel(j.continent)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Climate</dt>
                    <dd className="font-medium">{getClimateLabel(j.tags.climate)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Cost Tier</dt>
                    <dd className="font-medium">{getTierLabel(j.tags.costTier)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Safety</dt>
                    <dd className="font-medium">{getTierLabel(j.tags.safetyTier)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Timezone</dt>
                    <dd className="font-medium text-right">{getTimezoneLabel(j.tags.timezoneBand).split(" ")[0]}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">English-Friendly</dt>
                    <dd className="font-medium">{j.tags.englishFriendly ? "Yes" : "Limited"}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Family-Friendly</dt>
                    <dd className="font-medium">{j.tags.familyFriendly ? "Yes" : "Limited"}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">EU Member</dt>
                    <dd className="font-medium">{j.tags.euMember ? "Yes" : "No"}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Ready to compare?
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Take our quiz to see personalized rankings based on your situation.
                </p>
                <Button asChild className="w-full">
                  <Link href="/quiz">Take the Quiz</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreDisplay({ label, score }: { label: string; score: number }) {
  return (
    <div className="flex-1 p-3 bg-slate-50 rounded-lg">
      <div className="text-xs text-slate-500 mb-1">{label}</div>
      <div className="flex items-center gap-2">
        <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
          {formatScore(score)}
        </div>
        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-500"
            style={{ width: `${(score / 10) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
