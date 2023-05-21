// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.width = "100%";
    document.getElementById("navbar").style.marginTop = "-140px";

  } else {
    document.getElementById("navbar").style.position = "static";
    document.getElementById("navbar").style.width = "60%";
    document.getElementById("navbar").style.marginTop = "50px";
    document.getElementById("navbar").style.paddingLeft = "10px";
  }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function showDoc() {
    document.getElementById("secondDoc").style.display = 'flex';
    document.getElementById("secondDoc2").style.display = 'flex';
    document.getElementById("secondDoc3").style.display = 'flex';
    document.getElementById("viewAll").style.display = 'none';
  }