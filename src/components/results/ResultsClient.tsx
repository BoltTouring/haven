"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Filter,
  Settings,
  AlertTriangle,
  Check,
  X,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { QuizAnswers, ScoredJurisdiction, WeightPreset, ResultFilters, Continent, Climate, CostTier, TimezoneBand } from "@/types";
import { jurisdictions } from "@/data/jurisdictions";
import { scoreJurisdictions, weightPresets, getRecommendedPreset } from "@/lib/scoring";
import { decodeQuizFromUrl, defaultQuizAnswers, loadQuizAnswers } from "@/lib/quiz-store";
import { formatScore, getScoreColor, getTierLabel, getContinentLabel, getClimateLabel } from "@/lib/utils";

export function ResultsClient() {
  const searchParams = useSearchParams();
  const [answers, setAnswers] = useState<QuizAnswers>(defaultQuizAnswers);
  const [preset, setPreset] = useState<WeightPreset>("balanced");
  const [showFilters, setShowFilters] = useState(false);
  const [showWeights, setShowWeights] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [filters, setFilters] = useState<ResultFilters>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load answers from URL or localStorage
  useEffect(() => {
    const urlAnswers = decodeQuizFromUrl(searchParams.toString());
    if (urlAnswers) {
      setAnswers(urlAnswers);
      setPreset(getRecommendedPreset(urlAnswers));
    } else {
      const stored = loadQuizAnswers();
      setAnswers(stored);
      setPreset(getRecommendedPreset(stored));
    }
    setIsLoaded(true);
  }, [searchParams]);

  // Score and filter jurisdictions
  const scoredJurisdictions = useMemo(() => {
    return scoreJurisdictions(jurisdictions, answers, preset);
  }, [answers, preset]);

  const filteredJurisdictions = useMemo(() => {
    return scoredJurisdictions.filter((j) => {
      if (filters.continent && j.continent !== filters.continent) return false;
      if (filters.climate && j.tags.climate !== filters.climate) return false;
      if (filters.costTier && j.tags.costTier !== filters.costTier) return false;
      if (filters.timezoneBand && j.tags.timezoneBand !== filters.timezoneBand) return false;
      if (filters.englishFriendly && !j.tags.englishFriendly) return false;
      if (filters.familyFriendly && !j.tags.familyFriendly) return false;
      return true;
    });
  }, [scoredJurisdictions, filters]);

  const clearFilters = () => setFilters({});

  if (!isLoaded) {
    return <ResultsLoadingSkeleton />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Your Jurisdiction Rankings
        </h1>
        <p className="text-slate-600">
          {answers.citizenship === "american" || answers.citizenship === "dual" ? (
            <span className="flex items-center gap-2">
              <Badge variant="info">American</Badge>
              Rankings optimized for U.S. citizens (Puerto Rico strongly favored)
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Badge variant="success">Non-American</Badge>
              Rankings based on your preferences and priorities
            </span>
          )}
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Preset Selector */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-600">Preset:</span>
          <div className="flex rounded-lg bg-slate-100 p-1">
            {(["balanced", "tax-efficiency", "family-first", "safety-stability"] as WeightPreset[]).map((p) => (
              <button
                key={p}
                onClick={() => setPreset(p)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  preset === p
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {p === "balanced" ? "Balanced" :
                 p === "tax-efficiency" ? "Tax Focus" :
                 p === "family-first" ? "Family" : "Safety"}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Toggle */}
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="gap-2"
        >
          <Filter className="w-4 h-4" />
          Filters
          {Object.keys(filters).length > 0 && (
            <Badge variant="default" className="ml-1">
              {Object.keys(filters).length}
            </Badge>
          )}
        </Button>

        {/* Show Details Toggle */}
        <Button
          variant="outline"
          onClick={() => setShowDetails(!showDetails)}
          className="gap-2"
        >
          <Settings className="w-4 h-4" />
          {showDetails ? "Hide Details" : "Show Details"}
        </Button>

        {/* Retake Quiz Link */}
        <Button asChild variant="ghost">
          <Link href="/quiz">Retake Quiz</Link>
        </Button>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <Card className="mb-6 p-4">
              <div className="flex flex-wrap gap-4">
                {/* Continent Filter */}
                <FilterSelect
                  label="Continent"
                  value={filters.continent || ""}
                  onChange={(v) => setFilters({ ...filters, continent: v as Continent || undefined })}
                  options={[
                    { value: "", label: "All" },
                    { value: "europe", label: "Europe" },
                    { value: "asia", label: "Asia" },
                    { value: "middle-east", label: "Middle East" },
                    { value: "caribbean", label: "Caribbean" },
                    { value: "central-america", label: "Central America" },
                    { value: "north-america", label: "North America" },
                  ]}
                />

                {/* Climate Filter */}
                <FilterSelect
                  label="Climate"
                  value={filters.climate || ""}
                  onChange={(v) => setFilters({ ...filters, climate: v as Climate || undefined })}
                  options={[
                    { value: "", label: "All" },
                    { value: "tropical", label: "Tropical" },
                    { value: "mediterranean", label: "Mediterranean" },
                    { value: "desert", label: "Desert" },
                    { value: "temperate", label: "Temperate" },
                    { value: "alpine", label: "Alpine" },
                    { value: "subtropical", label: "Subtropical" },
                  ]}
                />

                {/* Cost Tier Filter */}
                <FilterSelect
                  label="Cost"
                  value={filters.costTier || ""}
                  onChange={(v) => setFilters({ ...filters, costTier: v as CostTier || undefined })}
                  options={[
                    { value: "", label: "All" },
                    { value: "low", label: "Budget" },
                    { value: "medium", label: "Moderate" },
                    { value: "high", label: "Premium" },
                    { value: "very-high", label: "Luxury" },
                  ]}
                />

                {/* Timezone Filter */}
                <FilterSelect
                  label="Timezone"
                  value={filters.timezoneBand || ""}
                  onChange={(v) => setFilters({ ...filters, timezoneBand: v as TimezoneBand || undefined })}
                  options={[
                    { value: "", label: "All" },
                    { value: "americas", label: "Americas" },
                    { value: "europe-africa", label: "Europe/Africa" },
                    { value: "middle-east", label: "Middle East" },
                    { value: "asia-pacific", label: "Asia/Pacific" },
                  ]}
                />

                {/* Toggle Filters */}
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.englishFriendly || false}
                      onChange={(e) => setFilters({ ...filters, englishFriendly: e.target.checked || undefined })}
                      className="rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                    />
                    <span className="text-sm">English-Friendly</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.familyFriendly || false}
                      onChange={(e) => setFilters({ ...filters, familyFriendly: e.target.checked || undefined })}
                      className="rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                    />
                    <span className="text-sm">Family-Friendly</span>
                  </label>
                </div>

                {/* Clear Filters */}
                {Object.keys(filters).length > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                )}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Grid */}
      <div className="space-y-4">
        {filteredJurisdictions.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-slate-600">No jurisdictions match your filters.</p>
            <Button variant="link" onClick={clearFilters}>Clear filters</Button>
          </Card>
        ) : (
          filteredJurisdictions.map((j, index) => (
            <JurisdictionCard
              key={j.id}
              jurisdiction={j}
              rank={index + 1}
              showDetails={showDetails}
              isAmerican={answers.citizenship === "american" || answers.citizenship === "dual"}
            />
          ))
        )}
      </div>
    </div>
  );
}

interface JurisdictionCardProps {
  jurisdiction: ScoredJurisdiction;
  rank: number;
  showDetails: boolean;
  isAmerican: boolean;
}

function JurisdictionCard({ jurisdiction: j, rank, showDetails, isAmerican }: JurisdictionCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className={`overflow-hidden transition-all ${
      rank <= 3 ? "border-orange-200 shadow-md" : ""
    }`}>
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <Link href={`/j/${j.slug}`} className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0">
          <Image
            src={j.images[0]?.url || "/placeholder.jpg"}
            alt={j.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge className={`${
              rank === 1 ? "bg-yellow-400 text-yellow-900" :
              rank === 2 ? "bg-slate-300 text-slate-800" :
              rank === 3 ? "bg-orange-400 text-orange-900" :
              "bg-white/90 text-slate-900"
            }`}>
              #{rank}
            </Badge>
          </div>
        </Link>

        {/* Content */}
        <div className="flex-1 p-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <Link href={`/j/${j.slug}`} className="hover:text-orange-600 transition-colors">
                <h3 className="text-xl font-semibold text-slate-900">{j.name}</h3>
              </Link>
              <p className="text-slate-500">{j.country}</p>
              <p className="text-sm text-slate-600 mt-2 line-clamp-2">{j.shortBlurb}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {j.tags.noCapitalGains && (
                  <Badge variant="success">0% Capital Gains</Badge>
                )}
                {j.tags.bitcoinLegalTender && (
                  <Badge variant="default">BTC Legal Tender</Badge>
                )}
                <Badge variant="outline">{getClimateLabel(j.tags.climate)}</Badge>
                <Badge variant="outline">{getTierLabel(j.tags.costTier)} Cost</Badge>
                {j.tags.englishFriendly && (
                  <Badge variant="secondary">English-Friendly</Badge>
                )}
              </div>
            </div>

            {/* Score */}
            <div className="text-right flex-shrink-0">
              <div className={`text-3xl font-bold ${getScoreColor(j.finalScore)}`}>
                {formatScore(j.finalScore)}
              </div>
              <div className="text-sm text-slate-500">Score</div>
              {j.americanModifier !== 0 && (
                <div className={`text-xs mt-1 ${j.americanModifier > 0 ? "text-green-600" : "text-orange-600"}`}>
                  {j.americanModifier > 0 ? "+" : ""}{j.americanModifier} US modifier
                </div>
              )}
            </div>
          </div>

          {/* Warnings */}
          {j.warnings.length > 0 && (
            <div className="mt-4 p-3 bg-amber-50 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-800">
                  {j.warnings.map((w, i) => (
                    <p key={i}>{w}</p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Matched Preferences */}
          {j.matchedPreferences.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {j.matchedPreferences.slice(0, 5).map((m, i) => (
                <span key={i} className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2 py-1 rounded-full">
                  <Check className="w-3 h-3" />
                  {m}
                </span>
              ))}
            </div>
          )}

          {/* Expandable Details */}
          {showDetails && (
            <div className="mt-4">
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900"
              >
                {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {expanded ? "Hide score breakdown" : "Show score breakdown"}
              </button>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 grid gap-2">
                      {j.scoreBreakdown.map((item) => (
                        <div key={item.criterion} className="flex items-center gap-2">
                          <span className="text-sm text-slate-600 w-40">{item.criterion}</span>
                          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-orange-500 score-bar"
                              style={{ width: `${(item.rawScore / 10) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium w-8 text-right">{formatScore(item.rawScore)}</span>
                          {item.userMatch && <Check className="w-4 h-4 text-green-500" />}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* View Details Link */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <Link href={`/j/${j.slug}`}>
              <Button variant="outline" size="sm">
                View Full Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

interface FilterSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

function FilterSelect({ label, value, onChange, options }: FilterSelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-slate-500">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

function ResultsLoadingSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="h-8 w-64 bg-slate-200 rounded animate-pulse mb-2" />
        <div className="h-4 w-96 bg-slate-200 rounded animate-pulse" />
      </div>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="flex gap-4">
              <div className="w-48 h-32 bg-slate-200 rounded animate-pulse" />
              <div className="flex-1 space-y-3">
                <div className="h-6 w-48 bg-slate-200 rounded animate-pulse" />
                <div className="h-4 w-32 bg-slate-200 rounded animate-pulse" />
                <div className="h-4 w-full bg-slate-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
