function maintainAspectRatioOfPhoto() {
  var photo = document.querySelector(".photo")
  photo.setAttribute("style","height: " + photo.getBoundingClientRect().width + "px")
}

window.onload = function() {
  maintainAspectRatioOfPhoto()
}

window.onresize = function() {
  maintainAspectRatioOfPhoto()
}
