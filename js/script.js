Zepto(function ($) {
  $(window).on('load', function () {
    $.each($(".ezkorry-roller"), function (index, item) {
      const wrapper = $("<div />", { class: "ezkorry-roller-wrapper" });
      const roller = $(item);
      roller.append(wrapper);
      const span = roller.find('span').first();
      wrapper.append(span);

      const span_width = span.get(0).offsetWidth;
      const max_width = roller.width() + span_width;
      let inner_width = span_width;

      while (max_width > inner_width) {
        wrapper.append(span.clone());
        inner_width += span_width;
      }

      anime({
        targets: wrapper.get(0),
        translateX: {
          value: '-=' + span_width + 'px',
          duration: 6000
        },
        loop: true,
        easing: 'linear'
      });
    });
  })
});

$(document).ready(function () {
  $('.gnb_wrap').smint();
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,
  preventClicks: true,
  loop: true,
  on: {
    init: function () {
      $('.swiper-slide').addClass('changed');
    },
    slideChangeTransitionStart: function () {
      $('.swiper-slide').addClass('changing');
      $('.swiper-slide').removeClass('changed');
    },
    slideChangeTransitionEnd: function () {
      $('.swiper-slide').removeClass('changing');
      $('.swiper-slide').addClass('changed');
    }
  },
});


$(function () {
  //popup 안보이게 한다.
  $('.popup_wrap').hide();
  //popup_open을 클릭하면,popup이 보인다.
  $('.popup_open').click(function () {
    $('.popup_wrap').fadeIn(0);
  });
  //close_btn을 클릭하면,popup이 안보인다.
  $('.close_btn').click(function () {
    $('.popup_wrap').fadeOut(0);
  });
});

$(function () {
  //popup 안보이게 한다.
  $('.popup_wrap2').hide();
  //popup_open을 클릭하면,popup이 보인다.
  $('.popup_open2').click(function () {
    $('.popup_wrap2').fadeIn(0);
  });
  //close_btn을 클릭하면,popup이 안보인다.
  $('.close_btn2').click(function () {
    $('.popup_wrap2').fadeOut(0);
  });
});