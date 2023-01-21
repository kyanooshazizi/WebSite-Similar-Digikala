
  // The data/time we want to countdown to
  var countDownDate = new Date("Jul 25, 2023 16:37:52").getTime();

  // Run myfunc every second
  var myfunc = setInterval(function() {

  var now = new Date().getTime();
  console.log(countDownDate);
  var timeleft = countDownDate - now;
  // Calculating the days, hours, minutes and seconds left
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      
  // Result is output to the specific element
 for(let i=0;i<document.getElementsByClassName("days").length;i++){
  document.getElementsByClassName("days")[i].innerHTML = days + "  "
  document.getElementsByClassName("hours")[i].innerHTML = hours + "  " 
  document.getElementsByClassName("mins")[i].innerHTML = minutes + "  " 
  document.getElementsByClassName("secs")[i].innerHTML = seconds + "  "
 }
      
  // Display the message when countdown is over
  if (timeleft < 0) {
      clearInterval(myfunc);
      var x=document.getElementsByClassName("end");
      console.log(x)
      var y=document.getElementsByClassName("filter-blure");
     var  z=document.getElementsByClassName("days");
     var x1= document.getElementsByClassName("hours");
     var x2=document.getElementsByClassName("mins");
     var x3= document.getElementsByClassName("secs");
      for(let i=0;i<x.length;i++){
        x[i].innerHTML="تخفیف به پایان رسید";
        y[i].style.filter="blur(2px)";
        z[i].innerHTML = " "
        x1[i].innerHTML = " " 
        x2[i].innerHTML = " "
        x3[i].innerHTML = " "
      }
    
  }
  }, 1000);


  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      rtl:true,
      lazyLoad:true,
      dots:true,
      nav:true,
      loop:true,
      margin:0,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      nav:true,
      responsiveClass:true,
      slideBy:2,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        300:{
          items:2,
          nav:true
      },
        800:{
            items:3,
            nav:true
        },
        1100:{
          items:5,
          nav:true
      },
    
    }
    });
  });
  // slider2
  // $('#pop').popover({
  //   trigger: 'hover'
  // })

 