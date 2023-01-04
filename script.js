$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });



  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});



//getting emails
function sendemail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "minatobots30@gmail.com",
    Password : "Utsav",
    To : 'minatobots30@gmail.com',
    From : document.getElementById('ema').value,
    Subject : "Enquiry sent",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}


//preloader
var preload= document.getElementById("loading")
function loade()
{
  preload.style.display = 'none';
}
