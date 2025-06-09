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