/*Navbar becomes solid color when scrolling -- Jonas Peeters */


document.addEventListener('DOMContentLoaded', function () {
    let navbar = document.querySelector('nav');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });


/*   */
function setupGallery(galleryClass, backBtnId, nextBtnId) {
    let scrollcont = document.querySelector(galleryClass);
    let backbtn = document.getElementById(backBtnId);
    let nextbtn = document.getElementById(nextBtnId);
  
    const scrollByDeltaY = (deltaY) => {
      scrollcont.scrollLeft += deltaY;
      scrollcont.style.scrollBehavior = "auto";
    };
  
    scrollcont.addEventListener("wheel", (event) => {
      event.preventDefault();
      scrollByDeltaY(event.deltaY);
    });
  
    const scrollToOffset = (offset) => {
      scrollcont.style.scrollBehavior = "smooth";
      scrollcont.scrollLeft += offset;
    };
  
    nextbtn.addEventListener("click", () => {
      scrollToOffset(1100);
    });
  
    backbtn.addEventListener("click", () => {
      scrollToOffset(-1100);
    });
  }
  
  // Voor gallery
  setupGallery(".gallery", "backbtn", "nextbtn");
  
  // Voor gallery1
  setupGallery(".gallery1", "backbtn1", "nextbtn1");
  


