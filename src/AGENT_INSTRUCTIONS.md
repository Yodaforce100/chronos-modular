# Shepherd Verses — Agent Instructions: Do Not Modify

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
- Contains the mood selector card and companion copy. Do not change mood labels, emoji, scripture quote, or the bible pages background image styling (opacity, filter values).

## `components/sv/SVHowItWorks.jsx`
- Two-step cards with image + text. Do not change step titles, body copy, image URLs, or `objectPosition` values.

## `components/sv/SVPlans.jsx`
- Pricing cards. Do not change plan names, prices, feature copy, badge text, or CTA button labels.

## `components/sv/SVReviews.jsx`
- Three testimonial cards. Do not change reviewer names, locations, or quote text.

## `components/sv/SVFaq.jsx`
- Accordion FAQ. Do not change question or answer text. Background image uses `cover` with `20% center` positioning on desktop — do not change.

## `components/sv/SVSocials.jsx`
- Social icons section. Do not change heading, body copy, or icon SVGs.

## `components/sv/SVFooter.jsx`
- Do not change tagline, legal link labels, or copyright text.

## `components/sv/SVTrialModal.jsx`
- Modal triggered by CTA clicks. Do not change header copy, platform labels, or button text.

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