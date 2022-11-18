let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassWord = document.querySelector("#valor");
let passWord= document.querySelector("#passWord");

let containerPassword = document.querySelector("#container-passaWord");

let charset = "1234567890";
let novaSenha = "";

sizePassWord.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassWord.innerHTML = this.value;
}

function generatePassWord(){
    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
   
    console.log(pass)
    containerPassword.classList.remove("hide");
    passWord.innerHTML = pass;
    novaSenha = pass;
    
}

function copyPassWord(){
  alert("Senha Copiada Com Sucesso!");
  
  navigator.clipboard.writeText(novaSenha);
}





