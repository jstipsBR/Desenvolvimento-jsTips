$(function(){
  //header menu mobile
  $('.drop').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('fa-bars fa-times');
      $('.menu-mobile').slideToggle();
  });
});
