// Replace all occurrences of ' - ' with em dash
(function () {
    'use strict';

    const
        content = document.querySelector('body');
    
    content.innerHTML = content.innerHTML.replace(/ - /g, '&mdash;');
}());


// Add box-shadow to header when scroll passes its height
(function () {
    'use strict';

    const
        header = document.querySelector('[data-target="header"]');
    
    window.addEventListener('scroll', addShadow, false);

    function addShadow() {
        if (scrollY >= header.getBoundingClientRect().height) {
            header.classList.add('shadow-added');
        } else if (scrollY == 0) {
            header.classList.remove('shadow-added');
        }
    }
}());


// Initialize Carousel
(function () {
    'use strict';

    new Glide('.glide').mount({
        hoverpause: true,
        autoplay: 5000,
        gap: 15
    });
})();