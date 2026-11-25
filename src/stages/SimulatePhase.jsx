import React, { useState, useEffect, useRef } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { narrate, stopNarration } from '../utils/audio.js';
import { simulateStationIntro, simulateActivityGuidance, simulateActivityHint, feedbackNarration } from '../utils/narration.js';
import { DTGraph, LEG_COLORS } from '../components/RateDiagram.jsx';

/* =========================================================================
   SIMULATION STATIONS — Rates (Grade 8)
   Station 1 · Rate Race        → SEE rates in action, find unit rates
   Station 2 · Best Buy Market  → TRY it: unit prices & the best deal
   Station 3 · Journey Planner  → APPLY: distance–time graphs & average speed
   ========================================================================= */

const near = (str, want, tol = 0.011) => str !== '' && str !== undefined && !Number.isNaN(Number(String(str).replace(/[$,\s]/g, ''))) && Math.abs(Number(String(str).replace(/[$,\s]/g, '')) - want) <= tol;
const money = v => `$${v.toFixed(2)}`;
const fmt = v => (Number.isInteger(v) ? String(v) : String(+v.toFixed(2)));

/* ------------------------------------------------------------------------
   STATION DATA
   ------------------------------------------------------------------------ */
const STATION_ACTIVITIES = {
  1: [
    {
      id: 1,
      title: "Activity 1: Bike Race",
      desc: "Leo cycles 18 kilometres in 1.5 hours. Mia cycles 20 kilometres in 2 hours. Mia goes further, but who is faster?",
      icon: "🚴",
      unitA: 'km', unitT: 'h', rateUnit: 'km/h',
      racers: [
        { name: 'Leo', icon: '🚴', amount: 18, time: 1.5 },
        { name: 'Mia', icon: '🚴‍♀️', amount: 20, time: 2 }
      ],
      hint: "Divide distance by time for each rider: 18 divided by 1.5, and 20 divided by 2. The bigger unit rate is faster."
    },
    {
      id: 2,
      title: "Activity 2: Tap Challenge",
      desc: "Tap A fills 45 litres in 3 minutes. Tap B fills 64 litres in 4 minutes. Which tap pours faster?",
      icon: "🚰",
      unitA: 'L', unitT: 'min', rateUnit: 'L/min',
      racers: [
        { name: 'Tap A', icon: '🚰', amount: 45, time: 3 },
        { name: 'Tap B', icon: '🚿', amount: 64, time: 4 }
      ],
      hint: "Litres per minute equals litres divided by minutes: 45 divided by 3, and 64 divided by 4."
    },
    {
      id: 3,
      title: "Activity 3: Typing Contest",
      desc: "Ava types 270 words in 6 minutes, Noah types 200 words in 4 minutes, and Ethan types 340 words in 8 minutes. Who is the fastest typist?",
      icon: "⌨️",
      unitA: 'words', unitT: 'min', rateUnit: 'words/min',
      racers: [
        { name: 'Ava', icon: '👩‍💻', amount: 270, time: 6 },
        { name: 'Noah', icon: '🧑‍💻', amount: 200, time: 4 },
        { name: 'Ethan', icon: '👨‍💻', amount: 340, time: 8 }
      ],
      hint: "Find words per minute for each typist: 270 divided by 6, 200 divided by 4, and 340 divided by 8."
    }
  ],
  2: [
    {
      id: 1,
      title: "Activity 1: Leo's Cereal",
      desc: "Find the price per 100 grams of each cereal box, then put the best buy in your cart.",
      icon: "🥣",
      per: 100, perLabel: 'per 100 g',
      items: [
        { name: 'Small box', icon: '🥣', amount: 500, size: '500 g', price: 4.5 },
        { name: 'Big box', icon: '🥣', amount: 750, size: '750 g', price: 6.3 }
      ],
      hint: "Price per 100 grams equals price divided by grams times 100: 4 dollars 50 divided by 5, and 6 dollars 30 divided by 7.5."
    },
    {
      id: 2,
      title: "Activity 2: Juice Aisle",
      desc: "Three juice bottles are on the shelf. Find the price per litre of each, then pick the best buy.",
      icon: "🧃",
      per: 1, perLabel: 'per litre',
      items: [
        { name: 'Bottle A', icon: '🧃', amount: 1.5, size: '1.5 L', price: 3.6 },
        { name: 'Bottle B', icon: '🧃', amount: 2, size: '2 L', price: 4.4 },
        { name: 'Bottle C', icon: '🧃', amount: 3, size: '3 L', price: 6.9 }
      ],
      hint: "Price per litre equals price divided by litres: 3 dollars 60 divided by 1.5, 4 dollars 40 divided by 2, and 6 dollars 90 divided by 3."
    },
    {
      id: 3,
      title: "Activity 3: Pen Packs",
      desc: "Pens come in packs of 4, 10, and 6. Find the price per pen of each pack, then pick the best buy.",
      icon: "🖊️",
      per: 1, perLabel: 'per pen',
      items: [
        { name: 'Pack of 4', icon: '🖊️', amount: 4, size: '4 pens', price: 3.2 },
        { name: 'Pack of 10', icon: '🖊️', amount: 10, size: '10 pens', price: 7.5 },
        { name: 'Pack of 6', icon: '🖊️', amount: 6, size: '6 pens', price: 4.68 }
      ],
      hint: "Price per pen equals price divided by number of pens: 3 dollars 20 divided by 4, 7 dollars 50 divided by 10, and 4 dollars 68 divided by 6."
    }
  ],
  3: [
    {
      id: 1,
      title: "Activity 1: Leo's Bike Ride",
      desc: "The graph shows Leo's bike ride. Find his speed in each part of the ride, then his average speed for the whole trip.",
      icon: "🚲",
      mode: 'read',
      maxT: 3, maxD: 40,
      legs: [
        { name: 'A', d: 15, t: 1 },
        { name: 'B', d: 0, t: 0.5 },
        { name: 'C', d: 20, t: 1 }
      ],
      finals: [{ key: 'avg', label: 'Average speed (km/h)', answer: 14 }],
      hint: "Speed equals distance divided by time for each part. A flat line means Leo stopped. Average speed equals 35 kilometres divided by 2.5 hours."
    },
    {
      id: 2,
      title: "Activity 2: Family Road Trip",
      desc: "The family drives 90 kilometres at 60 kilometres per hour in part A, then 60 kilometres at 40 kilometres per hour in part B. Enter the time of each part to draw the graph.",
      icon: "🚗",
      mode: 'build',
      maxT: 3.5, maxD: 160,
      legs: [
        { name: 'A', d: 90, s: 60, t: 1.5 },
        { name: 'B', d: 60, s: 40, t: 1.5 }
      ],
      finals: [{ key: 'avg', label: 'Average speed (km/h)', answer: 50 }],
      hint: "Time equals distance divided by speed: 90 divided by 60, and 60 divided by 40. Then average speed equals 150 kilometres divided by total time."
    },
    {
      id: 3,
      title: "Activity 3: The Express Train",
      desc: "A train travels 120 kilometres at 80 kilometres per hour in part A, stops for half an hour in part B, then travels 150 kilometres at 150 kilometres per hour in part C. Build the graph, then find the average speed.",
      icon: "🚄",
      mode: 'build',
      maxT: 3.5, maxD: 300,
      legs: [
        { name: 'A', d: 120, s: 80, t: 1.5 },
        { name: 'B', d: 0, s: 0, t: 0.5 },
        { name: 'C', d: 150, s: 150, t: 1 }
      ],
      finals: [
        { key: 'avg', label: 'Average speed (km/h)', answer: 90 },
        { key: 'ms', label: 'That speed in m/s', answer: 25 }
      ],
      hint: "Time equals 120 divided by 80 which is 1.5 hours, and 150 divided by 150 which is 1 hour. Total time includes the stop. To convert to metres per second, multiply by 1000 and divide by 3600."
    }
  ]
};

export function SimulatePhase({ muted, onNext }) {
  const [station, setStation] = useState(1);
  const [actIdx, setActIdx] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Station 1
  const [clock, setClock] = useState(0);
  const [running, setRunning] = useState(false);
  const [raced, setRaced] = useState(false);
  const [ans1, setAns1] = useState({});
  const [ok1, setOk1] = useState({});
  const [pick1, setPick1] = useState(null);
  const timer = useRef(null);

  // Station 2
  const [ans2, setAns2] = useState({});
  const [ok2, setOk2] = useState({});
  const [cart, setCart] = useState(null);

  // Station 3
  const [ans3, setAns3] = useState({});
  const [ok3, setOk3] = useState({});

  const currentActivity = STATION_ACTIVITIES[station][actIdx];
  const say = list => {
    stopNarration();
    narrate(list, !muted);
  };

  useEffect(() => {
    clearInterval(timer.current);
    setShowHint(false);
    setFeedback(null);
    setClock(0);
    setRunning(false);
    setRaced(false);
    setAns1({});
    setOk1({});
    setPick1(null);
    setAns2({});
    setOk2({});
    setCart(null);
    setAns3({});
    setOk3({});

    stopNarration();
    narrate(simulateActivityGuidance(station, actIdx), !muted);

    return () => {
      stopNarration();
    };
  }, [station, actIdx, muted]);

  useEffect(() => {
    return () => {
      stopNarration();
      clearInterval(timer.current);
    };
  }, []);

  /* ---------- Station 1: Rate Race ---------- */
  const s1 = station === 1 ? currentActivity : null;
  const maxTime1 = s1 ? Math.max(...s1.racers.map(r => r.time)) : 1;
  const maxAmt1 = s1 ? Math.max(...s1.racers.map(r => r.amount)) : 1;
  const rates1 = s1 ? s1.racers.map(r => r.amount / r.time) : [];
  const best1 = rates1.indexOf(Math.max(...rates1));
  const race = () => {
    clearInterval(timer.current);
    setClock(0);
    setRunning(true);
    setFeedback(null);
    const t0 = performance.now();
    timer.current = setInterval(() => {
      const k = Math.min(1, (performance.now() - t0) / 3500);
      setClock(k * maxTime1);
      if (k >= 1) { clearInterval(timer.current); setRunning(false); setRaced(true); }
    }, 40);
  };
  const check1 = () => {
    const ok = {};
    s1.racers.forEach((r, i) => { ok[i] = near(ans1[i], rates1[i]); });
    setOk1(ok);
    const allRates = s1.racers.every((_, i) => ok[i]);
    if (allRates && pick1 === best1) {
      setFeedback({ success: true, text: `🎉 ${s1.racers.map((r, i) => `${r.name}: ${fmt(rates1[i])} ${s1.rateUnit}`).join(' · ')} → ${s1.racers[best1].name} is fastest!` });
      say(feedbackNarration.splitDone());
    } else {
      setFeedback({ success: false, text: !allRates ? `Unit rate = ${s1.unitA} ÷ ${s1.unitT}. Check the red boxes.` : pick1 === null ? 'Now tap the racer with the biggest unit rate!' : 'Compare the unit rates — the biggest one is the fastest, not the one who went furthest.' });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Station 2: Best Buy Market ---------- */
  const s2 = station === 2 ? currentActivity : null;
  const unit2 = s2 ? s2.items.map(it => (it.price / it.amount) * s2.per) : [];
  const best2 = unit2.indexOf(Math.min(...unit2));
  const priced = s2 ? s2.items.every((_, i) => ok2[i]) : false;
  const check2 = () => {
    const ok = {};
    s2.items.forEach((_, i) => { ok[i] = near(ans2[i], unit2[i], 0.006); });
    setOk2(ok);
    if (s2.items.every((_, i) => ok[i])) {
      setFeedback({ success: true, text: "✅ All unit prices found! Now tap the best buy to put it in your cart." });
    } else {
      setFeedback({ success: false, text: `Unit price = price ÷ amount${s2.per !== 1 ? ` × ${s2.per}` : ''}. Give your answer in dollars, like 0.84.` });
      say(feedbackNarration.tryAgain());
    }
  };
  const buy = i => {
    if (!priced || cart === best2) return;
    setCart(i);
    if (i === best2) {
      setFeedback({ success: true, text: `🛒 ${s2.items[i].name} is the best buy at ${money(unit2[i])} ${s2.perLabel}!` });
      say(feedbackNarration.buildDone());
    } else {
      setFeedback({ success: false, text: `${s2.items[i].name} costs ${money(unit2[i])} ${s2.perLabel}. Is there a cheaper unit price?` });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Station 3: Journey Planner ---------- */
  const s3 = station === 3 ? currentActivity : null;
  const graphLegs = s3 ? s3.legs.map((l, i) => {
    if (s3.mode === 'read' || l.d === 0) return { ...l, name: l.d === 0 ? `${l.name} stop` : l.name };
    const v = Number(ans3[`t${i}`]);
    return { ...l, t: ans3[`t${i}`] !== undefined && ans3[`t${i}`] !== '' && v > 0 && v <= s3.maxT ? v : null };
  }) : [];
  const check3 = () => {
    const ok = {};
    s3.legs.forEach((l, i) => {
      if (s3.mode === 'read') ok[`s${i}`] = near(ans3[`s${i}`], l.d / l.t);
      else if (l.d !== 0) ok[`t${i}`] = near(ans3[`t${i}`], l.t);
    });
    s3.finals.forEach(f => { ok[f.key] = near(ans3[f.key], f.answer); });
    setOk3(ok);
    if (Object.values(ok).every(Boolean)) {
      const D = s3.legs.reduce((a, l) => a + l.d, 0), T = s3.legs.reduce((a, l) => a + l.t, 0);
      setFeedback({ success: true, text: `🎉 Average speed = ${D} km ÷ ${fmt(T)} h = ${fmt(D / T)} km/h${s3.finals.length > 1 ? ` = ${fmt(D / T / 3.6)} m/s` : ''}` });
      say(feedbackNarration.reverseDone());
    } else {
      setFeedback({ success: false, text: Object.entries(ok).some(([k, v]) => !v && k !== 'avg' && k !== 'ms') ? (s3.mode === 'read' ? 'Speed = distance ÷ time for each part. Read the distance and time off the graph.' : 'Time = distance ÷ speed for each part.') : 'Average speed = TOTAL distance ÷ TOTAL time (include any stops).' });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Navigation ---------- */
  const nextActivity = () => {
    stopNarration();
    if (actIdx < 2) {
      setActIdx(i => i + 1);
    } else if (station < 3) {
      setStation(s => s + 1);
      setActIdx(0);
    } else {
      onNext();
    }
  };

  const prevActivity = () => {
    stopNarration();
    if (actIdx > 0) {
      setActIdx(i => i - 1);
    } else if (station > 1) {
      setStation(s => s - 1);
      setActIdx(2);
    }
  };

  const STATIONS = [
    { n: 1, icon: '🏁', name: 'Station 1: Rate Race', sub: 'Race & find unit rates' },
    { n: 2, icon: '🛒', name: 'Station 2: Best Buy Market', sub: 'Unit prices & best deals' },
    { n: 3, icon: '🗺️', name: 'Station 3: Journey Planner', sub: 'Graphs & average speed' }
  ];

  const inputCls = ok =>
    `bg-[#14082c] border-2 rounded-xl px-3 py-2 text-white font-display font-900 text-base text-center outline-none w-24 shadow-inner ${
      ok === true ? 'border-emerald-400' : ok === false ? 'border-rose-400' : 'border-cyan-400/70 focus:border-amber-400'
    }`;

  const toggleHint = () => {
    setShowHint(h => {
      const next = !h;
      stopNarration();
      if (next) {
        narrate(simulateActivityHint(station, actIdx), !muted);
      }
      return next;
    });
  };

  const hintBtn = (
    <button
      onClick={toggleHint}
      className={`font-display font-900 text-xs px-3 py-2 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
        showHint ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-purple-900/80 hover:bg-purple-800 text-purple-200 border border-purple-400/50'
      }`}
    >
      <span>💡</span>
      <span>{showHint ? 'Hide Hint' : 'Hint'}</span>
    </button>
  );

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      {/* Main Simulation Stations Glass Card Container */}
      <div className="w-full max-w-6xl max-h-[94vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md flex flex-col items-center fade-in-up z-20 my-auto overflow-hidden">
        {/* Cyan Accent Bar */}
        <div className="w-24 h-2 bg-cyan-400 rounded-full mb-2.5 shadow-[0_0_18px_rgba(56,189,248,0.85)] shrink-0" />

        {/* Card Header Title */}
        <h2 className="font-display font-900 text-2xl sm:text-3xl text-white flex items-center gap-3 mb-3.5 shrink-0">
          <span className="text-3xl sm:text-4xl">🧪</span>
          <span>Simulation Stations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 w-full items-stretch flex-1 min-h-0 overflow-hidden">
          {/* Left Column: Station Sidebar Tabs */}
          <div className="md:col-span-4 flex flex-col justify-between gap-3 shrink-0">
            <div className="flex flex-col gap-3.5">
              {STATIONS.map(s => (
                <button
                  key={s.n}
                  onClick={() => {
                    stopNarration();
                    setStation(s.n);
                    setActIdx(0);
                  }}
                  className={`p-4 sm:p-5 rounded-2xl border-2 flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                    station === s.n
                      ? 'border-cyan-400 bg-[#1e2852] text-white shadow-[0_0_22px_rgba(56,189,248,0.4)] scale-[1.02]'
                      : 'border-purple-500/25 bg-[#13082b]/80 text-slate-300 hover:border-cyan-400/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 ${
                      station === s.n ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/10 text-white'
                    }`}>
                      {s.icon}
                    </div>
                    <div>
                      <p className="font-display font-900 text-base sm:text-lg leading-tight">{s.name}</p>
                      <p className="text-xs font-extrabold text-slate-300 mt-0.5">{s.sub}</p>
                    </div>
                  </div>
                  <span className="text-base">🔓</span>
                </button>
              ))}
            </div>

            {/* Bottom Left CTA Button */}
            <button
              onClick={() => {
                stopNarration();
                onNext();
              }}
              className="btn-gold font-display font-900 text-base sm:text-lg py-4 px-6 shadow-[0_0_25px_rgba(250,204,21,0.65)] hover:scale-105 transition mt-2 w-full flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Go to Practice Phase!</span>
              <span>→</span>
            </button>
          </div>

          {/* Right Column: Interactive Simulation Box */}
          <div className="md:col-span-8 bg-[#13092e]/95 border-2 border-purple-400/35 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-inner flex-1 min-h-0 overflow-hidden">
            <div className="flex flex-col flex-1 min-h-0 justify-between">
              {/* Header Row */}
              <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-2 shrink-0 gap-3">
                <h3 className="font-display font-900 text-xl sm:text-2xl text-cyan-300 flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">{currentActivity.icon}</span>
                  <span>{currentActivity.title}</span>
                </h3>
                <span className="font-display font-900 text-xs sm:text-sm text-slate-200 bg-white/10 px-4 py-1 rounded-full border border-white/15 shrink-0">
                  Activity {actIdx + 1} of 3
                </span>
              </div>

              {/* Activity Description & Speaker Button */}
              <div className="flex items-start justify-between gap-3 mb-2 shrink-0">
                <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-extrabold flex-1">
                  {currentActivity.desc}
                </p>
                <button
                  onClick={() => {
                    stopNarration();
                    narrate(simulateActivityGuidance(station, actIdx), !muted);
                  }}
                  title="Listen to activity guidance"
                  className="p-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-400/40 text-xs shrink-0 cursor-pointer transition shadow"
                >
                  🔊
                </button>
              </div>

              {/* Optional Hint Banner */}
              {showHint && (
                <div className="w-full bg-[#1b0d42] border border-amber-400/60 rounded-xl p-3 mb-2 flex items-center justify-between gap-3 text-left shadow-lg fade-in-up shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-lg shrink-0">💡</span>
                    <p className="text-amber-200 font-extrabold text-xs sm:text-sm leading-snug">
                      {currentActivity.hint}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      stopNarration();
                      narrate(simulateActivityHint(station, actIdx), !muted);
                    }}
                    title="Listen to hint"
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold p-1.5 rounded-lg shrink-0 cursor-pointer transition shadow text-xs"
                  >
                    🔊
                  </button>
                </div>
              )}

              {/* ===================== STATION 1: RATE RACE ===================== */}
              {station === 1 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex flex-col gap-2 overflow-y-auto">
                    <div className="flex items-center justify-between mt-auto">
                      <span className="bg-[#14082c] rounded-full px-3 py-1 border border-white/10 text-sm font-900 text-amber-300">⏱ {clock.toFixed(1)} {s1.unitT}</span>
                      <button onClick={race} disabled={running} className="btn-gold text-sm font-900 px-5 py-1.5 disabled:opacity-50">{raced ? 'Race again 🔁' : 'Race! 🏁'}</button>
                    </div>
                    {s1.racers.map((r, i) => {
                      const done = Math.min(clock, r.time) / r.time;
                      const amt = r.amount * done;
                      const col = LEG_COLORS[i];
                      return (
                        <div key={r.name} className="bg-[#14082c] rounded-xl px-3 py-1.5 border border-white/10">
                          <div className="flex justify-between text-xs font-900 mb-1">
                            <span style={{ color: col }}>{r.icon} {r.name}</span>
                            <span className="text-slate-300">{fmt(+amt.toFixed(1))} {s1.unitA}{clock >= r.time ? ` ✔ in ${r.time} ${s1.unitT}` : ''}</span>
                          </div>
                          <div className="relative h-6 rounded-full bg-[#1e1342] overflow-visible">
                            <div className="absolute top-0 bottom-0 border-r-2 border-dashed border-white/50" style={{ left: `${(r.amount / maxAmt1) * 100}%` }} />
                            <div className="absolute left-0 top-0 bottom-0 rounded-full" style={{ width: `${(amt / maxAmt1) * 100}%`, background: col, opacity: 0.55 }} />
                            <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-xl" style={{ left: `${Math.max(3, (amt / maxAmt1) * 100)}%` }}>{r.icon}</span>
                          </div>
                        </div>
                      );
                    })}
                    <p className="text-[11px] font-bold text-slate-400 italic text-center mb-auto">The dashed line is each racer's finish. Watch who is ahead at the same time!</p>
                  </div>

                  <div className="w-60 sm:w-64 shrink-0 flex flex-col gap-1.5 min-h-0 overflow-y-auto">
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">① Unit rates ({s1.rateUnit})</p>
                    {s1.racers.map((r, i) => (
                      <div key={r.name} className="bg-[#14082c] rounded-xl px-2 py-1.5 border-2 border-amber-400/40 flex items-center gap-2">
                        <span className="text-xs font-900 flex-1 leading-tight" style={{ color: LEG_COLORS[i] }}>{r.name}<br /><span className="text-slate-400">{r.amount} ÷ {r.time} =</span></span>
                        <input type="number" value={ans1[i] ?? ''} onChange={e => setAns1(a => ({ ...a, [i]: e.target.value }))} className={inputCls(ok1[i]) + ' !w-20 !py-1'} />
                      </div>
                    ))}
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">② Who is fastest?</p>
                    <div className="flex gap-1.5 flex-wrap">
                      {s1.racers.map((r, i) => (
                        <button key={r.name} onClick={() => { setPick1(i); setFeedback(null); }}
                          className={`flex-1 px-2 py-1.5 rounded-xl border-2 text-xs font-900 cursor-pointer ${pick1 === i ? 'bg-amber-400 text-slate-950 border-amber-200' : 'bg-white/5 text-white border-white/20 hover:border-cyan-400'}`}>{r.icon} {r.name}</button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={check1} disabled={!raced} className="btn-gold flex-1 text-sm font-900 px-3 py-2.5 disabled:opacity-40">{raced ? 'Check ✨' : 'Race first!'}</button>
                      {hintBtn}
                    </div>
                  </div>
                </div>
              )}

              {/* ===================== STATION 2: BEST BUY MARKET ===================== */}
              {station === 2 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex flex-col justify-center gap-2 overflow-y-auto">
                    <div className="flex items-end justify-center gap-3 bg-gradient-to-b from-transparent to-amber-900/30 rounded-xl pt-2 pb-0 border-b-4 border-amber-700/60">
                      {s2.items.map((it, i) => {
                        const scale = 0.75 + 0.5 * (it.amount / Math.max(...s2.items.map(x => x.amount)));
                        return (
                          <button key={i} onClick={() => buy(i)} disabled={!priced}
                            className={`relative flex-1 max-w-[150px] rounded-2xl px-2 pt-2 pb-2 mb-2 border-2 flex flex-col items-center transition ${
                              cart === i ? (i === best2 ? 'bg-emerald-950/70 border-emerald-400 scale-105' : 'bg-rose-950/50 border-rose-400') : priced ? 'bg-[#14082c] border-cyan-400/60 hover:-translate-y-1 cursor-pointer' : 'bg-[#14082c] border-white/15 cursor-default'
                            }`}>
                            <span style={{ fontSize: `${2.2 * scale}rem`, lineHeight: 1.1 }}>{it.icon}</span>
                            <span className="text-[11px] font-900 text-slate-300 mt-1">{it.name}</span>
                            <span className="text-sm font-900 text-white">{it.size}</span>
                            <span className="mt-1 px-3 py-0.5 rounded-full text-sm font-900 bg-amber-400 text-slate-950">{money(it.price)}</span>
                            {ok2[i] && <span className="mt-1 text-[11px] font-900 text-emerald-300">{money(unit2[i])} {s2.perLabel}</span>}
                            {priced && cart !== best2 && <span className="text-[10px] font-900 text-cyan-300 mt-0.5">tap to add 🛒</span>}
                          </button>
                        );
                      })}
                    </div>
                    <div className="bg-[#14082c] rounded-xl px-3 py-2 border border-white/10 text-xs font-900 text-slate-200 text-center">
                      🛒 Cart: {cart === null ? <span className="text-slate-400">empty</span> : <span className={cart === best2 ? 'text-emerald-300' : 'text-rose-300'}>{s2.items[cart].name} ({s2.items[cart].size})</span>}
                    </div>
                  </div>

                  <div className="w-60 sm:w-64 shrink-0 flex flex-col gap-1.5 min-h-0 overflow-y-auto">
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">① Unit price ({s2.perLabel})</p>
                    {s2.items.map((it, i) => (
                      <div key={i} className="bg-[#14082c] rounded-xl px-2 py-1.5 border-2 border-amber-400/40 flex items-center gap-2">
                        <span className="text-xs font-900 flex-1 leading-tight" style={{ color: LEG_COLORS[i] }}>{it.name}<br /><span className="text-slate-400">{money(it.price)} for {it.size}</span></span>
                        <span className="text-white font-900">$</span>
                        <input type="number" step="0.01" value={ans2[i] ?? ''} onChange={e => setAns2(a => ({ ...a, [i]: e.target.value }))} className={inputCls(ok2[i]) + ' !w-20 !py-1'} />
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <button onClick={check2} disabled={s2.items.some((_, i) => !ans2[i])} className="btn-gold flex-1 text-sm font-900 px-3 py-2.5 disabled:opacity-40">Check prices ✨</button>
                      {hintBtn}
                    </div>
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">② Tap the best buy on the shelf</p>
                  </div>
                </div>
              )}

              {/* ===================== STATION 3: JOURNEY PLANNER ===================== */}
              {station === 3 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex flex-col items-center justify-center">
                    <svg viewBox="0 0 360 200" className="w-full h-full">
                      <DTGraph legs={graphLegs} maxT={s3.maxT} maxD={s3.maxD} y={16} h={150} />
                    </svg>
                  </div>

                  <div className="w-64 sm:w-72 shrink-0 flex flex-col gap-1.5 min-h-0 overflow-y-auto">
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">① {s3.mode === 'read' ? 'Speed of each part' : 'Time of each part'}</p>
                    {s3.legs.map((l, i) => (
                      l.d === 0 && s3.mode === 'build' ? (
                        <div key={i} className="bg-[#14082c] rounded-xl px-2 py-1.5 border-2 border-slate-500/40 text-xs font-900 text-slate-300">Part {l.name}: stop for {l.t} h</div>
                      ) : (
                        <div key={i} className="bg-[#14082c] rounded-xl px-2 py-1.5 border-2 border-amber-400/40 flex items-center gap-2">
                          <span className="text-xs font-900 flex-1 leading-tight" style={{ color: LEG_COLORS[i] }}>
                            Part {l.name}{s3.mode === 'read' ? ' speed (km/h)' : ' time (h)'}
                            {s3.mode === 'build' && <><br /><span className="text-slate-400">{l.d} km at {l.s} km/h</span></>}
                          </span>
                          <input type="number" step="0.1" value={ans3[`${s3.mode === 'read' ? 's' : 't'}${i}`] ?? ''} onChange={e => { const k = `${s3.mode === 'read' ? 's' : 't'}${i}`; setAns3(a => ({ ...a, [k]: e.target.value })); }}
                            className={inputCls(ok3[`${s3.mode === 'read' ? 's' : 't'}${i}`]) + ' !w-20 !py-1'} />
                        </div>
                      )
                    ))}
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">② Whole journey</p>
                    {s3.finals.map(f => (
                      <div key={f.key} className="bg-[#14082c] rounded-xl px-2 py-1.5 border-2 border-emerald-400/40 flex items-center gap-2">
                        <span className="text-xs font-900 text-emerald-200 flex-1">{f.label}</span>
                        <input type="number" value={ans3[f.key] ?? ''} onChange={e => setAns3(a => ({ ...a, [f.key]: e.target.value }))} onKeyDown={e => e.key === 'Enter' && check3()} className={inputCls(ok3[f.key]) + ' !w-20 !py-1'} />
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <button onClick={check3} className="btn-gold flex-1 text-sm font-900 px-3 py-2.5">Check ✨</button>
                      {hintBtn}
                    </div>
                  </div>
                </div>
              )}

              {/* Hint + feedback strip */}
              {showHint && (
                <div className="p-2.5 mt-2 bg-amber-950/90 border border-amber-400/50 text-amber-200 rounded-xl text-xs sm:text-sm font-bold w-full text-center fade-in-up shrink-0">
                  💡 {currentActivity.hint}
                </div>
              )}
              {feedback && (
                <div className={`p-2.5 mt-2 rounded-2xl text-sm font-900 w-full text-center shadow-xl shrink-0 fade-in-up ${
                  feedback.success ? 'bg-emerald-950/90 text-emerald-300 border-2 border-emerald-400/60' : 'bg-rose-950/90 text-rose-300 border-2 border-rose-400/60'
                }`}>
                  {feedback.text}
                </div>
              )}
            </div>

            {/* Bottom Activity Step Buttons */}
            <div className="flex items-center justify-between border-t border-white/15 pt-3 mt-3 shrink-0">
              <button
                onClick={prevActivity}
                disabled={station === 1 && actIdx === 0}
                className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/25 text-white font-display font-900 text-sm sm:text-base px-6 py-2.5 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
              >
                ← Previous Activity
              </button>

              <button
                onClick={nextActivity}
                className="btn-gold text-sm sm:text-base font-900 px-8 py-2.5 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition cursor-pointer"
              >
                <span>{station === 3 && actIdx === 2 ? 'Go to Practice Phase' : 'Next Activity'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
