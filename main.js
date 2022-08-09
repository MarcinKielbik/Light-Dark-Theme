const toggle = document.querySelector('#toggleDark');
const body = document.querySelector('body');
const moon = document.querySelector('.moon');
const cr1 = document.querySelector('.cr1');
const cr2 = document.querySelector('.cr2');
const cr3 = document.querySelector('.cr3');
const cr4 = document.querySelector('.cr4');
const cr5 = document.querySelector('.cr5');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color='black';
        body.style.transition = '1s';
        cr1.style.background = 'transparent';
        cr2.style.background = 'transparent';
        cr3.style.background = 'transparent';
        cr4.style.background = 'transparent';
        cr5.style.background = 'transparent';
        moon.style.background = 'transparent';        
        moon.style.boxShadow = 'inset -20px 0px 0 0px transparent';
        

    } else {
        body.style.background = 'black';
        body.style.color='white';
        body.style.transition = '1s';
        cr1.style.background = '#737277';
        cr2.style.background = '#737277';        
        cr3.style.background = '#737277'; 
        cr4.style.background = '#737277';        
        cr5.style.background = '#737277'; 
        moon.style.background = '#cdcdcd';
        moon.style.boxShadow = 'inset -20px 0px 0 0px rgb(151, 151, 151)'; 
       
    }
})