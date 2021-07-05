burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightnav = document.querySelector('.rightNav');
navList = document.querySelector('.nav-list');

burger.document.innerHTML = "hello"

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

