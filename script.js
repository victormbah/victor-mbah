// =============================
// SCROLL REVEAL ANIMATION
// =============================


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});



const animatedElements = document.querySelectorAll(
    ".timeline-card, .skill-card, .project-card, .contact-box"
);



animatedElements.forEach((element)=>{

    element.classList.add("hidden");

    observer.observe(element);

});



// =============================
// NAVBAR SCROLL EFFECT
// =============================


window.addEventListener("scroll",()=>{

    const header = document.querySelector("header");


    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});