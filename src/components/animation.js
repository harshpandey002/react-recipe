export const fadeIn = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 2,
    },
  },
};

export const stretch = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 2,
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
  },
};
