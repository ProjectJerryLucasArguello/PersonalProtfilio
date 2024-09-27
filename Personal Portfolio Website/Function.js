// Define the scrollHandler function
function scrollHandler() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navbar.classList.add('fixed-top');
    } else {
        navbar.classList.remove('fixed-top');
    }
}

// Debounce function to limit the frequency of calls to scrollHandler
function debounce(func, delay) {
    let timeoutId;
    return function() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, delay);
    };
}

// Debounce the scroll event handler
var debouncedScrollHandler = debounce(scrollHandler, 100); // Adjust the delay as needed

// Call the debounced scrollHandler function when the scroll event occurs
window.addEventListener('scroll', debouncedScrollHandler);

// Call the scrollHandler function initially to ensure proper positioning on page load
scrollHandler();


  