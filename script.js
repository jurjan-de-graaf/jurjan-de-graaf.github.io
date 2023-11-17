// javascript functionalities
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('author-name-home').addEventListener('click', function(event) {
        event.preventDefault();
        location.reload();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
        });
    });

    $(document).mousemove(function(e) {
        $(".sun").css({
            left: e.pageX - (window.innerHeight * 1.5),
            top: e.pageY - (window.innerHeight * 1.5)
        });
    });
});
