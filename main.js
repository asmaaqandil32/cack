let menu = document.querySelecto('#menu-bar');
let nav = document.querySelector('.navbar')

menu.addEventstener('click', () =>{
 menu.classList.toggle('fa-times');
 nav.classList.toggle('active');
});