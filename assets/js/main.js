$(document).ready(function() {

  $(window).resize(function() {
    $('.final-spacer').css({
      'height': $(window).height() - 370
    });
    $('.header .title').removeAttr('style');
    $(window).scroll();
  });

  $(window).resize();

  $('.item').click(function() {
    var id = $(this).attr('id').replace('_', '');

    if($(window).width() <= 560) {
      $('html, body').animate({
        scrollTop: $('#' + id).offset().top - 114
      }, 300);
    } else {
      $('html, body').animate({
        scrollTop: $('#' + id).offset().top - 94
      }, 300);
    }
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if($(window).width() > 1000) {
      if(scroll == 0) {
        setHeaderSize(96);
      } else if(scroll < 48) {
        setHeaderSize(96 - $(window).scrollTop());
      } else if (scroll >= 48) {
        setHeaderSize(48, true);
      }
    } else {
      if(scroll == 0) {
        $('.header .title').show();
        $('.header .title').css({
          'height': 96,
          'opacity': 1
        });
      } else if(scroll <= 96) {
        $('.header .title').css({
          'height': 96 - scroll,
          'opacity': 1 - (scroll / 96)
        });
      } else if(scroll > 96) {
        $('.header .title').hide();
      }
    }



    var about_bottom = $('#about').offset().top + $('#about').height() - 48;
    var projects_bottom = $('#projects').offset().top + $('#projects').height() - 48;
    var experience_bottom = $('#experience').offset().top + $('#experience').height() - 48;
    var resume_bottom = $('#resume').offset().top + $('#resume').height() - 48;
    var connect_bottom = $('#connect').offset().top + $('#connect').height() - 48;

    if(scroll >= 0 && scroll < about_bottom) {
        $('.item').removeClass('active');
        $('#_about').addClass('active');
    } else if(scroll >= about_bottom && scroll < projects_bottom) {
      $('.item').removeClass('active');
      $('#_projects').addClass('active');
    } else if(scroll >= projects_bottom && scroll < experience_bottom) {
      $('.item').removeClass('active');
      $('#_experience').addClass('active');
    } else if(scroll >= experience_bottom && scroll < resume_bottom) {
      $('.item').removeClass('active');
      $('#_resume').addClass('active');
    } else if(scroll >= resume_bottom && scroll < connect_bottom) {
      $('.item').removeClass('active');
      $('#_connect').addClass('active');
    }
  })
});

function setHeaderSize(height, bool) {
  $('.header').css({
    'height': height + 'px',
    'line-height': height + 'px'
  });
  if(bool) {
    $('.header .title').css({
      'font-size': '36px'
    });
  } else if(height <= 96 && height >= 80) {
    $('.header .title').css({
      'font-size': '60px'
    });
  }else {
    $('.header .title').css({
      'font-size': Math.ceil(height * 0.75) + 'px'
    });
  }
}
