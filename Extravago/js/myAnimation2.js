// BLOG SECTION

// NAVBAR ANIMATION
gsap.from("nav", {
    y: '-100%'
})
gsap.from(".navline .logo", {
    x: '-100%',
    opacity: 0,
    duration: 1,
    delay: 1,
})
let menuLinks = document.querySelector(".menu")
gsap.from(menuLinks.children, {
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: {
        amount: 1,
    }
})


// NAV TABS
let blogNavs = document.querySelector("#blogTab")
gsap.utils.toArray(blogNavs.children).forEach(nav => {
    gsap.from(nav, {
        opacity: 0,
        y: '100',
        duration: 1,
        skewY: 5,
        delay: 1,
        stagger: {
            amount: 1,
        },
    })
})

// SEARCH BLOGS
gsap.from(".search-blog-wrapper", {
    x: '-100%',
    opacity: 0,
    duration: 2,
    delay: 1,
})

// BLOGS
let allBlogs = document.querySelector(".allBlogWrapper")
gsap.utils.toArray(allBlogs.children).forEach(blog => {
    gsap.from(blog, {
        opacity: 0,
        y: '100',
        duration: 1,
        delay: 0.5,
        // scrollTrigger: {
        //     trigger: blog,
        // },
    })
})

// TOPICS

// let topic1 = document.querySelector(".trendsAndTricksWrapper")
// gsap.utils.toArray(topic1.children).forEach(blog2 => {
//     gsap.from(blog2, {
//         y: '100',
//         duration: 1,
//         delay: 0.5,
//         scrollTrigger: {
//             trigger: blog2,
//         },
//     })
// })


window.addEventListener("load", function () {
    ScrollTrigger.refresh(true);
})