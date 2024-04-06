var navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    // Remove "active" class from all nav links
    navLinks.forEach(function (link) {
      link.classList.remove("active");
      setTimeout(function () {
          document.getElementById("navbarTogglerDemo02").classList.remove("show");
          document.getElementById("cd-shadow-layer").style.display = "none";
        //   document.body.style.position = "relative";
        //   document.body.style.overflow = "";
        //   document.body.style.height = "";
        }, 100);
      
   
  
    });
    // Add "active" class to the clicked nav link
    this.classList.add("active");
  });
});



document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
  
    function setActiveNavLink() {
      let scrollPosition = window.scrollY;
  
      navLinks.forEach(link => {
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
  
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
  
          if (scrollPosition >= sectionTop - sectionHeight / 3 &&
              scrollPosition < sectionTop + sectionHeight - sectionHeight / 3) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    }
  
    window.addEventListener('scroll', setActiveNavLink);
    setActiveNavLink(); // Set active section on page load
  });


    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 30,
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        
      },    
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {  
    320: {
      slidesPerView: 1,
      spaceBetween: 20,},
    640: {
      slidesPerView: 2,
      spaceBetween: 50, },
    }
    
    });

    var swiper = new Swiper('.swiper-mywork', {
      slidesPerView: 1.5,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
      },    
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {  
        320: {
        slidesPerView: 1,
        spaceBetween: 20,},
        640: {
        slidesPerView: 1.3,
        spaceBetween: 50, },
        }
            
    });
  
    setTimeout(function() {
        $('.loader-wrapper').hide();
        $('.content').show();
    }, 500);