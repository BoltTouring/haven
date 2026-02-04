import { Suspense } from "react";
import { ResultsClient } from "@/components/results/ResultsClient";

export const metadata = {
  title: "Results | Bitcoin Haven Finder",
  description: "View your personalized jurisdiction rankings based on your priorities and situation.",
};

export default function ResultsPage() {
  return (
    <Suspense fallback={<ResultsLoadingSkeleton />}>
      <ResultsClient />
    </Suspense>
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
