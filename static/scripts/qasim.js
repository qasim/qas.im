function maintainAspectRatioOfPhoto() {
  var photoLink = document.querySelector(".photo-link")
  photoLink.setAttribute("style", "height: " + photoLink.getBoundingClientRect().width + "px")

  var photo = document.querySelector(".photo")
  photo.setAttribute("style", photoLink.getAttribute("style"))
}

function hyperlinkBack() {
  var back = document.querySelector('.post .back')
  if (!back) {
    return
  }

  var currentURL = new URL(document.location)
  var referringURL = new URL(document.referrer)

  if (referringURL.host != currentURL.host) {
    back.href = "/"
    back.setAttribute("title", "Go home")
  } else {
    back.href = "javascript:window.history.back()"
    back.setAttribute("title", "Go back")
  }
}

function showPronunciation(shouldShow) {
  var englishFirstName = document.querySelector(".english-first-name .first")
  var englishLastName = document.querySelector(".english-last-name .last")

  if (shouldShow) {
    englishFirstName.classList.add("pronunciation")
    englishFirstName.innerHTML = "/ka-sim/"
    englishLastName.classList.add("pronunciation")
    englishLastName.innerHTML = "/ik-bal/"
  } else {
    englishFirstName.classList.remove("pronunciation")
    englishFirstName.innerHTML = "Qasim"
    englishLastName.classList.remove("pronunciation")
    englishLastName.innerHTML = "Iqbal"
  }
}

window.onload = function() {
  maintainAspectRatioOfPhoto()
  hyperlinkBack()

  var firstNames = document.querySelectorAll('.pronunciation-trigger')
  for (var firstName of firstNames) {
    firstName.onmouseover = function() {
      showPronunciation(true)
    }
    firstName.onmouseout = function() {
      showPronunciation(false)
    }
  }
}

window.onresize = function() {
  maintainAspectRatioOfPhoto()
}
