// isotope js
$(window).on('load', function () {
    // Initialize Isotope first (without any filter applied)
    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    });

    $grid.isotope({ filter: '.gadgets' });  // Only show "Clothing" items by default

    // Handle filter clicks
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        // Get the filter value from the clicked menu item
        var dataFilter = $(this).attr('data-filter');

        // Apply the filter using Isotope
        $grid.isotope({
            filter: dataFilter
        });
    });
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


// Function to get the value of a query parameter
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Retrieve the product price and image URL from the query parameters
const productprice = getQueryParam('productprice');
const productimage1 = getQueryParam('productimage1');
const productimage2 = getQueryParam('productimage2');
const productimage3 = getQueryParam('productimage3');

// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  // Set the image source
  const imageElement1 = document.getElementById('productimage1');
  imageElement1.src = productimage1;
  const imageElement2 = document.getElementById('productimage2');
  imageElement2.src = productimage2;
  const imageElement3 = document.getElementById('productimage3');
  imageElement3.src = productimage3;

  // Display the price
  const priceElement = document.getElementById('productprice');
  priceElement.textContent = `Rs ${productprice}`;
});