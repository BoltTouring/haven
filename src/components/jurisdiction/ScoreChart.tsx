"use client";

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { JurisdictionScores } from "@/types";
import { formatScore, getScoreBgColor } from "@/lib/utils";

interface ScoreChartProps {
  scores: JurisdictionScores;
}

const scoreLabels: Record<keyof JurisdictionScores, string> = {
  taxHodl: "Tax (HODL)",
  taxTrade: "Tax (Trade)",
  regulation: "Regulation",
  safety: "Safety",
  stability: "Stability",
  costLiving: "Cost of Living",
  housing: "Housing",
  education: "Education",
  visa: "Visa Access",
  infra: "Infrastructure",
  lifestyleBase: "Lifestyle",
  cryptoCommunity: "Bitcoin Community",
};

export function ScoreChart({ scores }: ScoreChartProps) {
  // Prepare data for charts
  const radarData = Object.entries(scores).map(([key, value]) => ({
    subject: scoreLabels[key as keyof JurisdictionScores],
    value,
    fullMark: 10,
  }));

  const barData = Object.entries(scores)
    .map(([key, value]) => ({
      name: scoreLabels[key as keyof JurisdictionScores],
      score: value,
      key,
    }))
    .sort((a, b) => b.score - a.score);

  // Calculate average score
  const avgScore = Object.values(scores).reduce((sum, val) => sum + val, 0) / Object.values(scores).length;

  return (
    <div>
      {/* Average Score Display */}
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-slate-900">{formatScore(avgScore)}</div>
        <div className="text-sm text-slate-500">Average Score</div>
      </div>

      <Tabs defaultValue="bar" className="w-full">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="bar" className="flex-1">Bar Chart</TabsTrigger>
          <TabsTrigger value="radar" className="flex-1">Radar</TabsTrigger>
        </TabsList>

        <TabsContent value="bar">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
              >
                <XAxis type="number" domain={[0, 10]} tick={{ fontSize: 12 }} />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 11 }}
                  width={75}
                />
                <Tooltip
                  formatter={(value) => [formatScore(Number(value) || 0), "Score"]}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                  {barData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.score >= 8
                          ? "#22c55e"
                          : entry.score >= 6
                          ? "#eab308"
                          : entry.score >= 4
                          ? "#f97316"
                          : "#ef4444"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>

        <TabsContent value="radar">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fontSize: 10, fill: "#64748b" }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 10]}
                  tick={{ fontSize: 10 }}
                />
                <Radar
                  name="Score"
                  dataKey="value"
                  stroke="#f97316"
                  fill="#f97316"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Tooltip
                  formatter={(value) => [formatScore(Number(value) || 0), "Score"]}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
      </Tabs>

      {/* Score List (Mobile friendly) */}
      <div className="mt-4 space-y-2 md:hidden">
        {barData.map((item) => (
          <div key={item.key} className="flex items-center gap-2">
            <span className="text-xs text-slate-500 w-24 flex-shrink-0">{item.name}</span>
            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(item.score / 10) * 100}%`,
                  backgroundColor:
                    item.score >= 8
                      ? "#22c55e"
                      : item.score >= 6
                      ? "#eab308"
                      : item.score >= 4
                      ? "#f97316"
                      : "#ef4444",
                }}
              />
            </div>
            <span className="text-xs font-medium w-6 text-right">{formatScore(item.score)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
