// Source: https://theoutline.com/post/5970/unconventional-wisdom-emotional-readiness-is-bullshit

const navSlide =()=>{
    const buger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks= document.querySelectorAll('.nav-links li');
    
   
    buger.addEventListener('click',()=>{

       // toggle the Navigation  
      nav.classList.toggle('nav-active');

      
      // Animates the navigation links 
      navLinks.forEach((link, index)=>{
        if(link.style.animation)
        {
            link.style.animation='';
        }else{
          link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.5}s`;
        }
      });

      // Burger animation
      buger.classList.toggle('toggle');


    });

   
}


navSlide();

nav-link