function myFunction() {
  alert("Selamat Datang di Blog Pesantren Ar-Raudlatul Hasanah");
}

var video = document.getElementById("myVideo");

// Get the modal
var modal = document.getElementById("myModal");
var captionText = document.getElementById("cap");

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementsByClassName("bgimg3").src = element.src;
  document.getElementById("myModal").style.display = "block";
  captionText.innerHTML = element.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}