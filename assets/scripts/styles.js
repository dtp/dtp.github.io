$(function() {

  // Global header styles
  $('#gh-search').on('focusin focusout', function() {
    $('#gh-search-form').toggleClass('gh-search-form-focus');
  });
  $('#gh-spacer').css('margin-top', $('#globalheader').height());

  // Nav Drawer
  var $navDrawerWrapper = $('#nav-drawer-wrapper');
  var navDrawerTransition = TweenMax.from($navDrawerWrapper, 0.2,
    {
      height: 0,
      transformOrigin: "left top",
      paused: true,
      ease: Back.easeOut.config(2),
      onReverseComplete: function() {
        $navDrawerWrapper.addClass('nav-drawer-closed')
      }
    });
  $('#nav-drawer-toggle').click(function() {
    $(this).toggleClass('nav-drawer-toggle-active');
    if ($navDrawerWrapper.hasClass('nav-drawer-closed')) {
      $navDrawerWrapper.removeClass('nav-drawer-closed');
      navDrawerTransition.play();
    } else {
      navDrawerTransition.reverse();
    }
  });

  // DTP buttons
  var $dtpButtons = $('.dtp-button');
  $dtpButtons.on('mouseup mouseleave', function() {
    $(this).removeClass('dtp-button-active');
  });
  $dtpButtons.on('mousedown', function() {
    $(this).addClass('dtp-button-active');
  });
});
