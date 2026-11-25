/* =========================================================================
   LESSON SCRIPT — single source of truth for every spoken line.
   ---------------------------------------------------------------------------
   • UI components DISPLAY these exact strings.
   • src/utils/narration.js wraps them in styled segments for playback.
   • scripts/generate_audio.js reads ALL_PHRASES to pre-generate the MP3s.
   Because all three read the same strings, on-screen text and audio can
   never drift apart (1:1 parity).

   CONTENT POLICY: only paragraphs and questions are narrated.
   Titles, headings and labels live in the components and are NEVER spoken.
   Plain ESM (no Vite-only APIs) so Node scripts can import it too.
   ========================================================================= */

import { PRACTICE_QUESTIONS } from '../data/practiceQuestions.js';

export const WONDER = {
  paragraph:
    "Leo's favourite cereal comes in two boxes. The small box holds 500 grams and costs $4.50. The big box holds 750 grams and costs $6.30. The big box costs more money, but it also holds more cereal!",
  question:
    "Which box is the better deal? How can we compare two prices fairly when the amounts are different?"
};

export const STORY = [
  {
    body: "A rate compares two quantities measured in different units. A car that travels 120 kilometres in 2 hours, a tap that pours 36 litres in 3 minutes, and a box that costs $4.50 for 500 grams are all rates.",
    style: 'statement'
  },
  {
    body: "A unit rate tells you how much there is for ONE unit. To find it, divide. 120 kilometres in 2 hours is 120 divided by 2, which is 60 kilometres per hour. The word per means for each one.",
    style: 'emphasis'
  },
  {
    body: "Speed is a special rate. Speed equals distance divided by time. If you know two of them, you can find the third: distance equals speed times time, and time equals distance divided by speed.",
    style: 'statement'
  },
  {
    body: "Leo's mystery is solved with unit prices! The small box costs 90 cents per 100 grams. The big box costs only 84 cents per 100 grams. So the big box is the better deal, even though it costs more money!",
    style: 'encouragement'
  },
  {
    body: "Rates can be converted to new units. 72 kilometres per hour means 72,000 metres in 3,600 seconds. Divide, and you get 20 metres per second. Always convert both the top and the bottom units!",
    style: 'thinking'
  },
  {
    body: "When a rate stays the same, a graph of the amount against time is a straight line through zero. A tap pouring 12 litres every minute makes a steady line. A steeper line means a faster rate!",
    style: 'statement'
  },
  {
    body: "Careful with average speed! It is the TOTAL distance divided by the TOTAL time, not the average of the two speeds. 60 kilometres in 1 hour, then 60 kilometres in 2 hours, gives 120 divided by 3, which is 40 kilometres per hour.",
    style: 'emphasis'
  },
  {
    body: "Brilliant! You can now find unit rates, calculate speed, spot the best buy, convert rates and read rate graphs. Step into the lab to race, shop and plan real journeys!",
    style: 'celebration'
  }
];

export const SIMULATE = {
  1: "Press Race to watch both racers go. Then work out each unit rate and decide who is faster!",
  2: "Welcome to the market! Work out the unit price of every item, then put the best buy in your cart.",
  3: "Use the distance-time graph to plan the journey. Find each speed, then work out the average speed for the whole trip!"
};

export const SIMULATE_ACTIVITIES = {
  1: [
    {
      desc: "Leo cycles 18 kilometres in 1.5 hours. Mia cycles 20 kilometres in 2 hours. Mia goes further, but who is faster?",
      hint: "Divide distance by time for each rider: 18 divided by 1.5, and 20 divided by 2. The bigger unit rate is faster."
    },
    {
      desc: "Tap A fills 45 litres in 3 minutes. Tap B fills 64 litres in 4 minutes. Which tap pours faster?",
      hint: "Litres per minute equals litres divided by minutes: 45 divided by 3, and 64 divided by 4."
    },
    {
      desc: "Ava types 270 words in 6 minutes, Noah types 200 words in 4 minutes, and Ethan types 340 words in 8 minutes. Who is the fastest typist?",
      hint: "Find words per minute for each typist: 270 divided by 6, 200 divided by 4, and 340 divided by 8."
    }
  ],
  2: [
    {
      desc: "Find the price per 100 grams of each cereal box, then put the best buy in your cart.",
      hint: "Price per 100 grams equals price divided by grams times 100: 4 dollars 50 divided by 5, and 6 dollars 30 divided by 7.5."
    },
    {
      desc: "Three juice bottles are on the shelf. Find the price per litre of each, then pick the best buy.",
      hint: "Price per litre equals price divided by litres: 3 dollars 60 divided by 1.5, 4 dollars 40 divided by 2, and 6 dollars 90 divided by 3."
    },
    {
      desc: "Pens come in packs of 4, 10, and 6. Find the price per pen of each pack, then pick the best buy.",
      hint: "Price per pen equals price divided by number of pens: 3 dollars 20 divided by 4, 7 dollars 50 divided by 10, and 4 dollars 68 divided by 6."
    }
  ],
  3: [
    {
      desc: "The graph shows Leo's bike ride. Find his speed in each part of the ride, then his average speed for the whole trip.",
      hint: "Speed equals distance divided by time for each part. A flat line means Leo stopped. Average speed equals 35 kilometres divided by 2.5 hours."
    },
    {
      desc: "The family drives 90 kilometres at 60 kilometres per hour in part A, then 60 kilometres at 40 kilometres per hour in part B. Enter the time of each part to draw the graph.",
      hint: "Time equals distance divided by speed: 90 divided by 60, and 60 divided by 40. Then average speed equals 150 kilometres divided by total time."
    },
    {
      desc: "A train travels 120 kilometres at 80 kilometres per hour in part A, stops for half an hour in part B, then travels 150 kilometres at 150 kilometres per hour in part C. Build the graph, then find the average speed.",
      hint: "Time equals 120 divided by 80 which is 1.5 hours, and 150 divided by 150 which is 1 hour. Total time includes the stop. To convert to metres per second, multiply by 1000 and divide by 3600."
    }
  ]
};

export const REFLECT = {
  question:
    "What is a unit rate, and how does it help you find the best buy? Explain it to Robo with your own example!"
};

export const FEEDBACK = {
  splitDone: "Awesome! You found the faster rate!",
  buildDone: "Great shopping! That is the best buy!",
  reverseDone: "Brilliant! Your journey plan is perfect!",
  tryAgain: "Not quite. Try again!",
  practiceCorrect: "Correct! Excellent work with rates!",
  practiceWrong: "Not quite!",
  lessonDone: "Outstanding reflection! Lesson complete!"
};

/** Every phrase that should exist as a pre-generated MP3, with its voice style. */
export const ALL_PHRASES = [
  { text: WONDER.paragraph, style: 'statement' },
  { text: WONDER.question, style: 'question' },
  ...STORY.map(s => ({ text: s.body, style: s.style })),
  { text: SIMULATE[1], style: 'instruction' },
  { text: SIMULATE[2], style: 'instruction' },
  { text: SIMULATE[3], style: 'question' },
  ...Object.values(SIMULATE_ACTIVITIES).flatMap(acts =>
    acts.flatMap(a => [
      { text: a.desc, style: 'instruction' },
      { text: a.hint, style: 'thinking' }
    ])
  ),
  { text: REFLECT.question, style: 'thinking' },
  { text: FEEDBACK.splitDone, style: 'celebration' },
  { text: FEEDBACK.buildDone, style: 'celebration' },
  { text: FEEDBACK.reverseDone, style: 'celebration' },
  { text: FEEDBACK.tryAgain, style: 'encouragement' },
  { text: FEEDBACK.practiceCorrect, style: 'celebration' },
  { text: FEEDBACK.practiceWrong, style: 'encouragement' },
  { text: FEEDBACK.lessonDone, style: 'celebration' },
  ...PRACTICE_QUESTIONS.flatMap(q => [
    { text: q.prompt, style: 'question' },
    { text: q.hint, style: 'thinking' }
  ])
];
