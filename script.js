        function mostrarPagina(pagina) {
            document.querySelectorAll('.pagina').forEach(p => p.classList.add('oculto'));
            document.getElementById(pagina).classList.remove('oculto');
        }
        document.addEventListener("DOMContentLoaded", function() {
            // Mostrar la primera categoría por defecto
            document.querySelector(".category").classList.add("active");
        
            // Obtener todos los enlaces de navegación
            const navLinks = document.querySelectorAll("nav ul li a");
        
            navLinks.forEach(link => {
                link.addEventListener("click", function(event) {
                    event.preventDefault(); // Evita el salto automático de la página
        
                    // Obtener el ID de la categoría seleccionada
                    const targetId = this.getAttribute("href").substring(1);
        
                    // Ocultar todas las categorías
                    document.querySelectorAll(".category").forEach(category => {
                        category.classList.remove("active");
                    });
        
                    // Mostrar solo la categoría seleccionada
                    document.getElementById(targetId).classList.add("active");
                });
            });
        });
        function mostrarPagina(pagina) {
                    document.querySelectorAll('.pagina').forEach(p => p.classList.add('oculto'));
                    document.getElementById(pagina).classList.remove('oculto');
        }
