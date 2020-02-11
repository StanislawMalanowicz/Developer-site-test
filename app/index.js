import 'bootstrap/dist/js/bootstrap';
import flatOne from '../images/01.png';
import './index.scss';
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

console.log('Boilerplate is working!');


// const translateBtn = document.querySelector('.translate-button');
// const pl = document.querySelectorAll('.pl');
// pl.forEach(el => el.style.display === "none");

// translateBtn.addEventListener("click", ()=> {
//     console.log("translate: ", pl);
//     const en = document.querySelectorAll('.en');
//     // if(pl[0].style.display === "block"){
//         pl.forEach(el => el.style.display === "none");
//         en.forEach(el => el.style.display === "block");
//         return
//     // }
//     //  en.forEach(el => el.style.display === "none");
//     //  pl.forEach(el => el.style.display === "block");
//     //  return;
    
// })
const closeBtn = document.querySelector('.close-button');
const flatCart = document.querySelector('.apartment-miniature');
const overlay = document.querySelector('.overlay');
const miniatureLinks = document.querySelectorAll('.check');

closeBtn.addEventListener('click', () =>{
    console.log('close btn');
    
    overlay.classList.add('none');
    flatCart.classList.add('none');
})

miniatureLinks.forEach(link => {
    link.addEventListener('click', function() {
        // this.classList.remove('none');
        flatCart.classList.remove('none');
        overlay.classList.remove('none');
    })
})