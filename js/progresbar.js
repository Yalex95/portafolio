document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const containers = document.querySelectorAll(".progress-container");

  containers.forEach((container) => {
    const bar = container.querySelector(".progress-bar");
    const target = container.getAttribute("data-percent");

    gsap.fromTo(
      bar,
      { width: "0%" },
      {
        width: target + "%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });
});
