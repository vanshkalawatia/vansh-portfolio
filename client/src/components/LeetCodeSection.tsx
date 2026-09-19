import { useEffect, useState } from "react";
import { ExternalLink, CheckCircle2, Code2, Award, Target, Flame } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

interface LeetCodeStats {
  totalSolved: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: string;
  acceptanceRate: string;
  submissions: Array<{
    title: string;
    titleSlug: string;
    lang: string;
    timestamp?: string;
  }>;
}

const DEFAULT_STATS: LeetCodeStats = {
  totalSolved: 19,
  totalEasy: 843,
  totalMedium: 1758,
  totalHard: 775,
  easySolved: 13,
  mediumSolved: 6,
  hardSolved: 0,
  ranking: "#4,612,890",
  acceptanceRate: "68.4%",
  submissions: [
    { title: "Product of Array Except Self", titleSlug: "product-of-array-except-self", lang: "Python3" },
    { title: "Contains Duplicate", titleSlug: "contains-duplicate", lang: "Python3" },
    { title: "Best Time to Buy and Sell Stock", titleSlug: "best-time-to-buy-and-sell-stock", lang: "Python3" },
    { title: "Two Sum", titleSlug: "two-sum", lang: "Python3" },
    { title: "Valid Anagram", titleSlug: "valid-anagram", lang: "Python3" },
  ],
};

export function LeetCodeSection() {
  const [stats, setStats] = useState<LeetCodeStats>(DEFAULT_STATS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchStats() {
      try {
        const [profileRes, solvedRes, subRes] = await Promise.allSettled([
          fetch("https://alfa-leetcode-api.onrender.com/vanshkalawatia"),
          fetch("https://alfa-leetcode-api.onrender.com/vanshkalawatia/solved"),
          fetch("https://alfa-leetcode-api.onrender.com/vanshkalawatia/submission?limit=5"),
        ]);

        if (!mounted) return;

        let totalSolved = DEFAULT_STATS.totalSolved;
        let easySolved = DEFAULT_STATS.easySolved;
        let mediumSolved = DEFAULT_STATS.mediumSolved;
        let hardSolved = DEFAULT_STATS.hardSolved;
        let totalEasy = DEFAULT_STATS.totalEasy;
        let totalMedium = DEFAULT_STATS.totalMedium;
        let totalHard = DEFAULT_STATS.totalHard;
        let ranking = DEFAULT_STATS.ranking;
        let acceptanceRate = DEFAULT_STATS.acceptanceRate;
        let submissions = DEFAULT_STATS.submissions;

        if (solvedRes.status === "fulfilled" && solvedRes.value.ok) {
          const data = await solvedRes.value.json();
          totalSolved = data.solvedProblem ?? totalSolved;
          easySolved = data.easySolved ?? easySolved;
          mediumSolved = data.mediumSolved ?? mediumSolved;
          hardSolved = data.hardSolved ?? hardSolved;
          totalEasy = data.totalEasy ?? totalEasy;
          totalMedium = data.totalMedium ?? totalMedium;
          totalHard = data.totalHard ?? totalHard;
        }

        if (profileRes.status === "fulfilled" && profileRes.value.ok) {
          const data = await profileRes.value.json();
          if (data.ranking) ranking = `#${Number(data.ranking).toLocaleString()}`;
          if (data.acceptanceRate) acceptanceRate = `${data.acceptanceRate}%`;
        }

        if (subRes.status === "fulfilled" && subRes.value.ok) {
          const data = await subRes.value.json();
          if (Array.isArray(data.submission) && data.submission.length > 0) {
            submissions = data.submission.map((s: any) => ({
              title: s.title || s.titleSlug || "Problem",
              titleSlug: s.titleSlug || "",
              lang: s.lang || "Python",
            }));
          }
        }

        setStats({
          totalSolved,
          totalEasy,
          totalMedium,
          totalHard,
          easySolved,
          mediumSolved,
          hardSolved,
          ranking,
          acceptanceRate,
          submissions,
        });
      } catch (err) {
        // Keeps DEFAULT_STATS on error
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchStats();

    return () => {
      mounted = false;
    };
  }, []);

  const totalQuestions = stats.totalEasy + stats.totalMedium + stats.totalHard;
  const pctSolved = totalQuestions > 0 ? ((stats.totalSolved / totalQuestions) * 100).toFixed(1) : "0.5";

  return (
    <div className="space-y-6">
      {/* Top Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border border-border bg-card/60 p-5 rounded-xl flex flex-col justify-between">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="mono-label text-xs">Total Solved</span>
            <Target className="w-4 h-4 text-primary" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold font-mono text-foreground">{stats.totalSolved}</span>
            <span className="text-xs text-muted-foreground">/ {totalQuestions}</span>
          </div>
          <div className="w-full bg-secondary h-1.5 rounded-full mt-3 overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-1000 ease-out rounded-full"
              style={{ width: `${Math.max(4, Number(pctSolved) * 8)}%` }}
            />
          </div>
        </div>

        <div className="border border-border bg-card/60 p-5 rounded-xl flex flex-col justify-between">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="mono-label text-xs">Global Ranking</span>
            <Award className="w-4 h-4 text-accent" />
          </div>
          <div className="mt-3">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-foreground">{stats.ranking}</span>
          </div>
          <span className="mono-label text-[11px] text-muted-foreground mt-2">Active Problem Solver</span>
        </div>

        <div className="border border-border bg-card/60 p-5 rounded-xl flex flex-col justify-between">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="mono-label text-xs">Primary Language</span>
            <Code2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-foreground">Python 3</span>
          </div>
          <span className="mono-label text-[11px] text-emerald-400 mt-2">Clean, optimized solutions</span>
        </div>

        <div className="border border-border bg-card/60 p-5 rounded-xl flex flex-col justify-between">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="mono-label text-xs">Status</span>
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
          </div>
          <div className="mt-3">
            <span className="text-lg font-bold text-foreground">Solving Daily</span>
          </div>
          <span className="mono-label text-[11px] text-accent mt-2">Live API Fetched</span>
        </div>
      </div>

      {/* Difficulty Breakdown Bars */}
      <div className="border border-border bg-card p-6 md:p-8 rounded-2xl">
        <h3 className="mono-label text-xs uppercase tracking-wider text-muted-foreground mb-5">
          Difficulty Breakdown
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Easy */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> Easy
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                <strong className="text-foreground text-sm">{stats.easySolved}</strong> / {stats.totalEasy}
              </span>
            </div>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-400 h-full rounded-full transition-all duration-700"
                style={{ width: `${(stats.easySolved / (stats.totalEasy || 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Medium */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-semibold text-amber-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" /> Medium
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                <strong className="text-foreground text-sm">{stats.mediumSolved}</strong> / {stats.totalMedium}
              </span>
            </div>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div
                className="bg-amber-400 h-full rounded-full transition-all duration-700"
                style={{ width: `${(stats.mediumSolved / (stats.totalMedium || 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Hard */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-semibold text-rose-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400" /> Hard
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                <strong className="text-foreground text-sm">{stats.hardSolved}</strong> / {stats.totalHard}
              </span>
            </div>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div
                className="bg-rose-400 h-full rounded-full transition-all duration-700"
                style={{ width: `${(stats.hardSolved / (stats.totalHard || 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Accepted Submissions */}
      <div className="border border-border bg-card/60 p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="mono-label text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Recent Accepted Submissions
          </h3>
          <span className="mono-label text-[11px] text-muted-foreground">
            {loading ? "Refreshing..." : "Live"}
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {stats.submissions.slice(0, 4).map((sub, idx) => (
            <a
              key={idx}
              href={`https://leetcode.com/problems/${sub.titleSlug}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/60 transition-colors group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                  {sub.title}
                </span>
              </div>
              <span className="mono-label text-[10px] text-accent bg-primary/10 px-2 py-0.5 rounded shrink-0 ml-2">
                {sub.lang}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            Solving data structures and algorithmic challenges on LeetCode with Python.
          </p>
          <a
            href="https://leetcode.com/u/vanshkalawatia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-xs font-semibold hover:border-foreground hover:bg-secondary transition-colors shrink-0"
          >
            <SiLeetcode className="w-3.5 h-3.5 text-amber-500" />
            View LeetCode Profile
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
