
// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.config({
//     autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
// })

// ScrollTrigger.refresh();

// // NAVBAR ANIMATION
// let tlNavbar = gsap.timeline({
//     defaults: {
//         duration: 1
//     },
//     scrollTrigger: {
//         trigger: "nav",
//     }
// })

// tlNavbar
    // .from("nav", { y: '-100%' })
    // .from(".navline .logo", { x: '-100%' }, '-=1')
    // .from(".navline .menu li", { opacity: 0, stagger: 0.2 }, '-=1')



// // HOME ANIMATION
// let tlHome = gsap.timeline({
//     defaults: {
//         duration: 2,
//     },
//     scrollTrigger: {
//         trigger: "#home h1",
//         // toggleActions: "restart pause resume reset",
//         // start: "center 100%",
//         // end: () => "+=" + document.querySelector("#home").offsetHeight,
//     },
//     scrollTrigger: {
//         trigger: "#home p",
//     },
//     scrollTrigger: {
//         trigger: "#home .btn-main",
//     },
// })

// tlHome
//     .fromTo("#home h1", { opacity: 0, scale: 0, y: '-100' }, { opacity: 1, scale: 1, y: '0' })
//     .from("#home p", { y: '-100', opacity: 0, delay: 1 }, '-=1')
//     .from("#home .btn-main", { y: '-50', opacity: 0 }, '-=2')



// // SERVICES ANIMATION
// let tlServices = gsap.timeline({
//     defaults: {
//         duration: 2,
//     },
//     scrollTrigger: {
//         trigger: "#services .services-header",
//         // toggleActions: "restart pause resume reset",
//         // start: "center 70%",
//         // end: () => "+=" + document.querySelector("#services").offsetHeight,
//     },
//     scrollTrigger: {
//         trigger: ".service-content-wrapper"
//     },

// })

// tlServices
//     .from("#services .services-header", { opacity: 0, scale: 0 })
//     .from(".service-content-wrapper  .services-content-1", { x: '-100', opacity: 0 })
//     .from(".service-content-wrapper  .services-content-2", { y: '100', opacity: 0 })
//     .from(".service-content-wrapper  .services-content-3", { x: '100', opacity: 0 }, "-=1")
//     .from(".service-content-wrapper  .services-content-4", { x: '-100', opacity: 0 })
//     .from(".service-content-wrapper  .services-content-5", { y: '100', opacity: 0 })
//     .from(".service-content-wrapper  .services-content-6", { x: '100', opacity: 0 }, "-=1")



// // ABOUT ANIMATION
// let tlAbout = gsap.timeline({
//     defaults: {
//         duration: 2,
//     },
//     scrollTrigger: {
//         trigger: "#about .section-intro",
//     },
//     scrollTrigger: {
//         trigger: "#about .vid",
//     },
// })
// tlAbout
//     .from("#about .section-intro", { opacity: 0, x: '100' })
//     .from("#about .vid", { opacity: 0, y: '100' })


// // FEATURES ANIMATION
// let tlFeatures = gsap.timeline({
//     defaults: {
//         duration: 2,
//     },
//     scrollTrigger: {
//         trigger: "#features .section-intro",
//     },
//     scrollTrigger: {
//         trigger: ".feature wrapper",
//     },

// })
// tlFeatures
//     .from("#features .section-intro", { opacity: 0, y: '100' })
//     .from(".feature-wrapper .feature-1", { x: '-100', opacity: 0 })
//     .from(".feature-wrapper .feature-2", { y: '100', opacity: 0 })
//     .from(".feature-wrapper .feature-3", { x: '100', opacity: 0 }, "-=1")
//     .from(".feature-wrapper .feature-4", { x: '-100', opacity: 0 })
//     .from(".feature-wrapper .feature-5", { y: '100', opacity: 0 })
//     .from(".feature-wrapper .feature-6", { x: '100', opacity: 0 }, '-=1')
//     .from(".feature-wrapper .feature-7", { x: '-100', opacity: 0 })
//     .from(".feature-wrapper .feature-8", { y: '100', opacity: 0 })
//     .from(".feature-wrapper .feature-9", { x: '100', opacity: 0 }, "-=1")