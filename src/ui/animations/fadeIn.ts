export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.5 },
};

export const fadeInRightToLeft = {
  initial: { x: "40px", opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: {
    duration: 0.8,
  },
  viewport: { once: true, amount: 0.5 },
};

export const fadeInLeftToRight = {
  initial: { x: "-40px", opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: {
    duration: 0.8,
  },
  viewport: { once: true, amount: 0.5 },
};
