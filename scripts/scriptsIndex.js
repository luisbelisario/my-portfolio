var langs = document.querySelector(".language-container")
    link = document.querySelectorAll("a")
    about = document.querySelector(".about")
    projectsNav = document.querySelector(".projects-nav")
    introText = document.querySelector(".introText")
    btn = document.querySelector(".btn")
    titleH1 = document.querySelector(".title-h1")
    btnProjects = document.querySelector(".btn-projects")

link.forEach(element => {
    element.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active")
        element.classList.add("active")

        let attr = element.getAttribute("language")

        about.textContent = data[attr].about
        projectsNav.textContent = data[attr].projectsNav
        introText.textContent = data[attr].introText
        btn.textContent = data[attr].btn
        titleH1.textContent = data[attr].titleH1
        btnProjects.textContent = data[attr].btnProjects
    })
});

var data = {
    portuguese: {
        about: "Sobre",
        projectsNav: "Projetos",
        introText: "Desenvolvedor de software com ênfase em desenvolvimento back-end." +
        "Tenho experência de 2+ anos com Java | Springboot e outras tecnologias." +
        "Quer saber se posso contribuir com seu projeto? Clique no botão abaixo e saiba mais",
        btn: "Saiba mais",
        titleH1: "Meus projetos",
        btnProjects: "Ver todos"
    },
    english: {
        about: "About",
        projectsNav: "Projects",
        introText: "Software developer with emphasis on" +
        " back-end development. I have 2+ years experience" +
        " with Java | Springboot and other technologies." +
        " Want to know if I can contribute to your project?" +
        " Click the button below and learn more",
        btn: "Click here",
        titleH1: "My projects",
        btnProjects: "See all"
    }
}