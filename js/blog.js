var mainPage = '#home';

$(document).ready(function() {
    if ( mainPage == '#home')
    {
        $('#home').addClass('main');
        $('#history').addClass('other');
        $('#activity').addClass('other');
    }      
})

$(document).on("click", 'a[href="#history"]', function(){
    if ( mainPage == "#home"){
        $('#home').removeClass('main');
        $('#home').addClass('other');
        $('#history').removeClass('other');
        $('#history').addClass('main');
    }
    else if( mainPage == "#activity"){
        $('#activity').removeClass('main');
        $('#activity').addClass('other');
        $('#history').removeClass('other');
        $('#history').addClass('main');
    }
    $('a[href="#history"]').css('color','gray');
    $('a[href="#home"]').css('color','#3f51b5');
    $('a[href="#activity"]').css('color','#3f51b5');
    mainPage = "#history";
})

$(document).on("click", 'a[href="#activity"]', function(){
    if ( mainPage == "#home"){
        $('#home').removeClass('main');
        $('#home').addClass('other');
        $('#activity').removeClass('other');
        $('#activity').addClass('main');
    }
    else if( mainPage == "#history"){
        $('#history').removeClass('main');
        $('#history').addClass('other');
        $('#activity').removeClass('other');
        $('#activity').addClass('main');
    }
    $('a[href="#history"]').css('color','#3f51b5');
    $('a[href="#home"]').css('color','#3f51b5');
    $('a[href="#activity"]').css('color','gray');
    mainPage = "#activity";
})

$(document).on("click", 'a[href="#home"]', function(){
    if ( mainPage == "#history"){
        $('#history').removeClass('main');
        $('#history').addClass('other');
        $('#home').removeClass('other');
        $('#home').addClass('main');
    }
    else if( mainPage == "#activity"){
        $('#activity').removeClass('main');
        $('#activity').addClass('other');
        $('#home').removeClass('other');
        $('#home').addClass('main');
    }
    $('a[href="#history"]').css('color','#3f51b5');
    $('a[href="#home"]').css('color','#3f51b5');
    $('a[href="#activity"]').css('color','#3f51b5');
    mainPage = "#home";
})

$(function() {
    $(".menu-toggle-btn").click(function() {
      $(".menu").stop().slideToggle("fast");
    });
  });


