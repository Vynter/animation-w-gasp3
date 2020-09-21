//https://greensock.com/docs/v3/Eases doc
const timelane = gsap.timeline({ defaults: { ease: "power1.out" } });

timelane.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
timelane.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
timelane.to(".intro", { y: "-100%", duration: 1 }, "-=1.1");
timelane.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
timelane.fromTo(
  ".mass-text",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "-=1"
);
//-=1 === start 1s before
