# Prompt CRAFT — Google Play & App Store Guide

A beginner-friendly checklist for putting Prompt CRAFT in the Google Play Store (and later the Apple App Store).

> **What's already done for you (in this repository):**
> - The app works as an installable app ("PWA"): `manifest.webmanifest`, app icons, offline support (`sw.js`, `offline.html`).
> - Everything loads from your own site. No outside fonts or libraries, no ads, no tracking.
> - Legal pages: `privacy.html`, `terms.html`, `disclaimer.html`, `accessibility.html`, `delete-data.html`.
> - "For entertainment and educational purposes only" appears on first launch, in the footer, and next to the calculators and AI results.
> - A first-launch screen where users confirm they're 18+ and accept the Terms.
> - An in-app **Delete my data** button.
> - Accessibility to WCAG 2.1 AA (the ADA standard). An automated check (axe) found 0 problems in light and dark mode.
> - Store graphics in `store/`: the 512×512 icon, the 1024×500 feature graphic, and 6 phone screenshots (1080×2160).

---

## Your web address

Your app's address (from GitHub Pages) should be:
**https://mnpaccity.github.io/prompt-craft/**

Check it opens in your browser. If it doesn't, turn Pages on:
1. Go to **github.com/mnpaccity/prompt-craft** → **Settings** → **Pages** (on the left).
2. Under **Branch**, choose **main** and **/ (root)**, then click **Save**.
3. Wait 2 minutes and open the address again.

Your privacy policy address (Google asks for it) is:
**https://mnpaccity.github.io/prompt-craft/privacy.html**

---

## Part 1 — Make the Android app file (about 20 minutes, free)

We use **PWABuilder** (a free Microsoft tool) to wrap the website as an Android app.

1. Go to **https://www.pwabuilder.com**.
2. Paste **https://mnpaccity.github.io/prompt-craft/** and click **Start**.
3. When the report appears, click **Package For Stores**, then **Android → Generate Package**.
4. In the options:
   - **Package ID:** `io.github.mnpaccity.promptcraft`. Write it down; you can never change it later.
   - **App name:** `Prompt CRAFT`
   - **Signing key:** choose **Create new**, and fill in your name and a password you will **never lose**.
5. Click **Download**. You get a ZIP file. Right-click it → **Extract All**.
6. Inside you'll find:
   - **`app-release-bundle.aab`**: the file you upload to Google Play.
   - **`signing.keystore`** and **`signing-key-info.txt`**: ⚠️ **back these up** in 2 safe places, like a USB stick and your Google Drive. Without them you can never update your app.
   - **`assetlinks.json`**: needed in Part 3.

PWABuilder sets the app to the newest Android version Google requires. Google requires new apps to target Android 16 (API level 36) from August 31, 2026, so if PWABuilder offers a "target SDK" option, choose **36 or higher**.

---

## Part 2 — Create your Google Play developer account ($25 one-time)

1. Go to **https://play.google.com/console/signup** and sign in with your Google account.
2. Choose **Personal** (for yourself). Pay the **$25** one-time fee.
3. Verify your identity (photo ID) and your phone. This can take a few days.

> ⏳ **Important for new personal accounts:** Google requires a **closed test with at least 12 testers who stay opted in for 14 days in a row** before you can publish to everyone. Start asking 12+ friends or family with Android phones now. Each one needs a Gmail address.

---

## Part 3 — Prove you own the website (Digital Asset Links)

This removes the browser address bar so the app looks like a real app.

Android checks for a file at **https://mnpaccity.github.io/.well-known/assetlinks.json**. That's at the root of your GitHub site, **not** inside `/prompt-craft/`. So:

1. On GitHub, click **+** → **New repository**. Name it exactly **`mnpaccity.github.io`** and make it **Public**. Click **Create**.
2. Click **Add file → Create new file**. Name it `.well-known/assetlinks.json` (typing the `/` makes the folder).
3. Paste in everything from the **assetlinks.json** file PWABuilder gave you. Click **Commit**.
4. Add one more empty file named **`.nojekyll`**. GitHub needs it to show folders that start with a dot.
5. Turn on Pages for this repository too: **Settings → Pages → main / root → Save**.
6. After you upload the app to Play (Part 4), Google re-signs it with its own key:
   - Go to **Play Console → your app → Test and release → App integrity → App signing**.
   - Copy the **SHA-256 certificate fingerprint**.
   - Add it to `assetlinks.json` next to the first one, inside the `sha256_cert_fingerprints` list.

Ask Claude for help with step 6. It's easy to get the commas wrong.

---

## Part 4 — Create the app in Play Console

Click **Create app**:
- **App name:** Prompt CRAFT: Learn AI Prompts
- **Default language:** English (United States)
- **App or game:** App
- **Free or paid:** Free
- Tick the declarations and click **Create app**.

Then work through **Dashboard → Set up your app**. Use these answers:

| Section | What to enter |
|---|---|
| **Privacy policy** | `https://mnpaccity.github.io/prompt-craft/privacy.html` |
| **App access** | "All functionality is available without special access" |
| **Ads** | "No, my app does not contain ads" |
| **Content rating** | Fill in the questionnaire with your email. Category: **Reference, News, or Educational**. Answer **No** to violence, sexual content, profanity, drugs, gambling, user interaction/sharing, location sharing and digital purchases. |
| **Target audience** | **18 and over** only. This matches your Terms and keeps you out of Google's stricter "Families" rules. |
| **News app** | No |
| **Data safety** | See below |
| **Government app** | No |
| **Financial features** | The calculators are informational only. Choose "My app doesn't provide any financial features". If the form lists *loan calculator*, select only that. |
| **Health apps** | None |
| **Category** | Education |
| **Contact details** | Your email (it's shown publicly). Website: `https://mnpaccity.github.io/prompt-craft/` |

### Data safety answers
- **Does your app collect or share any of the required user data types?** → **No**.
  - Why: everything a user types stays in the app's storage on their own phone. Nothing is sent to you or to any other company. The Android version loads nothing from outside sites.
- **Delete-data URL** (if asked): `https://mnpaccity.github.io/prompt-craft/delete-data.html`

> If you later add accounts, analytics, ads or AI that runs on a server, these answers must change.

---

## Part 5 — Store listing

**Main store listing** (copy and paste):

**App name (30 max):**
`Prompt CRAFT: Learn AI Prompts`

**Short description (80 max):**
`Learn to write great AI prompts with games, ready-made prompts and fun missions.`

**Full description:**
```
Prompt CRAFT teaches anyone, even total beginners, how to write great prompts for AI assistants like Claude, ChatGPT and Gemini. Learn the simple CRAFT method: Context, Role, Action, Format and Tone.

WHAT'S INSIDE
• Games – 5 quick games that make the CRAFT method stick.
• Pro Missions – real-world projects (marketing campaign, listing launch, client pitch, team retreat, crisis response) with a live coach and a completeness grade.
• Prompt Library – hundreds of ready-to-copy prompts for home, office, business strategy, lead generation, video creation, real estate and conflict resolution.
• Prompt Enhancer – turn messy notes into a clean, structured prompt with fill-in-the-blank brackets.
• Real Estate video tools – shot-by-shot photo-to-video prompt plans.
• Handy tools – calculator, running receipt, mortgage and auto-loan estimators, and a planner.
• My Files – save your prompts, photos, documents and videos in one place.
• Three skill levels – Just starting, Not completely lost, and I got this.

PRIVATE BY DESIGN
No account, no ads, no tracking. Everything you type stays on your device, and you can delete it any time.

ACCESSIBLE
Works with screen readers and keyboards, supports large text, and respects reduced-motion settings.

FOR ENTERTAINMENT AND EDUCATIONAL PURPOSES ONLY. Prompt CRAFT is not financial, legal, real-estate or professional advice. Calculators give estimates only. AI can make mistakes, so always review results. Prompt CRAFT is an independent app and is not affiliated with or endorsed by Anthropic, OpenAI, Google, Apple or any other company named in it.
```

**Graphics** (in the `store/` folder):
- App icon: `store/play-icon-512.png`
- Feature graphic: `store/feature-graphic-1024x500.png`
- Phone screenshots: everything in `store/screenshots/` (upload at least 2, up to 8).

---

## Part 6 — Closed test (the 14-day step)

1. **Test and release → Testing → Closed testing → Create track**.
2. **Testers:** create an email list with your 12+ testers' Gmail addresses.
3. **Create new release** → upload **`app-release-bundle.aab`** → release name `1.0` → **Save → Review → Start rollout**.
4. Send testers the **opt-in link** shown on the Testers tab. Each tester must tap **Become a tester**, then install the app from Play.
5. Keep at least 12 testers opted in for **14 days in a row**. Ask them to actually open and use the app, and to send feedback.
6. After 14 days, the Dashboard shows **Apply for production**. Answer the questions about your test, then wait for review (usually a few days).
7. Once approved: **Production → Create new release** → upload the same (or a newer) `.aab` → **Start rollout**. 🎉

---

## Updating the app later

Changes you make to the website appear in the Android app automatically, because the app shows your live site. You only need a new `.aab` (from PWABuilder, using the **same signing key**) if you change the app's name, icon or Android settings.

---

## Apple App Store (later)

Apple is stricter about apps that are "just a website", under its *Minimum Functionality* rule (Guideline 4.2). What you need:
- An **Apple Developer Program** membership: **$99 per year**.
- A **Mac with Xcode**. Your Intel iMac running macOS Sequoia may work; check that the current Xcode version supports it.
- PWABuilder → **iOS → Generate Package** gives you an Xcode project to build and upload.

To improve your chances with Apple:
- Make sure the app works offline (done), and add app-like extras such as a "Share" button using the phone's share sheet.
- Fill in Apple's **App Privacy** form as "Data Not Collected".
- Use the same privacy policy and the "entertainment and educational purposes only" text.

---

## Before you submit: final checklist

- [ ] The website opens at https://mnpaccity.github.io/prompt-craft/
- [ ] The privacy policy opens at …/privacy.html
- [ ] You backed up `signing.keystore` and its passwords in 2 places
- [ ] `assetlinks.json` has both fingerprints (yours + Google's)
- [ ] 12+ testers are lined up
- [ ] Store listing, content rating, target audience (18+) and data safety are complete
- [ ] You opened the app on a real Android phone and tried each tab

*This guide is general information, not legal advice. Store rules change often, so check the Play Console Help pages and the App Store Review Guidelines before you submit.*
