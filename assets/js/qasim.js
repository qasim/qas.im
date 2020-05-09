function togglePronuncation() {
  var englishNameString = "Qasim"
  var englishPronunciationString = "/ˈqaːsim/"

  var englishFirstName = document.querySelector(".english-first-name .first")
  englishFirstName.classList.toggle("pronunciation")

  if (englishFirstName.classList.contains("pronunciation")) {
    englishFirstName.innerHTML = englishPronunciationString
  } else {
    englishFirstName.innerHTML = englishNameString
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
