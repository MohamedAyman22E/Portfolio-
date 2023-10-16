// scrool
window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("sticy", this.window.scrollY > 0);
});

// scrool to top

let scroll = document.querySelector(".scrool-top");
window.addEventListener("scroll", function () {
  scroll.classList.toggle("active", this.window.scrollY > 500);
});
scroll.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});




// active link of nav list

let navLinks= document.querySelectorAll("header nav a")
let section= document.querySelectorAll("section")

window.onscroll = ()=>{
    section.forEach(sec=>{
     let top = window.scrollY;
     let offset = sec.offsetTop - 100;
     let height = sec.offsetHeight;
     let id = sec.getAttribute('id');
     if(top>=offset && top<offset+height){
        navLinks.forEach(links=>{
            links.classList.remove("active");
            document.querySelector('header nav a[href*=' + id +']').classList.add("active")
        })
     }

    })
}



// navbar 
let menuIcon =document.querySelector(".fa-bars ");
let navBar =document.querySelector(".navbar ");
menuIcon.onclick =()=>{
    navBar.classList.toggle("active")
}




































