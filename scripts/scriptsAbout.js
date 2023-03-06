var data = {
    portuguese: {
        about: "Sobre",
        projectsNav: "Projetos",
        aboutTitle: "Sobre mim",
        aboutParagraph: "Sou desenvolvedor back-end com experiência de 2 anos e "+ 
        "foco na linguagem Java com o framework Springboot. "+ 
        "Atualmente ocupo a função de Desenvolvedor Back-End Pleno na Maida Health, "+ 
        "empresa pertencente ao grupo Hapvida | Notredame Intermédica, um dos "+ 
        "maiores planos de saúde do Brasil. Nessa experiência atuo desenvolvendo "+ 
        "e mantendo aplicações Java | Springboot escaláveis e construídas com "+ 
        "as melhores práticas de software, tais como design patterns e princípios SOLID. "+ 
        "Além disso, também atuei na elaboração de testes unitários, melhoria das "+ 
        "aplicações com Sonarqube e utilização de arquitetura de microsserviços "+ 
        "com comunicação via Kafka e Feign. Também possuo experiência com bancos de "+ 
        "dados relacionais (MySQL, Postgres, SQL Server) e não relacionais (MongoDB) "+ 
        "e conhecimento das linguagens Python para back-end, inteligência "+ 
        "artificial e Machine Learning além de desenvolvimento web com HTML, CSS e Javascript.",
        experience: "Experiência",
        experienceTitle1: "Maida Health - Back-End Developer Pleno",
        experienceTitle2: "Equatorial Energia - Estágio Engenharia de Software",
        experienceSubtitle1: "Jan 2023 - Presente",
        experienceSubtitle2: "Jan 2022 - Dez 2022",
        experienceSubtitle3: "Jun 2021 - Dez 2021",
        experienceParagraph1: "Desenvolvimento e manutenção de APIs Java | Springboot em arquitetura "+ 
        "de microsserviços, mensageria para comunicação entre as APIS (Kafka), banco de dados "+ 
        "NoSQL (MongoDB), Testes Unitários (JUnit).",
        experienceParagraph2: "Desenvolvimento e manutenção de APIs Java | Springboot em arquitetura de monolítica, "+ 
        "banco de dados SQL (Postgres), Testes Unitários (JUnit), melhoria da qualidade (Sonarqube)",
        experienceParagraph3: "Desenvolvimento e manutenção de APIs Python | Django | Flask em arquitetura de monolítica, "+ 
        "banco de dados SQL (SQL Server), desenvolvimento web (HTML, CSS, Javascript)."
    },
    english: {
        about: "About",
        projectsNav: "Projects",
        aboutTitle: "About me",
        aboutParagraph: "I am a back-end developer with 2 years experience and "+
        "focus on Java language with Springboot framework. "+
        "I´m currently working as a back-end developer at Maida Health Haptech, "+
        "a company of the Hapvida | Notredame Intermédica group, one of the "+
        "biggest health companies in Brazil. In this experience I've been bulding "+
        "and maintaining Java | Springboot scalable applications with the "+
        "best software practices, such as Design Patterns and Solid Principles. "+
        "In addition, I also worked in the elaboration of unit tests, improvement of "+
        "applications with Sonarqube and microservices architecture "+
        "with communication via Kafka and Feign. I also have experience with "+
        "relational databases (MySQL, Postgres, SQL Server) and non-relational databases (MongoDB). "+
        "In my prior experiences I've also worked with of Python for back-end, Artificial Intelligence "+
        "and Machine Learning as well as web development with HTML, CSS and JavaScript.",
        experience: "Experiences",
        experienceTitle1: "Maida Health - Back-End Developer",
        experienceTitle2: "Equatorial Energia - Software Engineering Internship",
        experienceSubtitle1: "Jan 2023 - Present",
        experienceSubtitle2: "Jan 2022 - Dec 2022",
        experienceSubtitle3: "Jun 2021 - Dec 2021",
        experienceParagraph1: "Development and maintenance of Java | Springboot APIs with microservices architecture"+
        ", messaging communication between APIs (Kafka), "+
        "non-relational databases (MongoDB), Unit Tests (Junit).",
        experienceParagraph2: "Development and maintenance of Java | Springboot APIs in monolithic architecture, "+
        "SQL Database (Postgres), Unit Tests (Junit), Quality Improvement (Sonarqube)",
        experienceParagraph3: "Development and maintenance of Python | Django | Flask APIs in monolithic architecture, "+
         "SQL Database (SQL Server), web development (HTML, CSS, JavaScript)."
    }
}

var langs = document.querySelector(".language-container")
    link = document.querySelectorAll("a")
    about = document.querySelector(".about")
    projectsNav = document.querySelector(".projects-nav")
    aboutTitle = document.querySelector(".about-title")
    aboutParagraph = document.querySelector(".about-paragraph")
    experience = document.querySelector(".experience")
    experienceTitle1 = document.querySelector(".experience-title1")
    experienceTitle2 = document.querySelector(".experience-title2")
    experienceSubtitle1 = document.querySelector(".experience-subtitle1")
    experienceSubtitle2 = document.querySelector(".experience-subtitle2")
    experienceSubtitle3 = document.querySelector(".experience-subtitle3")
    experienceParagraph1 = document.querySelector(".experience-paragraph1")
    experienceParagraph2 = document.querySelector(".experience-paragraph2")
    experienceParagraph3 = document.querySelector(".experience-paragraph3")

var lang = sessionStorage.getItem("language")
if(lang != null) {
    about.textContent = data[lang].about
    projectsNav.textContent = data[lang].projectsNav
    aboutTitle.textContent = data[lang].aboutTitle
    aboutParagraph.textContent = data[lang].aboutParagraph
    experience.textContent = data[lang].experience
    experienceTitle1.textContent = data[lang].experienceTitle1
    experienceTitle2.textContent = data[lang].experienceTitle2
    experienceSubtitle1.textContent = data[lang].experienceSubtitle1
    experienceSubtitle2.textContent = data[lang].experienceSubtitle2
    experienceSubtitle3.textContent = data[lang].experienceSubtitle3
    experienceParagraph1.textContent = data[lang].experienceParagraph1
    experienceParagraph2.textContent = data[lang].experienceParagraph2
    experienceParagraph3.textContent = data[lang].experienceParagraph3
}

link.forEach(element => {
    element.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active")
        element.classList.add("active")

        let attr = element.getAttribute("language")
        sessionStorage.setItem("language", attr)

        about.textContent = data[attr].about
        projectsNav.textContent = data[attr].projectsNav
        aboutTitle.textContent = data[attr].aboutTitle
        aboutParagraph.textContent = data[attr].aboutParagraph
        experience.textContent = data[attr].experience
        experienceTitle1.textContent = data[attr].experienceTitle1
        experienceTitle2.textContent = data[attr].experienceTitle2
        experienceSubtitle1.textContent = data[attr].experienceSubtitle1
        experienceSubtitle2.textContent = data[attr].experienceSubtitle2
        experienceSubtitle3.textContent = data[attr].experienceSubtitle3
        experienceParagraph1.textContent = data[attr].experienceParagraph1
        experienceParagraph2.textContent = data[attr].experienceParagraph2
        experienceParagraph3.textContent = data[attr].experienceParagraph3
    })
});