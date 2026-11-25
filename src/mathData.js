/* =========================================================================
   MATH DATA & PROCEDURAL QUESTION GENERATOR
   Procedurally generates Grade 8 "Rates" questions.
   Answers are built first, then the question is made from them, so every
   answer is exact. Each question carries diagram data for <RateDiagram/>.
   ========================================================================= */

export const WESTERN_NAMES = [
  "Leo", "Emma", "Alex", "Oliver", "Sophia", "Jack", "Maya", "Lucas",
  "Ethan", "Chloe", "Noah", "Liam", "Harper", "Ava", "Mason", "Ella",
  "James", "Mia", "Logan", "Charlotte"
];

export const PRACTICE_WORLDS = [
  { id: 0, name: "Unit Rate Road", icon: "🛣️", range: "Q1–10", difficulty: 1 },
  { id: 1, name: "Per Plaza", icon: "🏪", range: "Q11–20", difficulty: 1 },
  { id: 2, name: "Speed Street", icon: "🏎️", range: "Q21–30", difficulty: 2 },
  { id: 3, name: "Distance Docks", icon: "⚓", range: "Q31–40", difficulty: 2 },
  { id: 4, name: "Time Tower", icon: "⏰", range: "Q41–50", difficulty: 2 },
  { id: 5, name: "Bargain Bazaar", icon: "🛒", range: "Q51–60", difficulty: 3 },
  { id: 6, name: "Convert Cove", icon: "🔄", range: "Q61–70", difficulty: 3 },
  { id: 7, name: "Graph Gardens", icon: "📈", range: "Q71–80", difficulty: 3 },
  { id: 8, name: "Average Avenue", icon: "🚗", range: "Q81–90", difficulty: 4 },
  { id: 9, name: "Rate Champion", icon: "🏆", range: "Q91–100", difficulty: 4 }
];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const shuffle = a => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const r2 = v => Math.round(v * 100) / 100;
const fmt = v => (Number.isInteger(r2(v)) ? String(r2(v)) : String(r2(v)));
const money = v => `$${r2(v).toFixed(2)}`;

const RULES = {
  unit: "✦ UNIT RATE = AMOUNT ÷ UNITS",
  scale: "✦ FIND THE RATE FOR 1 FIRST",
  speed: "✦ SPEED = DISTANCE ÷ TIME",
  dist: "✦ DISTANCE = SPEED × TIME",
  time: "✦ TIME = DISTANCE ÷ SPEED",
  best: "✦ LOWEST UNIT PRICE WINS",
  convert: "✦ CONVERT TOP AND BOTTOM",
  graph: "✦ STEEPER LINE = FASTER",
  avg: "✦ TOTAL DISTANCE ÷ TOTAL TIME"
};

/** Four distinct option labels from numbers (first = correct). */
function numOpts(correct, cands, label = fmt) {
  const out = [label(correct)];
  for (const c of cands) {
    if (!Number.isFinite(c) || c <= 0) continue;
    const l = label(c);
    if (!out.includes(l)) out.push(l);
    if (out.length === 4) return out;
  }
  for (let k = 1; out.length < 4; k++) {
    for (const c of [correct + k, correct * (1 + k / 10), correct - k]) {
      if (c > 0 && out.length < 4) { const l = label(c); if (!out.includes(l)) out.push(l); }
    }
  }
  return out;
}

const UNIT_CONTEXTS = [
  { make: () => { const per = pick([1.25, 1.5, 2.4, 3.2, 0.85, 4.5]); const n = randInt(3, 9); return { text: `${n} notebooks cost ${money(per * n)}. What is the cost of ONE notebook?`, ans: per, n, total: per * n, lab: money }; } },
  { make: () => { const per = pick([12, 14, 15, 16, 18, 20]); const n = randInt(3, 9); return { text: `NAME earns ${money(per * n)} for ${n} hours of work. How much does NAME earn per hour?`, ans: per, n, total: per * n, lab: money }; } },
  { make: () => { const per = pick([6, 8, 9, 12, 15]); const n = randInt(2, 6); return { text: `A printer prints ${per * n} pages in ${n} minutes. How many pages does it print per minute?`, ans: per, n, total: per * n, lab: v => `${fmt(v)} pages/min` }; } },
  { make: () => { const per = pick([2.5, 3.2, 4.8, 5.5, 6.4]); const n = randInt(2, 5); return { text: `${n} kg of apples cost ${money(per * n)}. What is the price per kilogram?`, ans: per, n, total: per * n, lab: v => `${money(v)}/kg` }; } },
  { make: () => { const per = pick([45, 60, 72, 75, 80]); const n = randInt(2, 6); return { text: `A heart beats ${per * n} times in ${n} minutes. How many beats is that per minute?`, ans: per, n, total: per * n, lab: v => `${fmt(v)} beats/min` }; } }
];

const SHOP = [
  { what: 'rice', icon: '🍚', unit: 'kg', sizes: [[1, 2], [2, 5], [5, 10]] },
  { what: 'milk', icon: '🥛', unit: 'L', sizes: [[1, 2], [2, 3], [1.5, 4]] },
  { what: 'yoghurt', icon: '🥣', unit: 'g', sizes: [[200, 500], [400, 1000], [250, 750]] },
  { what: 'apples', icon: '🍎', unit: 'apples', sizes: [[4, 6], [6, 10], [5, 12]] }
];

/**
 * Generate a procedural question for a given world
 */
export function makeQuestion(worldIndex = 0) {
  const world = PRACTICE_WORLDS[worldIndex] || PRACTICE_WORLDS[0];
  const name = pick(WESTERN_NAMES);
  const diff = world.difficulty;

  const allowed = ['unit', 'unit', 'unit', 'scale', 'scale'];
  if (diff >= 2) allowed.push('speed', 'speed', 'dist', 'dist', 'time', 'time');
  if (diff >= 3) allowed.push('best', 'best', 'convert', 'convert', 'graph', 'graph');
  if (diff >= 4) allowed.push('avg', 'avg', 'avg', 'minutes', 'faster');
  const archetype = pick(allowed);

  let prompt = '', options = [], diagramData = null, explanation = '', rule = RULES.unit;

  switch (archetype) {
    case 'unit': {
      const c = pick(UNIT_CONTEXTS).make();
      prompt = c.text.replace(/NAME/g, name);
      options = numOpts(c.ans, [c.total * c.n, c.ans * 2, c.ans / 2, c.ans + 1, c.total - c.n], c.lab);
      explanation = `Divide: ${fmt(c.total)} ÷ ${c.n} = ${c.lab(c.ans)}.`;
      rule = RULES.unit;
      break;
    }
    case 'scale': {
      const per = pick([3, 4, 5, 6, 8, 12, 15]), t1 = pick([2, 3, 4, 5]), t2 = pick([6, 7, 9, 10, 12, 15]);
      const thing = pick([['A machine makes', 'toys', 'minutes'], ['A tap drips', 'mL of water', 'minutes'], ['A baker bakes', 'cookies', 'hours'], ['A pump moves', 'litres', 'seconds']]);
      const c = per * t2;
      prompt = `${thing[0]} ${per * t1} ${thing[1]} in ${t1} ${thing[2]}. At the same rate, how many ${thing[1]} in ${t2} ${thing[2]}?`;
      options = numOpts(c, [per * t1 * t2, per * t1 + t2, c + per, c - per, per * (t2 - t1)]);
      explanation = `Rate = ${per * t1} ÷ ${t1} = ${per} ${thing[1]} per ${thing[2].slice(0, -1)}. Then ${per} × ${t2} = ${c}.`;
      rule = RULES.scale;
      break;
    }
    case 'speed':
    case 'dist':
    case 'time': {
      const s = pick([12, 15, 18, 20, 40, 45, 50, 60, 64, 72, 75, 80, 90, 100]);
      const t = pick([0.5, 1.5, 2, 2.5, 3, 4, 5]);
      const d = s * t;
      const who = s <= 20 ? pick([`${name} cycles`, `${name} skates`]) : pick(['A car travels', 'A train travels', 'A bus travels', 'A truck travels']);
      if (archetype === 'speed') {
        prompt = `${who} ${fmt(d)} km in ${t} hours. What is the average speed?`;
        options = numOpts(s, [d * t, d / (t + 1), s + 10, s / 2, s * 2], v => `${fmt(v)} km/h`);
        explanation = `Speed = ${fmt(d)} ÷ ${t} = ${s} km/h.`;
        rule = RULES.speed;
      } else if (archetype === 'dist') {
        prompt = `${who} at ${s} km/h for ${t} hours. How far does it go?`;
        options = numOpts(d, [s / t, s + t, d + s, d / 2, s * (t + 1)], v => `${fmt(v)} km`);
        explanation = `Distance = ${s} × ${t} = ${fmt(d)} km.`;
        rule = RULES.dist;
      } else {
        prompt = `${who} ${fmt(d)} km at ${s} km/h. How long does the journey take?`;
        options = numOpts(t, [d * s / 100, t + 1, t * 2, t + 0.5, s / d], v => `${fmt(v)} h`);
        explanation = `Time = ${fmt(d)} ÷ ${s} = ${t} hours.`;
        rule = RULES.time;
      }
      diagramData = { type: 'triangle', unknown: archetype === 'speed' ? 'S' : archetype === 'dist' ? 'D' : 'T' };
      break;
    }
    case 'best': {
      const sh = pick(SHOP);
      const [a1, a2] = pick(sh.sizes);
      const per = sh.unit === 'g' ? 100 : 1;
      let u1, u2;
      do { u1 = pick([0.6, 0.75, 0.8, 0.9, 1.2, 1.5, 1.8, 2.4, 2.5, 3]); u2 = u1 + pick([-0.15, -0.1, -0.05, 0.05, 0.1, 0.2]); } while (u2 <= 0.2);
      u2 = r2(u2);
      const p1 = r2((u1 * a1) / per), p2 = r2((u2 * a2) / per);
      const A = `${a1} ${sh.unit} for ${money(p1)}`, B = `${a2} ${sh.unit} for ${money(p2)}`;
      const realU1 = p1 / a1, realU2 = p2 / a2;
      if (Math.abs(realU1 - realU2) < 1e-9) return makeQuestion(worldIndex);
      const better = realU1 < realU2 ? 'A' : 'B';
      prompt = `${name} compares two packs of ${sh.what}. Pack A: ${A}. Pack B: ${B}. Which pack is the better buy?`;
      diagramData = { type: 'products', items: [{ icon: sh.icon, size: `A: ${a1} ${sh.unit}`, price: money(p1) }, { icon: sh.icon, size: `B: ${a2} ${sh.unit}`, price: money(p2) }] };
      options = [`Pack ${better}`, `Pack ${better === 'A' ? 'B' : 'A'}`, 'They are the same value', 'You need more information'];
      const lab = sh.unit === 'g' ? 'per 100 g' : `per ${sh.unit === 'apples' ? 'apple' : sh.unit}`;
      explanation = `Unit prices: A = ${money(realU1 * per)} ${lab}, B = ${money(realU2 * per)} ${lab}. Pack ${better} is cheaper per unit.`;
      rule = RULES.best;
      break;
    }
    case 'convert': {
      const kind = pick(['kmh2ms', 'ms2kmh', 'lmin2lh', 'mmin2kmh']);
      if (kind === 'kmh2ms') {
        const ms = pick([5, 10, 15, 20, 25, 30]), kmh = ms * 3.6;
        prompt = `Convert ${fmt(kmh)} km/h into metres per second.`;
        options = numOpts(ms, [kmh * 3.6, kmh / 60, kmh * 1000 / 60, ms * 2], v => `${fmt(v)} m/s`);
        explanation = `${fmt(kmh)} km/h = ${fmt(kmh * 1000)} m ÷ 3,600 s = ${ms} m/s.`;
      } else if (kind === 'ms2kmh') {
        const ms = pick([5, 10, 15, 20, 25, 30]), kmh = ms * 3.6;
        prompt = `A cheetah runs at ${ms} m/s. What is this speed in km/h?`;
        options = numOpts(kmh, [ms / 3.6, ms * 60, ms * 36, kmh + 10], v => `${fmt(v)} km/h`);
        explanation = `${ms} m/s = ${ms * 3600} m per hour = ${fmt(kmh)} km/h.`;
      } else if (kind === 'lmin2lh') {
        const lm = pick([4, 6, 8, 12, 15, 25]);
        prompt = `A pump moves ${lm} litres per minute. How many litres per hour is that?`;
        options = numOpts(lm * 60, [lm * 100, lm * 3600, lm * 24, lm / 60], v => `${fmt(v)} L/h`);
        explanation = `There are 60 minutes in an hour: ${lm} × 60 = ${lm * 60} L/h.`;
      } else {
        const mm = pick([60, 80, 100, 120, 150, 200]);
        prompt = `${name} ${mm <= 100 ? 'walks' : 'jogs'} ${mm} metres per minute. What is this speed in km/h?`;
        options = numOpts(mm * 60 / 1000, [mm / 1000, mm * 60, mm / 60, mm * 60 / 100], v => `${fmt(v)} km/h`);
        explanation = `${mm} m/min × 60 = ${mm * 60} m per hour = ${fmt(mm * 60 / 1000)} km/h.`;
      }
      rule = RULES.convert;
      break;
    }
    case 'graph': {
      const legs = [];
      const n = pick([2, 3]);
      for (let i = 0; i < n; i++) {
        const rest = n === 3 && i === 1 && Math.random() < 0.6;
        const t = pick([0.5, 1, 1, 1.5, 2]);
        const s = rest ? 0 : pick([10, 20, 30, 40, 60]);
        legs.push({ name: String.fromCharCode(65 + i), t, d: s * t });
      }
      const k = randInt(0, n - 1);
      const sp = legs[k].d / legs[k].t;
      const maxT = Math.ceil(legs.reduce((a, l) => a + l.t, 0) * 2) / 2 + 0.5;
      const maxD = Math.ceil(legs.reduce((a, l) => a + l.d, 0) / 20) * 20 + 20;
      prompt = `The graph shows ${name}'s journey. What is the speed during part ${legs[k].name}?`;
      diagramData = { type: 'dt', legs, maxT, maxD, unitT: 'h', unitD: 'km' };
      options = numOpts(sp, [legs[k].d, legs[k].d * legs[k].t, sp + 10, sp + 20, sp / 2, 5], v => `${fmt(v)} km/h`);
      if (sp === 0) options[0] = '0 km/h';
      explanation = sp === 0 ? `Part ${legs[k].name} is flat: the distance does not change, so the speed is 0 km/h.` : `Part ${legs[k].name}: ${fmt(legs[k].d)} km in ${legs[k].t} h, so ${fmt(legs[k].d)} ÷ ${legs[k].t} = ${fmt(sp)} km/h.`;
      rule = RULES.graph;
      break;
    }
    case 'avg': {
      for (;;) {
        const s1 = pick([30, 40, 45, 50, 60, 80, 90]), s2 = pick([20, 30, 40, 60, 75, 100, 120]);
        const t1 = pick([0.5, 1, 1.5, 2]), t2 = pick([0.5, 1, 1.5, 2, 2.5]);
        if (s1 === s2) continue;
        const d1 = s1 * t1, d2 = s2 * t2, avg = (d1 + d2) / (t1 + t2);
        if (!Number.isInteger(d1) || !Number.isInteger(d2) || Math.abs(avg * 100 - Math.round(avg * 100)) > 1e-9) continue;
        if (Math.abs(avg - (s1 + s2) / 2) < 1e-9) continue;
        prompt = `${name} drives ${d1} km at ${s1} km/h, then ${d2} km at ${s2} km/h. What is the average speed for the whole journey?`;
        diagramData = { type: 'dt', legs: [{ name: 'A', t: t1, d: d1 }, { name: 'B', t: t2, d: d2 }], maxT: Math.ceil((t1 + t2) * 2) / 2 + 0.5, maxD: Math.ceil((d1 + d2) / 20) * 20 + 20, unitT: 'h', unitD: 'km' };
        options = numOpts(avg, [(s1 + s2) / 2, d1 + d2, (d1 + d2) / 2, avg + 5, avg - 5], v => `${fmt(v)} km/h`);
        explanation = `Times: ${d1} ÷ ${s1} = ${t1} h and ${d2} ÷ ${s2} = ${t2} h. Average = ${d1 + d2} km ÷ ${t1 + t2} h = ${fmt(avg)} km/h (not ${fmt((s1 + s2) / 2)}).`;
        break;
      }
      rule = RULES.avg;
      break;
    }
    case 'minutes': {
      const s = pick([30, 40, 45, 60, 72, 80, 90, 120]);
      const m = pick([10, 15, 20, 25, 30, 40, 45, 50]);
      const d = (s * m) / 60;
      if (!Number.isInteger(d * 2)) return makeQuestion(worldIndex);
      prompt = `A bus travels at ${s} km/h for ${m} minutes. How far does it travel?`;
      options = numOpts(d, [s * m, s * m / 100, s / m, d * 2, d + 5], v => `${fmt(v)} km`);
      explanation = `${m} minutes = ${m} ÷ 60 = ${fmt(m / 60)} h. Distance = ${s} × ${fmt(m / 60)} = ${fmt(d)} km.`;
      rule = RULES.dist;
      break;
    }
    case 'faster': {
      const ms = pick([10, 15, 20, 25]);
      const kmh = ms * 3.6 + pick([-6, -4, -2, 2, 4, 6]);
      const a = `${name}'s scooter: ${ms} m/s`, b = `a moped: ${fmt(kmh)} km/h`;
      const winner = ms * 3.6 > kmh ? `${name}'s scooter` : 'The moped';
      prompt = `Which is faster — ${a} or ${b}?`;
      diagramData = { type: 'race', racers: [{ icon: '🛴', name: 'Scooter', label: `${ms} m/s`, frac: (ms * 3.6) / 120 }, { icon: '🛵', name: 'Moped', label: `${fmt(kmh)} km/h`, frac: kmh / 120 }] };
      diagramData.racers.forEach(r => { r.frac = 0.5; });
      options = [winner, winner === 'The moped' ? `${name}'s scooter` : 'The moped', 'They are the same speed', 'You cannot compare them'];
      explanation = `${ms} m/s × 3.6 = ${fmt(ms * 3.6)} km/h, which is ${ms * 3.6 > kmh ? 'more' : 'less'} than ${fmt(kmh)} km/h.`;
      rule = RULES.convert;
      break;
    }
    default:
      break;
  }

  const target = options[0];
  const shuffled = shuffle(options.slice(0, 4));
  return {
    world,
    name,
    archetype,
    prompt,
    correctIndex: shuffled.indexOf(target),
    correctValue: target,
    options: shuffled,
    diagramData,
    rule,
    explanation
  };
}
