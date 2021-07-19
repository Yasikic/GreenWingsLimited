function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById('navbar').classList.add('navpanel');
    document.getElementById('navbar').classList.remove('navbar');
  } else {
    document.getElementById('navbar').classList.add('navbar');
    document.getElementById('navbar').classList.remove('navpanel');
  }
}

var x = window.matchMedia("(max-width: 1100px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



function openNav() {
  // remove width 0 and add width 220px
  document.getElementById('navbar').classList.remove('panel0');
  document.getElementById('navbar').classList.add('panel220');

  // remove margin-left 0
  document.getElementsByClassName("main")[0].classList.remove('margl0');
  document.getElementsByClassName("main")[1].classList.remove('margl0');

  //  add margin-left 220px
  document.getElementsByClassName("main")[0].classList.add('margl220');
  document.getElementsByClassName("main")[1].classList.add('margl220');

  // add black background
  document.body.style.backgroundColor = "black";

  // remove opacity 1
  document.getElementsByTagName("header")[0].classList.remove('op10');
  document.getElementsByTagName("main")[0].classList.remove('op10');

  //  add opacity 0.8
  document.getElementsByTagName("header")[0].classList.add('op08');
  document.getElementsByTagName("main")[0].classList.add('op08');
}

function closeNav() {
  // remove width 220px and add width 0
  document.getElementById('navbar').classList.remove('panel220');
  document.getElementById('navbar').classList.add('panel0');

  // remove margin-left 0
  document.getElementsByClassName("main")[0].classList.remove('margl220');
  document.getElementsByClassName("main")[1].classList.remove('margl220');

  //  add margin-left 220px
  document.getElementsByClassName("main")[0].classList.add('margl0');
  document.getElementsByClassName("main")[1].classList.add('margl0');

  // add white background
  document.body.style.backgroundColor = "white";

  // remove opacity 0.8
  document.getElementsByTagName("header")[0].classList.remove('op08');
  document.getElementsByTagName("main")[0].classList.remove('op08');

  //  add opacity 1
  document.getElementsByTagName("header")[0].classList.add('op10');
  document.getElementsByTagName("main")[0].classList.add('op10');
}
