function togglePronuncation() {
  var englishFirstName = document.querySelector(".english-first-name .first")
  englishFirstName.classList.toggle("pronunciation")

  var englishLastName = document.querySelector(".english-last-name .last")
  englishLastName.classList.toggle("pronunciation")

  if (englishFirstName.classList.contains("pronunciation")) {
    englishFirstName.innerHTML = "/ka-sim/"
    englishLastName.innerHTML = "/ik-bal/"
  } else {
    englishFirstName.innerHTML = "Qasim"
    englishLastName.innerHTML = "Iqbal"
  }
}

function maintainAspectRatioOfPhoto() {
  var photo = document.querySelector(".photo")
  photo.setAttribute("style", "height: " + photo.getBoundingClientRect().width + "px")
}

window.onload = function() {
  maintainAspectRatioOfPhoto()
}

window.onresize = function() {
  maintainAspectRatioOfPhoto()
}
