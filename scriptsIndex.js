var langs = document.querySelector(".language-container")
    link = document.querySelectorAll("a"),
    introText = document.querySelector(".introText")
    btn = document.querySelector(".btn")

link.forEach(element => {
    element.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active")
        element.classList.add("active")

        let attr = element.getAttribute("language")

        introText.textContent = data[attr].introText
        btn.textContent = data[attr].btn
    })
});

var data = {
    portuguese: {
        introText: "Desenvolvedor de software com ênfase em desenvolvimento back-end." +
        "Tenho experência de 2+ anos com Java | Springboot e outras tecnologias." +
        "Quer saber se posso contribuir com seu projeto? Clique no botão abaixo e saiba mais",
        btn: "Saiba mais"

    },
    english: {
        introText: "Software developer with emphasis on" +
        " backend development. I have experience of 2+ years" +
        " with Java | Springboot and other technologies." +
        " Want to know if I can contribute to your project?" +
        " Click the button below and learn more",
        btn: "Click here"
    }
}