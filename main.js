    var typed = new Typed('.auto-type', {
      strings: ['Developer.','Programmer.', 'webDesigner.'],
      typeSpeed: 200,
      backSpeed: 150,
      loop: true
    });

    function showSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    
    }

    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }

    const btnScrollToTop = document.querySelector('.scrollToTop');

    // Function to check scroll position and toggle button visibility
    function toggleScrollToTopButton() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
    
        // Show button when scrolled more than 50% of the document height
        if (scrollPosition > (documentHeight - windowHeight) / 2) {
            btnScrollToTop.style.display = 'block';
        } else {
            btnScrollToTop.style.display = 'none';
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', toggleScrollToTopButton);
    
    // Initial check in case the page is loaded already scrolled
    toggleScrollToTopButton();
    
    // Add click event listener to the button for smooth scroll to top
    btnScrollToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
      new Splide('#image-carousel', {
        type: 'loop',
        perPage: 3, // Display three slides at a time
        perMove: 1,
        autoplay: {
          delay: 3000,
          pauseOnHover: false,
        },
        interval: 3000,
        speed: 600,
        rewind: true,
        autoScroll: {
          speed: 2, // Adjust the scroll speed to your liking
        },
        breakpoints: {
          650: {
            perPage: 1, // Display one slide at a time on screens 650px or smaller
          },
        },
      }).mount();
    });
    