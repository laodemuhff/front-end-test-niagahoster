$('.nav-link').on('click',function(e){
    var href = $(this).attr('href');
    var elemenTujuan = $(href);
    
    $('html').animate({
        scrollTop : elemenTujuan.offset().top - 200
    },1250,'swing');

    e.preventDefault();

});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navigation");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
} 