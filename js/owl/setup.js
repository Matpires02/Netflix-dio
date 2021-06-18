$('.owl-carousel').owlCarousel({
    loop:true, // retira loop
    margin:10, 
    nav:false, // botoes de navaegação
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})