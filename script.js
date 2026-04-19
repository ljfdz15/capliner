document.addEventListener("DOMContentLoaded", function () {

    // Hamburger toggle
    const menuBtn = document.getElementById("menuBtn");
    const navbar  = document.querySelector(".navbar");

    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("open");
    });

    // Close menu on link click (mobile)
    navbar.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navbar.classList.remove("open");
        });
    });

});

function mostrarPagina(pagina) {
    // Hide all pages
    document.querySelectorAll(".pagina").forEach(function (p) {
        p.classList.add("oculto");
    });

    // Show target
    document.getElementById(pagina).classList.remove("oculto");

    // Highlight active nav link
    document.querySelectorAll(".navbar a").forEach(function (a) {
        a.classList.remove("activo");
        if (a.getAttribute("onclick") && a.getAttribute("onclick").includes("'" + pagina + "'")) {
            a.classList.add("activo");
        }
    });

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
}
