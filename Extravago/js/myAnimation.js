gsap.registerPlugin(ScrollTrigger);

// NAVBAR ANIMATION
gsap.from("nav", {
    y: '-100%'
})
gsap.from(".navline .logo", {
    x: '-100%',
    autoAlpha: 0,
    duration: 1,
    delay: 1,
})
let menuLinks = document.querySelector(".menu")
gsap.from(menuLinks.children, {
    autoAlpha: 0,
    duration: 1,
    delay: 1,
    stagger: {
        amount: 1,
    }
})

// HOME ANIMATION
gsap.fromTo("#home h1", {
    autoAlpha: 0,
    scale: 0,
    y: '-100',
}, {
    autoAlpha: 1,
    scale: 1,
    y: '0',
    duration: 1,
    scrollTrigger: {
        trigger: "#home h1",
        toggleActions: "play pause restart reset",
    },
})
gsap.from("#home p", {
    y: '-100',
    autoAlpha: 0,
    delay: 1,
    duration: 1,
    scrollTrigger: {
        trigger: "#home p",
        toggleActions: "play pause restart reset",
    },
})
gsap.from("#home .btn-main", {
    y: '-50',
    autoAlpha: 0,
    delay: 1,
    duration: 1,
    scrollTrigger: {
        trigger: "#home .btn-main",
        toggleActions: "play pause restart reset",
    },
})

// ALL SECTION INTROS
gsap.utils.toArray('.section-intro').forEach(intro => {
    gsap.from(intro, {
        autoAlpha: 0,
        x: '100',
        duration: 1.5,
        skewY: 5,
        scrollTrigger: {
            trigger: intro,
            start: "top 85%",
            // end: () => "+=" + intro.offsetHeight,
            toggleActions: "play pause restart reset",
        },
    })
})

// SERVICES ANIMATION
gsap.from(".service-content-wrapper .services-content-1", {
    x: '-100',
    autoAlpha: 0,
    duration: 0.5,
    delay: 1,
    scrollTrigger: {
        trigger: ".service-content-wrapper .services-content-1",
        toggleActions: "play pause restart reset",
    },
})
gsap.from(".service-content-wrapper .services-content-2", {
    y: '100',
    autoAlpha: 0,
    duration: 0.5,
    delay: 1,
    scrollTrigger: {
        trigger: ".service-content-wrapper .services-content-2",
        toggleActions: "play pause restart reset",
    },
})
gsap.from(".service-content-wrapper .services-content-3", {
    x: '100',
    autoAlpha: 0,
    duration: 0.5,
    delay: 1,
    scrollTrigger: {
        trigger: ".service-content-wrapper .services-content-3",
        toggleActions: "play pause restart reset",
    },
})
gsap.from(".service-content-wrapper .services-content-4", {
    x: '-100',
    autoAlpha: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".service-content-wrapper .services-content-4",
        toggleActions: "play pause restart reset",
    },
})
gsap.from(".service-content-wrapper .services-content-5", {
    y: '100',
    autoAlpha: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".service-content-wrapper .services-content-5",
        toggleActions: "play pause restart reset",
    },
})
gsap.from(".service-content-wrapper .services-content-6", {
    x: '100',
    autoAlpha: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".service-content-wrapper .services-content-6",
        toggleActions: "play pause restart reset",
    },
})

// ABOUT ANIMATION
gsap.from("#about .vid", {
    autoAlpha: 0,
    y: '100',
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: "#about .vid",
        toggleActions: "play pause restart reset",
    },
})

// FEATURES ANIMATION
let Features = document.querySelector(".feature-wrapper")
gsap.utils.toArray(Features.children).forEach(feature => {
    gsap.from(feature, {
        autoAlpha: 0,
        y: '100',
        duration: 1.5,
        delay: 0.2,
        scrollTrigger: {
            trigger: feature,
            toggleActions: "play pause restart reset",
        },
    })
})

// STATS ANIMATION
gsap.from(".stats-wrapper .stat-1", {
    x: '-100',
    autoAlpha: 0,
    delay: 1,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.stats-wrapper .stat-1',
        toggleActions: "play pause restart reset",
    },
})
gsap.from(".stats-wrapper .stat-2", {
    y: '-100',
    autoAlpha: 0,
    delay: 1,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.stats-wrapper .stat-2',
        toggleActions: "play pause restart reset",
    },
})
gsap.from(".stats-wrapper .stat-3", {
    x: '100',
    autoAlpha: 0,
    delay: 1,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.stats-wrapper .stat-3',
        toggleActions: "play pause restart reset",
    },
})
gsap.from(".stats-wrapper .stat-4", {
    y: '100',
    autoAlpha: 0,
    delay: 1,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.stats-wrapper .stat-4',
        toggleActions: "play pause restart reset",
    },
})

// REVIEWS ANIMATION
let Reviews = document.querySelector(".reviews-wrapper")
gsap.utils.toArray(Reviews.children).forEach(review => {
    gsap.from(review, {
        autoAlpha: 0,
        y: '100',
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: review,
            toggleActions: "play pause restart reset",
        },
    })
})
gsap.fromTo(".btn-review", {
    x: '-100',
    autoAlpha: 0,
}, {
    x: 0,
    autoAlpha: 1,
    delay: 0.5,
    duration: 1,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".btn-review",
        toggleActions: "play pause restart reset",
    },
})

// COUNTDOWN ANIMATION
gsap.from(".discount", {
    rotation: -45,
    delay: 1,
    duration: 1,
    autoAlpha: 0,
    scrollTrigger: {
        trigger: ".offer-wrapper .discount",
        start: "20% 80%",
        toggleActions: "play pause restart reset",
    },
})

// FAQS ANIMATION

gsap.from("#accordion .faq-1", {
    x: '100',
    autoAlpha: 0,
    delay: 1,
    scrollTrigger: {
        trigger: "#accordion .faq-1",
        toggleActions: "play pause restart reset",
    },
})
gsap.from("#accordion .faq-2", {
    x: '-100',
    autoAlpha: 0,
    delay: 1.2,
    scrollTrigger: {
        trigger: "#accordion .faq-2",
        toggleActions: "play pause restart reset",
    },
})
gsap.from("#accordion .faq-3", {
    x: '100',
    autoAlpha: 0,
    delay: 1.4,
    scrollTrigger: {
        trigger: "#accordion .faq-3",
        toggleActions: "play pause restart reset",
    },
})
gsap.from("#accordion .faq-4", {
    x: '-100',
    autoAlpha: 0,
    delay: 1.6,
    scrollTrigger: {
        trigger: "#accordion .faq-4",
        toggleActions: "play pause restart reset",
    },
})
gsap.from("#accordion .faq-5", {
    x: '100',
    autoAlpha: 0,
    delay: 1.8,
    scrollTrigger: {
        trigger: "#accordion .faq-5",
        toggleActions: "play pause restart reset",
    },
})


// HOME BLOG ANIMATION
let homeBlogs = document.querySelector(".home-blog")
gsap.utils.toArray(homeBlogs.children).forEach(blog => {
    gsap.from(blog, {
        autoAlpha: 0,
        y: '100',
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: blog,
            toggleActions: "play pause restart reset",
        },
    })
})
gsap.fromTo('.btn-blog', {
    autoAlpha: 0,
    y: '100',
}, {
    autoAlpha: 1,
    y: 0,
    duration: 0.5,
    ease: "bounce.in",
    scrollTrigger: {
        trigger: ".btn-blog",
        toggleActions: "play pause restart reset",
    },
})

// NEWSLETTER ANIMATION
gsap.from('.subscribe-blog-wrapper', {
    autoAlpha: 0,
    y: '100',
    duration: 0.5,
    scrollTrigger: {
        trigger: ".subscribe-blog-wrapper",
        toggleActions: "play pause restart reset",
    },
})

// CONTACT ANIMATION
gsap.from("#contact .form", {
    x: '-100',
    duration: 0.5,
    autoAlpha: 0,
    scrollTrigger: {
        trigger: "#contact .form",
        toggleActions: "play pause restart reset",
    },
})
gsap.from("#contact .contact-info", {
    x: '100',
    duration: 0.5,
    autoAlpha: 0,
    delay: 0.5,
    scrollTrigger: {
        trigger: "#contact .contact-info",
        toggleActions: "play pause restart reset",
    },
})
gsap.from("#contact .map", {
    x: '100',
    duration: 0.5,
    autoAlpha: 0,
    delay: 0.5,
    scrollTrigger: {
        trigger: "#contact .map",
        toggleActions: "play pause restart reset",
    },
})

gsap.from("footer", {
    y: '100',
    autoAlpha: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "footer",
        toggleActions: "play pause restart reset",
    },
})

gsap.from(".footer-logo", {
    x: '-100%',
    autoAlpha: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".footer-logo",
        toggleActions: "play pause restart reset",
    },
})

gsap.from(".footer-main-links", {
    y: '100',
    autoAlpha: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".footer-main-links",
        toggleActions: "play pause restart reset",
    },
})

gsap.from(".footer-other-links", {
    y: '100',
    autoAlpha: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".footer-other-links",
        toggleActions: "play pause restart reset",
    },
})

gsap.from(".footer-social-links", {
    y: '-100',
    autoAlpha: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".footer-social-links",
        toggleActions: "play pause restart reset",
    },
})



window.addEventListener("load", function () {
    ScrollTrigger.refresh(true);
})

