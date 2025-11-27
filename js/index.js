document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".timeline-section",
      start: "top 70%",
      end: "bottom 50%",
      scrub: 1,
    },
  });

  tl.to(".timeline .line", {
    height: "100%",
    duration: 2,
    ease: "power2.out",
  });

  // tl.to(
  //   ".timeline-icon",
  //   {
  //     opacity: 1,
  //     scale: 1,
  //     duration: 0.8,
  //     ease: "back.out(1.5)",
  //   },
  //   "-=1"
  // );

  // Animar cada tarjeta
  gsap.utils.toArray(".event").forEach((event) => {
    const side = event.classList.contains("left") ? -100 : 100;

    gsap.fromTo(
      event,
      {
        x: side,
        opacity: 0,
        filter: "blur(10px)"
      },
      {
        scrollTrigger: {
          trigger: event,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play reverse play reverse"
        },
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out"
      }
    );
  });

});
