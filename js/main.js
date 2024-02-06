(function () {
  // Logo animation using "Green Sock"
  const logo = document.getElementById('logo');

  gsap.to(logo, {
    duration: 1,
    x: 20,
    scale: 2,
    ease: 'power2.inOut',
    onComplete: () => {
      gsap.to(logo, {
        duration: 1,
        scale: 1,
        ease: 'power2.inOut',
      });
    },
  });

  // Burger menu
  (function () {
    let button = document.querySelector('#button');
    let burgerCon = document.querySelector('#burger-con');

    function hamburgerMenu() {
      burgerCon.classList.toggle('slide-toggle');
      button.classList.toggle('expanded');
    }

    button.addEventListener('click', hamburgerMenu, false);
  })();

  // Imagenes
  (function () {
    const imagenes = document.querySelectorAll('.imagenAnimada');

    function crearAnimacion(imagen) {
      const tl = gsap.timeline({ paused: true });
      tl.to(imagen, { scale: 0.8, opacity: 0.5, duration: 0.3 });

      imagen.addEventListener('mouseenter', () => tl.play());
      imagen.addEventListener('mouseleave', () => tl.reverse());
    }

    imagenes.forEach((imagen) => {
      crearAnimacion(imagen);
    });
  })();

  // Tittles
  (function () {
    document.addEventListener('DOMContentLoaded', function () {
      const elements = gsap.utils.toArray('h1, h2, h3');

      elements.forEach((element, index) => {
        gsap.from(element, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play none none none',
          },
        });
      });
    });
  })();

  // Images
  (function () {
    gsap.set('#heroimg', { opacity: 0 });
    gsap.to('#heroimg', { opacity: 1, duration: 2, ease: 'power2.inOut' });

    gsap.set('#screenimg', { opacity: 0 });
    gsap.to('#screenimg', { opacity: 1, duration: 2, ease: 'power2.inOut' });

    gsap.set('#mobileimg', { opacity: 0 });
    gsap.to('#mobileimg', { opacity: 1, duration: 2, ease: 'power2.inOut' });

    gsap.set('.animateimg', { opacity: 0 });
    gsap.to('.animateimg', { opacity: 1, duration: 2, ease: 'power2.inOut' });
  })();

//   // Lightbox
//   (function () {
//     document.addEventListener('DOMContentLoaded', function () {
//       //lightbox
//       let member = document.querySelectorAll('.work'),
//         lightBox = document.querySelector('#lightbox');

//       function loadHeroData() {
//         lightBox.querySelector('.name').textContent =
//           work[this.getAttribute('data-project')].name;
//         lightBox.querySelector('.lb_heading').textContent =
//           work[this.getAttribute('data-project')].headline;
//         lightBox.querySelector('.bio').textContent =
//           work[this.getAttribute('data-project')].bio;
//       }

//       member.forEach((hero) => hero.addEventListener('click', loadHeroData));

//       let work = {
//         Beatbuds: {
//           name:
//             'Developed and Designed with: Cinema 4D - Adobe Photoshop - Adobe Illustrator ',
//           headline: 'Beatbuds',
//           bio:
//             'This website is developed with a responsive design, ensuring a flawless experience across various devices. From desktops to smartphones, the BeatBuds Earbuds webpage adapts effortlessly, providing a consistent and engaging interface. As the designer and developer of this webpage, I sought to create a digital space that mirrors the innovation and sophistication of BeatBuds Earbuds. From wireframing to the final implementation, every element is carefully curated to highlight the product\'s features and enhance the overall user experience.',
//         },

//         Kavorka : {
//         name: "Created and Designed with: Adobe Photoshop - Adobe Illustrator",
//         headline: "Kavorka",
//         bio: "The Kavorka Skin Care webpage is crafted with a responsive design, providing a seamless experience across various devices. Whether on a desktop, tablet, or smartphone, users can engage with the brand effortlessly. From conceptualizing the user interface to implementing responsive design principles, every step was taken with precision. The result is a digital platform that not only mirrors the elegance of the brand but also elevates the user's interaction, creating a virtual haven for skincare enthusiasts.",
//     },

//     Burple : {
//         name: "Developed and Designed with: Cinema 4D - Adobe Photoshop - Adobe Illustrator",
//         headline: "Burple * Sparkling Water",
//         bio: " The webpage is crafted with a responsive design, ensuring a flawless experience across various devices. From desktops to tablets and smartphones, users can engage with the rebranded Burple Sparkling Water effortlessly. As the designer and developer, I spearheaded the transformation of Burple's online presence. From conceptualizing the visual identity to implementing responsive design principles, every aspect of the webpage reflects the dedication to bringing Burple's rebranding to life in the digital realm.",
        
//     },

//     NFL : {
//         name: "Crafted and Designed with: Cinema 4D - Adobe After Effects - Adobe Photoshop",
//         headline: "NFL Match - Reel",
//         bio: "The reel is a testament to precision editing, seamlessly blending moments of intense gameplay, crowd reactions, and iconic highlights.  As the creator of this NFL Match Reel, I undertook the responsibility of curating and editing footage to encapsulate the pulsating energy of the sport. From selecting the most impactful moments to fine-tuning the audio-visual experience, every detail is a deliberate choice to deliver an unforgettable portrayal of NFL greatness.",
        
//     },

//     WBL: {
//         name: "Crafted and Designed with: Adobe XD - Adobe Illustrator - Adobe Photoshop",
//         headline: "Work Based Learning",
//         bio: "The Work-Based Learning is a digital space meticulously crafted to champion the intersection of education and real-world experience.  As the designer and developer of the Work-Based Learning Hub, my goal was to create an inviting and intuitive digital space. From conceptualizing the user interface to implementing interactive elements, I aimed to craft an online environment that mirrors the dynamic nature of work-based learning itself.",
//     },

//     Coffee: {
//         name: "Crafted and Designed with: Adobe XD - Adobe Illustrator - Adobe Photoshop",
//         headline: "Colombian Coffee",
//         bio: "This webpage is a virtual haven meticulously designed and developed to celebrate the cultural legacy and exquisite flavors that define Colombia's coffee landscape. As the designer and developer of the Colombian Coffee webpage, my vision was to create a digital sanctuary that captures the essence of Colombian coffee. From the choice of colors and imagery to the implementation of interactive elements, every detail is an intentional effort to convey the richness and authenticity of this beloved cultural treasure.",
//         }
//       };
//     });
//   })();
 })();
