# RaidGuild Brand Assets — Agent Manifest

> **Purpose:** This is a single, self-contained document that an AI agent can read to (1) understand the RaidGuild brand guidelines and (2) know the exact download URL for **every** brand asset. Drop this file into your agent's context when building a RaidGuild-branded site or asset.
>
> **Companion doc:** `AGENTS.md` is the *developer/design-system* handbook (components, tokens, setup). **This file** is the *asset inventory + download map*. Use both together.
>
> **2024 Q4 Brand Refresh.** Source of truth: <https://github.com/raid-guild/brand>

---

## 1. How to download assets

Every asset lives in the `public/` folder of the brand repo and is served from the live site root. There are two interchangeable base URLs:

| Source | Base URL | Use for |
| --- | --- | --- |
| **Live site** (recommended for HTTP fetch) | `https://www.brand.raidguild.org` | Fetching a rendered asset directly, e.g. `.../assets/logos/full-m500.svg` |
| **GitHub raw** (direct file bytes) | `https://raw.githubusercontent.com/raid-guild/brand/main/public` | Programmatic download / pinning to a commit |
| **GitHub tree** (browse a folder) | `https://github.com/raid-guild/brand/tree/main/public` | Human browsing / bulk download |

**Path rule:** anything under `public/assets/...` in the repo is served at `https://www.brand.raidguild.org/assets/...`. Example:

- Repo path: `public/assets/logos/full-m500.svg`
- Live URL: `https://www.brand.raidguild.org/assets/logos/full-m500.svg`
- Raw URL: `https://raw.githubusercontent.com/raid-guild/brand/main/public/assets/logos/full-m500.svg`

Throughout this doc, `{LIVE}` = `https://www.brand.raidguild.org` and `{RAW}` = `https://raw.githubusercontent.com/raid-guild/brand/main/public`.

### Asset inventory at a glance

| Category | Count | Format | Location |
| --- | --- | --- | --- |
| Logos (logotype + logomark) | 14 | SVG | `/assets/logos/` |
| Icons — 8bit roles | 17 | SVG | `/assets/icon/8bit/` |
| Icons — D&D service/community | 15 | SVG | `/assets/icon/dd/` |
| Icons — Magic/alchemical | 13 | SVG | `/assets/icon/magic/` |
| Social avatars | 3 | PNG (400×400) | `/assets/social/` |
| Illustrations | 848 files (53 scenes × 4 palettes × 2 tones × full+thumb) | WebP | `/assets/webp/` |
| Full brand guidelines | 1 | PDF | `/assets/RaidGuild_brand_guidelines.pdf` |
| Fonts | 7 files | OTF/WOFF/TTF | `/fonts/` |

Naming convention for color-coded assets: `m` = Moloch (warm red), `s` = Scroll (warm yellow); the number is the palette step (e.g. `m500` = Moloch 500). A two-part name like `m800-s100` means *foreground on background* (Moloch 800 mark on a Scroll 100 background).

---

## 2. Brand foundations

### 2.1 Colors

The primary palette is a warm, high-contrast combination of red, off-black, and off-white — warm and energetic, meant to inspire action. All colors are defined as CSS custom properties in `src/app/globals.css`.

**Primary colors (use these first):**

| Name | Hex | Role |
| --- | --- | --- |
| Moloch 800 | `#29100A` | Primary dark / foreground text |
| Moloch 500 | `#BD482D` | **Primary brand red** (CTAs, accents) |
| Scroll 100 | `#F9F7E7` | Primary light / background |
| Scroll 700 | `#534A13` | Deep warm yellow accent |

**Moloch scale (warm reds):**

| Step | Hex |
| --- | --- |
| Moloch 100 | `#FAEEEB` |
| Moloch 200 | `#EFC5BB` |
| Moloch 300 | `#E39B8B` |
| Moloch 400 | `#D25C41` |
| Moloch 500 | `#BD482D` |
| Moloch 600 | `#8B3521` |
| Moloch 700 | `#5C2316` |
| Moloch 800 | `#29100A` |

**Scroll scale (warm yellows):**

| Step | Hex |
| --- | --- |
| Scroll 100 | `#F9F7E7` |
| Scroll 200 | `#ECE5AC` |
| Scroll 300 | `#DCCD6A` |
| Scroll 400 | `#D2C141` |
| Scroll 500 | `#B5A22C` |
| Scroll 600 | `#837820` |
| Scroll 700 | `#534A13` |
| Scroll 800 | `#211E07` |

**Neutral scale:**

| Step | Hex |
| --- | --- |
| Neutral 100 | `#F1EFEE` |
| Neutral 200 | `#D5CECD` |
| Neutral 300 | `#B9AEAC` |
| Neutral 400 | `#9E8E8A` |
| Neutral 500 | `#806F6B` |
| Neutral 600 | `#645754` |
| Neutral 700 | `#433937` |
| Neutral 800 | `#221D1C` |
| Neutral White | `#FAFAFA` |
| Neutral Black | `#0D0D0D` |

**Semantic mapping (light theme):** background `Scroll 100`, foreground `Moloch 800`, primary `Moloch 500` on `Scroll 100`, secondary/muted `Neutral 100` with `Neutral 600` text, accent `Moloch 500`, border/input `Neutral 200`, focus ring `Moloch 500`. Dark theme flips background to `Moloch 800` with `Scroll 100` text. Prefer Tailwind utilities: `bg-moloch-500`, `text-scroll-100`, etc.

- Tokens source (raw CSS bytes): `https://raw.githubusercontent.com/raid-guild/brand/main/src/app/globals.css` (browse: <https://github.com/raid-guild/brand/blob/main/src/app/globals.css>)

### 2.2 Typography

Three families, wired up in `src/lib/fonts.ts`. Download the font files from `/fonts/` (see §6).

| Family | Role | Notes |
| --- | --- | --- |
| **Mazius Display** | Display / headlines / brand graphics | High-contrast calligraphic serif (latin chancery influence). Bold weight preferred for headlines; two italics can combine for expressiveness. |
| **EB Garamond** | Body & supporting copy, UI components | Chosen for high readability. |
| **Ubuntu Mono** | Code / technical content | Monospace. |

**Type scale** (px / line-height / letter-spacing) and matching utility classes:

| Token | Size | Line height | Letter spacing | Class |
| --- | --- | --- | --- | --- |
| Display Large | 80px | 110% | -2% | `type-display-lg` |
| Display Medium | 60px | 120% | -1% | `type-display-md` |
| Display Small | 48px | 120% | 0% | `type-display-sm` |
| Heading Large | 36px | 120% | 0% | `type-heading-lg` |
| Heading Medium | 28px | 130% | 0% | `type-heading-md` |
| Body Large | 20px | 140% | 0% | `type-body-lg` |
| Body Base | 16px | 160% | 0% | `text-body-base` |
| Body Small | 12px | 160% | 0% | `type-body-sm` |

> Note the exception: Body Base uses `text-body-base` (not `type-body-base`). All other tokens follow the `type-*` convention.

Additional utility classes available: `type-heading-sm`, `type-body-md`, `type-label`, `type-label-md`, `type-label-sm`, `type-code-lg`, `type-code-md`, `type-code-sm`.

### 2.3 Layout / grid

- `container-custom`: max-width 1280px with responsive padding.
- `grid-custom`: responsive grid, 4 columns (mobile) → 8 (tablet) → 12 (desktop).
- Radius base: `--radius: 0.625rem` (with `radius-sm/md/lg/xl` derived).

---

## 3. Logos

The logo has two elements: the **crossed-sword logomark** and the **"Raid Guild" logotype (wordmark)**. Rules:

- The wordmark is **not** used on its own.
- Use the **logomark alone** only when space is limited or the full logotype is inappropriate.
- "Floating" variants are single-color transparent marks; "with background" variants bake in a colored background (`foreground-background`).

**Download folder:** `{LIVE}/assets/logos/` · GitHub: <https://github.com/raid-guild/brand/tree/main/public/assets/logos>

### Full logotype (mark + wordmark)

| File | Description | URL |
| --- | --- | --- |
| `full-m800.svg` | Full logo, Moloch 800 (floating) | `{LIVE}/assets/logos/full-m800.svg` |
| `full-m500.svg` | Full logo, Moloch 500 (floating) | `{LIVE}/assets/logos/full-m500.svg` |
| `full-s100.svg` | Full logo, Scroll 100 (floating, for dark backgrounds) | `{LIVE}/assets/logos/full-s100.svg` |
| `full-m500-m800.svg` | Moloch 500 mark on Moloch 800 background | `{LIVE}/assets/logos/full-m500-m800.svg` |
| `full-m800-m500.svg` | Moloch 800 mark on Moloch 500 background | `{LIVE}/assets/logos/full-m800-m500.svg` |
| `full-m800-s100.svg` | Moloch 800 mark on Scroll 100 background | `{LIVE}/assets/logos/full-m800-s100.svg` |
| `full-s100-s700.svg` | Scroll 100 mark on Scroll 700 background | `{LIVE}/assets/logos/full-s100-s700.svg` |

### Logomark (crossed swords only)

| File | Description | URL |
| --- | --- | --- |
| `symbol-m800.svg` | Symbol, Moloch 800 (floating) | `{LIVE}/assets/logos/symbol-m800.svg` |
| `symbol-m500.svg` | Symbol, Moloch 500 (floating) | `{LIVE}/assets/logos/symbol-m500.svg` |
| `symbol-s700.svg` | Symbol, Scroll 700 (floating) | `{LIVE}/assets/logos/symbol-s700.svg` |
| `symbol-m500-m800.svg` | Moloch 500 symbol on Moloch 800 background | `{LIVE}/assets/logos/symbol-m500-m800.svg` |
| `symbol-m800-m500.svg` | Moloch 800 symbol on Moloch 500 background | `{LIVE}/assets/logos/symbol-m800-m500.svg` |
| `symbol-m800-s100.svg` | Moloch 800 symbol on Scroll 100 background | `{LIVE}/assets/logos/symbol-m800-s100.svg` |
| `symbol-s100-s700.svg` | Scroll 100 symbol on Scroll 700 background | `{LIVE}/assets/logos/symbol-s100-s700.svg` |

**Quick pick:** primary logo on light backgrounds → `full-m500.svg` or `full-m800.svg`; on dark backgrounds → `full-s100.svg`.

---

## 4. Iconography

All icons are **SVG** (crisp at any size, colorable via CSS `fill`/`stroke`). Recommended colors: Moloch 800 `#29100A`, Moloch 500 `#BD482D`, Scroll 100 `#F9F7E7`, Scroll 700 `#534A13`. In docs/MDX, **prefer these SVG icons over emoji**.

**Download folder:** `{LIVE}/assets/icon/` · GitHub: <https://github.com/raid-guild/brand/tree/main/public/assets/icon>

### 4.1 8bit — role characters (`/assets/icon/8bit/`)

D&D-inspired pixelated hero characters, one per guild member role. URL pattern: `{LIVE}/assets/icon/8bit/<name>.svg`

| Icon | Role / meaning |
| --- | --- |
| `alchemist` | DAO Consultant |
| `archer` | Visual Design |
| `cleric` | Account Manager |
| `druid` | Data Science |
| `dwarf` | Treasury (AngryDwarf) |
| `healer` | Internal Ops |
| `hunter` | BizDev |
| `monk` | PM |
| `necromancer` | DevOps |
| `paladin` | Backend Dev |
| `ranger` | UX Design |
| `rogue` | Legal |
| `scribe` | Content Creator |
| `sorcerer` | (role character; no role label on the published page) |
| `tavernkeeper` | Community |
| `warrior` | Frontend Dev |
| `wizard` | Smart Contracts |

### 4.2 D&D — service & community icons (`/assets/icon/dd/`)

Original RaidGuild service/community line icons defining core offerings and values. URL pattern: `{LIVE}/assets/icon/dd/<name>.svg`

`community`, `consultation`, `culture`, `dao`, `education`, `experiment`, `frontend`, `fullstack`, `learning`, `manifesto`, `marketing`, `robot`, `spear`, `sprint`, `swords`

### 4.3 Magic — mystical/alchemical glyphs (`/assets/icon/magic/`)

Mystical, transformative symbols evoking the spiritual side of the craft. URL pattern: `{LIVE}/assets/icon/magic/<name>.svg`

`candle`, `cauldron`, `chalice`, `crystal`, `feather`, `flask`, `hourglass`, `lantern`, `moon`, `pumpkin`, `sparkle`, `star`, `stars`

---

## 5. Illustrations

Technology-forward line art blending cyberpunk aesthetics with D&D heroism ("where blockchain meets fantasy, and builders become adventurers"). Format: **WebP**.

**Download folder:** `{LIVE}/assets/webp/` · GitHub: <https://github.com/raid-guild/brand/tree/main/public/assets/webp>
Midjourney prompts used to generate them: <https://hackmd.io/@Suede/Skbpddppll>

**Usage:** Pair with brand colors. **Maintain original aspect ratios — do not stretch or distort.**

### 5.1 URL construction

Each illustration is a combination of four dimensions. Build any URL as:

```
{LIVE}/assets/webp/<palette>/<size>/<scene>-<tone>.webp                    # full-size
{LIVE}/assets/webp/<palette>/thumbnails/<size>/<scene>-<tone>.webp         # thumbnail
```

| Dimension | Allowed values |
| --- | --- |
| `<palette>` | `moloch500`, `moloch800`, `scroll100`, `scroll700` |
| `<tone>` | `c` (full color) · `bw` (black & white) |
| `<size>` | `1440x1440` (square) · `1080x1440` (portrait) · `1440x550` (landscape) — **see which scenes belong to which size below** |

> **Naming note:** illustration palette folders use the **full** names (`moloch500`, `scroll100`, …), **not** the `m500`/`s100` short codes used for logos and icons. A thumbnail lives under the **same palette** as its full-size asset (only `/thumbnails/` is inserted before the size).

Every scene exists in all 4 palettes, both tones, and as full + thumbnail (= 16 files per scene). Example concrete URLs:

- `{LIVE}/assets/webp/moloch500/1440x1440/forge-fire-c.webp`
- `{LIVE}/assets/webp/scroll100/1080x1440/tower-tree-bw.webp`
- `{LIVE}/assets/webp/moloch800/1440x550/ship-mech-c.webp` (thumbnail: `{LIVE}/assets/webp/moloch800/thumbnails/1440x550/ship-mech-c.webp`)

### 5.2 Scenes by aspect ratio

**Square — `1440x1440` (39 scenes):**
`castle-flag`, `castle-staff`, `desk-work`, `forge-anvil`, `forge-building`, `forge-duo`, `forge-fire`, `forge-work`, `portal-arch`, `ravens-flight`, `stairs-spiral`, `stone-monuments`, `table-castle`, `tree-mech`, `trio-arch`, `trio-backs`, `trio-beast`, `trio-mountain`, `trio-orb`, `trio-portal`, `trio-portraits`, `trio-profiles`, `trio-warriors`, `trio-weapons`, `trio-wings`, `warrior-solo`, `warriors-armed`, `warriors-belts`, `warriors-casual`, `warriors-confident`, `warriors-forward`, `warriors-magic`, `warriors-masked`, `warriors-moloch`, `warriors-orbs`, `warriors-ready`, `warriors-standing`, `warriors-triangle`, `warriors-white`

**Portrait — `1080x1440` (12 scenes):**
`arch-gate`, `book-orb`, `compass-circular`, `raven-solo`, `stairs-cloud`, `stairs-curve`, `stairs-twist`, `stone-pedestal`, `tower-floating`, `tower-platform`, `tower-tree`, `tree-island`

**Landscape — `1440x550` (2 scenes):**
`ship-front`, `ship-mech`

> Total = 53 scenes × 4 palettes × 2 tones × (full + thumbnail) = **848 WebP files.**

---

## 6. Fonts

Download from `{LIVE}/fonts/` (GitHub: <https://github.com/raid-guild/brand/tree/main/public/fonts>). **URL = `{LIVE}/fonts/<File>`** for every file below.

| File | Family / weight | URL |
| --- | --- | --- |
| `MAZIUSREVIEW20.09-Regular.otf` | Mazius Display, Regular | `{LIVE}/fonts/MAZIUSREVIEW20.09-Regular.otf` |
| `MAZIUSREVIEW20.09-Regular.woff` | Mazius Display, Regular (woff) | `{LIVE}/fonts/MAZIUSREVIEW20.09-Regular.woff` |
| `MaziusDisplay-Bold.otf` | Mazius Display, Bold | `{LIVE}/fonts/MaziusDisplay-Bold.otf` |
| `MaziusDisplay-Extraitalic.otf` | Mazius Display, Extra Italic | `{LIVE}/fonts/MaziusDisplay-Extraitalic.otf` |
| `MaziusDisplay-ExtraItalicBold.otf` | Mazius Display, Extra Italic Bold | `{LIVE}/fonts/MaziusDisplay-ExtraItalicBold.otf` |
| `EBGaramond-VariableFont_wght.ttf` | EB Garamond (variable weight) | `{LIVE}/fonts/EBGaramond-VariableFont_wght.ttf` |
| `EBGaramond-Italic-VariableFont_wght.ttf` | EB Garamond Italic (variable weight) | `{LIVE}/fonts/EBGaramond-Italic-VariableFont_wght.ttf` |

Ubuntu Mono is loaded from Google Fonts (no local file needed).

---

## 7. Social avatars

Square 400×400 PNG avatars for social profiles. Folder: `{LIVE}/assets/social/`

| File | Use | URL |
| --- | --- | --- |
| `400x400_dark.png` | Dark background avatar | `{LIVE}/assets/social/400x400_dark.png` |
| `400x400_light.png` | Light background avatar | `{LIVE}/assets/social/400x400_light.png` |
| `400x400_red.png` | Red (Moloch) avatar | `{LIVE}/assets/social/400x400_red.png` |

---

## 8. Full brand guidelines (PDF)

The complete human-facing brand guidelines (2024 Q4 Refresh):

- `{LIVE}/assets/RaidGuild_brand_guidelines.pdf` (~5.7 MB)
- Raw: `{RAW}/assets/RaidGuild_brand_guidelines.pdf`

---

## 9. Agent quick-start checklist

1. **Logo:** use `full-m500.svg`/`full-m800.svg` on light, `full-s100.svg` on dark. Never use the wordmark alone.
2. **Colors:** background `#F9F7E7` (Scroll 100), text `#29100A` (Moloch 800), primary/CTA `#BD482D` (Moloch 500). Full scales in §2.1.
3. **Type:** Mazius Display for headlines, EB Garamond for body, Ubuntu Mono for code. Download fonts from §6.
4. **Icons:** SVGs under `/assets/icon/{8bit,dd,magic}/`. Color with `fill`/`stroke`. Prefer over emoji.
5. **Illustrations:** build URLs via the §5.1 template; keep aspect ratios; pair with brand colors.
6. **Deeper dev guidance / components:** see `AGENTS.md` and `docs/ui-components.md` in the repo.

---

*Maintenance: update this file whenever assets are added/renamed, palettes change, or the download base URLs move, so agents stay aligned with the source of truth.*
