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

function fitWidthOfPosts() {
  var posts = document.querySelectorAll(".posts a.post-link")
  posts.forEach(function(post) {
    if (post.getBoundingClientRect().width == 278) {
      var title = post.querySelector('.title')
      var titleRect = title.getBoundingClientRect()
      var titleStartingHeight = titleRect.height
      while (titleRect.height == titleStartingHeight) {
        title.style.width = (titleRect.width - 1) + "px"
        titleRect = title.getBoundingClientRect()
      }
      title.style.width = (titleRect.width + 1) + "px"
    }
  })
}

function clearWidthOfPosts() {
  var posts = document.querySelectorAll(".posts a.post-link")
  posts.forEach(function(post) {
    var title = post.querySelector('.title')
    title.style.width = null
  })
}

function setWidthOfPosts(media) {
  if (media.matches) {
    fitWidthOfPosts()
  } else {
    clearWidthOfPosts()
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
  var regularMediaQuery = window.matchMedia("(min-width: 640px)")
  setWidthOfPosts(regularMediaQuery)
  regularMediaQuery.addListener(setWidthOfPosts)

  maintainAspectRatioOfPhoto()

  hyperlinkBack()
}

window.onresize = function() {
  maintainAspectRatioOfPhoto()
}
