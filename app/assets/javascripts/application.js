//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add active class to the current topnav link (highlight it)
  var topnav = document.getElementById("topnav");
  var links = topnav.getElementsByClassName("topnav-link");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
     current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
   });
 }
})