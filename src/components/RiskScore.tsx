import { cn } from "@/lib/utils";

interface RiskScoreProps {
  score: number;
}

export const RiskScore = ({ score }: RiskScoreProps) => {
  const getRiskLevel = (score: number) => {
    if (score >= 0.8) return { level: "Extreme", color: "bg-destructive" };
    if (score >= 0.6) return { level: "High", color: "bg-orange-500" };
    if (score >= 0.4) return { level: "Moderate", color: "bg-yellow-500" };
    return { level: "Low", color: "bg-green-500" };
  };

  const { level, color } = getRiskLevel(score);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Risk Assessment</h3>
      <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={cn("absolute h-full transition-all duration-500", color)}
          style={{ width: `${score * 100}%` }}
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-medium">Risk Level: {level}</p>
          <p className="text-sm text-muted-foreground">
            Score: {(score * 100).toFixed(1)}%
          </p>
        </div>
        <div
          className={cn(
            "px-3 py-1 rounded-full text-sm font-medium",
            color,
            "text-white"
          )}
        >
          {level}
        </div>
      </div>
    </div>
  );
};