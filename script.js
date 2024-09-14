// Show scroll-to-top button when scrolling down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-to-top-btn").style.display = "block";
  } else {
    document.getElementById("scroll-to-top-btn").style.display = "none";
  }
}

// Scroll to the top when button is clicked
document.getElementById("scroll-to-top-btn").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
