# Rates Quest — Grade 8 Interactive Math Module

An interactive, gamified Grade 8 mathematics module focused on **Rates & Unit Rates**, aligned with the MOE curriculum.

## 🌟 Features
- **Phase 1: Wonder & Curiosity**: A real-world hook comparing unit prices of different sized items.
- **Phase 2: Interactive Story**: 8 illustrated slides teaching core rate principles:
  - What is a rate?
  - Unit rates & the meaning of "per"
  - The Speed Triangle ($S = D \div T$, $D = S \times T$, $T = D \div S$)
  - Best buy analysis
  - Compound rate conversions ($\text{km/h} \leftrightarrow \text{m/s}$, $\text{L/min} \leftrightarrow \text{L/h}$)
  - Distance–time graphs
  - Average speed for multi-leg journeys
- **Phase 3: Simulation Stations**:
  - **Station 1 (Rate Race)**: Visual racing simulator with real-time timers and unit rate calculations.
  - **Station 2 (Best Buy Market)**: Interactive supermarket cart with unit price comparison.
  - **Station 3 (Journey Planner)**: Interactive distance–time graphs and average speed calculation.
- **Phase 4: 10 Themed Worlds & 100 Unique Practice Questions**:
  - 10 structured game worlds with 10 questions each (100 total questions).
  - Pedagogical hints with clear mathematical explanations for every question.
  - Interactive diagram rendering (`<RateDiagram/>`).
  - Score tracking, streaks, and 3-heart system.
- **Phase 5: Reflect & Scoreboard**: Student reflection, full breakdown of stars earned across all 10 worlds, and celebration screen.
- **Audio & Narration Pipeline**:
  - ElevenLabs voice ("Alice" - `Xb7hH8MSUJpSbSDYk0k2`) with browser speech synthesis fallback.
  - Zero-overlap playback architecture.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
git clone https://github.com/Anwesh0309/Rates-for-Grade-8.git
cd Rates-for-Grade-8
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port displayed in terminal) in your browser.

### Audio Generation (Optional)
To pre-generate static `.mp3` narration files with ElevenLabs:
1. Create a `.env.local` file:
   ```env
   VITE_ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
   ```
2. Run:
   ```bash
   npm run audio:generate
   ```

### Production Build
```bash
npm run build
```
