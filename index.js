var t1 = gsap.timeline();
t1.from(".nav img,.nav-middle h3,.nav h4,.nav button",{
    y:-100,
    duration:1,
    delay:1,
    opacity: 0,
    stagger: 0.5
})

t1.from("#main h1",{
    y:150,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.5  
})

t1.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.3
})

t1.from("#main h2",{
    y:-20,
    duration:1,
    repeat:-1,
    opacity:0,
    yoyo:true
})

