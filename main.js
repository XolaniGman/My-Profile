
 const menu =document.querySelector(".menu");
 const navbar =document.querySelector(".navbar");
 menu.addEventListener("click",() =>{
      navbar.classList.toggle("active")
 })

 window.onscroll = () => {
      navbar.classList.remove('active');
 }
 const more =document.querySelector(".more");
 const prt =document.querySelector(".prt");
 more.addEventListener("click",() =>{
     prt.classList.toggle("active")
 })