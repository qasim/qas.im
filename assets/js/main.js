$(document).ready(function() {

  /*$(window).resize(function() {
    $('.final-spacer').css({
      'height': $(window).height() - 230
    });
    $('.header .title').removeAttr('style')
    $('.header').removeAttr('style')
    $(window).scroll()
  })

  $(window).resize()

  $('.item').click(function() {
    var id = $(this).attr('id').replace('_', '')

    if($(window).width() <= 560) {
      $('html, body').animate({
        scrollTop: $('#' + id).offset().top - 114
      }, 300)
    } else {
      $('html, body').animate({
        scrollTop: $('#' + id).offset().top - 94
      }, 300)
    }
  })*/

  $(window).scroll(function() {

    var scroll = $(window).scrollTop()

    if(scroll <= 0) {
      $('.header .title').css('visibility', 'visible')
      $('.header .title').css({
        'height': 96,
        'opacity': 1
      })
    } else if(scroll > 0 && scroll <= 96) {
      $('.header .title').css({
        'height': 96 - scroll,
        'opacity': 1 - (scroll / 96)
      })
    } else if(scroll > 96) {
      $('.header .title').css({
        'height': 0,
        'opacity': 0
      })
    }

    /*
    var about_bottom = $('#about').offset().top + $('#about').height() - 48
    //var resume_bottom = $('#resume').offset().top + $('#resume').height() - 48
    var projects_bottom = $('#projects').offset().top + $('#projects').height() - 48

    if(scroll >= 0 && scroll < about_bottom) {
        $('.item').removeClass('active')
        $('#_about').addClass('active')
    } /*else if(scroll >= about_bottom && scroll < resume_bottom) {
      $('.item').removeClass('active')
      $('#_resume').addClass('active')
    }*\/ else if(scroll >= about_bottom) { //change about to resume
      $('.item').removeClass('active')
      $('#_projects').addClass('active')
    }
    */
  })
})

/*
function setHeaderSize(height, bool) {
  $('.header').css({
    'height': height + 'px',
    'line-height': height + 'px'
  })

  if(bool) {
    $('.header .title').css({
      'font-size': '36px'
    })
  } else if(height <= 96 && height >= 80) {
    $('.header .title').css({
      'font-size': '60px'
    })
  } else {
    $('.header .title').css({
      'font-size': Math.ceil(height * 0.75) + 'px'
    })
  }
}*/
