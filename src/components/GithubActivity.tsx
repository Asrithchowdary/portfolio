import { useEffect, useMemo, useState } from "react";
import { profile } from "../data/profile";

interface Day {
  date: string;
  count: number;
  level: number;
}

const COLORS = ["#262626", "#4a4a4a", "#757575", "#a3a3a3", "#ffffff"];
const SIZE = 11;
const GAP = 3.5;

export default function GithubActivity() {
  const [days, setDays] = useState<Day[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let active = true;
    fetch(`https://github-contributions-api.jogruber.de/v4/${profile.githubUser}?y=last`)
      .then((r) => {
        if (!r.ok) throw new Error("request failed");
        return r.json();
      })
      .then((data) => {
        if (!active) return;
        const list: Day[] = data.contributions ?? [];
        setDays(list);
        setTotal(data.total?.lastYear ?? list.reduce((s, d) => s + d.count, 0));
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const weeks = useMemo(() => {
    if (days.length === 0) return [];
    const pad = new Date(days[0].date).getDay();
    const cells: (Day | null)[] = [...Array(pad).fill(null), ...days];
    const out: (Day | null)[][] = [];
    for (let i = 0; i < cells.length; i += 7) out.push(cells.slice(i, i + 7));
    return out;
  }, [days]);

  if (weeks.length === 0) return null;

  const width = weeks.length * (SIZE + GAP);
  const height = 7 * (SIZE + GAP);

  return (
    <section className="github">
      <div className="dashed-card gh-card">
        <svg className="gh-svg" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
          {weeks.map((week, x) =>
            week.map((d, y) =>
              d ? (
                <rect
                  key={d.date}
                  x={x * (SIZE + GAP)}
                  y={y * (SIZE + GAP)}
                  width={SIZE}
                  height={SIZE}
                  rx={2}
                  fill={COLORS[d.level] ?? COLORS[0]}
                >
                  <title>{`${d.count} contribution${d.count === 1 ? "" : "s"} on ${d.date}`}</title>
                </rect>
              ) : null
            )
          )}
        </svg>
        <div className="gh-footer">
          <span>This year, I made {total} contributions</span>
          <span className="gh-legend">
            Less {COLORS.map((c) => <i key={c} style={{ background: c }} />)} More
          </span>
        </div>
      </div>
    </section>
  );
}