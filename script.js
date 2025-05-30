function loader() {
  let tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.3,
    duration: 0.6,
    delay: 0.5,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      // On Start andre ,start aadmele kelgade codework aagbeku anta
      const h5Timer = document.querySelector("#line1-part1 h5");
      let grow = 0;

      setInterval(function () {
        if (grow < 100) {
          h5Timer.innerHTML = grow++;
        } else {
          h5Timer.innerHTML = grow;
        }
      }, 35);
    },
  });
  tl.to(" .line h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 3.6,
  });
  tl.from("#page1", {
    delay: 0.4,
    y: 1400,
    opacity: 0,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });
}
loader();
