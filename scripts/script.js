const contato = document.querySelector("#contato");
const login = document.querySelector("#Login")
const nome = document.querySelector("#nome");
const email = document.querySelector("#email1");
const mensagem = document.querySelector("#mensagem");
const email_log = document.querySelector("#email0");
const senha = document.querySelector("#senha");
const chagethemebtn = document.querySelector("#change-theme")

// dois inputs com o mesmo no me e quer que funcione como eu so posso ser um idiota
contato.addEventListener("submit", (e) => {
    // Impede o envio do formulário (com F5 ou botão de submit)
    e.preventDefault();

    // Verifica se algum campo está vazio
    if (nome.value === "" || email.value === "" || mensagem.value === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    } else {
        // Exibe as informações preenchidas
        alert(
            `Informações preenchidas:\nNome: ${nome.value}\nE-mail: ${email.value}\nMensagem: ${mensagem.value}\nENVIADO COM SUCESSO!`
        );

    }
});

login.addEventListener("submit", (event) =>{
    event.preventDefault();
    if (email_log.value === ""  || senha.value === "" ){
        alert("Por favor, preencha todos os campos.");
    }
    else if (email_log.value != "admin" || senha.value != "admin"){
        alert("Usuário ou senha incorretos")
    }
    else{
        alert("Login efetuado com sucesso");
    }
})

// alterna o modo dark
function toggleDarkMode(){
    document.body.classList.toggle("dark")

}


chagethemebtn.addEventListener("change", () => {
    // alterna a classe ao elemento
    toggleDarkMode();
})

