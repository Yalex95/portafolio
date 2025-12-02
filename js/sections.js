// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Observer);
//   gsap.config({ trialWarn: false });

//   const wrapper = document.querySelector(".body");
//   const content = document.querySelector(".main");
//   const sections = document.querySelectorAll(".section");
//   const section1 = document.querySelector("#hero");
//   const nextSection = document.querySelector("#about");
//   let winWidth = window.innerWidth;

//   let smoother, observer, direction;

//   // ScrollSmoother (solo en escritorio)
//   if (!ScrollTrigger.isTouch) {
//     smoother = ScrollSmoother.create({
//       wrapper: wrapper,
//       content: content,
//       smooth: 0.8,
//       effects: true,
//     }).paused(true);
//   }

//   // Observer para detectar scroll/drag
//   function initObserver() {
//     observer = Observer.create({
//       target: document.body,
//       ignore: "[data-ignore]",
//       type: "pointer",
//       onToggleY: (self) => updateDirection(self),
//       onPress: (self) => handlePress(self),
//       onRelease: (self) => handleRelease(self),
//       tolerance: 10,
//     });
//   }

//   function handlePress(self) {
//     gsap.set(content, { cursor: "grabbing" });
//     updateDirection(self, true);
//     gsap.to("body", { backgroundColor: "#111", duration: 0.5 });
//     gsap.to(section1, { scale: 0.97, duration: 0.5 });
//   }

//   function handleRelease(self) {
//     gsap.set(content, { cursor: "grab" });
//     gsap.to(section1, { rotateX: "0deg", scale: 1, duration: 0.5 });
//     gsap.to("body", { backgroundColor: "#222", duration: 0.5 });
//   }

//   function updateDirection(theObserver, immediate = false) {
//     const perspectiveOriginX = Math.floor((100 - (theObserver.startX / winWidth) * 100));
//     const perspectiveOriginY = smoother
//       ? Math.floor(smoother.scrollTrigger.animation.progress() * 100)
//       : 50;

//     const props = { perspectiveOrigin: `${perspectiveOriginX}% ${perspectiveOriginY}%` };

//     immediate ? gsap.set(sections, props) : gsap.to(sections, { ...props, duration: 0.5 });

//     direction = theObserver.deltaY < 0 ? "up" : "down";

//     gsap.to(section1, {
//       rotateX: direction === "up" ? "3deg" : "-3deg",
//       duration: 0.5,
//     });
//   }

//   // Animaciones iniciales
//   function initAnimations() {
//     // Section 1
//     gsap.fromTo(
//       section1,
//       { transformOrigin: "center bottom", autoAlpha: 0, yPercent: 50 },
//       { autoAlpha: 1, yPercent: 0, duration: 1, delay: 1, ease: "expo" }
//     );

//     // Section 2
//     gsap.fromTo(
//       nextSection,
//       { autoAlpha: 0 },
//       {
//         autoAlpha: 1,
//         duration: 2,
//         scrollTrigger: {
//           trigger: nextSection,
//           start: "center 80%",
//           end: "center center",
//           scrub: true,
//         },
//       }
//     );
//   }

//   // Init page
//   function initPage() {
//     if (smoother) {
//       ScrollTrigger.normalizeScroll({ ignore: "[data-ignore]", type: "pointer,wheel" });
//       smoother.paused(false);
//       initObserver();
//     }

//     gsap.set(content, { cursor: "grab" });

//     // Indicador animado
//     const indicator = document.querySelector(".indicator");
//     gsap.to(indicator, {
//       autoAlpha: 1,
//       duration: 1,
//       onComplete: () => {
//         gsap.fromTo(
//           indicator,
//           { autoAlpha: 1 },
//           {
//             autoAlpha: 0,
//             duration: 1,
//             scrollTrigger: {
//               trigger: indicator,
//               start: "center 80%",
//               end: "center 70%",
//               scrub: true,
//             },
//           }
//         );
//       },
//     });
//   }

//   // Resize
//   function onResize() {
//     winWidth = window.innerWidth;
//     ScrollTrigger.refresh();
//   }

//   initAnimations();
//   initPage();
//   window.addEventListener("resize", onResize);
// });
