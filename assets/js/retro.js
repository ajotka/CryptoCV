Hackerman = (function(){
  var page = document.querySelector('.page');
  
  function hacking(i) {
  
      var years = document.getElementById('years'),
          multiplier = i * .01;
    
      if (years.innerHTML < 100) {
        years.innerHTML = i;
        setTimeout(function() {
          hacking(Math.floor(i + 1 + multiplier));
        }, 100);
      } else {
        page.className += ' uh-oh';
        //setTimeout(abort, 3000);
      }
  
  }
  
  function warp() {
    page.className += ' warp';
    setTimeout(function() {
      hacking(1);
    }, 5000);
  } 
  
  function abort() {
    page.className += ' abort';
  }
  
  function start() {
    window.open('cv.html','_self',false);
  }

  function hacktime (e) {
    e.preventDefault();
    
    var target = e.target,
        input = target.parentNode.previousElementSibling;
    
    input.checked = true;
    
    setTimeout(function() {
      if (input.value === 'yes') {
        abort();
        setTimeout(function() {
        	start();
        }, 1000);
      } else {
      	warp();
      }
    }, 1000);
  }
  
  function init() {
    var warp = document.querySelector('.confirm');
    warp.addEventListener('click', hacktime);
  }
  
  document.addEventListener("DOMContentLoaded", init);
  
})()