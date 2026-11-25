import React from 'react';

/* =========================================================================
   RATE DIAGRAM — visuals for rates.
   • DTGraph     distance–time graph built from journey legs
   • Products    product cards with amounts and prices
   • Triangle    the D / S × T speed triangle
   • RaceBars    two or three racers' progress
   ========================================================================= */

export const LEG_COLORS = ['#f472b6', '#38bdf8', '#4ade80', '#facc15', '#a78bfa'];

const niceStep = max => [1, 2, 5, 10, 20, 25, 50, 100, 200, 500].find(s => max / s <= 6) || 1000;

/**
 * Distance–time graph. legs: [{ t, d }] (durations / distances of each leg,
 * a leg with d = 0 is a rest). Only legs with a numeric t are drawn.
 */
export function DTGraph({ legs, maxT, maxD, x = 46, y = 14, w = 296, h = 150, unitT = 'h', unitD = 'km', labels = true, fs = 11 }) {
  const X = t => x + (t / maxT) * w;
  const Y = d => y + h - (d / maxD) * h;
  const sT = maxT <= 4 ? 0.5 : niceStep(maxT), sD = niceStep(maxD);
  const pts = [[0, 0]];
  legs.forEach(l => {
    if (l.t === null || l.t === undefined || Number.isNaN(l.t)) return;
    const [pt, pd] = pts[pts.length - 1];
    pts.push([pt + l.t, pd + l.d]);
  });
  return (
    <g>
      {[...Array(Math.floor(maxT / sT) + 1)].map((_, i) => (
        <g key={`t${i}`}>
          <line x1={X(i * sT)} y1={y} x2={X(i * sT)} y2={y + h} stroke="rgba(255,255,255,0.08)" />
          <text x={X(i * sT)} y={y + h + 14} fill="#cbd5e1" fontSize={fs} fontWeight="800" textAnchor="middle">{+(i * sT).toFixed(1)}</text>
        </g>
      ))}
      {[...Array(Math.floor(maxD / sD) + 1)].map((_, i) => (
        <g key={`d${i}`}>
          <line x1={x} y1={Y(i * sD)} x2={x + w} y2={Y(i * sD)} stroke="rgba(255,255,255,0.08)" />
          <text x={x - 6} y={Y(i * sD) + 4} fill="#cbd5e1" fontSize={fs} fontWeight="800" textAnchor="end">{i * sD}</text>
        </g>
      ))}
      <line x1={x} y1={y + h} x2={x + w} y2={y + h} stroke="#e9d5ff" strokeWidth="2" />
      <line x1={x} y1={y} x2={x} y2={y + h} stroke="#e9d5ff" strokeWidth="2" />
      <text x={x + w} y={y + h + 28} fill="#c4b5fd" fontSize={fs} fontWeight="900" textAnchor="end">time ({unitT})</text>
      <text x={x + 6} y={y + 10} fill="#c4b5fd" fontSize={fs} fontWeight="900" textAnchor="start">distance ({unitD})</text>
      {pts.slice(1).map(([t, d], i) => {
        const [t0, d0] = pts[i];
        const col = legs[i].d === 0 ? '#94a3b8' : LEG_COLORS[i % LEG_COLORS.length];
        return (
          <g key={i}>
            <line x1={X(t0)} y1={Y(d0)} x2={X(t)} y2={Y(d)} stroke={col} strokeWidth="4" strokeLinecap="round" />
            {labels && (
              <text x={(X(t0) + X(t)) / 2 - 6} y={(Y(d0) + Y(d)) / 2 - 8} fill={col} fontSize={fs + 2} fontWeight="900" textAnchor="end"
                stroke="#0c0520" strokeWidth="4" paintOrder="stroke">{legs[i].name || String.fromCharCode(65 + i)}</text>
            )}
          </g>
        );
      })}
      {pts.map(([t, d], i) => <circle key={i} cx={X(t)} cy={Y(d)} r="4.5" fill="#fff" stroke="#140a35" strokeWidth="2" />)}
    </g>
  );
}

/** Product cards: items [{ icon, size, price, hl }] */
export function Products({ items, y = 30 }) {
  const n = items.length, w = n === 2 ? 140 : 104, gap = n === 2 ? 30 : 14;
  const x0 = 180 - (n * w + (n - 1) * gap) / 2;
  return (
    <g>
      {items.map((it, i) => {
        const x = x0 + i * (w + gap);
        const col = LEG_COLORS[i % LEG_COLORS.length];
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height="140" rx="16" fill="#14082c" stroke={col} strokeWidth="2.5" />
            <text x={x + w / 2} y={y + 44} fontSize="34" textAnchor="middle">{it.icon}</text>
            <text x={x + w / 2} y={y + 80} fill="#fff" fontSize="15" fontWeight="900" textAnchor="middle">{it.size}</text>
            <rect x={x + 12} y={y + 96} width={w - 24} height="30" rx="15" fill={col} />
            <text x={x + w / 2} y={y + 116} fill="#0c0424" fontSize="15" fontWeight="900" textAnchor="middle">{it.price}</text>
          </g>
        );
      })}
    </g>
  );
}

/** D over S × T triangle with one part highlighted as the unknown. */
export function Triangle({ unknown = 'S', cx = 180, y = 20, s = 160 }) {
  const h = s * 0.86;
  const col = k => (k === unknown ? '#facc15' : '#e9d5ff');
  return (
    <g>
      <path d={`M${cx} ${y} L${cx + s / 2} ${y + h} L${cx - s / 2} ${y + h} Z`} fill="#14082c" stroke="#a78bfa" strokeWidth="3" />
      <line x1={cx - s * 0.3} y1={y + h * 0.55} x2={cx + s * 0.3} y2={y + h * 0.55} stroke="#a78bfa" strokeWidth="3" />
      <line x1={cx} y1={y + h * 0.55} x2={cx} y2={y + h} stroke="#a78bfa" strokeWidth="3" />
      <text x={cx} y={y + h * 0.45} fill={col('D')} fontSize="30" fontWeight="900" textAnchor="middle">D</text>
      <text x={cx - s * 0.2} y={y + h * 0.86} fill={col('S')} fontSize="30" fontWeight="900" textAnchor="middle">S</text>
      <text x={cx + s * 0.2} y={y + h * 0.86} fill={col('T')} fontSize="30" fontWeight="900" textAnchor="middle">T</text>
      <text x={cx} y={y + h + 26} fill="#facc15" fontSize="14" fontWeight="900" textAnchor="middle">find {unknown === 'S' ? 'SPEED' : unknown === 'D' ? 'DISTANCE' : 'TIME'}</text>
    </g>
  );
}

/** Racers: [{ icon, name, label, frac }] where frac is progress 0–1. */
export function RaceBars({ racers, y = 30 }) {
  return (
    <g>
      {racers.map((r, i) => {
        const yy = y + i * (150 / racers.length);
        const col = LEG_COLORS[i % LEG_COLORS.length];
        return (
          <g key={i}>
            <rect x="20" y={yy + 18} width="320" height="14" rx="7" fill="#1e1342" />
            <rect x="20" y={yy + 18} width={Math.max(14, 320 * r.frac)} height="14" rx="7" fill={col} />
            <text x={20 + Math.max(14, 320 * r.frac)} y={yy + 30} fontSize="22" textAnchor="middle">{r.icon}</text>
            <text x="20" y={yy + 10} fill={col} fontSize="13" fontWeight="900">{r.name}: {r.label}</text>
          </g>
        );
      })}
    </g>
  );
}

/** Practice diagram wrapper. */
export function RateDiagram({ diagramData, size = 180 }) {
  if (!diagramData) return null;
  const d = diagramData;
  let body = null;
  if (d.type === 'dt') body = <DTGraph legs={d.legs} maxT={d.maxT} maxD={d.maxD} unitT={d.unitT} unitD={d.unitD} />;
  else if (d.type === 'products') body = <Products items={d.items} />;
  else if (d.type === 'triangle') body = <Triangle unknown={d.unknown} />;
  else if (d.type === 'race') body = <RaceBars racers={d.racers} />;
  if (!body) return null;
  return (
    <div className="flex items-center justify-center my-1">
      <svg width={size * 1.8} height={size} viewBox="0 0 360 200" className="max-w-full drop-shadow-[0_0_18px_rgba(250,204,21,0.25)]">
        {body}
      </svg>
    </div>
  );
}
