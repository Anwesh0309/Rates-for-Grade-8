/* =========================================================================
   OFFLINE AUDIO GENERATION — ElevenLabs "Alice"
   Usage:  node scripts/generate_audio.js           (skips files that exist)
           node scripts/generate_audio.js --force   (re-generate everything)
   • Reads phrases from src/utils/lessonScript.js (same text the UI shows)
   • Applies per-style voice settings
   • Saves MP3s to public/assets/audio/ and rewrites src/utils/audioMap.js
   • Rate-limited at 350 ms between API calls, with retry on 429
   Requires Node 18+ (built-in fetch) and VITE_ELEVENLABS_API_KEY in .env.local
   ========================================================================= */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { ALL_PHRASES } from '../src/utils/lessonScript.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public', 'assets', 'audio');
const MAP_FILE = path.join(ROOT, 'src', 'utils', 'audioMap.js');

const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2';
const MODEL_ID = 'eleven_multilingual_v2';

// Same settings table as src/utils/audio.js
const STYLE_SETTINGS = {
  celebration:   { stability: 0.12, similarity_boost: 0.45, style: 0.75, use_speaker_boost: true },
  encouragement: { stability: 0.16, similarity_boost: 0.50, style: 0.65, use_speaker_boost: true },
  question:      { stability: 0.20, similarity_boost: 0.55, style: 0.55, use_speaker_boost: true },
  emphasis:      { stability: 0.16, similarity_boost: 0.50, style: 0.60, use_speaker_boost: true },
  thinking:      { stability: 0.24, similarity_boost: 0.60, style: 0.35, use_speaker_boost: true },
  statement:     { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true },
  instruction:   { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true }
};

function readEnvKey() {
  if (process.env.VITE_ELEVENLABS_API_KEY) return process.env.VITE_ELEVENLABS_API_KEY;
  for (const f of ['.env.local', '.env']) {
    const p = path.join(ROOT, f);
    if (!fs.existsSync(p)) continue;
    const m = fs.readFileSync(p, 'utf8').match(/^\s*VITE_ELEVENLABS_API_KEY\s*=\s*"?([^"\r\n]+)"?/m);
    if (m) return m[1].trim();
  }
  return '';
}

const slugify = text =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 50);

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchWithRetry(url, options, maxRetries = 4) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetch(url, options);
      if (res.status === 429) {
        const waitTime = attempt * 2000;
        console.log(`\n  [Rate limit 429] Waiting ${waitTime}ms before retry ${attempt}/${maxRetries}...`);
        await sleep(waitTime);
        continue;
      }
      return res;
    } catch (err) {
      if (attempt === maxRetries) throw err;
      await sleep(1500 * attempt);
    }
  }
  return null;
}

async function main() {
  const force = process.argv.includes('--force');
  const apiKey = readEnvKey();
  if (!apiKey) {
    console.error('✖ VITE_ELEVENLABS_API_KEY not found in .env.local');
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // De-duplicate by exact text (first style wins)
  const seen = new Set();
  const phrases = ALL_PHRASES.filter(p => {
    if (!p.text || seen.has(p.text)) return false;
    seen.add(p.text);
    return true;
  });

  console.log(`Total unique phrases to generate: ${phrases.length}`);
  const map = {};
  let made = 0, skipped = 0, failed = 0;

  for (const [i, p] of phrases.entries()) {
    const hash = crypto.createHash('md5').update(p.text).digest('hex').slice(0, 6);
    const fileName = `audio_${slugify(p.text)}_${hash}.mp3`;
    const filePath = path.join(OUT_DIR, fileName);
    const publicPath = `/assets/audio/${fileName}`;

    if (!force && fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
      map[p.text] = publicPath;
      skipped++;
      continue;
    }

    const s = STYLE_SETTINGS[p.style] || STYLE_SETTINGS.statement;
    process.stdout.write(`[${i + 1}/${phrases.length}] (${p.style}) ${p.text.slice(0, 50)}… `);
    try {
      const res = await fetchWithRetry(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
        method: 'POST',
        headers: { 'xi-api-key': apiKey, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
        body: JSON.stringify({ text: p.text, model_id: MODEL_ID, voice_settings: s })
      });
      if (!res || !res.ok) {
        const errText = res ? await res.text() : 'No response';
        throw new Error(`${res ? res.status : 'ERR'}: ${errText}`);
      }
      fs.writeFileSync(filePath, Buffer.from(await res.arrayBuffer()));
      map[p.text] = publicPath;
      made++;
      console.log('✔');
    } catch (e) {
      failed++;
      console.log(`✖ ${e.message.slice(0, 160)}`);
    }
    await sleep(350);
  }

  const out =
    '/* =========================================================================\n' +
    '   AUTO-GENERATED by scripts/generate_audio.js — do not edit by hand.\n' +
    '   Key: exact spoken text  →  Value: pre-generated MP3 path.\n' +
    '   ========================================================================= */\n' +
    `export const audioMap = ${JSON.stringify(map, null, 2)};\n`;
  fs.writeFileSync(MAP_FILE, out);

  console.log(`\nDone. generated ${made}, reused ${skipped}, failed ${failed}. audioMap.js updated.`);
  if (failed) process.exitCode = 1;
}

main();
