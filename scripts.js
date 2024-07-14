document.addEventListener('DOMContentLoaded', () => {
    gsap.from("#intro .inner", { duration: 1, opacity: 0, y: -50 });
    gsap.from("#projects .inner", { duration: 1, opacity: 0, x: -50, delay: 0.5 });
    gsap.from("#cv .inner", { duration: 1, opacity: 0, y: 50, delay: 1 });
    gsap.from("#certifications .inner", { duration: 1, opacity: 0, x: 50, delay: 1.5 });
    gsap.from("#github .inner", { duration: 1, opacity: 0, y: -50, delay: 2 });
    gsap.from("#linkedin .inner", { duration: 1, opacity: 0, x: -50, delay: 2.5 });

    // Animation for scrolling
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            opacity: 0,
            y: 50
        });
    });
});
