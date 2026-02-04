"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  User,
  Clock,
  Users,
  DollarSign,
  Shield,
  Plane,
  Sun,
  MessageSquare,
  Bitcoin,
  Flag,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import type { QuizAnswers, Priority, BitcoinUsage, ClimatePreference, UrbanPreference, TimezoneBand } from "@/types";
import { defaultQuizAnswers, saveQuizAnswers, loadQuizAnswers, encodeQuizToUrl } from "@/lib/quiz-store";

const TOTAL_STEPS = 11;

interface QuizFormProps {
  initialAnswers?: QuizAnswers;
}

export function QuizForm({ initialAnswers }: QuizFormProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>(() => {
    // Lazy initialization - only runs once on mount
    if (initialAnswers) return initialAnswers;
    // Note: loadQuizAnswers checks for window, returns defaults if not available
    if (typeof window !== 'undefined') {
      return loadQuizAnswers();
    }
    return defaultQuizAnswers;
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Mark as loaded after first render (for SSR hydration)
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Save answers whenever they change (after initial load)
  useEffect(() => {
    if (isLoaded) {
      saveQuizAnswers(answers);
    }
  }, [answers, isLoaded]);

  const updateAnswers = (updates: Partial<QuizAnswers>) => {
    setAnswers((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
    else handleSubmit();
  };

  const prevStep = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleSubmit = () => {
    saveQuizAnswers(answers);
    const queryString = encodeQuizToUrl(answers);
    router.push(`/results?${queryString}`);
  };

  const progress = (step / TOTAL_STEPS) * 100;

  const stepVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-pulse text-slate-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-slate-500 mb-2">
          <span>Step {step} of {TOTAL_STEPS}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <Progress value={progress} />
      </div>

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          variants={stepVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.2 }}
        >
          {step === 1 && (
            <StepCitizenship answers={answers} updateAnswers={updateAnswers} />
          )}
          {step === 2 && (
            <StepTimeHorizon answers={answers} updateAnswers={updateAnswers} />
          )}
          {step === 3 && (
            <StepFamily answers={answers} updateAnswers={updateAnswers} />
          )}
          {step === 4 && (
            <StepBudget answers={answers} updateAnswers={updateAnswers} />
          )}
          {step === 5 && (
            <StepSafety answers={answers} updateAnswers={updateAnswers} />
          )}
          {step === 6 && (
            <StepVisa answers={answers} updateAnswers={updateAnswers} />
          )}
          {step === 7 && (
            <StepLifestyle answers={answers} updateAnswers={updateAnswers} />
          )}
          {step === 8 && (
            <StepLanguageTimezone answers={answers} updateAnswers={updateAnswers} />
          )}
          {step === 9 && (
            <StepBitcoinUsage answers={answers} updateAnswers={updateAnswers} />
          )}
          {step === 10 && (
            <StepStability answers={answers} updateAnswers={updateAnswers} />
          )}
          {step === 11 && (
            <StepDealBreakers answers={answers} updateAnswers={updateAnswers} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={step === 1}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </Button>
        <Button onClick={nextStep} className="gap-2">
          {step === TOTAL_STEPS ? "See Results" : "Continue"}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

// Step Components

interface StepProps {
  answers: QuizAnswers;
  updateAnswers: (updates: Partial<QuizAnswers>) => void;
}

function StepCitizenship({ answers, updateAnswers }: StepProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-orange-100">
          <User className="w-5 h-5 text-orange-600" />
        </div>
        <h2 className="text-xl font-semibold">What is your citizenship status?</h2>
      </div>
      <p className="text-slate-500 mb-6">
        Americans face unique tax considerations due to worldwide taxation. This affects our recommendations significantly.
      </p>
      <div className="grid gap-3">
        {[
          { value: "american", label: "U.S. Citizen", desc: "Subject to worldwide taxation" },
          { value: "non-american", label: "Non-American", desc: "Taxed only by country of residence" },
          { value: "dual", label: "Dual Citizen (including U.S.)", desc: "Treated as American for tax purposes" },
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => updateAnswers({ citizenship: option.value as QuizAnswers["citizenship"] })}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              answers.citizenship === option.value
                ? "border-orange-500 bg-orange-50"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="font-medium">{option.label}</div>
            <div className="text-sm text-slate-500">{option.desc}</div>
          </button>
        ))}
      </div>
    </Card>
  );
}

function StepTimeHorizon({ answers, updateAnswers }: StepProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-orange-100">
          <Clock className="w-5 h-5 text-orange-600" />
        </div>
        <h2 className="text-xl font-semibold">How long do you plan to stay?</h2>
      </div>
      <p className="text-slate-500 mb-6">
        Some tax benefits require minimum residency periods. Longer stays may justify different trade-offs.
      </p>
      <div className="grid gap-3">
        {[
          { value: "3-5y", label: "3-5 Years", desc: "Medium-term relocation" },
          { value: "5-10y", label: "5-10 Years", desc: "Long-term commitment" },
          { value: "forever", label: "Indefinitely / Forever", desc: "Permanent move" },
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => updateAnswers({ timeHorizon: option.value as QuizAnswers["timeHorizon"] })}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              answers.timeHorizon === option.value
                ? "border-orange-500 bg-orange-50"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="font-medium">{option.label}</div>
            <div className="text-sm text-slate-500">{option.desc}</div>
          </button>
        ))}
      </div>
    </Card>
  );
}

function StepFamily({ answers, updateAnswers }: StepProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-orange-100">
          <Users className="w-5 h-5 text-orange-600" />
        </div>
        <h2 className="text-xl font-semibold">Family Situation</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-3">Do you have children?</label>
          <div className="flex gap-3">
            {[
              { value: true, label: "Yes" },
              { value: false, label: "No" },
            ].map((option) => (
              <button
                key={String(option.value)}
                onClick={() => updateAnswers({ hasKids: option.value })}
                className={`flex-1 p-3 rounded-lg border-2 transition-all ${
                  answers.hasKids === option.value
                    ? "border-orange-500 bg-orange-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {answers.hasKids && (
          <>
            <div>
              <label className="block text-sm font-medium mb-2">
                Children&apos;s ages (optional)
              </label>
              <input
                type="text"
                value={answers.kidsAges || ""}
                onChange={(e) => updateAnswers({ kidsAges: e.target.value })}
                placeholder="e.g., 5, 8, 12"
                className="w-full p-3 rounded-lg border-2 border-slate-200 focus:border-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">
                How important is education quality?
              </label>
              <PrioritySelector
                value={answers.schoolingPriority}
                onChange={(v) => updateAnswers({ schoolingPriority: v })}
              />
            </div>
          </>
        )}
      </div>
    </Card>
  );
}

function StepBudget({ answers, updateAnswers }: StepProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-orange-100">
          <DollarSign className="w-5 h-5 text-orange-600" />
        </div>
        <h2 className="text-xl font-semibold">Budget & Cost Tolerance</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-3">
            Cost of living tolerance
          </label>
          <p className="text-sm text-slate-500 mb-3">
            Low = need affordable options, High = can afford premium locations
          </p>
          <PrioritySelector
            value={answers.costTolerance}
            onChange={(v) => updateAnswers({ costTolerance: v })}
            labels={{ low: "Budget-Friendly", medium: "Moderate", high: "Premium OK" }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-3">Housing budget</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "low", label: "$1-2K/mo" },
              { value: "medium", label: "$2-5K/mo" },
              { value: "high", label: "$5-10K/mo" },
              { value: "very-high", label: "$10K+/mo" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => updateAnswers({ housingBudget: option.value as QuizAnswers["housingBudget"] })}
                className={`p-3 rounded-lg border-2 transition-all ${
                  answers.housingBudget === option.value
                    ? "border-orange-500 bg-orange-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function StepSafety({ answers, updateAnswers }: StepProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-orange-100">
          <Shield className="w-5 h-5 text-orange-600" />
        </div>
        <h2 className="text-xl font-semibold">Safety Requirements</h2>
      </div>
      <p className="text-slate-500 mb-6">
        Low tolerance = need very safe locations only. High = flexible on safety.
      </p>
      <PrioritySelector
        value={answers.safetyTolerance}
        onChange={(v) => updateAnswers({ safetyTolerance: v })}
        labels={{ low: "Very Safe Only", medium: "Moderate", high: "Flexible" }}
      />
    </Card>
  );
}

function StepVisa({ answers, updateAnswers }: StepProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-orange-100">
          <Plane className="w-5 h-5 text-orange-600" />
        </div>
        <h2 className="text-xl font-semibold">Visa & Work Flexibility</h2>
      </div>
      <p className="text-slate-500 mb-6">Select all that apply to your situation:</p>
      <div className="space-y-3">
        {[
          {
            key: "canInvest",
            label: "Can invest for residency",
            desc: "Have capital for investment visas ($100K-$2M+)",
          },
          {
            key: "canWorkRemotely",
            label: "Remote worker / Digital nomad",
            desc: "Work online for foreign clients",
          },
          {
            key: "isEntrepreneur",
            label: "Entrepreneur",
            desc: "Plan to start or run a business locally",
          },
        ].map((option) => (
          <button
            key={option.key}
            onClick={() =>
              updateAnswers({
                visaFlexibility: {
                  ...answers.visaFlexibility,
                  [option.key]: !answers.visaFlexibility[option.key as keyof typeof answers.visaFlexibility],
                },
              })
            }
            className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
              answers.visaFlexibility[option.key as keyof typeof answers.visaFlexibility]
                ? "border-orange-500 bg-orange-50"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="font-medium">{option.label}</div>
            <div className="text-sm text-slate-500">{option.desc}</div>
          </button>
        ))}
      </div>
    </Card>
  );
}

function StepLifestyle({ answers, updateAnswers }: StepProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-orange-100">
          <Sun className="w-5 h-5 text-orange-600" />
        </div>
        <h2 className="text-xl font-semibold">Lifestyle Preferences</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-3">Climate preference</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "warm", label: "Warm / Tropical" },
              { value: "temperate", label: "Temperate" },
              { value: "cold", label: "Cold / Alpine" },
              { value: "any", label: "No preference" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => updateAnswers({ climatePreference: option.value as ClimatePreference })}
                className={`p-3 rounded-lg border-2 transition-all ${
                  answers.climatePreference === option.value
                    ? "border-orange-500 bg-orange-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-3">Urban vs Nature</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "urban", label: "Big City" },
              { value: "nature", label: "Nature / Small Town" },
              { value: "mixed", label: "Mix of Both" },
              { value: "any", label: "No preference" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => updateAnswers({ urbanPreference: option.value as UrbanPreference })}
                className={`p-3 rounded-lg border-2 transition-all ${
                  answers.urbanPreference === option.value
                    ? "border-orange-500 bg-orange-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function StepLanguageTimezone({ answers, updateAnswers }: StepProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-orange-100">
          <MessageSquare className="w-5 h-5 text-orange-600" />
        </div>
        <h2 className="text-xl font-semibold">Language & Timezone</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-3">
            Do you require an English-friendly environment?
          </label>
          <div className="flex gap-3">
            {[
              { value: true, label: "Yes, important" },
              { value: false, label: "No, flexible" },
            ].map((option) => (
              <button
                key={String(option.value)}
                onClick={() => updateAnswers({ englishRequired: option.value })}
                className={`flex-1 p-3 rounded-lg border-2 transition-all ${
                  answers.englishRequired === option.value
                    ? "border-orange-500 bg-orange-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-3">Timezone preference</label>
          <div className="grid gap-3">
            {[
              { value: "americas", label: "Americas (UTC-8 to UTC-3)" },
              { value: "europe-africa", label: "Europe/Africa (UTC-1 to UTC+3)" },
              { value: "middle-east", label: "Middle East (UTC+3 to UTC+4)" },
              { value: "asia-pacific", label: "Asia/Pacific (UTC+5 to UTC+12)" },
              { value: "any", label: "No preference" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => updateAnswers({ timezonePreference: option.value as TimezoneBand | "any" })}
                className={`p-3 rounded-lg border-2 text-left transition-all ${
                  answers.timezonePreference === option.value
                    ? "border-orange-500 bg-orange-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function StepBitcoinUsage({ answers, updateAnswers }: StepProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-orange-100">
          <Bitcoin className="w-5 h-5 text-orange-600" />
        </div>
        <h2 className="text-xl font-semibold">How do you use Bitcoin?</h2>
      </div>
      <p className="text-slate-500 mb-6">
        This affects which tax rules matter most for you.
      </p>
      <div className="grid gap-3">
        {[
          {
            value: "hodl",
            label: "Long-term HODL",
            desc: "Buy and hold for years, rarely sell",
          },
          {
            value: "trade",
            label: "Active Trading",
            desc: "Frequent buying/selling, DeFi, staking",
          },
          {
            value: "business",
            label: "Bitcoin Business",
            desc: "Run a Bitcoin-related company or earn in Bitcoin",
          },
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => updateAnswers({ bitcoinUsage: option.value as BitcoinUsage })}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              answers.bitcoinUsage === option.value
                ? "border-orange-500 bg-orange-50"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="font-medium">{option.label}</div>
            <div className="text-sm text-slate-500">{option.desc}</div>
          </button>
        ))}
      </div>
    </Card>
  );
}

function StepStability({ answers, updateAnswers }: StepProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-orange-100">
          <Flag className="w-5 h-5 text-orange-600" />
        </div>
        <h2 className="text-xl font-semibold">Political Stability Priority</h2>
      </div>
      <p className="text-slate-500 mb-6">
        How important is political stability and press freedom to you?
      </p>
      <PrioritySelector
        value={answers.stabilityPriority}
        onChange={(v) => updateAnswers({ stabilityPriority: v })}
        labels={{ low: "Not Critical", medium: "Somewhat Important", high: "Very Important" }}
      />
    </Card>
  );
}

function StepDealBreakers({ answers, updateAnswers }: StepProps) {
  const dealBreakers = [
    { key: "noExtremeHeat", label: "No extreme heat (excludes desert/tropical climates)" },
    { key: "mustHaveTopSchools", label: "Must have top-tier international schools" },
    { key: "mustBeLowTaxCrypto", label: "Must have very low/zero Bitcoin tax" },
    { key: "mustBeVerySafe", label: "Must be a very safe location" },
    { key: "mustBeEnglish", label: "Must be primarily English-speaking" },
    { key: "mustHaveFastInternet", label: "Must have excellent internet infrastructure" },
    { key: "noColdWinters", label: "No cold winters (excludes alpine/temperate)" },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-orange-100">
          <AlertTriangle className="w-5 h-5 text-orange-600" />
        </div>
        <h2 className="text-xl font-semibold">Deal Breakers</h2>
      </div>
      <p className="text-slate-500 mb-6">
        Select any absolute requirements. Jurisdictions that don&apos;t meet these will be penalized in rankings.
      </p>
      <div className="space-y-3">
        {dealBreakers.map((item) => (
          <button
            key={item.key}
            onClick={() =>
              updateAnswers({
                dealBreakers: {
                  ...answers.dealBreakers,
                  [item.key]: !answers.dealBreakers[item.key as keyof typeof answers.dealBreakers],
                },
              })
            }
            className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
              answers.dealBreakers[item.key as keyof typeof answers.dealBreakers]
                ? "border-orange-500 bg-orange-50"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  answers.dealBreakers[item.key as keyof typeof answers.dealBreakers]
                    ? "border-orange-500 bg-orange-500"
                    : "border-slate-300"
                }`}
              >
                {answers.dealBreakers[item.key as keyof typeof answers.dealBreakers] && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <span>{item.label}</span>
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
}

// Helper Components

interface PrioritySelectorProps {
  value: Priority;
  onChange: (value: Priority) => void;
  labels?: { low: string; medium: string; high: string };
}

function PrioritySelector({ value, onChange, labels }: PrioritySelectorProps) {
  const defaultLabels = { low: "Low", medium: "Medium", high: "High" };
  const l = labels || defaultLabels;

  return (
    <div className="flex gap-3">
      {(["low", "medium", "high"] as Priority[]).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`flex-1 p-3 rounded-lg border-2 transition-all ${
            value === p
              ? "border-orange-500 bg-orange-50"
              : "border-slate-200 hover:border-slate-300"
          }`}
        >
          {l[p]}
        </button>
      ))}
    </div>
  );
}
