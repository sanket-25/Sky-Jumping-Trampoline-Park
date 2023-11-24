var w = document.documentElement.clientWidth || window.innerWidth;
if (w >= 900) {
    gsap.from(".left-text", {
        scrollTrigger: {
            trigger: ".card-container",
            // markers: true,
            scroller: "body",
            start: "-5% 0%",
            end: "bottom -70%",
            // scrub: 5,
            pin: true

        }
    })


    gsap.from(".left-text-p", {
        duration: 2,
        opacity: 0,
        rotationX: 90,
        //   rotationY: 90,
        //   rotationZ: 90,
        scaleX: 0.8,
        z: -300,
        backgroundColor: "linear-gradient(104.39deg, #1f87ec 3.92%, #29c2c2 81.45%)",
        scrollTrigger: {
            trigger: ".left-text-p",
            // markers: true,
            start: "top 90%",
            end: "top 20%",
            scrub: 2
        },
    })



} //only for desktop screen

const tl = gsap.timeline();

tl.from('nav', {
    duration: 2,
    opacity: 0,
    y: -100,
    rotationX: -90,
})
    .from('.center-text', {
        duration: 2,
        opacity: 0,
        scale: 0,
        rotationX: -90,
    }, '-=1.5')
    .from('#Discounts', {
        duration: 2,
        opacity: 0,
        y: 100,
        rotationX: 90,
    }, '-=1.5');

gsap.to("left-text span", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
        trigger: ".left-text",
        // markes: true,
        scrub: 1,
        start: "top center",
        end: "bottom center"
    }
})

gsap.from(".col-md-6 p", {
    duration: 2.5,
    ease: "power3.out",
    x: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: "#About",
        // markes: true,
        scrub: 1,
        start: "top center",
        end: "bottom center"
    }
});


gsap.from(".happy-tales", {

    duration: 3,
    rotationZ: 360,
    scaleX: 0.8,
    scrollTrigger: {
        trigger: ".happy-tales",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 2
    },

});

gsap.from(".testimonial img", {

    duration: 3,
    // rotationZ: 360,
    scale: 0,
    opacity: 0,
    // y: 100,
    scrollTrigger: {
        trigger: ".testimonial img",
        // markers: true,
        start: "top 90%",
        end: "top 70%",
        scrub: 2
    },
});

gsap.from(".testimonial h3, .testimonial p", {

    duration: 3,
    // rotationZ: 360,
    // scale: 0,
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: ".testimonial img",
        // markers: true,
        start: "top 90%",
        end: "top 70%",
        scrub: 2
    },
});


gsap.from("#map", {

    duration: 2,
    rotationX: 90,
    //   rotationY: 90,
    //   rotationZ: 90,
    scaleX: 0.8,
    z: -300,
    backgroundColor: "linear-gradient(104.39deg, #1f87ec 3.92%, #29c2c2 81.45%)",
    scrollTrigger: {
        trigger: "#map",
        // markers: true,
        start: "top 100%",
        end: "top 60%",
        scrub: 2
    },

});














ScrollTrigger.create({

    trigger: 'section#About',
    // markers:true,
    start: "top 70%",
    end: "bottom 0%",

    onEnter: () => {
        gsap.to('#About, #Park-Attraction', { duration: 2.0, backgroundColor: '#1f87ec' })
    },

    onLeaveBack: () => {
        gsap.to('#About, #Park-Attraction', { duration: 2.0, backgroundColor: '#ffffff' })
    },


})
