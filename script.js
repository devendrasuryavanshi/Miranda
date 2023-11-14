const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let tl  = gsap.timeline();

tl.to(".page1", {
    y: "41vh",
    scale: ".4vw",
    duration: 0,
})

tl.to(".page1", {
    y: "-28%",
    duration: 1.5,
    delay: 1,
    ease: "power1.inOut",
})

tl.to(".page1", {
    y: 0,
    scale: 1,
    rotate: 360,
    delay: 1,
    duration: 1,
    ease: "power1.inOut",
})



const card_1 = document.querySelector(".card-1");
const card_2 = document.querySelector(".card-2");
const card_3 = document.querySelector(".card-3");
const card_4 = document.querySelector(".card-4");

card_1.addEventListener('mouseenter', () => {
    card_2.style.transform = 'translateX(-2vw)';
    card_3.style.transform = 'translateX(-26vw)';
    card_4.style.transform = 'translateX(-51vw)';
});
card_1.addEventListener('mouseleave', () => {
    card_2.style.transform = 'translateX(-22vw)';
    card_3.style.transform = 'translateX(-43vw)';
    card_4.style.transform = 'translateX(-65vw)';
});

card_2.addEventListener('mouseenter', () => {
    card_3.style.transform = 'translateX(-25vw)';
    card_4.style.transform = 'translateX(-50vw)';
});
card_2.addEventListener('mouseleave', () => {
    card_3.style.transform = 'translateX(-43vw)';
    card_4.style.transform = 'translateX(-65vw)';
});

card_3.addEventListener('mouseenter', () => {
    card_4.style.transform = 'translateX(-45vw)';
});
card_3.addEventListener('mouseleave', () => {
    card_4.style.transform = 'translateX(-65vw)';
});
