gsap.registerPlugin(ScrollTrigger);

gsap.set('#logo-header', {
    x: 0,
    ease: 'ease'
});

gsap.from('#logo-header', {
    duration: 1,
    x: -200,
    opacity: 0
});



let tl = gsap.timeline({ repeat: -1, yoyo: true });
tl.to('#policial',{
    duration:2,
    y:-30
})

tl.addLabel('label1', "+=1")
tl.to('#universidad', {
    duration:2,
    y:-60,
}, '+=1');

tl.to('#esfm', {
    duration:2,
    y:-90,
}, '+=1');

tl.to('#esfm', {
    duration:2,
    y:0,
}, '+=1');

tl.to('#universidad', {
    duration:2,
    y:0,
}, '+=1');

tl.to('#policial',{
    duration:2,
    y:0
})