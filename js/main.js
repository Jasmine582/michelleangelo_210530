//hamburger menu
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// function openNav() {
//   document.getElementById("mySidebar").style.width = "375px";
//   document.getElementById("main").style.marginLeft = "0";
//   }

//  function closeNav() {
//  document.getElementById("mySidebar").style.width = "0";
//  document.getElementById("main").style.marginLeft= "0";
//   }

// Countdown Date
var countDownDate = new Date("MAY 05, 2021 14:35:05").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    var str = "Launch Begins";
    var result = str.link("../welcome/index.html");
    document.getElementById("clock").innerHTML = result; 
  }
}, 1000);