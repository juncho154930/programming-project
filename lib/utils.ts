import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const pow = Math.pow;

function easeOutQuart(x: number) {
  return 1 - pow(1 - x, 4);
}

export function animateScroll({
  targetPosition,
  initialPosition,
  duration,
}: {
  targetPosition: number;
  initialPosition: number;
  duration: number;
}) {
  let start: number;
  let position;
  let animationFrame: number;

  const requestAnimationFrame = window.requestAnimationFrame;
  const cancelAnimationFrame = window.cancelAnimationFrame;

  const maxAvailableScroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const amountOfPixelsToScroll = initialPosition - targetPosition;

  function step(timestamp: number) {
    if (start === undefined) {
      start = timestamp;
    }

    const elapsed = timestamp - start;
    const relativeProgress = elapsed / duration;
    const easedProgress = easeOutQuart(relativeProgress);

    position =
      initialPosition - amountOfPixelsToScroll * Math.min(easedProgress, 1);
    window.scrollTo(0, position);

    if (
      initialPosition !== maxAvailableScroll &&
      window.scrollY === maxAvailableScroll
    ) {
      cancelAnimationFrame(animationFrame);
      return;
    }
    if (elapsed < duration) {
      animationFrame = requestAnimationFrame(step);
    }
  }

  animationFrame = requestAnimationFrame(step);
}

const logError = () =>
  console.error(
    `Invalid element, are you sure you've provided element id or react ref?`
  );

const getElementPosition = (element: HTMLElement) => element.offsetTop;

export const scrollTo = ({
  id,
  duration,
}: {
  id: string;
  duration: number;
}) => {
  const initialPosition = window.scrollY;

  if (id) {
    const element = document.getElementById(id);
    const navHeightOffset = 100;

    if (!element) {
      logError();
      return;
    }

    animateScroll({
      targetPosition: getElementPosition(element) - navHeightOffset,
      initialPosition,
      duration,
    });
  }
};
