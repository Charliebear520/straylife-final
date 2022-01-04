$(document).ready(function() {
    // set Timeline
    let timeLine = new gsap.timeline({
        scrollTrigger: {
            trigger: "#background",
            pin: true,
            start: "top top",
            end: "+=500",
            scrub: true,
            // markers: true,
            id: "background",
        },
    });
    timeLine.to('#background', 1, {})
        .to('#text', 5, { y: 0, opacity: 0 })
        .to('#text2', 3, { y: -400, opacity: 1 });
})