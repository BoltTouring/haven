import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Shield,
  DollarSign,
  Scale,
  Users,
  MapPin,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { jurisdictions, getTopJurisdictions } from "@/data/jurisdictions";

export default function Home() {
  const topJurisdictions = getTopJurisdictions().slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-orange-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              2026 Edition
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Find Your Best{" "}
              <span className="text-orange-500">Bitcoin-Friendly</span>{" "}
              Place to Live
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Compare Bitcoin tax policies, safety, cost of living, and lifestyle across
              the world&apos;s top jurisdictions for Bitcoiners. Tailored recommendations
              for Americans and non-Americans alike.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="/quiz" className="gap-2">
                  Start the Quiz
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/results">Browse Jurisdictions</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-200/30 rounded-full blur-3xl" />
        </div>
      </section>

      {/* American vs Non-American Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Your Citizenship Matters
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The U.S. is one of very few countries that taxes citizens on worldwide income
              regardless of residence. This fundamentally changes the optimal strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-2 border-blue-200 bg-blue-50/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    For Americans
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Moving abroad doesn&apos;t escape IRS obligations. Your best option is
                    <strong className="text-blue-700"> Puerto Rico</strong>, where Act 60
                    allows 0% capital gains while retaining citizenship. Other zero-tax
                    jurisdictions won&apos;t eliminate your federal tax burden.
                  </p>
                  <Badge variant="info">Puerto Rico strongly favored</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-green-200 bg-green-50/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-green-100">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    For Non-Americans
                  </h3>
                  <p className="text-slate-600 mb-4">
                    You&apos;re only taxed by your country of residence, giving you much more
                    flexibility. Simply relocating to a zero-tax jurisdiction like
                    <strong className="text-green-700"> UAE, Singapore, or Cayman</strong>
                    {" "}can legally eliminate your Bitcoin tax burden.
                  </p>
                  <Badge variant="success">More options available</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Criteria Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What We Evaluate
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our scoring considers multiple factors beyond just taxes. The best jurisdiction
              depends on your personal priorities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Bitcoin Taxation",
                desc: "Capital gains, trading income, and holding period benefits",
                color: "orange",
              },
              {
                icon: Scale,
                title: "Regulation",
                desc: "Legal clarity, licensing frameworks, and Bitcoin-friendly laws",
                color: "blue",
              },
              {
                icon: Shield,
                title: "Safety & Stability",
                desc: "Crime rates, political stability, and rule of law",
                color: "green",
              },
              {
                icon: MapPin,
                title: "Lifestyle",
                desc: "Cost of living, education, infrastructure, and community",
                color: "purple",
              },
            ].map((item) => (
              <Card key={item.title} className="p-6">
                <div
                  className={`p-3 rounded-lg bg-${item.color}-100 w-fit mb-4`}
                  style={{
                    backgroundColor:
                      item.color === "orange"
                        ? "#ffedd5"
                        : item.color === "blue"
                        ? "#dbeafe"
                        : item.color === "green"
                        ? "#dcfce7"
                        : "#f3e8ff",
                  }}
                >
                  <item.icon
                    className="w-6 h-6"
                    style={{
                      color:
                        item.color === "orange"
                          ? "#ea580c"
                          : item.color === "blue"
                          ? "#2563eb"
                          : item.color === "green"
                          ? "#16a34a"
                          : "#9333ea",
                    }}
                  />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Jurisdictions Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Top Jurisdictions
              </h2>
              <p className="text-slate-600">
                The highest-ranked destinations for Bitcoiners based on our methodology.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/results">View All Jurisdictions</Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topJurisdictions.map((j, index) => (
              <Link key={j.id} href={`/j/${j.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={j.images[0]?.url || "/placeholder.jpg"}
                      alt={j.images[0]?.alt || j.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/90 text-slate-900">
                        #{index + 1}
                      </Badge>
                    </div>
                    {j.tags.noCapitalGains && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="success">0% Tax</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg text-slate-900 mb-1">
                      {j.name}
                    </h3>
                    <p className="text-sm text-slate-500 mb-3">{j.country}</p>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {j.shortBlurb}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Find Your Bitcoin Haven?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Answer a few questions about your situation and preferences, and we&apos;ll
            show you personalized jurisdiction recommendations.
          </p>
          <Button
            asChild
            size="xl"
            className="bg-white text-orange-600 hover:bg-orange-50"
          >
            <Link href="/quiz" className="gap-2">
              Start the Quiz
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 text-sm text-slate-600">
            <AlertCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Disclaimer:</strong> This tool provides general information only
              and is not legal, tax, or financial advice. Tax laws and regulations change
              frequently. Always consult with qualified tax professionals, immigration
              lawyers, and financial advisors before making any relocation decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
