$('document').ready(() => {

  // Materialize Init.
  $('.scrollspy').scrollSpy({ 'scrollOffset': 200 });
  $('.button-collapse').sideNav();

  checkScroll();
  // Check if section in viewport
  window.addEventListener('scroll', checkScroll);

  function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    var isVisible = (elemTop <= (window.innerHeight - (window.innerHeight / 2))) 
      && (elemBottom >= (window.innerHeight / 2));
      
    return isVisible;
  }

  function checkScroll() {
    for (let i = 0; i < $('.wrapper > section').length; i++) {
      let element = $('.wrapper > section')[i];
      let linkerID = element.getAttribute('data-linker');
      let linker = '#' + linkerID;

      if (isScrolledIntoView(element)) {
        if(!$(linker).hasClass('active')) {
          $(linker).click();
        }
      }
      else {
        if($(linker).hasClass('active')) {
          $(linker).click();
        }
      }
    } // for (let i = 0; i < $('.wrapper > section').length - 1; i++) {
  }

});


