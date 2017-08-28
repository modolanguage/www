$(document).ready(function () {
  var scrollAmount = 0;
  var bannerHeight = document.getElementById('sectionIndexBanner').offsetHeight;

  window.addEventListener('scroll', function () {
    scrollAmount = window.pageYOffset;

    if (scrollAmount >= (bannerHeight / 2)) {
      $('#mouse_scroll').fadeOut();
      $('#navbarFixed').css('transform', 'none');
    }
    else {
      $('#mouse_scroll').fadeIn();
      $('#navbarFixed').css('transform', 'translateY(-65px)');
      $('#navbarFixed').css('position', 'fixed');
    }
  }); // window.addEventListener('scroll', function () {

  // Materialize Init.
  $(".button-collapse").sideNav();
  var options = [
    {selector: '#sublime', offset: 200, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#imgInlineTextLogo', offset: 200, callback: function(el) { Materialize.fadeInImage($(el)); } }
  ];
  Materialize.scrollFire(options);

  // Init. code previews animations
  var previewContainer = document.getElementById('rowCodePreview');
  var codeBlocks = previewContainer.querySelectorAll('pre');

  for (let i = 0; i < codeBlocks.length; i++) {
    let code = codeBlocks[i];
    setTimeout(function() {
      code.style.opacity = 1;
      code.style.transform = "translateY(0)";
    }, ((i + 1) * 300));
  } // for (let i = 0; i < codeBlocks.length; i++) {

  setTimeout(() => {
    $('#rowLogo').css('opacity','1');
    $('#rowLogo').css('transform', 'translateY(0)');
  }, 200);
})