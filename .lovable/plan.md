# Dream Car Showcase Carousel

## Goal
Replace the static three-car strip with a responsive, auto-playing and swipeable 28-car showcase that keeps the active vehicle centered and updates its details below.

## Changes
- Build the complete ordered vehicle catalog with model, category, seats, airbags, speed, transmission, luggage, and daily pricing.
- Add smooth right-to-left auto-advance, touch/pointer swiping, previous/next controls, pause-on-hover/focus, and reduced-motion support.
- Render a large sharp center car with smaller dimmed neighboring cars, cropped at the viewport edges.
- Ground each vehicle with a soft elliptical contact shadow and subtle cutout drop shadow.
- Update the specification row, price bar, actions, and compact position indicator whenever the active car changes.
- Reuse the established vehicle photography where applicable and create a cohesive studio-style set for the remaining lineup.
- Validate the section at mobile and desktop sizes, including swipe behavior and text fit.

## Technical details
- Keep the carousel state and catalog local to the existing page.
- Use a stable three-position track rather than rendering all 28 large images simultaneously.
- Preload the next image, use semantic controls and live announcements, and avoid layout shifts with fixed aspect ratios.
