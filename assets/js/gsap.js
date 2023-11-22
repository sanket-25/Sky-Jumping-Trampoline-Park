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
