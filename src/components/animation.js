export const fadeIn = {
  hidden: {
    opacity: 0,
    x: 900,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  },
};

export const slideright = {
  hidden: {
    x: -900,
  },
  show: {
    x: 0,
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
};

export const slidebottom = {
  hidden: {
    x: -70,
  },
  show: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};
