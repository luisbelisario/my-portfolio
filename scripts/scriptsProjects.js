var data = {
    portuguese: {
        about: "Sobre",
        projectsNav: "Projetos",
        mainTitle: "Projetos",
        projectBtn: "Ver projeto",
        projectPar1: "Neste projeto faço uma análise introdutória sobre o Apache Kafka e seus processo internos de funcionamento",
        projectPar2: "FilmexFlix é uma biblioteca de filmes que permite aos usuários visualizar sinopses de filmes e salvar seus favoritos",
        projectPar3: "Neste projeto elaborei um banco de dados SQL Server de navios de carga com várias características e relacionamentos",
    },
    english: {
        about: "About",
        projectsNav: "Projects",
        mainTitle: "Projects",
        projectBtn: "See project",
        projectPar1: "In this project I make an introductory analysis about Apache Kafka and its internal working processes",
        projectPar2: "FilmexFlix is a movie library that allows users to view movie synopses and save their favorites",
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