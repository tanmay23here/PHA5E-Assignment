var screens = document.querySelectorAll(".screen");
var images = document.querySelectorAll(".img");
var svgDiv = document.querySelectorAll(".svg-div");
var heroDivText = document.querySelector(".hero-text");
var svgText = document.querySelector(".svg-text");
svgText.style.display = "none";

// Preloader Animation
const paths = document.querySelectorAll("#logo path");
const preloader = document.querySelector(".preloader");
const mainContent = document.querySelector("main");

// Animate logo paths
paths.forEach((path, index) => {
    const length = path.getTotalLength();
    gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length
    });

    gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1,
        delay: index * 0.5,
        ease: "power2.inOut"
    });
});

// Loading text animation
gsap.to(".loading-text", {
    opacity: 1,
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: "power2.inOut",
    delay: paths.length * 0.5
});

// Hide preloader and show main content
gsap.timeline()
    .to(mainContent, {
        opacity: 1,
        duration: 0.5,
        delay: paths.length * 0.5 + 1
    })
    .to(preloader, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            preloader.style.display = "none";
        }
    });

//initial animation for text and image
gsap.from(images, {
  opacity: 0,
  scale: 0,
  delay: 1,
  duration: 1.5,
  ease: "power1.out",
  stagger: true,
});

gsap.from("h1", {
  y: 100,
  delay: 1,
  duration: 1,
  ease: "power1.out",
  stagger: true,
});

screens.forEach((screen, indx) => {
  screen.addEventListener("mouseenter", function (e) {
    images[indx].style.zIndex = "3";
    svgText.style.display = "block";

    // Get the position of the cursor relative to the image element being hovered over.
    const left = this.getBoundingClientRect().left;
    const top = this.getBoundingClientRect().top;
    const width = this.getBoundingClientRect().width / 2;
    const height = this.getBoundingClientRect().height / 2;

    svgDiv.forEach((svg, svgIndx) => {
      if (svgIndx !== indx) {
        svg.style.display = "block";
        images[svgIndx].style.display = "none";

        heroDivText.style.display = "none";
      }
    });

    this.addEventListener("mousemove", function (e) {
      if (e.x < left + width) {
        if (e.y < top + height) {
          gsap.to(images[indx], {
            x: e.x - (left + width),
            y: e.y - (top + height),
            duration: 0.5,
            ease: "power1.out",
          });
          gsap.to(svgDiv[indx], {
            x: e.x - (left + width),
            y: e.y - (top + height),
            duration: 0.5,
            ease: "power1.out",
          });
        } else {
          gsap.to(images[indx], {
            x: e.x - (left + width),
            y: e.y - (top + height),
            duration: 0.5,
            ease: "power1.out",
          });
          gsap.to(svgDiv[indx], {
            x: e.x - (left + width),
            y: e.y - (top + height),
            duration: 0.5,
            ease: "power1.out",
          });
        }
      } else {
        if (e.y < top + height) {
          gsap.to(images[indx], {
            x: e.x - (left + width),
            y: e.y - (top + height),
            duration: 0.5,
            ease: "power1.out",
          });
          gsap.to(svgDiv[indx], {
            x: e.x - (left + width),
            y: e.y - (top + height),
            duration: 0.5,
            ease: "power1.out",
          });
        } else {
          gsap.to(svgDiv[indx], {
            x: e.x - (left + width),
            y: e.y - (top + height),
            duration: 0.5,
            ease: "power1.out",
          });
        }
      }
    });

   this.addEventListener("mouseleave", function (e) {
      if (e.x < left + width) {
        if (e.y < top + height) {
          gsap.to(images[indx], {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
          });
          gsap.to(svgDiv[indx], {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
          });
        } else {
          gsap.to(images[indx], {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
          });
          gsap.to(svg[indx], {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
          });
        }
      } else {
        if (e.y < top + height) {
          gsap.to(images[indx], {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
          });
          gsap.to(svgDiv[indx], {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
          });
        } else {
          gsap.to(images[indx], {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
          });
          gsap.to(svgDiv[indx], {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
          });
        }
      }
    });

    screen.addEventListener("mouseleave", function (e) {
      images[indx].style.zIndex = "0";
      svgText.style.display = "none";
      svgDiv.forEach((svg, svgIndx) => {
        if (svgIndx !== indx) {
          svg.style.display = "none";
          images[svgIndx].style.display = "block";
          heroDivText.style.display = "block";
        }
      });
    });
  });
});

// Add this at the beginning of your script.js
const menuToggle = document.querySelector('.menu-toggle');
const options = document.querySelector('.options');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    options.classList.toggle('active');
});

// Add this new code at the end of your script.js
const langToggle = document.querySelector('.lang-toggle');
const langOptions = langToggle.querySelectorAll('span');

langOptions.forEach(option => {
    option.addEventListener('click', () => {
        langOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
    });
});