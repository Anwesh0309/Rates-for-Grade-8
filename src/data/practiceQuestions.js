/* =========================================================================
   PRACTICE QUESTIONS BANK — 10 Worlds × 10 Questions = 100 Distinct Questions
   Grade 8 Rates & Unit Rates Curriculum
   Each question contains:
     • id (1 to 100)
     • worldIndex (0 to 9)
     • rule (core concept rule pill)
     • prompt (clean, natural wording for 1:1 on-screen & audio parity)
     • options (4 multiple-choice choices)
     • correctIndex (0 to 3)
     • correctValue (matching option string)
     • hint (pedagogical hint with proper pronunciation)
     • explanation (step-by-step solution)
     • diagramData (optional visual diagram for <RateDiagram/>)
   ========================================================================= */

export const PRACTICE_QUESTIONS = [
  /* ------------------------------------------------------------------------
     WORLD 1: Unit Rate Road (Questions 1 to 10) · Difficulty 1
     Focus: Unit Rate = Amount ÷ Units (cost per item, rate per hour/min)
     ------------------------------------------------------------------------ */
  {
    id: 1,
    worldIndex: 0,
    rule: "✦ UNIT RATE = AMOUNT ÷ UNITS",
    prompt: "5 notebooks cost $15.00. What is the cost of ONE notebook?",
    options: ["$3.00", "$2.50", "$3.50", "$5.00"],
    correctIndex: 0,
    correctValue: "$3.00",
    hint: "Divide the total cost by the number of notebooks: 15 dollars divided by 5.",
    explanation: "Divide: $15.00 ÷ 5 = $3.00 per notebook.",
    diagramData: { type: 'products', items: [{ icon: '📓', size: '5 notebooks', price: '$15.00' }, { icon: '📓', size: '1 notebook', price: '?' }] }
  },
  {
    id: 2,
    worldIndex: 0,
    rule: "✦ UNIT RATE = AMOUNT ÷ UNITS",
    prompt: "A car travels 180 kilometres in 3 hours. What is its speed in kilometres per hour?",
    options: ["60 km/h", "50 km/h", "54 km/h", "70 km/h"],
    correctIndex: 0,
    correctValue: "60 km/h",
    hint: "Divide total distance by total hours: 180 divided by 3.",
    explanation: "Speed = 180 km ÷ 3 hours = 60 km/h.",
    diagramData: { type: 'triangle', unknown: 'S' }
  },
  {
    id: 3,
    worldIndex: 0,
    rule: "✦ UNIT RATE = AMOUNT ÷ UNITS",
    prompt: "A baker bakes 96 muffins in 4 hours. How many muffins does the baker bake per hour?",
    options: ["24 muffins/h", "22 muffins/h", "26 muffins/h", "28 muffins/h"],
    correctIndex: 0,
    correctValue: "24 muffins/h",
    hint: "Divide total muffins by hours: 96 divided by 4.",
    explanation: "Baking rate = 96 ÷ 4 = 24 muffins per hour.",
    diagramData: null
  },
  {
    id: 4,
    worldIndex: 0,
    rule: "✦ UNIT RATE = AMOUNT ÷ UNITS",
    prompt: "A heart beats 360 times in 5 minutes. What is the heart rate in beats per minute?",
    options: ["72 beats/min", "68 beats/min", "75 beats/min", "80 beats/min"],
    correctIndex: 0,
    correctValue: "72 beats/min",
    hint: "Divide total beats by minutes: 360 divided by 5.",
    explanation: "Heart rate = 360 ÷ 5 = 72 beats per minute.",
    diagramData: null
  },
  {
    id: 5,
    worldIndex: 0,
    rule: "✦ UNIT RATE = AMOUNT ÷ UNITS",
    prompt: "Emma earns $120.00 for 8 hours of work. How much does Emma earn per hour?",
    options: ["$15.00/h", "$12.00/h", "$16.00/h", "$18.00/h"],
    correctIndex: 0,
    correctValue: "$15.00/h",
    hint: "Divide total earnings by total hours: 120 dollars divided by 8.",
    explanation: "Hourly rate = $120.00 ÷ 8 = $15.00 per hour.",
    diagramData: null
  },
  {
    id: 6,
    worldIndex: 0,
    rule: "✦ UNIT RATE = AMOUNT ÷ UNITS",
    prompt: "A water tap pours 72 litres of water in 6 minutes. How many litres does it pour per minute?",
    options: ["12 L/min", "10 L/min", "14 L/min", "16 L/min"],
    correctIndex: 0,
    correctValue: "12 L/min",
    hint: "Divide litres by minutes: 72 divided by 6.",
    explanation: "Flow rate = 72 ÷ 6 = 12 litres per minute.",
    diagramData: null
  },
  {
    id: 7,
    worldIndex: 0,
    rule: "✦ UNIT RATE = AMOUNT ÷ UNITS",
    prompt: "A pack of 6 juice boxes costs $9.00. What is the unit price per juice box?",
    options: ["$1.50", "$1.25", "$1.75", "$2.00"],
    correctIndex: 0,
    correctValue: "$1.50",
    hint: "Divide total price by number of boxes: 9 dollars divided by 6.",
    explanation: "Unit price = $9.00 ÷ 6 = $1.50 per juice box.",
    diagramData: { type: 'products', items: [{ icon: '🧃', size: '6 boxes', price: '$9.00' }, { icon: '🧃', size: '1 box', price: '?' }] }
  },
  {
    id: 8,
    worldIndex: 0,
    rule: "✦ UNIT RATE = AMOUNT ÷ UNITS",
    prompt: "A cyclist rides 48 kilometres in 2 hours. What is the cycling speed in kilometres per hour?",
    options: ["24 km/h", "20 km/h", "26 km/h", "28 km/h"],
    correctIndex: 0,
    correctValue: "24 km/h",
    hint: "Divide distance by time: 48 divided by 2.",
    explanation: "Speed = 48 ÷ 2 = 24 km/h.",
    diagramData: { type: 'triangle', unknown: 'S' }
  },
  {
    id: 9,
    worldIndex: 0,
    rule: "✦ UNIT RATE = AMOUNT ÷ UNITS",
    prompt: "A printer prints 150 pages in 5 minutes. What is its printing rate in pages per minute?",
    options: ["30 pages/min", "25 pages/min", "35 pages/min", "40 pages/min"],
    correctIndex: 0,
    correctValue: "30 pages/min",
    hint: "Divide pages by minutes: 150 divided by 5.",
    explanation: "Printing rate = 150 ÷ 5 = 30 pages per minute.",
    diagramData: null
  },
  {
    id: 10,
    worldIndex: 0,
    rule: "✦ UNIT RATE = AMOUNT ÷ UNITS",
    prompt: "A machine produces 420 bottle caps in 7 minutes. How many caps does it produce per minute?",
    options: ["60 caps/min", "55 caps/min", "65 caps/min", "70 caps/min"],
    correctIndex: 0,
    correctValue: "60 caps/min",
    hint: "Divide caps by minutes: 420 divided by 7.",
    explanation: "Production rate = 420 ÷ 7 = 60 caps per minute.",
    diagramData: null
  },

  /* ------------------------------------------------------------------------
     WORLD 2: Per Plaza (Questions 11 to 20) · Difficulty 1
     Focus: Scaling Rates — Find rate for 1 first, then multiply
     ------------------------------------------------------------------------ */
  {
    id: 11,
    worldIndex: 1,
    rule: "✦ FIND THE RATE FOR 1 FIRST",
    prompt: "A machine makes 18 toys in 3 minutes. At this rate, how many toys does it make in 10 minutes?",
    options: ["60 toys", "54 toys", "66 toys", "48 toys"],
    correctIndex: 0,
    correctValue: "60 toys",
    hint: "Find toys per minute first: 18 divided by 3 equals 6. Then multiply 6 by 10.",
    explanation: "Rate = 18 ÷ 3 = 6 toys/min. For 10 minutes: 6 × 10 = 60 toys.",
    diagramData: null
  },
  {
    id: 12,
    worldIndex: 1,
    rule: "✦ FIND THE RATE FOR 1 FIRST",
    prompt: "A car uses 12 litres of petrol to travel 150 kilometres. How much petrol does it need for 300 kilometres?",
    options: ["24 litres", "20 litres", "28 litres", "30 litres"],
    correctIndex: 0,
    correctValue: "24 litres",
    hint: "300 kilometres is double 150 kilometres, so double the 12 litres of petrol.",
    explanation: "300 km ÷ 150 km = 2. Petrol needed = 12 × 2 = 24 litres.",
    diagramData: null
  },
  {
    id: 13,
    worldIndex: 1,
    rule: "✦ FIND THE RATE FOR 1 FIRST",
    prompt: "If 4 tickets to a concert cost $140.00, how much will 7 tickets cost at the same rate?",
    options: ["$245.00", "$210.00", "$280.00", "$235.00"],
    correctIndex: 0,
    correctValue: "$245.00",
    hint: "Find the cost of 1 ticket: 140 divided by 4 equals 35 dollars. Then multiply 35 by 7.",
    explanation: "Cost per ticket = $140 ÷ 4 = $35. For 7 tickets: $35 × 7 = $245.00.",
    diagramData: null
  },
  {
    id: 14,
    worldIndex: 1,
    rule: "✦ FIND THE RATE FOR 1 FIRST",
    prompt: "A worker packs 45 boxes in 5 hours. At the same pace, how many boxes can the worker pack in 8 hours?",
    options: ["72 boxes", "64 boxes", "80 boxes", "75 boxes"],
    correctIndex: 0,
    correctValue: "72 boxes",
    hint: "Calculate boxes packed per hour: 45 divided by 5 equals 9. Then multiply 9 by 8.",
    explanation: "Rate = 45 ÷ 5 = 9 boxes/hour. In 8 hours: 9 × 8 = 72 boxes.",
    diagramData: null
  },
  {
    id: 15,
    worldIndex: 1,
    rule: "✦ FIND THE RATE FOR 1 FIRST",
    prompt: "A chef makes 30 dumplings in 12 minutes. At this rate, how many dumplings can the chef make in 30 minutes?",
    options: ["75 dumplings", "70 dumplings", "80 dumplings", "60 dumplings"],
    correctIndex: 0,
    correctValue: "75 dumplings",
    hint: "Find dumplings per minute: 30 divided by 12 equals 2.5. Then multiply 2.5 by 30.",
    explanation: "Rate = 30 ÷ 12 = 2.5 dumplings/min. In 30 minutes: 2.5 × 30 = 75 dumplings.",
    diagramData: null
  },
  {
    id: 16,
    worldIndex: 1,
    rule: "✦ FIND THE RATE FOR 1 FIRST",
    prompt: "A runner burns 320 calories in 40 minutes of jogging. How many calories are burned in 60 minutes?",
    options: ["480 calories", "450 calories", "500 calories", "420 calories"],
    correctIndex: 0,
    correctValue: "480 calories",
    hint: "Find calories per minute: 320 divided by 40 equals 8. Then multiply 8 by 60.",
    explanation: "Rate = 320 ÷ 40 = 8 cal/min. In 60 minutes: 8 × 60 = 480 calories.",
    diagramData: null
  },
  {
    id: 17,
    worldIndex: 1,
    rule: "✦ FIND THE RATE FOR 1 FIRST",
    prompt: "A garden hose delivers 50 litres of water in 4 minutes. How long will it take to fill a 250-litre pond?",
    options: ["20 minutes", "18 minutes", "25 minutes", "15 minutes"],
    correctIndex: 0,
    correctValue: "20 minutes",
    hint: "Find litres per minute: 50 divided by 4 equals 12.5. Then divide 250 by 12.5.",
    explanation: "Rate = 50 ÷ 4 = 12.5 L/min. Time = 250 ÷ 12.5 = 20 minutes.",
    diagramData: null
  },
  {
    id: 18,
    worldIndex: 1,
    rule: "✦ FIND THE RATE FOR 1 FIRST",
    prompt: "If 8 kilograms of apples cost $28.00, how much do 14 kilograms of apples cost at the same rate?",
    options: ["$49.00", "$45.50", "$52.00", "$48.00"],
    correctIndex: 0,
    correctValue: "$49.00",
    hint: "Find the price per kilogram: 28 divided by 8 equals 3.50 dollars. Then multiply 3.50 by 14.",
    explanation: "Price per kg = $28 ÷ 8 = $3.50. Cost for 14 kg = $3.50 × 14 = $49.00.",
    diagramData: null
  },
  {
    id: 19,
    worldIndex: 1,
    rule: "✦ FIND THE RATE FOR 1 FIRST",
    prompt: "A painter paints 36 square metres in 3 hours. How many square metres can the painter paint in 7 hours?",
    options: ["84 m²", "72 m²", "90 m²", "80 m²"],
    correctIndex: 0,
    correctValue: "84 m²",
    hint: "Find square metres per hour: 36 divided by 3 equals 12. Then multiply 12 by 7.",
    explanation: "Rate = 36 ÷ 3 = 12 m²/hour. In 7 hours: 12 × 7 = 84 m².",
    diagramData: null
  },
  {
    id: 20,
    worldIndex: 1,
    rule: "✦ FIND THE RATE FOR 1 FIRST",
    prompt: "A car travels 210 kilometres on 15 litres of fuel. How far can it travel on 25 litres of fuel?",
    options: ["350 km", "325 km", "360 km", "340 km"],
    correctIndex: 0,
    correctValue: "350 km",
    hint: "Find kilometres per litre: 210 divided by 15 equals 14. Then multiply 14 by 25.",
    explanation: "Fuel economy = 210 ÷ 15 = 14 km/L. Distance = 14 × 25 = 350 km.",
    diagramData: null
  },

  /* ------------------------------------------------------------------------
     WORLD 3: Speed Street (Questions 21 to 30) · Difficulty 2
     Focus: Speed = Distance ÷ Time
     ------------------------------------------------------------------------ */
  {
    id: 21,
    worldIndex: 2,
    rule: "✦ SPEED = DISTANCE ÷ TIME",
    prompt: "A high-speed train travels 450 kilometres in 3 hours. What is its speed in kilometres per hour?",
    options: ["150 km/h", "140 km/h", "160 km/h", "135 km/h"],
    correctIndex: 0,
    correctValue: "150 km/h",
    hint: "Speed equals distance divided by time: 450 divided by 3.",
    explanation: "Speed = 450 km ÷ 3 h = 150 km/h.",
    diagramData: { type: 'triangle', unknown: 'S' }
  },
  {
    id: 22,
    worldIndex: 2,
    rule: "✦ SPEED = DISTANCE ÷ TIME",
    prompt: "Alex cycles 35 kilometres in 2.5 hours. What is Alex's speed in kilometres per hour?",
    options: ["14 km/h", "12 km/h", "15 km/h", "16 km/h"],
    correctIndex: 0,
    correctValue: "14 km/h",
    hint: "Divide 35 by 2.5: 35 divided by 2.5 equals 14.",
    explanation: "Speed = 35 ÷ 2.5 = 14 km/h.",
    diagramData: { type: 'triangle', unknown: 'S' }
  },
  {
    id: 23,
    worldIndex: 2,
    rule: "✦ SPEED = DISTANCE ÷ TIME",
    prompt: "A bus travels 160 kilometres in 2 hours and 30 minutes. What is its speed in kilometres per hour?",
    options: ["64 km/h", "60 km/h", "68 km/h", "70 km/h"],
    correctIndex: 0,
    correctValue: "64 km/h",
    hint: "Convert 2 hours 30 minutes to 2.5 hours, then divide 160 by 2.5.",
    explanation: "Time = 2.5 hours. Speed = 160 ÷ 2.5 = 64 km/h.",
    diagramData: { type: 'triangle', unknown: 'S' }
  },
  {
    id: 24,
    worldIndex: 2,
    rule: "✦ SPEED = DISTANCE ÷ TIME",
    prompt: "An aeroplane flies 1,800 kilometres in 2 hours. What is its cruising speed in kilometres per hour?",
    options: ["900 km/h", "850 km/h", "950 km/h", "800 km/h"],
    correctIndex: 0,
    correctValue: "900 km/h",
    hint: "Divide total distance 1,800 by total hours 2.",
    explanation: "Speed = 1,800 ÷ 2 = 900 km/h.",
    diagramData: { type: 'triangle', unknown: 'S' }
  },
  {
    id: 25,
    worldIndex: 2,
    rule: "✦ SPEED = DISTANCE ÷ TIME",
    prompt: "Maya runs 400 metres in 50 seconds. What is her average speed in metres per second?",
    options: ["8 m/s", "7.5 m/s", "8.5 m/s", "9 m/s"],
    correctIndex: 0,
    correctValue: "8 m/s",
    hint: "Divide distance in metres by time in seconds: 400 divided by 50.",
    explanation: "Speed = 400 ÷ 50 = 8 m/s.",
    diagramData: { type: 'triangle', unknown: 'S' }
  },
  {
    id: 26,
    worldIndex: 2,
    rule: "✦ SPEED = DISTANCE ÷ TIME",
    prompt: "A delivery van travels 75 kilometres in 1.25 hours. What is the van's speed in kilometres per hour?",
    options: ["60 km/h", "55 km/h", "65 km/h", "50 km/h"],
    correctIndex: 0,
    correctValue: "60 km/h",
    hint: "Divide 75 by 1.25: 75 divided by 1.25 equals 60.",
    explanation: "Speed = 75 ÷ 1.25 = 60 km/h.",
    diagramData: { type: 'triangle', unknown: 'S' }
  },
  {
    id: 27,
    worldIndex: 2,
    rule: "✦ SPEED = DISTANCE ÷ TIME",
    prompt: "A speedboat covers 90 kilometres in 1.5 hours. What is its speed in kilometres per hour?",
    options: ["60 km/h", "50 km/h", "65 km/h", "70 km/h"],
    correctIndex: 0,
    correctValue: "60 km/h",
    hint: "Speed equals distance divided by time: 90 divided by 1.5.",
    explanation: "Speed = 90 ÷ 1.5 = 60 km/h.",
    diagramData: { type: 'triangle', unknown: 'S' }
  },
  {
    id: 28,
    worldIndex: 2,
    rule: "✦ SPEED = DISTANCE ÷ TIME",
    prompt: "A horse gallops 15 kilometres in 30 minutes. What is its speed in kilometres per hour?",
    options: ["30 km/h", "25 km/h", "35 km/h", "20 km/h"],
    correctIndex: 0,
    correctValue: "30 km/h",
    hint: "30 minutes is half an hour, or 0.5 hours. Divide 15 by 0.5.",
    explanation: "Speed = 15 ÷ 0.5 = 30 km/h.",
    diagramData: { type: 'triangle', unknown: 'S' }
  },
  {
    id: 29,
    worldIndex: 2,
    rule: "✦ SPEED = DISTANCE ÷ TIME",
    prompt: "A submarine travels 140 kilometres in 4 hours. What is its speed in kilometres per hour?",
    options: ["35 km/h", "30 km/h", "40 km/h", "32 km/h"],
    correctIndex: 0,
    correctValue: "35 km/h",
    hint: "Divide distance 140 by time 4.",
    explanation: "Speed = 140 ÷ 4 = 35 km/h.",
    diagramData: { type: 'triangle', unknown: 'S' }
  },
  {
    id: 30,
    worldIndex: 2,
    rule: "✦ SPEED = DISTANCE ÷ TIME",
    prompt: "Liam walks 6 kilometres in 1 hour and 15 minutes. What is Liam's walking speed in kilometres per hour?",
    options: ["4.8 km/h", "4.5 km/h", "5.0 km/h", "4.2 km/h"],
    correctIndex: 0,
    correctValue: "4.8 km/h",
    hint: "1 hour 15 minutes equals 1.25 hours. Divide 6 by 1.25.",
    explanation: "Time = 1.25 hours. Speed = 6 ÷ 1.25 = 4.8 km/h.",
    diagramData: { type: 'triangle', unknown: 'S' }
  },

  /* ------------------------------------------------------------------------
     WORLD 4: Distance Docks (Questions 31 to 40) · Difficulty 2
     Focus: Distance = Speed × Time
     ------------------------------------------------------------------------ */
  {
    id: 31,
    worldIndex: 3,
    rule: "✦ DISTANCE = SPEED × TIME",
    prompt: "A cargo ship sails at 24 km/h for 5 hours. How far does the ship travel?",
    options: ["120 km", "110 km", "125 km", "130 km"],
    correctIndex: 0,
    correctValue: "120 km",
    hint: "Distance equals speed times time: 24 multiplied by 5.",
    explanation: "Distance = 24 km/h × 5 h = 120 km.",
    diagramData: { type: 'triangle', unknown: 'D' }
  },
  {
    id: 32,
    worldIndex: 3,
    rule: "✦ DISTANCE = SPEED × TIME",
    prompt: "A car drives at 65 km/h for 4 hours. What distance does it cover in kilometres?",
    options: ["260 km", "240 km", "255 km", "270 km"],
    correctIndex: 0,
    correctValue: "260 km",
    hint: "Multiply speed by time: 65 times 4.",
    explanation: "Distance = 65 × 4 = 260 km.",
    diagramData: { type: 'triangle', unknown: 'D' }
  },
  {
    id: 33,
    worldIndex: 3,
    rule: "✦ DISTANCE = SPEED × TIME",
    prompt: "A cyclist travels at 18 km/h for 2.5 hours. How many kilometres does the cyclist ride?",
    options: ["45 km", "40 km", "42 km", "48 km"],
    correctIndex: 0,
    correctValue: "45 km",
    hint: "Multiply 18 by 2.5: 18 times 2 is 36, plus half of 18 which is 9.",
    explanation: "Distance = 18 × 2.5 = 45 km.",
    diagramData: { type: 'triangle', unknown: 'D' }
  },
  {
    id: 34,
    worldIndex: 3,
    rule: "✦ DISTANCE = SPEED × TIME",
    prompt: "An express bus drives at 72 km/h for 45 minutes. How far does the bus travel in kilometres?",
    options: ["54 km", "50 km", "56 km", "60 km"],
    correctIndex: 0,
    correctValue: "54 km",
    hint: "Convert 45 minutes to 0.75 hours, then multiply 72 by 0.75.",
    explanation: "Time = 45/60 = 0.75 h. Distance = 72 × 0.75 = 54 km.",
    diagramData: { type: 'triangle', unknown: 'D' }
  },
  {
    id: 35,
    worldIndex: 3,
    rule: "✦ DISTANCE = SPEED × TIME",
    prompt: "A drone flies at 15 metres per second for 40 seconds. How far does it fly in metres?",
    options: ["600 m", "550 m", "650 m", "500 m"],
    correctIndex: 0,
    correctValue: "600 m",
    hint: "Multiply speed by time: 15 times 40.",
    explanation: "Distance = 15 m/s × 40 s = 600 m.",
    diagramData: { type: 'triangle', unknown: 'D' }
  },
  {
    id: 36,
    worldIndex: 3,
    rule: "✦ DISTANCE = SPEED × TIME",
    prompt: "Sophia jogs at 8 km/h for 1 hour and 30 minutes. What distance does she cover in kilometres?",
    options: ["12 km", "10 km", "14 km", "11 km"],
    correctIndex: 0,
    correctValue: "12 km",
    hint: "1 hour 30 minutes is 1.5 hours. Multiply 8 by 1.5.",
    explanation: "Distance = 8 × 1.5 = 12 km.",
    diagramData: { type: 'triangle', unknown: 'D' }
  },
  {
    id: 37,
    worldIndex: 3,
    rule: "✦ DISTANCE = SPEED × TIME",
    prompt: "A train moves at 110 km/h for 3.5 hours. How far does it travel in kilometres?",
    options: ["385 km", "365 km", "390 km", "375 km"],
    correctIndex: 0,
    correctValue: "385 km",
    hint: "Multiply speed 110 by time 3.5 hours.",
    explanation: "Distance = 110 × 3.5 = 385 km.",
    diagramData: { type: 'triangle', unknown: 'D' }
  },
  {
    id: 38,
    worldIndex: 3,
    rule: "✦ DISTANCE = SPEED × TIME",
    prompt: "A ferry travels at 28 km/h for 15 minutes. How far does the ferry travel in kilometres?",
    options: ["7 km", "6 km", "8 km", "9 km"],
    correctIndex: 0,
    correctValue: "7 km",
    hint: "15 minutes is 0.25 hours. Multiply 28 by 0.25.",
    explanation: "Time = 15/60 = 0.25 h. Distance = 28 × 0.25 = 7 km.",
    diagramData: { type: 'triangle', unknown: 'D' }
  },
  {
    id: 39,
    worldIndex: 3,
    rule: "✦ DISTANCE = SPEED × TIME",
    prompt: "A cheetah sprints at 25 metres per second for 12 seconds. How far does it sprint in metres?",
    options: ["300 m", "280 m", "320 m", "250 m"],
    correctIndex: 0,
    correctValue: "300 m",
    hint: "Distance equals speed times time: 25 times 12.",
    explanation: "Distance = 25 × 12 = 300 m.",
    diagramData: { type: 'triangle', unknown: 'D' }
  },
  {
    id: 40,
    worldIndex: 3,
    rule: "✦ DISTANCE = SPEED × TIME",
    prompt: "A helicopter flies at 180 km/h for 20 minutes. What distance does it travel in kilometres?",
    options: ["60 km", "50 km", "70 km", "55 km"],
    correctIndex: 0,
    correctValue: "60 km",
    hint: "20 minutes is one third of an hour. Multiply 180 by one third.",
    explanation: "Time = 20/60 = 1/3 h. Distance = 180 × (1/3) = 60 km.",
    diagramData: { type: 'triangle', unknown: 'D' }
  },

  /* ------------------------------------------------------------------------
     WORLD 5: Time Tower (Questions 41 to 50) · Difficulty 2
     Focus: Time = Distance ÷ Speed
     ------------------------------------------------------------------------ */
  {
    id: 41,
    worldIndex: 4,
    rule: "✦ TIME = DISTANCE ÷ SPEED",
    prompt: "A car travels 210 kilometres at an average speed of 70 km/h. How many hours does it take?",
    options: ["3 hours", "2.5 hours", "3.5 hours", "4 hours"],
    correctIndex: 0,
    correctValue: "3 hours",
    hint: "Time equals distance divided by speed: 210 divided by 70.",
    explanation: "Time = 210 ÷ 70 = 3 hours.",
    diagramData: { type: 'triangle', unknown: 'T' }
  },
  {
    id: 42,
    worldIndex: 4,
    rule: "✦ TIME = DISTANCE ÷ SPEED",
    prompt: "A cyclist rides 54 kilometres at 18 km/h. How many hours does the ride take?",
    options: ["3 hours", "2.5 hours", "3.5 hours", "4 hours"],
    correctIndex: 0,
    correctValue: "3 hours",
    hint: "Divide distance by speed: 54 divided by 18.",
    explanation: "Time = 54 ÷ 18 = 3 hours.",
    diagramData: { type: 'triangle', unknown: 'T' }
  },
  {
    id: 43,
    worldIndex: 4,
    rule: "✦ TIME = DISTANCE ÷ SPEED",
    prompt: "A plane flies 1,500 kilometres at a speed of 600 km/h. How many hours is the flight?",
    options: ["2.5 hours", "2 hours", "3 hours", "2.25 hours"],
    correctIndex: 0,
    correctValue: "2.5 hours",
    hint: "Divide 1,500 by 600: 1,500 divided by 600 equals 2.5.",
    explanation: "Time = 1,500 ÷ 600 = 2.5 hours.",
    diagramData: { type: 'triangle', unknown: 'T' }
  },
  {
    id: 44,
    worldIndex: 4,
    rule: "✦ TIME = DISTANCE ÷ SPEED",
    prompt: "How long does it take a runner to complete 10 kilometres at a steady speed of 8 km/h?",
    options: ["1.25 hours", "1.5 hours", "1.2 hours", "1.75 hours"],
    correctIndex: 0,
    correctValue: "1.25 hours",
    hint: "Divide 10 by 8: 10 divided by 8 equals 1.25 hours.",
    explanation: "Time = 10 ÷ 8 = 1.25 hours (1 hour and 15 minutes).",
    diagramData: { type: 'triangle', unknown: 'T' }
  },
  {
    id: 45,
    worldIndex: 4,
    rule: "✦ TIME = DISTANCE ÷ SPEED",
    prompt: "A truck travels 280 kilometres at 80 km/h. What is the total travel time in hours?",
    options: ["3.5 hours", "3.25 hours", "3.75 hours", "4 hours"],
    correctIndex: 0,
    correctValue: "3.5 hours",
    hint: "Divide 280 by 80: 280 divided by 80 equals 3.5.",
    explanation: "Time = 280 ÷ 80 = 3.5 hours.",
    diagramData: { type: 'triangle', unknown: 'T' }
  },
  {
    id: 46,
    worldIndex: 4,
    rule: "✦ TIME = DISTANCE ÷ SPEED",
    prompt: "A walker covers 12 kilometres at 4 km/h. How many hours does the walk take?",
    options: ["3 hours", "2.5 hours", "3.5 hours", "4 hours"],
    correctIndex: 0,
    correctValue: "3 hours",
    hint: "Divide distance 12 by speed 4.",
    explanation: "Time = 12 ÷ 4 = 3 hours.",
    diagramData: { type: 'triangle', unknown: 'T' }
  },
  {
    id: 47,
    worldIndex: 4,
    rule: "✦ TIME = DISTANCE ÷ SPEED",
    prompt: "How many minutes does it take a car traveling at 60 km/h to cover 15 kilometres?",
    options: ["15 minutes", "20 minutes", "12 minutes", "25 minutes"],
    correctIndex: 0,
    correctValue: "15 minutes",
    hint: "15 divided by 60 equals 0.25 hours. 0.25 hours multiplied by 60 equals 15 minutes.",
    explanation: "Time = 15 ÷ 60 = 0.25 hours = 15 minutes.",
    diagramData: { type: 'triangle', unknown: 'T' }
  },
  {
    id: 48,
    worldIndex: 4,
    rule: "✦ TIME = DISTANCE ÷ SPEED",
    prompt: "A high-speed train travels 320 kilometres at 160 km/h. How many hours does the trip take?",
    options: ["2 hours", "1.5 hours", "2.5 hours", "3 hours"],
    correctIndex: 0,
    correctValue: "2 hours",
    hint: "Divide 320 by 160.",
    explanation: "Time = 320 ÷ 160 = 2 hours.",
    diagramData: { type: 'triangle', unknown: 'T' }
  },
  {
    id: 49,
    worldIndex: 4,
    rule: "✦ TIME = DISTANCE ÷ SPEED",
    prompt: "A snail crawls 30 centimetres at a speed of 5 centimetres per minute. How long does it take?",
    options: ["6 minutes", "5 minutes", "7 minutes", "8 minutes"],
    correctIndex: 0,
    correctValue: "6 minutes",
    hint: "Divide distance 30 by speed 5.",
    explanation: "Time = 30 ÷ 5 = 6 minutes.",
    diagramData: { type: 'triangle', unknown: 'T' }
  },
  {
    id: 50,
    worldIndex: 4,
    rule: "✦ TIME = DISTANCE ÷ SPEED",
    prompt: "A boat travels 45 kilometres down a river at 30 km/h. How long does the trip take?",
    options: ["1.5 hours", "1.25 hours", "1.75 hours", "2 hours"],
    correctIndex: 0,
    correctValue: "1.5 hours",
    hint: "Divide 45 by 30: 45 divided by 30 equals 1.5 hours.",
    explanation: "Time = 45 ÷ 30 = 1.5 hours (1 hour and 30 minutes).",
    diagramData: { type: 'triangle', unknown: 'T' }
  },

  /* ------------------------------------------------------------------------
     WORLD 6: Bargain Bazaar (Questions 51 to 60) · Difficulty 3
     Focus: Best Buy & Unit Prices (Lowest unit price wins)
     ------------------------------------------------------------------------ */
  {
    id: 51,
    worldIndex: 5,
    rule: "✦ LOWEST UNIT PRICE WINS",
    prompt: "Pack A offers 500 g of cereal for $4.50. Pack B offers 750 g of cereal for $6.00. Which pack is the better buy?",
    options: ["Pack B", "Pack A", "Both are equal value", "Cannot be determined"],
    correctIndex: 0,
    correctValue: "Pack B",
    hint: "Find price per 100 grams: Pack A is 90 cents per 100 grams. Pack B is 80 cents per 100 grams.",
    explanation: "Pack A: $4.50 ÷ 5 = $0.90/100 g. Pack B: $6.00 ÷ 7.5 = $0.80/100 g. Pack B is cheaper.",
    diagramData: { type: 'products', items: [{ icon: '🥣', size: 'Pack A: 500 g', price: '$4.50' }, { icon: '🥣', size: 'Pack B: 750 g', price: '$6.00' }] }
  },
  {
    id: 52,
    worldIndex: 5,
    rule: "✦ LOWEST UNIT PRICE WINS",
    prompt: "Brand X sells 2 litres of milk for $3.60. Brand Y sells 3 litres of milk for $5.10. Which brand is cheaper per litre?",
    options: ["Brand Y", "Brand X", "Both cost the same per litre", "Cannot be determined"],
    correctIndex: 0,
    correctValue: "Brand Y",
    hint: "Divide price by litres: Brand X is 3.60 divided by 2. Brand Y is 5.10 divided by 3.",
    explanation: "Brand X = $3.60 ÷ 2 = $1.80/L. Brand Y = $5.10 ÷ 3 = $1.70/L. Brand Y is cheaper.",
    diagramData: { type: 'products', items: [{ icon: '🥛', size: 'Brand X: 2 L', price: '$3.60' }, { icon: '🥛', size: 'Brand Y: 3 L', price: '$5.10' }] }
  },
  {
    id: 53,
    worldIndex: 5,
    rule: "✦ LOWEST UNIT PRICE WINS",
    prompt: "Store A sells 6 pens for $4.80. Store B sells 10 pens for $7.50. Which store offers the better buy?",
    options: ["Store B", "Store A", "They are identical in price", "Store A has better pens"],
    correctIndex: 0,
    correctValue: "Store B",
    hint: "Find price per pen: Store A is 4.80 divided by 6. Store B is 7.50 divided by 10.",
    explanation: "Store A: $4.80 ÷ 6 = $0.80 per pen. Store B: $7.50 ÷ 10 = $0.75 per pen. Store B is cheaper.",
    diagramData: { type: 'products', items: [{ icon: '🖊️', size: 'Store A: 6 pens', price: '$4.80' }, { icon: '🖊️', size: 'Store B: 10 pens', price: '$7.50' }] }
  },
  {
    id: 54,
    worldIndex: 5,
    rule: "✦ LOWEST UNIT PRICE WINS",
    prompt: "A 4-kilogram bag of rice costs $10.00. A 10-kilogram bag of rice costs $22.00. Which bag has the lower price per kilogram?",
    options: ["10 kg bag", "4 kg bag", "Both are the same price per kg", "Cannot tell"],
    correctIndex: 0,
    correctValue: "10 kg bag",
    hint: "Find price per kilogram: 10 divided by 4 equals 2.50. 22 divided by 10 equals 2.20.",
    explanation: "4 kg bag = $2.50/kg. 10 kg bag = $2.20/kg. The 10 kg bag is cheaper per kilogram.",
    diagramData: { type: 'products', items: [{ icon: '🍚', size: 'Bag A: 4 kg', price: '$10.00' }, { icon: '🍚', size: 'Bag B: 10 kg', price: '$22.00' }] }
  },
  {
    id: 55,
    worldIndex: 5,
    rule: "✦ LOWEST UNIT PRICE WINS",
    prompt: "Bottle A holds 250 mL of shampoo for $3.50. Bottle B holds 500 mL for $6.50. Which bottle is the better deal?",
    options: ["Bottle B", "Bottle A", "Both are the same value", "Need more info"],
    correctIndex: 0,
    correctValue: "Bottle B",
    hint: "Two Bottle As make 500 mL and cost 7 dollars. Bottle B gives 500 mL for only 6 dollars 50.",
    explanation: "Bottle A = $1.40 per 100 mL. Bottle B = $1.30 per 100 mL. Bottle B is the better deal.",
    diagramData: null
  },
  {
    id: 56,
    worldIndex: 5,
    rule: "✦ LOWEST UNIT PRICE WINS",
    prompt: "Pack 1 sells 8 apples for $4.00. Pack 2 sells 12 apples for $6.60. Which pack gives you the cheaper price per apple?",
    options: ["Pack 1", "Pack 2", "Both have the same price per apple", "Pack 2 has more apples"],
    correctIndex: 0,
    correctValue: "Pack 1",
    hint: "Price per apple: Pack 1 is 4 divided by 8 equals 50 cents. Pack 2 is 6.60 divided by 12 equals 55 cents.",
    explanation: "Pack 1 = $0.50 per apple. Pack 2 = $0.55 per apple. Pack 1 is cheaper.",
    diagramData: { type: 'products', items: [{ icon: '🍎', size: 'Pack 1: 8 apples', price: '$4.00' }, { icon: '🍎', size: 'Pack 2: 12 apples', price: '$6.60' }] }
  },
  {
    id: 57,
    worldIndex: 5,
    rule: "✦ LOWEST UNIT PRICE WINS",
    prompt: "A 3-pack of socks costs $9.60. A 5-pack of the same socks costs $15.00. Which pack is the better buy?",
    options: ["5-pack", "3-pack", "Both are equal unit price", "The 3-pack is smaller"],
    correctIndex: 0,
    correctValue: "5-pack",
    hint: "Cost per pair: 3-pack is 9.60 divided by 3 equals 3.20. 5-pack is 15 divided by 5 equals 3.00.",
    explanation: "3-pack = $3.20/pair. 5-pack = $3.00/pair. The 5-pack is the better buy.",
    diagramData: null
  },
  {
    id: 58,
    worldIndex: 5,
    rule: "✦ LOWEST UNIT PRICE WINS",
    prompt: "Can A holds 330 mL of juice for $1.65. Can B holds 500 mL of juice for $2.40. Which can has the lower unit cost?",
    options: ["Can B", "Can A", "Both cost the same per mL", "Cannot compare different sizes"],
    correctIndex: 0,
    correctValue: "Can B",
    hint: "Can A: 1.65 divided by 3.3 is 50 cents per 100 mL. Can B: 2.40 divided by 5 is 48 cents per 100 mL.",
    explanation: "Can A = $0.50/100 mL. Can B = $0.48/100 mL. Can B is the better buy.",
    diagramData: null
  },
  {
    id: 59,
    worldIndex: 5,
    rule: "✦ LOWEST UNIT PRICE WINS",
    prompt: "Box 1 has 15 granola bars for $30.00. Box 2 has 24 granola bars for $45.60. Which box is the better buy?",
    options: ["Box 2", "Box 1", "Both cost $2.00 per bar", "Cannot be determined"],
    correctIndex: 0,
    correctValue: "Box 2",
    hint: "Box 1 is 30 divided by 15 equals 2 dollars. Box 2 is 45.60 divided by 24 equals 1 dollar 90.",
    explanation: "Box 1 = $2.00 per bar. Box 2 = $1.90 per bar. Box 2 is cheaper per bar.",
    diagramData: null
  },
  {
    id: 60,
    worldIndex: 5,
    rule: "✦ LOWEST UNIT PRICE WINS",
    prompt: "Store A offers 5 kg of potatoes for $6.50. Store B offers 3 kg of potatoes for $3.60. Which store is cheaper per kilogram?",
    options: ["Store B", "Store A", "Both are $1.30 per kg", "Store A has more potatoes"],
    correctIndex: 0,
    correctValue: "Store B",
    hint: "Store A: 6.50 divided by 5 equals 1.30. Store B: 3.60 divided by 3 equals 1.20.",
    explanation: "Store A = $1.30/kg. Store B = $1.20/kg. Store B is cheaper per kilogram.",
    diagramData: { type: 'products', items: [{ icon: '🥔', size: 'Store A: 5 kg', price: '$6.50' }, { icon: '🥔', size: 'Store B: 3 kg', price: '$3.60' }] }
  },

  /* ------------------------------------------------------------------------
     WORLD 7: Convert Cove (Questions 61 to 70) · Difficulty 3
     Focus: Rate conversions (km/h ↔ m/s, L/min ↔ L/h, m/min ↔ km/h)
     ------------------------------------------------------------------------ */
  {
    id: 61,
    worldIndex: 6,
    rule: "✦ CONVERT TOP AND BOTTOM",
    prompt: "Convert 72 kilometres per hour into metres per second.",
    options: ["20 m/s", "18 m/s", "24 m/s", "25 m/s"],
    correctIndex: 0,
    correctValue: "20 m/s",
    hint: "Multiply 72 by 1,000 metres and divide by 3,600 seconds. Or divide 72 by 3.6.",
    explanation: "72 km/h = 72,000 m ÷ 3,600 s = 20 m/s.",
    diagramData: null
  },
  {
    id: 62,
    worldIndex: 6,
    rule: "✦ CONVERT TOP AND BOTTOM",
    prompt: "Convert 15 metres per second into kilometres per hour.",
    options: ["54 km/h", "50 km/h", "56 km/h", "60 km/h"],
    correctIndex: 0,
    correctValue: "54 km/h",
    hint: "Multiply 15 by 3.6 to convert metres per second to kilometres per hour.",
    explanation: "15 m/s × 3.6 = 54 km/h.",
    diagramData: null
  },
  {
    id: 63,
    worldIndex: 6,
    rule: "✦ CONVERT TOP AND BOTTOM",
    prompt: "A water pump moves 8 litres per minute. How many litres does it move in one hour?",
    options: ["480 L/h", "400 L/h", "500 L/h", "540 L/h"],
    correctIndex: 0,
    correctValue: "480 L/h",
    hint: "There are 60 minutes in an hour. Multiply 8 litres by 60.",
    explanation: "8 L/min × 60 min/h = 480 litres per hour.",
    diagramData: null
  },
  {
    id: 64,
    worldIndex: 6,
    rule: "✦ CONVERT TOP AND BOTTOM",
    prompt: "Convert 90 kilometres per hour into metres per second.",
    options: ["25 m/s", "22 m/s", "28 m/s", "30 m/s"],
    correctIndex: 0,
    correctValue: "25 m/s",
    hint: "Divide 90 by 3.6: 90 divided by 3.6 equals 25.",
    explanation: "90 km/h = 90 ÷ 3.6 = 25 m/s.",
    diagramData: null
  },
  {
    id: 65,
    worldIndex: 6,
    rule: "✦ CONVERT TOP AND BOTTOM",
    prompt: "A cheetah sprints at 30 metres per second. What is this speed in kilometres per hour?",
    options: ["108 km/h", "100 km/h", "112 km/h", "120 km/h"],
    correctIndex: 0,
    correctValue: "108 km/h",
    hint: "Multiply 30 by 3.6: 30 times 3.6 equals 108.",
    explanation: "30 m/s × 3.6 = 108 km/h.",
    diagramData: null
  },
  {
    id: 66,
    worldIndex: 6,
    rule: "✦ CONVERT TOP AND BOTTOM",
    prompt: "A runner jogs at 120 metres per minute. What is this speed in kilometres per hour?",
    options: ["7.2 km/h", "6.5 km/h", "8.0 km/h", "7.5 km/h"],
    correctIndex: 0,
    correctValue: "7.2 km/h",
    hint: "Multiply 120 metres by 60 minutes to get 7,200 metres per hour, then divide by 1,000.",
    explanation: "120 m/min × 60 = 7,200 m/h = 7.2 km/h.",
    diagramData: null
  },
  {
    id: 67,
    worldIndex: 6,
    rule: "✦ CONVERT TOP AND BOTTOM",
    prompt: "Convert 36 kilometres per hour into metres per second.",
    options: ["10 m/s", "8 m/s", "12 m/s", "15 m/s"],
    correctIndex: 0,
    correctValue: "10 m/s",
    hint: "Divide 36 by 3.6: 36 divided by 3.6 equals 10.",
    explanation: "36 km/h = 36 ÷ 3.6 = 10 m/s.",
    diagramData: null
  },
  {
    id: 68,
    worldIndex: 6,
    rule: "✦ CONVERT TOP AND BOTTOM",
    prompt: "A pipe drains a pool at 1,200 litres per hour. How many litres per minute is that?",
    options: ["20 L/min", "18 L/min", "25 L/min", "30 L/min"],
    correctIndex: 0,
    correctValue: "20 L/min",
    hint: "Divide 1,200 litres by 60 minutes in an hour: 1,200 divided by 60.",
    explanation: "1,200 L/h ÷ 60 = 20 L/min.",
    diagramData: null
  },
  {
    id: 69,
    worldIndex: 6,
    rule: "✦ CONVERT TOP AND BOTTOM",
    prompt: "Convert 5 metres per second into kilometres per hour.",
    options: ["18 km/h", "15 km/h", "20 km/h", "16 km/h"],
    correctIndex: 0,
    correctValue: "18 km/h",
    hint: "Multiply 5 by 3.6: 5 times 3.6 equals 18.",
    explanation: "5 m/s × 3.6 = 18 km/h.",
    diagramData: null
  },
  {
    id: 70,
    worldIndex: 6,
    rule: "✦ CONVERT TOP AND BOTTOM",
    prompt: "A snail travels 24 metres per hour. How many centimetres per minute is that?",
    options: ["40 cm/min", "35 cm/min", "45 cm/min", "50 cm/min"],
    correctIndex: 0,
    correctValue: "40 cm/min",
    hint: "24 metres is 2,400 centimetres. Divide 2,400 centimetres by 60 minutes.",
    explanation: "2,400 cm ÷ 60 min = 40 cm/min.",
    diagramData: null
  },

  /* ------------------------------------------------------------------------
     WORLD 8: Graph Gardens (Questions 71 to 80) · Difficulty 3
     Focus: Distance–Time Graphs (Slope = Speed, Horizontal = Stopped)
     ------------------------------------------------------------------------ */
  {
    id: 71,
    worldIndex: 7,
    rule: "✦ STEEPER LINE = FASTER",
    prompt: "On a distance-time graph, a car covers 60 km in the first 2 hours. What is its speed during this segment?",
    options: ["30 km/h", "25 km/h", "35 km/h", "40 km/h"],
    correctIndex: 0,
    correctValue: "30 km/h",
    hint: "Slope equals distance divided by time: 60 divided by 2.",
    explanation: "Speed = 60 km ÷ 2 h = 30 km/h.",
    diagramData: { type: 'dt', legs: [{ name: 'A', t: 2, d: 60 }], maxT: 3, maxD: 80, unitT: 'h', unitD: 'km' }
  },
  {
    id: 72,
    worldIndex: 7,
    rule: "✦ STEEPER LINE = FASTER",
    prompt: "What does a horizontal flat line on a distance-time graph represent?",
    options: ["The object is stopped (speed = 0)", "The object is moving at top speed", "The object is turning around", "The object is accelerating"],
    correctIndex: 0,
    correctValue: "The object is stopped (speed = 0)",
    hint: "A horizontal line means distance does not change as time passes.",
    explanation: "Distance does not change while time increases, meaning speed is 0 km/h.",
    diagramData: null
  },
  {
    id: 73,
    worldIndex: 7,
    rule: "✦ STEEPER LINE = FASTER",
    prompt: "Between hour 1 and hour 3, a cyclist stays at the 25-kilometre mark. What is the cyclist's speed during these 2 hours?",
    options: ["0 km/h", "12.5 km/h", "25 km/h", "50 km/h"],
    correctIndex: 0,
    correctValue: "0 km/h",
    hint: "Distance traveled during this period is zero. Zero divided by 2 hours is zero.",
    explanation: "Distance change = 0 km. Speed = 0 ÷ 2 = 0 km/h.",
    diagramData: { type: 'dt', legs: [{ name: 'A', t: 1, d: 25 }, { name: 'B', t: 2, d: 0 }], maxT: 4, maxD: 40, unitT: 'h', unitD: 'km' }
  },
  {
    id: 74,
    worldIndex: 7,
    rule: "✦ STEEPER LINE = FASTER",
    prompt: "Line A rises 80 km in 2 hours. Line B rises 100 km in 2 hours. Which line represents the faster speed?",
    options: ["Line B", "Line A", "Both have the same speed", "Cannot be determined without a graph"],
    correctIndex: 0,
    correctValue: "Line B",
    hint: "Line A speed is 40 km/h. Line B speed is 50 km/h. Line B has the steeper slope.",
    explanation: "Line A: 80 ÷ 2 = 40 km/h. Line B: 100 ÷ 2 = 50 km/h. Line B is faster.",
    diagramData: null
  },
  {
    id: 75,
    worldIndex: 7,
    rule: "✦ STEEPER LINE = FASTER",
    prompt: "A runner travels 12 kilometres between hour 0.5 and hour 2.0. What is the runner's speed?",
    options: ["8 km/h", "6 km/h", "10 km/h", "9 km/h"],
    correctIndex: 0,
    correctValue: "8 km/h",
    hint: "Distance is 12 km. Time taken is 2 minus 0.5 equals 1.5 hours. Divide 12 by 1.5.",
    explanation: "Distance = 12 km. Time = 1.5 h. Speed = 12 ÷ 1.5 = 8 km/h.",
    diagramData: { type: 'dt', legs: [{ name: 'A', t: 0.5, d: 0 }, { name: 'B', t: 1.5, d: 12 }], maxT: 2.5, maxD: 20, unitT: 'h', unitD: 'km' }
  },
  {
    id: 76,
    worldIndex: 7,
    rule: "✦ STEEPER LINE = FASTER",
    prompt: "A car drives 90 km in 1.5 hours, rests for 0.5 hours, then drives 60 km in 1 hour. What is its speed during the first segment?",
    options: ["60 km/h", "55 km/h", "65 km/h", "50 km/h"],
    correctIndex: 0,
    correctValue: "60 km/h",
    hint: "Divide distance by time for the first segment: 90 divided by 1.5.",
    explanation: "Speed in segment 1 = 90 ÷ 1.5 = 60 km/h.",
    diagramData: { type: 'dt', legs: [{ name: 'A', t: 1.5, d: 90 }, { name: 'B', t: 0.5, d: 0 }, { name: 'C', t: 1, d: 60 }], maxT: 3.5, maxD: 180, unitT: 'h', unitD: 'km' }
  },
  {
    id: 77,
    worldIndex: 7,
    rule: "✦ STEEPER LINE = FASTER",
    prompt: "On a graph, a bus travels 40 km in 0.5 hours. What is the gradient (speed) of this line in km/h?",
    options: ["80 km/h", "60 km/h", "40 km/h", "20 km/h"],
    correctIndex: 0,
    correctValue: "80 km/h",
    hint: "Gradient equals rise divided by run: 40 divided by 0.5.",
    explanation: "Speed = 40 ÷ 0.5 = 80 km/h.",
    diagramData: { type: 'dt', legs: [{ name: 'A', t: 0.5, d: 40 }], maxT: 1.5, maxD: 60, unitT: 'h', unitD: 'km' }
  },
  {
    id: 78,
    worldIndex: 7,
    rule: "✦ STEEPER LINE = FASTER",
    prompt: "If a distance-time line is straight and passes through the origin, what does this tell us about the speed?",
    options: ["Speed is constant (steady)", "Speed is increasing constantly", "Speed is decreasing", "Speed is zero"],
    correctIndex: 0,
    correctValue: "Speed is constant (steady)",
    hint: "A constant straight slope means the rate does not change over time.",
    explanation: "A straight line through the origin means a steady, constant rate.",
    diagramData: null
  },
  {
    id: 79,
    worldIndex: 7,
    rule: "✦ STEEPER LINE = FASTER",
    prompt: "A hiker walks 6 km in 2 hours, stops for 1 hour, then walks 8 km in 2 hours. What is the speed during the final 2 hours?",
    options: ["4 km/h", "3 km/h", "5 km/h", "7 km/h"],
    correctIndex: 0,
    correctValue: "4 km/h",
    hint: "In the final segment, distance is 8 km and time is 2 hours. Divide 8 by 2.",
    explanation: "Speed in final segment = 8 ÷ 2 = 4 km/h.",
    diagramData: { type: 'dt', legs: [{ name: 'A', t: 2, d: 6 }, { name: 'B', t: 1, d: 0 }, { name: 'C', t: 2, d: 8 }], maxT: 5.5, maxD: 20, unitT: 'h', unitD: 'km' }
  },
  {
    id: 80,
    worldIndex: 7,
    rule: "✦ STEEPER LINE = FASTER",
    prompt: "A scooter travels 15 km in 0.5 hours, then 15 km in 1 hour. How did the speed change?",
    options: ["Slowed down from 30 km/h to 15 km/h", "Sped up from 15 km/h to 30 km/h", "Stayed at 30 km/h throughout", "Stopped completely"],
    correctIndex: 0,
    correctValue: "Slowed down from 30 km/h to 15 km/h",
    hint: "First speed: 15 divided by 0.5 is 30 km/h. Second speed: 15 divided by 1 is 15 km/h.",
    explanation: "First segment = 30 km/h. Second segment = 15 km/h. The scooter slowed down.",
    diagramData: { type: 'dt', legs: [{ name: 'A', t: 0.5, d: 15 }, { name: 'B', t: 1.0, d: 15 }], maxT: 2.0, maxD: 40, unitT: 'h', unitD: 'km' }
  },

  /* ------------------------------------------------------------------------
     WORLD 9: Average Avenue (Questions 81 to 90) · Difficulty 4
     Focus: Average Speed = Total Distance ÷ Total Time (Never average speeds!)
     ------------------------------------------------------------------------ */
  {
    id: 81,
    worldIndex: 8,
    rule: "✦ TOTAL DISTANCE ÷ TOTAL TIME",
    prompt: "A driver travels 60 km at 60 km/h, then 60 km at 30 km/h. What is the average speed for the whole 120-km trip?",
    options: ["40 km/h", "45 km/h", "50 km/h", "35 km/h"],
    correctIndex: 0,
    correctValue: "40 km/h",
    hint: "First leg takes 1 hour. Second leg takes 2 hours. Total time is 3 hours. Divide 120 by 3.",
    explanation: "Total time = 1 h + 2 h = 3 h. Average speed = 120 km ÷ 3 h = 40 km/h (not 45 km/h!).",
    diagramData: { type: 'dt', legs: [{ name: 'A', t: 1, d: 60 }, { name: 'B', t: 2, d: 60 }], maxT: 3.5, maxD: 140, unitT: 'h', unitD: 'km' }
  },
  {
    id: 82,
    worldIndex: 8,
    rule: "✦ TOTAL DISTANCE ÷ TOTAL TIME",
    prompt: "A family drives 120 km in 2 hours, rests 1 hour for lunch, then drives 180 km in 2 hours. What is their average speed for the whole journey?",
    options: ["60 km/h", "75 km/h", "50 km/h", "65 km/h"],
    correctIndex: 0,
    correctValue: "60 km/h",
    hint: "Total distance is 300 km. Total time includes the lunch stop: 2 plus 1 plus 2 equals 5 hours. Divide 300 by 5.",
    explanation: "Total distance = 300 km. Total time = 5 h. Average speed = 300 ÷ 5 = 60 km/h.",
    diagramData: { type: 'dt', legs: [{ name: 'A', t: 2, d: 120 }, { name: 'B', t: 1, d: 0 }, { name: 'C', t: 2, d: 180 }], maxT: 5.5, maxD: 320, unitT: 'h', unitD: 'km' }
  },
  {
    id: 83,
    worldIndex: 8,
    rule: "✦ TOTAL DISTANCE ÷ TOTAL TIME",
    prompt: "Why is average speed NOT simply the average of two speeds?",
    options: ["Because more time is spent traveling at the slower speed", "Because distances cancel out", "Because speeds cannot be added", "Because time does not matter"],
    correctIndex: 0,
    correctValue: "Because more time is spent traveling at the slower speed",
    hint: "Traveling at the slower speed takes more time, so the slower speed pulls down the overall average.",
    explanation: "You spend more time at the slower speed, so it has more weight in the total journey.",
    diagramData: null
  },
  {
    id: 84,
    worldIndex: 8,
    rule: "✦ TOTAL DISTANCE ÷ TOTAL TIME",
    prompt: "Liam drives 90 km in 1.5 hours, then drives another 110 km in 2.5 hours. What is Liam's average speed?",
    options: ["50 km/h", "48 km/h", "52 km/h", "55 km/h"],
    correctIndex: 0,
    correctValue: "50 km/h",
    hint: "Total distance is 90 plus 110 equals 200 km. Total time is 1.5 plus 2.5 equals 4 hours. Divide 200 by 4.",
    explanation: "Average speed = (90 + 110) ÷ (1.5 + 2.5) = 200 ÷ 4 = 50 km/h.",
    diagramData: { type: 'dt', legs: [{ name: 'A', t: 1.5, d: 90 }, { name: 'B', t: 2.5, d: 110 }], maxT: 4.5, maxD: 220, unitT: 'h', unitD: 'km' }
  },
  {
    id: 85,
    worldIndex: 8,
    rule: "✦ TOTAL DISTANCE ÷ TOTAL TIME",
    prompt: "A cyclist travels 20 km at 20 km/h uphill, and returns 20 km at 40 km/h downhill. What is the average speed for the round trip?",
    options: ["26.7 km/h", "30 km/h", "28 km/h", "25 km/h"],
    correctIndex: 0,
    correctValue: "26.7 km/h",
    hint: "Uphill takes 1 hour. Downhill takes 0.5 hours. Total distance is 40 km in 1.5 hours. Divide 40 by 1.5.",
    explanation: "Total distance = 40 km. Total time = 1.5 h. Average speed = 40 ÷ 1.5 ≈ 26.67 km/h (not 30 km/h!).",
    diagramData: null
  },
  {
    id: 86,
    worldIndex: 8,
    rule: "✦ TOTAL DISTANCE ÷ TOTAL TIME",
    prompt: "A delivery van drives 40 km at 40 km/h, then 80 km at 80 km/h. What is the average speed for the whole 120-km trip?",
    options: ["60 km/h", "55 km/h", "65 km/h", "50 km/h"],
    correctIndex: 0,
    correctValue: "60 km/h",
    hint: "Leg 1 takes 1 hour. Leg 2 takes 1 hour. Total distance is 120 km in 2 hours. Divide 120 by 2.",
    explanation: "Total distance = 120 km. Total time = 2 h. Average speed = 120 ÷ 2 = 60 km/h.",
    diagramData: { type: 'dt', legs: [{ name: 'A', t: 1, d: 40 }, { name: 'B', t: 1, d: 80 }], maxT: 2.5, maxD: 140, unitT: 'h', unitD: 'km' }
  },
  {
    id: 87,
    worldIndex: 8,
    rule: "✦ TOTAL DISTANCE ÷ TOTAL TIME",
    prompt: "Emma walks 3 km in 45 minutes, then jogs 5 km in 35 minutes. What is her average speed in km/h for the whole 80 minutes?",
    options: ["6 km/h", "5.5 km/h", "6.5 km/h", "7 km/h"],
    correctIndex: 0,
    correctValue: "6 km/h",
    hint: "Total distance is 8 km. Total time is 80 minutes, which is 80 over 60 hours. 8 divided by four thirds is 6.",
    explanation: "8 km ÷ (80/60 h) = 8 × (60/80) = 6 km/h.",
    diagramData: null
  },
  {
    id: 88,
    worldIndex: 8,
    rule: "✦ TOTAL DISTANCE ÷ TOTAL TIME",
    prompt: "A train travels 150 km at 100 km/h, stops 30 minutes, then travels 100 km at 100 km/h. What is its average speed including the stop?",
    options: ["83.3 km/h", "100 km/h", "90 km/h", "75 km/h"],
    correctIndex: 0,
    correctValue: "83.3 km/h",
    hint: "Moving time is 2.5 hours. Stop time is 0.5 hours. Total time is 3 hours. Total distance is 250 km. Divide 250 by 3.",
    explanation: "Total distance = 250 km. Total time = 3 h. Average speed = 250 ÷ 3 = 83.33 km/h.",
    diagramData: { type: 'dt', legs: [{ name: 'A', t: 1.5, d: 150 }, { name: 'B', t: 0.5, d: 0 }, { name: 'C', t: 1, d: 100 }], maxT: 3.5, maxD: 280, unitT: 'h', unitD: 'km' }
  },
  {
    id: 89,
    worldIndex: 8,
    rule: "✦ TOTAL DISTANCE ÷ TOTAL TIME",
    prompt: "A boat travels 36 km at 12 km/h upstream, and 36 km at 18 km/h downstream. What is the average speed for the full journey?",
    options: ["14.4 km/h", "15 km/h", "14 km/h", "16 km/h"],
    correctIndex: 0,
    correctValue: "14.4 km/h",
    hint: "Upstream takes 3 hours. Downstream takes 2 hours. Total time is 5 hours. Total distance is 72 km. Divide 72 by 5.",
    explanation: "Total distance = 72 km. Total time = 5 h. Average speed = 72 ÷ 5 = 14.4 km/h.",
    diagramData: null
  },
  {
    id: 90,
    worldIndex: 8,
    rule: "✦ TOTAL DISTANCE ÷ TOTAL TIME",
    prompt: "A runner completes a 21-km half marathon in 1 hour and 45 minutes. What is the runner's average speed in km/h?",
    options: ["12 km/h", "11 km/h", "13 km/h", "10.5 km/h"],
    correctIndex: 0,
    correctValue: "12 km/h",
    hint: "1 hour 45 minutes equals 1.75 hours. Divide 21 by 1.75.",
    explanation: "Time = 1.75 h. Average speed = 21 ÷ 1.75 = 12 km/h.",
    diagramData: null
  },

  /* ------------------------------------------------------------------------
     WORLD 10: Rate Champion (Questions 91 to 100) · Difficulty 4
     Focus: Mastery Challenge (combining speed, conversion, unit prices, multi-step)
     ------------------------------------------------------------------------ */
  {
    id: 91,
    worldIndex: 9,
    rule: "✦ CONVERT TOP AND BOTTOM",
    prompt: "Car A travels 135 km in 1.5 hours. Car B travels at 24 metres per second. Which car is traveling faster?",
    options: ["Car A (90 km/h)", "Car B (86.4 km/h)", "Both travel at the exact same speed", "Cannot be compared"],
    correctIndex: 0,
    correctValue: "Car A (90 km/h)",
    hint: "Car A speed is 135 divided by 1.5 equals 90 km/h. Car B speed is 24 times 3.6 equals 86.4 km/h.",
    explanation: "Car A = 90 km/h. Car B = 24 × 3.6 = 86.4 km/h. Car A is faster.",
    diagramData: { type: 'race', racers: [{ icon: '🚗', name: 'Car A', label: '90 km/h', frac: 0.5 }, { icon: '🚙', name: 'Car B', label: '24 m/s', frac: 0.5 }] }
  },
  {
    id: 92,
    worldIndex: 9,
    rule: "✦ LOWEST UNIT PRICE WINS",
    prompt: "Store Alpha sells 750 g of honey for $9.00. Store Beta sells 1.2 kg of honey for $13.80. Which is the better deal?",
    options: ["Store Beta", "Store Alpha", "Both cost $1.20 per 100 g", "Store Alpha has smaller jars"],
    correctIndex: 0,
    correctValue: "Store Beta",
    hint: "Store Alpha: 9 divided by 7.5 equals 1.20 per 100 g. Store Beta: 13.80 divided by 12 equals 1.15 per 100 g.",
    explanation: "Store Alpha = $1.20/100 g. Store Beta = $1.15/100 g. Store Beta is cheaper per 100 grams.",
    diagramData: { type: 'products', items: [{ icon: '🍯', size: 'Alpha: 750 g', price: '$9.00' }, { icon: '🍯', size: 'Beta: 1.2 kg', price: '$13.80' }] }
  },
  {
    id: 93,
    worldIndex: 9,
    rule: "✦ FIND THE RATE FOR 1 FIRST",
    prompt: "A water reservoir loses 45 litres of water every 15 minutes through a leak. How many litres are lost in 4 hours?",
    options: ["720 litres", "680 litres", "750 litres", "600 litres"],
    correctIndex: 0,
    correctValue: "720 litres",
    hint: "Rate is 45 divided by 15 equals 3 litres per minute. 4 hours has 240 minutes. Multiply 3 by 240.",
    explanation: "Rate = 3 L/min. In 4 hours (240 min): 3 × 240 = 720 litres.",
    diagramData: null
  },
  {
    id: 94,
    worldIndex: 9,
    rule: "✦ SPEED = DISTANCE ÷ TIME",
    prompt: "A cyclist travels 15 km in 40 minutes. What is the cyclist's speed in kilometres per hour?",
    options: ["22.5 km/h", "20 km/h", "24 km/h", "25 km/h"],
    correctIndex: 0,
    correctValue: "22.5 km/h",
    hint: "40 minutes is two thirds of an hour. 15 divided by two thirds equals 15 times 1.5, which is 22.5.",
    explanation: "Speed = 15 ÷ (40/60) = 15 × 1.5 = 22.5 km/h.",
    diagramData: { type: 'triangle', unknown: 'S' }
  },
  {
    id: 95,
    worldIndex: 9,
    rule: "✦ TIME = DISTANCE ÷ SPEED",
    prompt: "A plane flies 720 km at 480 km/h, then another 600 km at 600 km/h. What is the total flight time in hours?",
    options: ["2.5 hours", "2 hours", "3 hours", "2.25 hours"],
    correctIndex: 0,
    correctValue: "2.5 hours",
    hint: "Leg 1 takes 720 divided by 480 equals 1.5 hours. Leg 2 takes 600 divided by 600 equals 1 hour. Total is 2.5 hours.",
    explanation: "Leg 1 = 1.5 h. Leg 2 = 1.0 h. Total flight time = 2.5 hours.",
    diagramData: { type: 'triangle', unknown: 'T' }
  },
  {
    id: 96,
    worldIndex: 9,
    rule: "✦ CONVERT TOP AND BOTTOM",
    prompt: "Convert a water flow rate of 30 litres per second into litres per minute.",
    options: ["1,800 L/min", "1,500 L/min", "2,000 L/min", "1,200 L/min"],
    correctIndex: 0,
    correctValue: "1,800 L/min",
    hint: "There are 60 seconds in a minute. Multiply 30 by 60.",
    explanation: "30 L/s × 60 s/min = 1,800 litres per minute.",
    diagramData: null
  },
  {
    id: 97,
    worldIndex: 9,
    rule: "✦ CONVERT TOP AND BOTTOM",
    prompt: "An athlete runs 100 metres in 12.5 seconds. What is the athlete's speed in kilometres per hour?",
    options: ["28.8 km/h", "27.5 km/h", "30.0 km/h", "26.4 km/h"],
    correctIndex: 0,
    correctValue: "28.8 km/h",
    hint: "Speed in metres per second is 100 divided by 12.5 equals 8. Multiply 8 by 3.6 to get kilometres per hour.",
    explanation: "Speed = 100 ÷ 12.5 = 8 m/s. 8 × 3.6 = 28.8 km/h.",
    diagramData: null
  },
  {
    id: 98,
    worldIndex: 9,
    rule: "✦ TOTAL DISTANCE ÷ TOTAL TIME",
    prompt: "A bus travels 45 km at 30 km/h, then 45 km at 90 km/h. What is the average speed for the 90-km trip?",
    options: ["45 km/h", "60 km/h", "50 km/h", "40 km/h"],
    correctIndex: 0,
    correctValue: "45 km/h",
    hint: "Leg 1 takes 45 divided by 30 equals 1.5 hours. Leg 2 takes 45 divided by 90 equals 0.5 hours. Total time is 2 hours. Divide 90 by 2.",
    explanation: "Total distance = 90 km. Total time = 1.5 + 0.5 = 2 h. Average speed = 90 ÷ 2 = 45 km/h (not 60 km/h!).",
    diagramData: { type: 'dt', legs: [{ name: 'A', t: 1.5, d: 45 }, { name: 'B', t: 0.5, d: 45 }], maxT: 2.5, maxD: 100, unitT: 'h', unitD: 'km' }
  },
  {
    id: 99,
    worldIndex: 9,
    rule: "✦ UNIT RATE = AMOUNT ÷ UNITS",
    prompt: "A photo printer prints 36 colour photos in 4.5 minutes. How many photos does it print per minute?",
    options: ["8 photos/min", "7 photos/min", "9 photos/min", "6 photos/min"],
    correctIndex: 0,
    correctValue: "8 photos/min",
    hint: "Divide photos by minutes: 36 divided by 4.5 equals 8.",
    explanation: "Printing rate = 36 ÷ 4.5 = 8 photos per minute.",
    diagramData: null
  },
  {
    id: 100,
    worldIndex: 9,
    rule: "✦ SPEED = DISTANCE ÷ TIME",
    prompt: "A satellite orbits Earth covering 42,000 kilometres in 1.75 hours. What is its orbital speed in km/h?",
    options: ["24,000 km/h", "22,500 km/h", "25,000 km/h", "21,000 km/h"],
    correctIndex: 0,
    correctValue: "24,000 km/h",
    hint: "Speed equals distance divided by time: 42,000 divided by 1.75.",
    explanation: "Speed = 42,000 ÷ 1.75 = 24,000 km/h. Rate Champion mastered!",
    diagramData: { type: 'triangle', unknown: 'S' }
  }
];

export function getQuestionsForWorld(worldIndex = 0) {
  return PRACTICE_QUESTIONS.filter(q => q.worldIndex === worldIndex);
}
