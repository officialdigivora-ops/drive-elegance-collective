# Elevated Rentals

# Premium Car Rental Website — Full Build Prompt



Build a fully responsive (desktop + mobile) car rental marketing website called **"RENTAL"** matching the spec below exactly.



## 1. Brand & Style

- **Vibe:** premium, bold, modern automotive brand — bold uppercase display type, generous whitespace, warm cream/mustard palette contrasted with black.

- **Color palette:**

  - Cream/beige background: `#F2EBE1`

  - Warm mustard/orange (primary accent, CTAs): `#F0B255` / gradient into deeper `#E8A94D`

  - Near-black text/buttons: `#141414`

  - White: `#FFFFFF`

  - Muted grey body text: `#6B6B6B`

- **Typography:** Bold geometric sans-serif for headings (e.g. Space Grotesk / Archivo / Poppins Bold, all-caps, tight letter-spacing). Regular sans-serif (Inter/Poppins Regular) for body copy and nav.

- **Decorative accents:** small 4-point asterisk/sparkle shapes in mustard scattered near hero imagery.

- **Corners:** large rounded corners (16–24px) on cards, buttons fully pill-shaped.



## 2. Global Header (sticky, appears on every page)

- Left: logo text **"RENTAL"** bold black.

- Center nav links: `How it's work`, `Car Locations`, `Car Locations` *(note: duplicate label as in source — replace second with e.g. "Fleet" if fixing)*.

- Right: circular black profile/avatar icon button, then pill-shaped mustard **"Get Started"** button.

- Background transparent/cream, no border.



## 3. Hero Section (cream background)

- Large centered heading: **"PREMIUM CAR RENTAL"** — huge bold black uppercase, two lines, centered.

- Below heading: a white rounded search/booking card, centered, containing:

  - Tab toggle: `Car` | `Vans` (Car active, underlined).

  - Row of 3 fields with labels:

    - "Pick up & Return location" → value "Dallas, Texas"

    - "Start" → value "Oct 16, 11:00 AM"

    - "Stop" → value "Oct 18, 5:00 PM"

  - Square dark search button with magnifying-glass icon at right end of the card.

- Below the card: full-width banner image area with a diagonal-cut mustard/orange background block on the bottom half, featuring a large yellow SUV (Lamborghini Urus) hero shot, side profile, extending edge-to-edge.

- Decorative mustard asterisk shape floating top-right of the car image.

- A circular white "scroll down" arrow button centered at the seam between hero and next section.



## 4. "Premium Car Rental" Content Section (white background)

- Two-column layout (stacks on mobile):

  - Left: heading **"PREMIUM CAR RENTAL"** (bold black, two lines), a paragraph of body copy about workshop/service for exclusive modern and classic cars, and a dark pill button **"See all our Cars"**.

  - Right: tall rounded-corner photo of a red sports car (Porsche) driving away, rear 3/4 view, license plate visible, motion blur road background. Small mustard asterisk decoration near the image.



## 5. "Pick Your Dream Car Today" Showcase (cream/beige gradient background)

- Centered heading **"PICK YOUR DREAM CAR TODAY"**.

- A horizontal row/carousel of car images: a yellow sports car (partially visible left edge), a large green SUV centered (main focus, with a small rotate/360° icon badge on it), and a silver/blue SUV (partially visible right edge) — suggests a swipeable car carousel.

- Below: a row of 4 spec icons with values, centered: speedometer "306 km/h", gear icon "6 speed", seat icon "5 seats", luggage/fuel icon "5 seats".

- Below that: a white rounded floating price bar containing: price-tag icon, **"$225 /day"**, a dark **"View Details"** pill button, and a mustard **"Rent Now"** pill button.



## 6. "Stories Behind the Wheel" Blog/News Section (white background)

- Centered heading **"STORIES BEHIND THE WHEEL"**.

- 3-column grid of story cards, each with:

  - Date badge (large day number + month/year, e.g. "25 December 2023")

  - Bold title (e.g. "Electrifying of the Experience", "FLEXIBLE HIRE FOR BUSINESS", "Single vehicles to entire fleets")

  - 1–2 line grey description

  - Rounded thumbnail image below (steering wheel close-up, red Porsche, silver Porsche rear)

- Centered dark pill button **"See all Reviews"** below the grid.



## 7. Brand Logo Strip

- Single row, evenly spaced, greyscale/black brand logos: Land Rover, Audi, Lamborghini, Ferrari, BMW, Honda, Nissan.



## 8. App Promo Section

- Large rounded mustard/orange card, two-column:

  - Left: heading **"PREMIUM CAR RENTAL"** (black bold) + App Store and Google Play badge buttons (black pills).

  - Right: floating phone mockup showing the app UI — a listing card for "Lamborgini Urus" with price "$45.00/h", a user profile row "Jane Cooper" with balance "$4,203", and a small map thumbnail.

  - Small black asterisk + mustard asterisk decorations around the phone.



## 9. Newsletter Section (black background, full width)

- Left: heading **"Stay up to date on all the latest news."** with a small mustard asterisk accent, white bold text.

- Right: rounded input field "Your Email" + circular mustard submit button with arrow/paper-plane icon.



## 10. Footer (black background)

- 5-column link layout:

  - **Pages:** Rental, Locations, FAQ, Features, Blog

  - **Resources:** Installation Manual, Release Note, Community Help

  - **Company:** About Us, Career, Press, Support

  - **Product:** Demo, Security, FAQ, Features

  - **Follow Us:** circular social icons (Facebook, LinkedIn, Twitter)

- Bottom bar: copyright text left ("All rights reserved © Premium Rental 2023"), "Privacy Policy | Terms & Condition" right, separated by a thin divider line, all in muted grey on black.



## 11. Responsive Behavior

- **Desktop (≥1024px):** multi-column grids as described (2-col content, 3-col cards, 5-col footer), header nav fully horizontal, hero search card as one horizontal row.

- **Tablet (768–1023px):** collapse footer to 2–3 columns, story cards to 2-column with wrap, showcase spec icons wrap to 2 rows if needed.

- **Mobile (<768px):**

  - Header collapses nav links into a hamburger menu; logo + hamburger + Get Started button remain.

  - Hero heading shrinks but stays centered and bold; search card stacks fields vertically full-width, search button becomes full-width below fields.

  - Hero car image and orange diagonal block scale full-bleed edge to edge.

  - Content sections stack to single column, image below/above text as in source order.

  - Car showcase carousel becomes swipeable with only the center car fully visible.

  - Spec icon row scrolls horizontally or wraps 2x2.

  - Price bar stacks or condenses buttons to full width stacked.

  - Story cards stack to single column, full width.

  - Brand logo strip scrolls horizontally.

  - App promo card stacks text above phone mockup image.

  - Newsletter input and button stack full width.

  - Footer collapses to 2-column accordion or stacked single column with dividers.



## 12. Interaction Notes

- Buttons: pill-shaped, mustard buttons have solid fill + slight hover darken; dark buttons white-on-hover invert.

- Search card `Car`/`Vans` tab toggle switches active underline state.

- Scroll-down circular arrow smooth-scrolls to next section.

- Car carousel (Section 5) is draggable/swipeable with center-focus snap.

- Newsletter submit button shows loading/success state on click.



## 13. Assets Needed

- High-res cutout PNGs/JPGs: yellow Lamborghini Urus (side profile), red Porsche (rear 3/4, driving), green Lamborghini Urus (side, showcase), yellow Porsche + silver SUV (partial, showcase), steering wheel close-up, red Porsche (front), silver Porsche (rear), phone mockup UI screenshot, brand logo SVGs (Land Rover, Audi, Lamborghini, Ferrari, BMW, Honda, Nissan), App Store / Google Play badge icons, social icons (Facebook, LinkedIn, Twitter).



## 14. Tech Suggestions

- Build with semantic HTML/CSS (or React + Tailwind) using CSS Grid/Flexbox for all layouts, `clamp()` for fluid heading sizes, and a mobile-first breakpoint strategy (`sm:`, `md:`

, `lg:`, `xl:`). Use `object-fit: cover` for all car imagery to keep crops consistent across breakpoints.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://drive-elegance-collective.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/84553e9b-ac1a-4430-9819-777934f51309).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
