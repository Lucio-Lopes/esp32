const menu = document.querySelectorAll(".menu ul > li");
const main = document.querySelector(".main");

console.log(menu);

menu.forEach((li) =>{
    li.addEventListener("click", e=>{
        const value = e.target.innerText;
        switch(value){
            case "Condomínios" : 
               main.innerHTML =`
               <div class="selecao">
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
            break;
            case "Usuários" : 
               main.innerHTML = `
                    <h1>Todos os usuários</h1>
               `;
            break;
            case "Sair" : 
               
            break;
            default : 
               
            break;
        }
    })
})