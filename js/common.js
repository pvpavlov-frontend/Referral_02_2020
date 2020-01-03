$(document).ready(function () {
  
  //Parallax
  var scene = document.getElementById('js-scene');
  var scene2 = document.getElementById('js-scene2');
  var parallax = new Parallax(scene);
  var parallax2 = new Parallax(scene2);
  
  $('#countdown-container').ClassyCountdown({

    // until: liftoffTime,
    padZeroes: true,

    end: (new Date('2020-01-20T23:59:59')).getTime(),
    now: $.now(),
    labels: true,

    labelsOptions: {
      lang: {
        days: 'дней',
        hours: 'часов',
        minutes: 'минут',
        seconds: 'секунд'
      },
      style: 'font-size: 16px; line-height: 30px; color: #736074; vertical-align: top;'
    },

    style: {
      // element: '',
      labels: true,
      days: {
        gauge: {
          thickness: 0.10,
          bgColor: '#FFF6F5',
          fgColor: '#736074',
          lineCap: 'round'
        },
        textCSS: ''
      },
      hours: {
        gauge: {
          thickness: 0.10,
          bgColor: '#FFF6F5',
          fgColor: '#736074',
          lineCap: 'round'
        },
        textCSS: ''
      },
      minutes: {
        gauge: {
          thickness: 0.10,
          bgColor: '#FFF6F5',
          fgColor: '#736074',
          lineCap: 'round'
        },
        textCSS: ''
      },
      seconds: {
        gauge: {
          thickness: 0.10,
          bgColor: '#FFF6F5',
          fgColor: '#736074',
          lineCap: 'round'
        },
        textCSS: ''
      }
    },
    onEndCallback: function () { }
  });

  // video
  $('.cover_video').click(function (e) {
    e.preventDefault();
    let url = $(this).data('url');
    $(this).hide();
    $(this).parent().find('iframe').attr('src', url + '?autoplay=1');
    $(this).parent().find('.embed-responsive-16by9').addClass('active');
  });

  $('div.default-btn').click(function () {
    let url = $(this).data('url');
    if (url.length > 0) {
      window.open(
        url,
        '_blank'
      );
    }
  });
  // scroll to section
  $(".go_scroll").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      // setTimeout(function () { $(div).scrollTop(0) }, 500); 
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      },
        400,
        'linear', 
      
      function () {
        window.location.hash = hash;
      });
    }
  });
  $('.extreme-top__center').hover(
    function () { $(this).addClass('active') },
    function () { $(this).removeClass('active ') }
  );

});