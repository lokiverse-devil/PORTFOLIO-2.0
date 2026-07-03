# Los Santos Protocol — Asset Requirements Guide

To complete the cinematic experience, you need to provide the following assets in your `/public` directory.

## 📂 Folder Structure
Create these folders in `c:\Users\lenovo pc\Desktop\GTAV Portfolio\public\`:
- `/public/images`
- `/public/sounds`
- `/public/fonts`

---

## 🖼️ Images (`/public/images`)
Provide high-resolution JPG files (1920x1080 recommended).

| Filename | Description | Usage |
| :--- | :--- | :--- |
| `intro_city.jpg` | Cinematic shot of a city/skyline at night | Phase 3: City Reveal |
| `loading_1.jpg` | Gritty character or environment shot | Phase 5: Loading Slide 1 |
| `loading_2.jpg` | Action-oriented or high-contrast shot | Phase 5: Loading Slide 2 |
| `loading_3.jpg` | Atmospheric or landscape shot | Phase 5: Loading Slide 3 |
| `landing_city.jpg` | Iconic panorama of Los Santos / City | Phase 7: Landing Page BG |

---

## 🔊 Sounds (`/public/sounds`)
All files must be in `.mp3` format.

| Filename | Description | Usage |
| :--- | :--- | :--- |
| `siren_loop.mp3` | Distant, echoing police siren loop | Cold Boot & Police Energy |
| `star_ping.mp3` | Sharp cinematic "ping" or "ding" sound | Wanted Stars 1–4 |
| `star_final_hit.mp3` | Deep, heavy cinematic impact / slam | 5th Star Impact |
| `warning_accept.mp3` | Sharp electronic "click" or "accept" chime | Warning Screen ENTER |
| `loading_ambience.mp3` | Low-frequency atmospheric drone | Loading Screen Loop |
| `mission_passed.mp3` | High-energy "Success" theme (GTA style) | Mission Passed Reveal |
| `mission_failed.mp3` | Low-frequency "Failure" hit / drone | Mission Failed Reveal |

---

## 🔠 Fonts (`/public/fonts`)
These fonts are required for the GTA-V aesthetic.

| Filename | Font Name | Usage |
| :--- | :--- | :--- |
| `ChaletLondon1960.woff2` | Chalet London 1960 | Primary Headlines / Titles |
| `ChaletComprime1960.woff2` | Chalet Comprimé 1960 | Condensed UI / Subtitles |

> [!IMPORTANT]
> Ensure the font files are named precisely as shown above to match the CSS `@font-face` declarations.

---

## 🎯 Final Step
Once you place these files in their respective folders, the application will automatically pick them up. The dev server is already configured to serve them from the `/public` path.
