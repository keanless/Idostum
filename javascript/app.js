// Dropdown 

AOS.init();
let dropdownContent = document.getElementById('dropdown-content')
let dropdownOff = document.getElementById('dropdown-off')
let dropdownOn = document.getElementById('dropdown-on')
let langdropdown = document.getElementById('lang-dropdown')
function dropdownfunc() {
    dropdownOff.style.display = 'block';
    dropdownOn.style.display = 'none';
    dropdownContent.style.display = 'block';
    langdropdown.style.transform = 'rotate(180deg)'
}

function dropupfunc() {
    dropdownOff.style.display = 'none';
    dropdownOn.style.display = 'block';
    dropdownContent.style.display = 'none'
    langdropdown.style.transform = 'rotate(180deg)'

}


 
//Calculator
let weight = document.getElementById('weight');
let amount_in_usd = document.getElementById('amount-in-usd');
let amount_in_azn = document.getElementById('amount-in-azn');
  function hesabla() {
    
    if (weight.value > 0 && weight.value <= 1 ) {
      
        amount_in_usd.innerHTML =  weight.value * 4.9.toFixed(2);
        amount_in_azn.innerHTML = (weight.value * 4.9 * 1.7).toFixed(2); 
        
    } else if (weight.value > 1 && weight.value <= 5) {
        amount_in_usd.innerHTML =  (weight.value * 4.5).toFixed(2);
        amount_in_azn.innerHTML =  (weight.value * 4.5 * 1.7).toFixed(2); 
    }
    else if (weight.value > 5) {
        amount_in_usd.innerHTML =  (weight.value * 4.1).toFixed(2);
        amount_in_azn.innerHTML = (weight.value * 4.1 * 1.7).toFixed(2); 
    }  
 
}
 
// Slider
const slider = document.getElementById("header-slider")
let x = 1
show()
setInterval(next, 3000)

function next() {
    if (x < 3) x++;
    else x = 1
    show()
}

function prev() {
    if (x > 1) x--;
    else x = 3
    show()
}

function show() {
    slider.style.backgroundImage = "url('img/" + x + ".jpg')"
}

 
 /* Carousel */
$('.owl-carousel').owlCarousel({
    nav: false,
    loop: true,
    margin: 40,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 1400,
    autoplayHoverPause: false,
    slideTransition: 'linear',
    responsive: {
        0: {
            items: 3
        },
        576: {
            items: 4
        },
        768: {
            items: 5
        },
        992: {
            items: 7
        }
    }
});


 
 
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/627195867b967b11798da596/1g25r05m5';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
 
 

