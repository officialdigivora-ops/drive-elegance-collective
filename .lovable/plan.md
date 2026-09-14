# Rebuild the Dream Car Carousel

## Changes
- Replace the visible contact-sheet presentation with background-free vehicle cutouts for the 28 named cars only.
- Normalize every vehicle to the same visual footprint, wheel baseline, facing direction, and centered three-car composition used by the earlier showcase.
- Strengthen the 3D effect with center-car scale, perspective, side-car depth, tire contact shadows, and softer cutout shadows.
- Keep autoplay, swipe, arrows, and smooth right-to-left transitions.
- Remove the luggage specification so the row contains top speed, seats, airbags, and transmission only.
- Replace the 28 cramped dots with a compact moving progress indicator beneath the price bar that advances with the active car.
- Verify alignment, transitions, and controls at desktop and mobile sizes.

## Technical details
- Create transparent-background derivatives from the established lineup artwork rather than displaying its cream image cells.
- Keep the current 28-car data and dynamic price/spec behavior; no additional models will be introduced.
- Preserve the existing section order, visual tokens, and trim/year specification note.
