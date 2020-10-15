
console.log('asdasd');

var openMenu = document.querySelector('.fa-bars');
// var closeMenu = document.querySelector('.fa-times');
var mobileMenu = document.querySelector('.mobile_menu');

openMenu.addEventListener('click', function(){
    // this.className = 'fas fa-times';
    this.classList.toggle('fa-times');
    this.classList.toggle('fa-bars');

    if(this.classList.contains('fa-bars')) {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
});