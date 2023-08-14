var data = {
    portuguese: {
        about: "Sobre",
        projectsNav: "Projetos",
        mainTitle: "Projetos",
        projectBtn: "Ver projeto",
        projectPar1: "Um projeto para reservas e avaliações de quadras de tênis, futsal, beach tennis e vôlei de praia",
        projectPar2: "Um projeto simoples que simula um formulário de cadastro de uma locadora de véiculos",
        projectPar3: "Neste projeto elaborei um banco de dados SQL Server de navios de carga com várias características e relacionamentos",
    },
    english: {
        about: "About",
        projectsNav: "Projects",
        mainTitle: "Projects",
        projectBtn: "See project",
        projectPar1: "A project for reservations and evaluations of tennis, futsal, beach tennis and beach volleyball courts",
        projectPar2: "A simple project that simulates a car rental registration form",
        projectPar3: "In this project I created a SQL Server database of cargo ships with various characteristics and relationships",
    }
}

var langs = document.querySelector(".language-container")
    link = document.querySelectorAll("a")
    about = document.querySelector(".about")
    projectsNav = document.querySelector(".projects-nav")
    mainTitle = document.querySelector(".title")
    projectBtn = document.querySelectorAll(".project-btn")
    projectPar1 = document.querySelector(".project-paragraph1")
    projectPar2 = document.querySelector(".project-paragraph2")
    projectPar3 = document.querySelector(".project-paragraph3")

var lang = sessionStorage.getItem("language")
if(lang != null) {
    about.textContent = data[lang].about
    projectsNav.textContent = data[lang].projectsNav
    mainTitle.textContent = data[lang].mainTitle
    projectBtn.forEach(
        element => {
            element.textContent = data[lang].projectBtn
        }
    )
    projectPar1.textContent = data[lang].projectPar1
    projectPar2.textContent = data[lang].projectPar2
    projectPar3.textContent = data[lang].projectPar3
}

link.forEach(element => {
    element.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active")
        element.classList.add("active")

        let attr = element.getAttribute("language")
        sessionStorage.setItem("language", attr)

        about.textContent = data[attr].about
        projectsNav.textContent = data[attr].projectsNav
        mainTitle.textContent = data[attr].mainTitle
        projectBtn.forEach(
            element => {
                element.textContent = data[attr].projectBtn
            }
        )
        projectPar1.textContent = data[attr].projectPar1
        projectPar2.textContent = data[attr].projectPar2
        projectPar3.textContent = data[attr].projectPar3
    })
});