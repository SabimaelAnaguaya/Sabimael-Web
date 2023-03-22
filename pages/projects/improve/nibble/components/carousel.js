

gsap.set('.carousel-img_2',{
    opacity: 0,
});

gsap.set('.carousel-img_3',{
    opacity: 0,
});

let carouselImg = gsap.timeline({ repeat: -1, yoyo: true });
carouselImg.to('.carousel-img_1',{
    delay: 2,
    duration:3,
    opacity: 1
})

carouselImg.to('.carousel-img_2',{
    delay: 2,
    duration:3,
    opacity:1
})

carouselImg.to('.carousel-img_3',{
    delay: 2,
    duration:3,
    opacity:1
})

carouselImg.to('.carousel-img_3',{
    delay: 2,
    duration:3,
    opacity:0
})

carouselImg.to('.carousel-img_2',{
    delay: 2,
    duration:3,
    opacity:0
})

