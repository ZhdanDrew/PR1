var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExample'));




highlight(document.querySelector('.window'));

    function highlight(element) {
        document.querySelectorAll('.window').forEach(function (el) {
            el.classList.remove('active');
        });

        element.classList.add('active');
    }



    function toggleDropdown(element) {
        var dropdownTxt = element.nextElementSibling;
        var svgArr = element.querySelector('.svg-arr');
    
        dropdownTxt.classList.toggle('show');
        svgArr.classList.toggle('rotate');
    }