import { Suspense } from "react";
import { QuizForm } from "@/components/quiz/QuizForm";

export const metadata = {
  title: "Quiz | Bitcoin Haven Finder",
  description: "Answer a few questions to find your ideal Bitcoin-friendly jurisdiction based on your priorities and situation.",
};

export default function QuizPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Find Your Bitcoin Haven
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Answer these questions about your situation and preferences.
            We&apos;ll provide personalized jurisdiction recommendations.
          </p>
        </div>

        <Suspense fallback={<QuizLoadingSkeleton />}>
          <QuizForm />
        </Suspense>
      </div>
    </div>
  );
}

function QuizLoadingSkeleton() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="h-2 bg-slate-200 rounded animate-pulse mb-4" />
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="space-y-4">
          <div className="h-8 bg-slate-200 rounded animate-pulse w-3/4" />
          <div className="h-4 bg-slate-200 rounded animate-pulse w-full" />
          <div className="space-y-3 mt-6">
            <div className="h-16 bg-slate-100 rounded-lg animate-pulse" />
            <div className="h-16 bg-slate-100 rounded-lg animate-pulse" />
            <div className="h-16 bg-slate-100 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
