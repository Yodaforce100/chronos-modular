# Shepherd Verses — Agent Instructions: Do Not Modify

---

## Working Agreement (Read This First)

We are using the Base44 platform (Vite + React + Tailwind + shadcn/ui) as the complete foundation for the Shepherd Verses landing page. Do not rebuild or migrate to any other framework — including Next.js.

**Non-negotiable rules:**
- Do not change any text/copy unless explicitly instructed by the user
- Do not change any image URLs, opacity values, gradients, animations, or brand colors unless explicitly instructed
- Read and follow all instructions in `AGENT_INSTRUCTIONS.md` before writing any code
- Work one stage at a time. Show the result and wait for explicit user approval before proceeding to the next stage

---

## Stage 1: Project Orientation (MUST COMPLETE BEFORE ANY CODING)

**This platform uses Vite + React + Tailwind + shadcn/ui. Do NOT attempt to use Next.js, create a new project, or run any install commands. Everything is already configured.**

Before writing or modifying any code, you MUST read the following files in full, in this order:

1. `AGENT_INSTRUCTIONS.md` — this file. Read it completely.
2. `index.css` — design tokens, font imports, CSS variables.
3. `tailwind.config.js` — colour tokens, font families, keyframes, animations.
4. `App.jsx` — routing structure. Understand all existing routes before adding new ones.

After reading each file, acknowledge it before proceeding to the next.

**Do not create any new files or modify any existing files until all four files have been read and acknowledged.**

Once orientation is complete, confirm with: *"Stage 1 complete. I have read and understood the design system, routing structure, and all locked content. Ready to proceed."*

---

## Global Rules
- Do not change any copy/text unless explicitly instructed.
- Do not change any image URLs unless explicitly instructed.
- Do not change any animation values unless explicitly instructed.
- Do not change any opacity, filter, or gradient values unless explicitly instructed.
- Do not add new sections or components unless explicitly instructed.
- Preserve all comments in the code, including commented-out alternatives.

---

## `components/sv/SVHero.jsx`

**Text (do not change):**
- Eyebrow: `"Spoken Scripture ✝"`
- H1: `"Wake up to a voice that hears you"`
- H1 italic subtitle: `"and guides you with scripture and affirmations."`
- Body: `"Share how you're feeling, and your Shepherd Verses companion delivers calming, spoken scripture and affirmations—helping you find clarity and reassurance throughout your day."`
- CTA Button: `"Start Your Morning with Peace"`
- Trust line: `"Free 7-day trial · Cancel anytime"`
- Scripture: `"Come to me, all you who are weary and burdened, and I will give you rest." — Matthew 11:28`

**Image & Visual (do not change):**
- Background image is set in the `BG_IMG` constant at the top of the file. Do not change this URL.
- Image opacity: `0.72` | filter: `contrast(1.15) saturate(1.1)` — do not adjust.
- Gradient overlay fades from light at top → transparent mid → solid white at bottom. Do not modify.
- Ken Burns animation: scales `1 → 1.05 → 1` on a 12-second infinite Framer Motion loop. Do not remove or alter.
- Animated gold soundwave bars beside the eyebrow are a brand element. Do not remove. Animation defined in `tailwind.config.js` as `animate-soundwave`.
- Layout uses `min-h-[70vh]` with `pt-44 pb-8` to account for sticky navbar. Do not change.

---

## `components/sv/SVNavbar.jsx`

**Navigation Links (do not change):**
- Link 1: `"How It Works"` → scrolls to `#how-it-works`
- Link 2: `"Plans"` → scrolls to `#plans`
- CTA Button: `"Begin Free Trial"`

**Logo (do not change):**
- Logo image URL: `https://media.base44.com/images/public/69e96f879840c600a93d0ce5/39f2abf45_Shepherd_verses_herologo_GOLD_STAR_2500_TRANSPARENTBGpng-2.png`
- Logo height: `h-16` on desktop, `h-12` on mobile
- Logo is centred on desktop, left-aligned on mobile
- Do not change the alt text: `"Shepherd Verses"`

**Scroll Behaviour (do not change):**
- On scroll past 10px: navbar background transitions from fully transparent to white with a shadow
- Controlled by a `scrolled` state and a `useEffect` scroll listener — do not remove

**CTA Button Styling (do not change):**
- Uses the gold gradient: `linear-gradient(90deg, #D9B86A 0%, #F5E9A4 35%, #E8D48B 60%, #D9B86A 100%)`
- Text colour: `#001C5F` (navy)
- `hover:opacity-90` transition — do not change

**Mobile Menu (do not change):**
- Hamburger icon toggles an animated dropdown drawer
- Drawer contains the same nav links and CTA button
- Animated open/close using Framer Motion `AnimatePresence`
- Do not change the drawer background colour or link order

**Layout (do not change):**
- Fixed/sticky at top with `z-50`
- Three-column grid on desktop: `[links] [logo] [CTA]`
- Single row on mobile: `[hamburger] [logo]`

## `components/sv/SVConnection.jsx`

**Text (do not change):**
- Card prompt: `"How are you feeling this morning?"`
- Response label: `"Your companion responds…"`
- Scripture in card: `"Cast all your anxiety on him because he cares for you."` — `1 Peter 5:7`
- Section heading: `"A companion for every"` / `"moment of your day"`
- Body: `"Some days begin with calm. Others begin with uncertainty, heaviness, or quiet worry. Shepherd Verses meets you in those moments—listening to how you feel and responding with spoken scripture and affirmations, chosen just for you."`

**Mood Selector (do not change):**
- 6 moods in this exact order: `😔 Heavy`, `😟 Anxious`, `😌 Peaceful`, `😴 Tired`, `🙏 Grateful`, `😊 Hopeful`
- Do not change emoji, labels, or grid layout

**Background & Visuals (do not change):**
- Background image URL: `https://media.base44.com/images/public/69e96f879840c600a93d0ce5/583f3e10d_iStock-2235714260.jpg`
- Image opacity: `0.40` | filter: `saturate(0.3) hue-rotate(180deg) brightness(1.15) grayscale(0.3)` — do not adjust
- White gradient fade from top — do not remove
- Animated blue soundwave bars inside card — do not remove (`animate-soundwave`)
- Gold cross divider (`✝`) between lines — do not remove

---

## `components/sv/SVHowItWorks.jsx`

**Text (do not change):**
- Section heading: `"Two simple steps"` / `"A day transformed"`
- Step 01 title: `"Share How You Feel"`
- Step 01 body: `"PAUSE and name your current emotion—whether you're anxious, tired, or grateful. Your Shepherd Verses companion listens to where you are in this moment."` (`PAUSE` is gold, `Shepherd Verses companion` is bold)
- Step 02 title: `"Hear a Caring Voice"`
- Step 02 body: `"LISTEN as your companion shares spoken scripture and affirmations tailored to your feelings, carefully chosen to guide and support you."` (`LISTEN` is gold)

**Images (do not change):**
- Step 01 image URL: `https://media.base44.com/images/public/69e96f879840c600a93d0ce5/637e627fe_HeroMobilephoneimageApr26.png` | `objectPosition: "center center"`
- Step 02 image URL: `https://media.base44.com/images/public/69e96f879840c600a93d0ce5/5f6aba3ca_iStock-2257561497.jpg` | `objectPosition: "center 30%"`
- Each image uses a dark gradient overlay (`from-black/30 via-transparent to-black/40`) for text readability — do not remove
- Card titles are overlaid on the image in white serif text — do not move below the image
- White gradient fade at section bottom — do not remove

---

## `components/sv/SVPlans.jsx`

**Text (do not change):**
- Eyebrow: `"Begin Today"`
- Section heading: `"Choose Your Subscription"`
- Subheading: `"Wake up supported. Start your day guided."`
- Trust badges: `"🔒 Secure Payment"`, `"✦ Cancel Anytime"`, `"🎁 7-Day Free Trial"`

**Plan 1 — Monthly Companion (do not change):**
- Label: `"Monthly Companion"` | Price: `"$5.95 / month"` | CTA: `"Start Monthly Plan"`
- Features: `"Daily Delivery"`, `"Custom Timing"`, `"Platform Choice"`, `"No Commitment"`

**Plan 2 — Annual Journey (do not change):**
- Label: `"Annual Journey"` | Price: `"$59.50 / year"` | CTA: `"Start Annual Journey"`
- Badge: `"Just $4.95/month — Best Value"` — uses gold gradient, do not change
- Features: `"12 Months for the Price of 10"`, `"Continuous Access"`, `"Simplified Billing"`, `"Everything in Monthly, plus priority support"`
- Card background: `#2A4B7C` (navy) — do not change
- CTA button uses gold gradient — do not change

---

## `components/sv/SVReviews.jsx`

**Text (do not change):**
- Section heading: `"What Our Members Are Saying"`

**Review 1 (do not change):**
- Name: `"Margaret T."` | Location: `"Tennessee"`
- Quote: `"Every morning I used to reach for my phone and feel anxious before the day even started. Now I start with Shepherd Verses and it genuinely changes my whole outlook. The scripture it chooses always feels like it was written just for me."`

**Review 2 (do not change):**
- Name: `"David R."` | Location: `"Texas"`
- Quote: `"I was sceptical at first — I've been a Christian for thirty years and wondered what an app could offer me. But the way it listens and responds with such relevant scripture surprised me deeply. It's become part of my morning prayer time."`

**Review 3 (do not change):**
- Name: `"Joanne M."` | Location: `"Georgia"`
- Quote: `"I shared that I was feeling overwhelmed one morning and the verse it gave me brought me to tears — in the best way. It felt like being heard. I've recommended it to everyone in my small group."`

**Visuals (do not change):**
- All cards show 5 gold stars (`★` in `#C9A84C`) — do not change star count or colour
- Card background: `#F7F6F4`, border: `#E7DED2` — do not change

---

## `components/sv/SVFaq.jsx`

**Text — Questions & Answers (do not change):**
1. Q: `"What is Shepherd Verses?"` — A: `"Shepherd Verses is a personal spiritual companion…"`
2. Q: `"How does Shepherd Verses work?"` — A: `"Simply share how you're feeling…"`
3. Q: `"Do I need to know the Bible to use Shepherd Verses?"` — A: `"Not at all. Shepherd Verses gently guides you…"`
4. Q: `"What kinds of feelings can I share?"` — A: `"You can share any feeling — anxious, grateful…"`
5. Q: `"Will the scripture be relevant to how I feel?"` — A: `"Yes. Each response is thoughtfully chosen…"`
6. Q: `"Can I use Shepherd Verses more than once a day?"` — A: `"Yes. You can return to Shepherd Verses…"`

**Background & Visuals (do not change):**
- Background image URL: `https://media.base44.com/images/public/69e96f879840c600a93d0ce5/dcaf9fcc8_istockphoto-1164883816-1024x1024.jpg`
- Image opacity: `0.40` | filter: `saturate(0.7) brightness(1.05)` — do not adjust
- Desktop position: `20% center` | Mobile position: `center center` — do not change
- White gradient fade from top — do not remove
- Accordion chevron colour: `#C9A84C` (gold) — do not change
- Gold cross divider (`✝`) in section header — do not remove
- Only one FAQ item can be open at a time — do not change this behaviour

---

## `components/sv/SVSocials.jsx`

**Text (do not change):**
- Section heading: `"Follow Our Journey"`
- Body: `"Be part of something bigger. Follow along for daily scripture, gentle encouragement, and a community that cares."`

**Social Icons (do not change):**
- 4 icons in this exact order: `TikTok`, `YouTube`, `Instagram`, `Facebook`
- All use inline SVG paths — do not replace with lucide or other icon libraries
- Icon circle: `w-14 h-14`, white background, gold border `#E8D48B`, gold icon `#C9A84C`
- Hover: border transitions to `#D9B86A`, icon to `#D9B86A`, label to `#C9A84C`
- Animated gold soundwave bars in section header — do not remove (`animate-soundwave`)

---

## `components/sv/SVFooter.jsx`

**Text (do not change):**
- Tagline: `"Daily scripture and affirmations, spoken just for you. Every morning, without fail."`
- Legal label: `"Legal"`
- Links: `"Privacy Policy"`, `"Terms of Service"`
- Copyright: `"© 2026 Shepherd Verses. Made with care for your peace of mind."`

**Logo (do not change):**
- Logo image URL: `https://media.base44.com/images/public/69e96f879840c600a93d0ce5/39f2abf45_Shepherd_verses_herologo_GOLD_STAR_2500_TRANSPARENTBGpng-2.png`
- Logo height: `h-20`
- On desktop: centred in middle column of 3-column grid
- On mobile: centred above the grid, logo hidden in grid

**Layout (do not change):**
- 3-column grid on desktop: `[tagline] [logo] [legal links]`
- Footer background: white | top border: `#E7DED2`

---

## `components/sv/SVTrialModal.jsx`
- Modal triggered by all CTA clicks across the page. Do not change header copy, platform labels, or button text.

---

## Design Tokens (do not change)
- Brand Navy: `#001C5F`
- Brand Blue: `#5E8DBF` / `#669eea`
- Brand Gold: `#C9A84C` / `#D9B86A`
- Stone background: `#F2F1EE`
- Body text: `#2A4B7C` / `#3A4A5A`
- Divider: `#E7DED2`
- Gold gradient: `linear-gradient(90deg, #D9B86A 0%, #F5E9A4 35%, #E8D48B 60%, #D9B86A 100%)`
- Primary font: `Marcellus` (serif) — headings
- Secondary font: `Inter` (sans) — body

---

## Page Structure (vertical order — do not reorder)
1. SVNavbar
2. SVHero
3. SVConnection
4. SVHowItWorks
5. SVPlans
6. SVReviews
7. SVFaq
8. SVSocials
9. SVFooter