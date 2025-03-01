// Smooth scrolling for internal links
$(document).ready(function () {
    $("a.nav-link").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: $(this.hash).offset().top
            }, 800);
        }
    });
});

// Contact form alert
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Message sent! I'll get back to you soon.");
    this.reset();
});
