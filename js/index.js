document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".timeline-section",
      start: "top 40%",
      end: "bottom 30%",
      scrub: 2,
    },
  });

  tl.to(".timeline .line", {
    height: "100%",
    duration: 2,
    ease: "power2.out",
  });

  // Animar cada tarjeta
  gsap.utils.toArray(".timeline-card").forEach((event) => {
    const side = event.classList.contains("left") ? -100 : 100;
    const parent = event.parentElement;
    const icon = parent.querySelector(".timeline-icon");
    gsap.to(icon, {
      filter: "grayscale(0) blur(0px) ",
      duration: 2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: event,
        start: "top 60%",
        end: "bottom 0%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.fromTo(
      event,
      {
        x: side,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        scrollTrigger: {
          trigger: event,
          start: "top 60%",
          end: "top 0%",
          toggleActions: "play reverse play reverse",
        },
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
      }
    );
  });


  const yearSpan = document.getElementById('year');
        const currentYr = new Date().getFullYear();
        yearSpan.textContent = currentYr;
});
