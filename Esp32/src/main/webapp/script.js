function validarUsuario() {
    let email = formUser.email.value;
    let nome = formUser.nome.value;
    let senha1 = formUser.senha1.value;
    let senha2 = formUser.senha2.value;
    console.log(senha1)
    if (email === "") {
        alert("Preencha o campo email");
        formUser.email.focus();
    } else if (nome === "") {
        alert("Preencha o campo nome");
        formUser.nome.focus();
    } else if (senha1 === "") {
        alert("Preencha o campo senha");
        formUser.senha1.focus();

    } else if (senha1 != senha2) {
        alert("As senhas não coincidem")
        formUser.senha2.focus();
    } else {
        document.forms["formUser"].submit();
    }

}

let search = document.querySelector("#search");

search.addEventListener("keydown", e => {
    if (e.key == 'Enter') {
        pesquisar();
    }
})
function pesquisar() {

    location = "pesquisarUser?search=" + search.value;
}