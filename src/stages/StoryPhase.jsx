import React, { useState, useEffect, useRef } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { narrate, stopNarration } from '../utils/audio.js';
import { getStoryNarration } from '../utils/narration.js';
import { STORY } from '../utils/lessonScript.js';

const STORY_META = [
  { title: "What Is a Rate?", quote: "120 km in 2 h · 36 L in 3 min · $4.50 for 500 g", bubble: "Two quantities, different units!" },
  { title: "Unit Rates", quote: "120 km ÷ 2 h = 60 km/h", bubble: "Per means for each one!" },
  { title: "The Speed Triangle", quote: "S = D ÷ T · D = S × T · T = D ÷ S", bubble: "Know two, find the third!" },
  { title: "Leo's Best Buy", quote: "90¢ vs 84¢ per 100 g", bubble: "The big box wins!" },
  { title: "Converting Rates", quote: "72 km/h = 72,000 m ÷ 3,600 s = 20 m/s", bubble: "Convert the top AND the bottom!" },
  { title: "Rate Graphs", quote: "Steady rate → straight line through 0", bubble: "Steeper line, faster rate!" },
  { title: "Average Speed", quote: "Total distance ÷ total time", bubble: "Never just average the speeds!" },
  { title: "Step Into the Simulation Lab!", quote: "Ready to become a Rate Ranger?", bubble: "Click below to enter the interactive lab!" }
];

// Body text comes from lessonScript.js so the narration matches it word-for-word
const STORY_SLIDES = STORY_META.map((m, i) => ({
  id: i + 1,
  image: `/assets/images/slide${i + 1}.png`,
  body: STORY[i].body,
  ...m
}));

export function StoryPhase({ muted, onDone, onSlideChange }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const slide = STORY_SLIDES[slideIdx];
  const onSlideChangeRef = useRef(onSlideChange);

  useEffect(() => {
    onSlideChangeRef.current = onSlideChange;
  });

  // Notify parent of slide progress safely
  useEffect(() => {
    if (onSlideChangeRef.current) {
      onSlideChangeRef.current(slideIdx + 1, STORY_SLIDES.length);
    }
  }, [slideIdx]);

  // Narrate active story slide on-screen
  useEffect(() => {
    stopNarration();
    narrate(getStoryNarration(slideIdx), !muted);
    return () => {
      stopNarration();
    };
  }, [slideIdx, muted]);

  const goNext = () => {
    stopNarration();
    if (slideIdx < STORY_SLIDES.length - 1) {
      setSlideIdx(i => i + 1);
    } else {
      onDone();
    }
  };

  const goPrev = () => {
    stopNarration();
    if (slideIdx > 0) setSlideIdx(i => i - 1);
  };

  const replaySlideAudio = () => {
    stopNarration();
    narrate(getStoryNarration(slideIdx), !muted);
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      {/* Main Story Card */}
      <div className="w-full max-w-5xl max-h-[92vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center fade-in-up z-20 my-auto overflow-hidden">
        {/* Left Column: Extra Large Image Illustration */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 h-80 sm:h-[420px] md:h-[450px] w-full bg-black/40 flex items-center justify-center shrink-0">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Column: Extra Large Typography & Callout Pills */}
        <div className="flex flex-col items-start text-left justify-center gap-4.5 overflow-y-auto max-h-full py-1">
          {/* Slide Title & Speaker Button */}
          <div className="w-full flex items-center justify-between gap-3">
            <h2 className="font-display font-900 text-3xl sm:text-4xl md:text-5xl text-amber-400 leading-tight drop-shadow-md">
              {slide.title}
            </h2>
            <button
              onClick={replaySlideAudio}
              title="Listen to story slide"
              className="p-2 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-purple-200 transition shrink-0 cursor-pointer text-base shadow border border-purple-400/40"
            >
              🔊
            </button>
          </div>

          {/* Body Narrative */}
          <p className="text-slate-100 text-xl sm:text-2xl leading-relaxed font-extrabold drop-shadow-sm">
            {slide.body}
          </p>

          {/* Pull-Quote Sparkle Pill */}
          <div className="w-full bg-[#1e0e45] border-2 border-amber-400/60 rounded-2xl px-6 py-3.5 text-center text-amber-300 font-display font-900 text-lg sm:text-xl flex items-center justify-center gap-3 shadow-lg">
            <span className="shrink-0 text-2xl">✨</span>
            <span className="leading-snug">"{slide.quote}"</span>
            <span className="shrink-0 text-2xl">✨</span>
          </div>

          {/* Mascot Speech Bubble Pill */}
          <div className="flex items-center gap-4 w-full mt-1">
            <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-4xl shadow-lg shrink-0">
              🦁
            </div>
            <div className="bg-white text-[#0c031d] rounded-2xl px-7 py-3.5 font-display font-900 text-lg sm:text-xl shadow-xl flex-1 text-left leading-snug">
              {slide.bubble}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Row: Back, Dots, Next */}
      <div className="w-full max-w-4xl flex items-center justify-between mt-3 z-20 shrink-0">
        <button
          onClick={goPrev}
          disabled={slideIdx === 0}
          className={`btn-secondary flex items-center gap-2 font-display font-900 text-sm sm:text-base px-6 py-2.5 rounded-full ${
            slideIdx === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          <span>←</span>
          <span>Previous</span>
        </button>

        {/* Carousel Dots */}
        <div className="flex items-center gap-2">
          {STORY_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                stopNarration();
                setSlideIdx(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === slideIdx ? 'w-8 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.85)]' : 'w-2.5 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="btn-gold flex items-center gap-2 font-display font-900 text-sm sm:text-base px-6 py-2.5 rounded-full shadow-lg cursor-pointer"
        >
          <span>{slideIdx === STORY_SLIDES.length - 1 ? "Enter Lab 🧪" : "Next →"}</span>
        </button>
      </div>
    </div>
  );
}
