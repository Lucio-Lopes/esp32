const menu = document.querySelectorAll(".menu ul > li");
const main = document.querySelector(".main");

console.log(menu);

menu.forEach((li) =>{
    li.addEventListener("click", e=>{
        let value = e.target.innerText;

               const btnUserHeader = document.querySelectorAll(".btn-header > button");
                btnUserHeader.forEach((button)=>{
                    button.addEventListener("click", e=>{
                        
                        value = e.target.innerText;
                        console.log(value)
                        if(value == "Adicionar"){
                            main.innerHTML = `
                                <div class="add-form">
                                    <h2>Novo usuário</h2>
                                    <form>
                                        <div class="input-group">
                                            <label for="email">Email</label>
                                            <input type="email" id="email" placeholder="Digite seu email" required>
                                        </div>
                                        <div class="input-group">
                                            <label for="senha">Senha</label>
                                            <input type="password" id="senha" placeholder="Digite sua senha" required>
                                        </div>
                                        <div class="input-group">   
                                            <input type="password" id="senha" placeholder="Confirme sua senha" required>
                                        </div>
                                        <div class="input-admin">
                                            <input type="checkbox" id="admin"><span>admin</span>
                                        </div>
                                        <button type="submit" class="login-btn">Cadastrar</button>
                                    </form>
                                    
                                </div>
                            `
                        }
                    })
                })
            break;
            case "Sair" : 
               
            break;
            default : 
               console.log("Acão invalida");
            break;
        }
    })
})

