/*
var WindowsSize=function(){

    var h=$(window).height(),
      w=$(window).width();
  $('#smenu').animate({ right: '30px', top:'30px'}, 100) ;
};
$(document).ready(WindowsSize);
$(window).resize(WindowsSize);
*/
// import $ from 'jquery';
// import UIkit from 'uikit';
// import Icons from 'uikit-icons';
// UIkit.use(Icons);
$(function(){
       

  $('img').imgPreload({ spinner_src:"/static/js/spinner.gif",animation_duration: 2000});
});

$(document).ready(function() {
    
  var hash = window.location.hash;//.slice(1)
  //$(hash + '> .uk-accordion-content').removeAttr("hidden");
$(hash).hide();
  console.log(hash);
  var nav_toggle = false;

  $('#navbar_toggle').click(function(event) {
    event.preventDefault();
    nav_toggle = !nav_toggle;
    $('.accordion_menu').slideToggle(nav_toggle);
  })

  $('#menu').on('active', function () { //sticky
    $('nav').addClass('sticky_toggle shadows', 500);
    $('#smenu > svg').addClass('smaller', 500);
    if ( nav_toggle === true ) {
      nav_toggle = false;
      $('.accordion_menu').toggle("slow");
    }
  });
  $('#menu').on('inactive', function () { //un-sticky
    $('nav').removeClass('sticky_toggle shadows', 500);
    $('#smenu > svg').removeClass('smaller', 500);

  });




$('.highlight').addClass('codehilite');

$('#lektor-edit-link').css( "top", '150px');

}); // end doc ready
