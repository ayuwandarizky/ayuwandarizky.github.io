var general = {
  init: function () {
    general.cover();
    general.carousel();
    general.ancor_link();
  },

  cover: function () {
    $(".open_invitation").on("click", function () {
      $(this).parent().parent().parent().slideUp("fast");
      $("body").removeClass("overclosed");
    });
  },

  carousel: function () {
    $(".owl-carousel").owlCarousel({
      margin: 0,
      nav: true,
      loop: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  },

  ancor_link: function () {
    var lastId,
      topMenu = $("#bot-menu"),
      topMenuHeight = topMenu.outerHeight() + 15,
      menuItems = topMenu.find("a"),
      scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
          return item;
        }
      });

    $(".nav-link").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top,
        },
        500
      );
    });

    $(window).scroll(function () {
      var fromTop = $(this).scrollTop() + topMenuHeight;

      var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop) return this;
      });

      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";

      if (lastId !== id) {
        lastId = id;

        menuItems
          .parent()
          .removeClass("active")
          .end()
          .filter("[href='#" + id + "']")
          .parent()
          .addClass("active");
      }
    });
  },
};

$(document).ready(function () {
  $("body").addClass("overclosed");
  $("html, body").animate({ scrollTop: 0 }, "fast");
  AOS.init();
  general.init();
});

document.addEventListener("DOMContentLoaded", () => {
  var n = 1;
  const t = new Plyr("#player");
  function i() {
    1 == n && t.play();
  }
  (window.player = t),
    $(".open_invitation").click(function () {
      t.play();
    }),
    window.addEventListener("touchstart", function (n) {
      i();
    }),
    window.addEventListener("scroll", function (n) {
      i();
    }),
    $(".btn-play-pause").click(function () {
      0 == n ? (t.play(), (n = 1)) : (t.pause(), (n = 0));
    }),
    $(".open_invitation").click(function () {
      i();
    });
});
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const to = urlParams.get('to')
$(".guest").html(to)

AOS.init();
$('.gallery a').simpleLightbox({
    docClose: false,
    disableScroll: true,
    disableRightClick: true
});
var countDownDate = new Date("08 October 2022 19:00:00").getTime(), x = setInterval(function () { var e = (new Date).getTime(), n = countDownDate - e, t = Math.floor(n / 864e5), a = Math.floor(n % 864e5 / 36e5), o = Math.floor(n % 36e5 / 6e4), m = Math.floor(n % 6e4 / 1e3); document.getElementsByClassName("days")[0].innerHTML = t, document.getElementsByClassName("hours")[0].innerHTML = a, document.getElementsByClassName("minutes")[0].innerHTML = o, document.getElementsByClassName("seconds")[0].innerHTML = m, n < 0 && (clearInterval(x), document.getElementsByClassName("expired").innerHTML = "EXPIRED") }, 1e3);

window.addEventListener("contextmenu", function (e) {
    e.preventDefault()
}, !1);