function maintainAspectRatioOfProfilePhoto() {
  var photoLink = document.querySelector(".photo-link")
  photoLink.setAttribute("style", "height: " + photoLink.getBoundingClientRect().width + "px")

  var photo = document.querySelector(".photo")
  photo.setAttribute("style", photoLink.getAttribute("style"))
}

function maintainAspectRatioOfAlbumPhotos() {
  var photos = document.querySelectorAll(".album .photo-cell .preview")
  for (var photo of photos) {
    photo.style.height = photo.getBoundingClientRect().width + "px"
  }
}

function hyperlinkBack() {
  var back = document.querySelector('.post .back')
  if (!back) {
    return
  }

  var currentURL = new URL(document.location)
  var referringURL = new URL(document.referrer)

  if (referringURL.host != currentURL.host || referringURL.pathname == "/") {
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

function togglePronunciation() {
  var englishFirstName = document.querySelector(".english-first-name .first")
  showPronunciation(!englishFirstName.classList.contains("pronunciation"))
}

window.onload = function() {
  hyperlinkBack()

  maintainAspectRatioOfProfilePhoto()
  maintainAspectRatioOfAlbumPhotos()

  var pronunciationHoverTriggers = document.querySelectorAll('.pronunciation-hover-trigger')
  for (var trigger of pronunciationHoverTriggers) {
    trigger.onmouseover = function() {
      showPronunciation(true)
    }
    trigger.onmouseout = function() {
      showPronunciation(false)
    }
  }
}

window.onresize = function() {
  maintainAspectRatioOfProfilePhoto()
  maintainAspectRatioOfAlbumPhotos()
}
