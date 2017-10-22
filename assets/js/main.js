$(document).ready(function () {
    initializePage();
});

function initializePage() {
    initializeTopMenu();
    initializePageElements();
}
function initializePageElements() {
    // Materialize Init.
    $(".button-collapse").sideNav();
    
    var options = [
            {selector: '#sublime', offset: 200, callback: function(el) {
                    Materialize.fadeInImage($(el));
            }},
            {selector: '#imgInlineTextLogo', offset: 200, callback: function(el) {
                    Materialize.fadeInImage($(el));
            }}
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
    } // for (var i = 0; i < codeBlocks.length; i++) {

    setTimeout(function () {
        $('#rowLogo').css('opacity','1');
        $('#rowLogo').css('transform', 'translateY(0)');
    }, 200);
}
function initializeTopMenu() {
    $(window).scroll(function(){
        doWindowScroll(this);
    });

    doWindowScroll(window);
}
function doWindowScroll(sender) {
    var scrollTop = ((window.pageYOffset || document.documentElement.scrollTop)
            - (document.documentElement.clientTop || 0));
    var bannerHeight = document.getElementById('sectionIndexBanner').offsetHeight;

    $('#navbarFixed').css('transform', 'translateY(-65px)');
    $('#navbarFixed').css('position', 'fixed');

    if (scrollTop > 700) {
        $('#navbarFixed').css('transform', 'none');
    }
}