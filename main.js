    var typed = new Typed('.auto-type', {
      strings: ['DEveloper.','Programmer.'],
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

    const btnSrollToTop = document.querySelector('.scrollToTop');

    btnSrollToTop.addEventListener('click',function(){
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        });
    });


