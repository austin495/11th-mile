export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: {duration: 1, delay: 0.2}
    },
}

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}

export const slideInUp = {
    initial: {
        opacity: 0,
        y: 50 // Start further below for a pronounced slide-up effect
    },
    enter: (i) => ({
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.5,
            delay: 0.75 + (i * 0.1), // Staggered delay based on index
            ease: [0.215, 0.61, 0.355, 1] // Smooth cubic bezier
        }
    }),
    exit: {
        opacity: 0,
        y: 50, // Slide back down on exit
        transition: { duration: 0.5, ease: "easeInOut" }
    }
};

export const menuSlide = {
    initial: {x: "calc(100% + 100px)"},
    enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
    exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}

export const slide = {
  initial: { x: 20, opacity: 0 },
  enter: (index) => ({
    x: 0,
    opacity: 1,
    transition: { delay: index * 0.1, duration: 0.3 },
  }),
  exit: { x: 20, opacity: 0, transition: { duration: 0.3 } },
};

export const arrowSlide = {
  initial: {
    x: -200, // Start 50px to the left, adjust based on arrow size
    opacity: 0, // Start invisible for a fade-in effect
  },
  hover: {
    x: 0, // Slide to final position
    opacity: 1, // Fade in
    transition: {
      duration: 0.3, // Matches a smooth slide as in the image
      ease: "easeOut",
    },
  },
};

export const scale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}