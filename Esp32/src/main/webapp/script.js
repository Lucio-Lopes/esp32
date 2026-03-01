const menu = document.querySelectorAll(".menu ul > li");
const main = document.querySelector(".main");

console.log(menu);

menu.forEach((li) =>{
    li.addEventListener("click", e=>{
        let value = e.target.innerText;
        switch(value){
            case "Condomínios" : 
               main.innerHTML =`
               <div class="selecao">
                    <div class="btncond-header">
                        <button>Adicionar</button>
                        <button>Editar</button>
                    </div>
                    <div>
                        <h1 class="titulo">Reboot de condomínios</h1>
                    </div>
                    <div class="options">
                        <select>
                            <option value="">condomínio 1</option>
                            <option value="">condomínio 2</option>
                            <option value="">condomínio 3</option>
                            <option value="">condomínio 4</option>
                            <option value="">condomínio 5</option>
                            <option value="">condomínio 6</option>
                            <option value="">condomínio 7</option>
                        </select>
                        <button><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
               </div>
                <div class="condominio">
                <h2>Condomínio 1</h2>
                <div class="equipamentos">
                    <div>
                        <div class="dispositivo">
                        <div>
                            <div class="ligado"></div>
                            <h3>Guarita</h3>
                        </div>
                        <div class="botoes">
                            <button class="desligar">Desligar</button>
                            <button class="ligar">Ligar</button>
                        </div>
                    </div>
                    <div class="dispositivo">
                        <div>
                            <div class="desligado"></div>
                            <h3>Mikrotik</h3>
                        </div>
                        <div class="botoes">
                            <button class="desligar">Desligar</button>
                            <button class="ligar">Ligar</button>
                        </div>
                    </div>
                    </div>
                    <div>
                        <div class="dispositivo">
                        <div>
                            <div class="ligado"></div>
                            <h3>DVR</h3>
                        </div>
                        <div class="botoes">
                            <button class="desligar">Desligar</button>
                            <button class="ligar">Ligar</button>
                        </div>
                    </div>
                    <div class="dispositivo">
                        <div>
                            <div class="ligado"></div>
                            <h3>Internet</h3>
                        </div>
                        <div class="botoes">
                            <button class="desligar">Desligar</button>
                            <button class="ligar">Ligar</button>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
               `;
                const btnCondHeader = document.querySelectorAll(".btncond-header > button");
                btnCondHeader.forEach((button)=>{
                    button.addEventListener("click", e=>{
                        
                        value = e.target.innerText;
                        console.log(value)
                        if(value == "Adicionar"){
                            main.innerHTML = `
                                <div class="add-form">
                                    <h2>Adicione um novo condomínio</h2>
                                    <form>
                                        <div class="input-group">
                                            <label for="email">Nome</label>
                                            <input type="email" id="email" placeholder="Nome do condomínio" required>
                                        </div>
                                        <div class="input-group">
                                            <label for="senha">Endereço IP</label>
                                            <input type="text" id="senha" placeholder="IP do dispositivo" required>
                                        </div>
                                        <button type="submit" class="login-btn">Cadastrar</button>
                                    </form>
                                </div>
                            `
                        }else if(value == "Editar"){
                            
                        }
                    })
                })
            break;

            case "Usuários" : 
               main.innerHTML = `
                    <div class="btn-header">
                        <button>Adicionar</button>
                        
                    </div>
                    <div class="usuarios">
                        <h1>Todos os usuários</h1>
                        <table class="tabela-usuarios">
                            <thead>
                                <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>João Silva</td>
                                    <td>joao.silva@locktec.com.br</td>
                                    <td class="admin sim">Sim</td>
                                    <td class="acoes"><button class="editar">Editar</button><button class="excluir">Excluir</button></td>
                                </tr>
                                <tr>
                                    <td>Maria Souza</td>
                                    <td>maria@email.com</td>
                                    <td class="admin nao">Não</td>
                                    <td class="acoes"><button class="editar">Editar</button><button class="excluir">Excluir</button></td>
                                </tr>
                                <tr>
                                    <td>Lucas Lima</td>
                                    <td>lucas@email.com</td>
                                    <td class="admin sim">Sim</td>
                                    <td class="acoes"><button class="editar">Editar</button><button class="excluir">Excluir</button></td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
               `;

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

