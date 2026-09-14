# Rebuild the full 28-car image set

## What will change
- Regenerate all 28 named vehicles individually with the OpenAI image model, using model-specific prompts rather than recoloring or reusing one car.
- Require transparent backgrounds, clean premium 3D studio rendering, matching front three-quarter left-facing views, no people, text, scenery, plates, or decorative objects.
- Normalize every final PNG to the same canvas, visual width, and wheel baseline so each centered car occupies the same space.
- Inspect each output against its intended make/model and regenerate visibly broken, distorted, mislabeled, or low-quality results.
- Keep exactly one image per named lineup entry, including separate yellow and green Lamborghini Urus variants.

## Carousel updates
- Replace the current car files with the corrected image set while retaining autoplay, swipe, arrows, dynamic specifications, pricing, and the stronger 3D center/side depth.
- Remove the entire progress line and count beneath the View Details / Rent Now bar, leaving that area empty.
- Keep luggage removed and retain only top speed, seats, airbags, and transmission.

## Verification
- Review every generated vehicle image before using it.
- Test several vehicles across the complete carousel, including SUVs, sedans, coupes, and convertibles.
- Verify consistent size, wheel alignment, transparent backgrounds, transitions, and no image errors on desktop and mobile.
