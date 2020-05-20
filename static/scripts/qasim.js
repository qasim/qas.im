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

function hyperlinkBack() {
  var back = document.querySelector('.post .back')
  if (!back) {
    return
  }

  var currentURL = new URL(document.location)
  var referringURL = new URL(document.referrer)

  if (referringURL.host != currentURL.host || referringURL.pathname != "/archive/") {
    back.href = "/"
    back.setAttribute("title", "Go home")
  } else {
    back.href = referringURL.pathname
    back.setAttribute("title", "Go back")
  }
}

window.onload = function() {
  maintainAspectRatioOfPhoto()
  hyperlinkBack()
}

window.onresize = function() {
  maintainAspectRatioOfPhoto()
}
