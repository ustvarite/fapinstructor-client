export const TIME_DELAY = 5000;
export const ANIMATION_OFFSET_PIXELS = 25;
export const FLASH_ANIMATION_DURATION = 0.25;

export function calculateTickTime() {
  const pixelsPerSecond = window.screen.width / (TIME_DELAY / 1000);
  const pixelsTillTick = window.screen.width / 2 - ANIMATION_OFFSET_PIXELS;
  const tickTimeSeconds = pixelsTillTick / pixelsPerSecond;

  return tickTimeSeconds * 1000;
}
