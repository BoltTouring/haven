import Link from "next/link";
import { AlertCircle, ArrowRight, Scale, Calculator, Users, Globe, Shield, DollarSign, GraduationCap, Plane, Wifi, Heart, Bitcoin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Methodology | Bitcoin Haven Finder",
  description: "Learn how we score and rank Bitcoin-friendly jurisdictions, including our criteria, weighting system, and special considerations for Americans.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4">Methodology</Badge>
          <h1 className="text-4xl font-bold mb-4">How We Score Jurisdictions</h1>
          <p className="text-xl text-slate-300">
            Our transparent, deterministic scoring model helps you understand exactly
            how we rank Bitcoin-friendly destinations.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Scoring Criteria */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-orange-500" />
            Scoring Criteria
          </h2>
          <p className="text-slate-600 mb-6">
            Each jurisdiction is evaluated on 12 criteria, scored from 0-10.
            Higher scores are better, except for cost (where 10 = most affordable).
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: DollarSign,
                name: "Tax (HODL)",
                desc: "Capital gains tax for long-term holders. 10 = no tax.",
              },
              {
                icon: DollarSign,
                name: "Tax (Trading/Business)",
                desc: "Tax treatment for active trading and Bitcoin income.",
              },
              {
                icon: Scale,
                name: "Regulatory Clarity",
                desc: "Clear, supportive legal framework for Bitcoin.",
              },
              {
                icon: Shield,
                name: "Safety",
                desc: "Personal safety, crime rates, and security.",
              },
              {
                icon: Globe,
                name: "Political Stability",
                desc: "Government stability and press freedom.",
              },
              {
                icon: DollarSign,
                name: "Cost of Living",
                desc: "Daily expenses affordability. 10 = very affordable.",
              },
              {
                icon: DollarSign,
                name: "Housing",
                desc: "Real estate and rent affordability. 10 = very affordable.",
              },
              {
                icon: GraduationCap,
                name: "Education",
                desc: "Quality of schools and international options.",
              },
              {
                icon: Plane,
                name: "Visa Accessibility",
                desc: "Ease of obtaining residency or citizenship.",
              },
              {
                icon: Wifi,
                name: "Infrastructure",
                desc: "Internet, utilities, banking, and transport.",
              },
              {
                icon: Heart,
                name: "Lifestyle",
                desc: "Climate, culture, and quality of life factors.",
              },
              {
                icon: Bitcoin,
                name: "Bitcoin Community",
                desc: "Local adoption, meetups, and blockchain scene.",
              },
            ].map((item) => (
              <Card key={item.name} className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-100">
                    <item.icon className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.name}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Weight Presets */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Scale className="w-6 h-6 text-orange-500" />
            Weight Presets
          </h2>
          <p className="text-slate-600 mb-6">
            Different people have different priorities. Our presets adjust the importance
            of each criterion to match common use cases.
          </p>

          <div className="space-y-4">
            <Card className="p-4 border-orange-200 bg-orange-50">
              <h3 className="font-semibold text-slate-900 mb-2">Balanced</h3>
              <p className="text-sm text-slate-600">
                Equal emphasis on all factors. Good starting point for exploring options.
                Tax, safety, regulation, and visa access weighted similarly.
              </p>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Tax Efficiency</h3>
              <p className="text-sm text-slate-600">
                Prioritizes Bitcoin taxation and regulatory clarity above other factors.
                Best for those who want to minimize tax burden and don&apos;t mind trade-offs
                on lifestyle or safety.
              </p>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Family First</h3>
              <p className="text-sm text-slate-600">
                Heavy emphasis on safety, education, infrastructure, and family-friendliness.
                Tax considerations are secondary to quality of life for families.
              </p>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Safety & Stability</h3>
              <p className="text-sm text-slate-600">
                Prioritizes political stability, rule of law, and personal safety.
                For those who value predictability and security above tax optimization.
              </p>
            </Card>
          </div>
        </section>

        {/* American vs Non-American */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-orange-500" />
            American vs Non-American Logic
          </h2>

          <div className="space-y-6">
            <Card className="p-6 border-blue-200 bg-blue-50">
              <h3 className="font-semibold text-slate-900 mb-3">For U.S. Citizens</h3>
              <p className="text-slate-600 mb-4">
                The U.S. is one of very few countries that taxes citizens on worldwide
                income regardless of residence. This means:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Moving to a zero-tax jurisdiction abroad won&apos;t eliminate federal tax on Bitcoin gains
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <strong>Puerto Rico</strong> receives a +25 point bonus due to Act 60, which allows
                  0% capital gains for bona fide residents while retaining U.S. citizenship
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Other zero-tax jurisdictions receive a -5 penalty (or -3 if they have other
                  strong benefits) since the tax advantage is diminished
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-green-200 bg-green-50">
              <h3 className="font-semibold text-slate-900 mb-3">For Non-Americans</h3>
              <p className="text-slate-600 mb-4">
                Most countries only tax residents, giving non-Americans much more flexibility:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Moving to a zero-tax jurisdiction can eliminate your Bitcoin tax burden entirely
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  No special modifiers applied – all jurisdictions scored on their merits
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  UAE, Singapore, Cayman, and others with zero capital gains are fully effective
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Deal Breakers */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Deal Breakers</h2>
          <p className="text-slate-600 mb-4">
            When you select deal breakers in the quiz, jurisdictions that violate them
            receive a -3 point penalty per violation. This doesn&apos;t completely disqualify
            them, but significantly lowers their ranking.
          </p>
          <p className="text-slate-600">
            Deal breaker penalties are applied after all other scoring, including the
            American modifier. This ensures your absolute requirements are respected.
          </p>
        </section>

        {/* Formula */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Scoring Formula</h2>
          <Card className="p-6 bg-slate-900 text-slate-100 font-mono text-sm">
            <pre className="whitespace-pre-wrap">
{`Final Score =
  (Σ (criterion_score × weight)) / (Σ weights)
  + american_modifier
  - (deal_breaker_count × 3)

Where:
- Each criterion is scored 0-10
- Weights vary by preset (0.3 to 1.5)
- american_modifier = +25 for Puerto Rico, -5/-3 for others
- deal_breaker_count = number of violated requirements`}
            </pre>
          </Card>
        </section>

        {/* Data Sources */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Data Sources</h2>
          <p className="text-slate-600 mb-4">
            Our jurisdiction data is compiled from:
          </p>
          <ul className="space-y-2 text-slate-600 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">•</span>
              Official government tax authority publications
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">•</span>
              Global Peace Index and safety statistics
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">•</span>
              Cost of living databases (Numbeo, Expatistan)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">•</span>
              Education quality indices (PISA, university rankings)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">•</span>
              Bitcoin regulation analysis from legal experts
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">•</span>
              First-hand reports from Bitcoin community members
            </li>
          </ul>
          <p className="text-slate-600">
            Scores are updated periodically as regulations and conditions change.
            Last updated: January 2026.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="pt-6 border-t border-slate-200">
          <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Important Disclaimer</h3>
                <p className="text-slate-600 text-sm mb-3">
                  This tool is for <strong>informational purposes only</strong> and does not
                  constitute legal, tax, or financial advice. Tax laws and regulations change
                  frequently and vary based on individual circumstances.
                </p>
                <p className="text-slate-600 text-sm mb-3">
                  Before making any relocation or tax planning decisions, you should:
                </p>
                <ul className="text-slate-600 text-sm space-y-1 mb-3">
                  <li>• Consult with a qualified tax professional in your home country</li>
                  <li>• Work with an immigration attorney for visa/residency questions</li>
                  <li>• Speak with a local tax advisor in your target jurisdiction</li>
                  <li>• Verify all information independently with official sources</li>
                </ul>
                <p className="text-slate-600 text-sm">
                  The authors and publishers of this tool accept no liability for any
                  decisions made based on this information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to find your Bitcoin haven?
          </h2>
          <p className="text-slate-600 mb-6">
            Now that you understand our methodology, take the quiz to get personalized recommendations.
          </p>
          <Button asChild size="xl">
            <Link href="/quiz" className="gap-2">
              Start the Quiz
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
