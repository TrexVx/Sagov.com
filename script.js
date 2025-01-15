function toggleDropdown() {
    const button = document.querySelector('.dropdown-button');
    const dropdownContent = document.getElementById("departamentosDropdown");
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    
    button.setAttribute('aria-expanded', !isExpanded);
    dropdownContent.classList.toggle("show");
}

// Cerrar el dropdown si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button') && !event.target.matches('.arrow-icon')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        const buttons = document.getElementsByClassName("dropdown-button");
        
        for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('show')) {
                dropdowns[i].classList.remove('show');
                buttons[i].setAttribute('aria-expanded', 'false');
            }
        }
    }
}
// Función para manejar el desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const jobSearchForm = document.getElementById('job-search-form');
    const jobKeywordInput = document.getElementById('job-keyword');
    const jobDepartmentSelect = document.getElementById('job-department');
    const jobList = document.getElementById('job-list');

    if (jobSearchForm) {
        jobSearchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const keyword = jobKeywordInput.value.toLowerCase();
            const department = jobDepartmentSelect.value.toLowerCase();

            const jobItems = jobList.querySelectorAll('.job-item');
            jobItems.forEach(function(item) {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const description = item.querySelector('.job-description').textContent.toLowerCase();
                const itemDepartment = item.dataset.department.toLowerCase();

                const keywordMatch = title.includes(keyword) || description.includes(keyword);
                const departmentMatch = department === '' || itemDepartment === department;

                if (keywordMatch && departmentMatch) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
  }
  
  // Verificar el tema guardado al cargar la página
  document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
    }
  });
  /*let lastScrollTop = 0;
        const header = document.getElementById('header');
        const scrollThreshold = 200; // Ajusta este valor según tus necesidades

        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
                // Scroll hacia abajo
                header.classList.remove('visible');
            } else {
                // Scroll hacia arriba o en la parte superior
                header.classList.add('visible');
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);*/

        function toggleTheme() {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        }

        // Verificar el tema guardado al cargar la página
        document.addEventListener('DOMContentLoaded', (event) => {
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-theme');
            }
        });
        
        let isNavOpen = false;

        function toggleNav() {
            if (isNavOpen) {
                closeNav();
            } else {
                openNav();
            }
        }

        function openNav() {
            document.getElementById("mySidebar").style.left = "0";
            document.getElementById("overlay").style.display = "block";
            document.getElementById("openbtn").style.left = "250px";
            isNavOpen = true;
        }

        function closeNav() {
            document.getElementById("mySidebar").style.left = "-250px";
            document.getElementById("overlay").style.display = "none";
            document.getElementById("openbtn").style.left = "0";
            isNavOpen = false;
        }

        let lastScrollTop = 0;
        const header = document.getElementById('header');
        const scrollThreshold = 200;

        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
                header.classList.remove('visible');
            } else {
                header.classList.add('visible');
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);

        function toggleTheme() {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        }

        document.addEventListener('DOMContentLoaded', (event) => {
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-theme');
            }
        });
         /*function(e) {
            var a = $(this).attr("src");
            $("#show").css("background-image", 'url("' + a + '")'), 0 == ctrlPermisao && $("#lector").trigger("change");
            a = $(this).get(0).tagName;
            let t = "";
            t = "DIV" == a ? 0 < $(this).children().length ? "" : $(this).text() : "IMG" == a ? $(this).get(0).alt : "a" == a ? $("a").data("title") : $(this).text(), "true" === localStorage.getItem("activeAudio") && "" != t.trim() && (a = new SpeechSynthesisUtterance(t), window.speechSynthesis.speak(a))
          };*/