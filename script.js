const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copyButton = document.querySelector(".boton-copiar");
const confirmarCopiado = document.querySelector(".mensaje-copiado");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["enter","e"],["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringDesencriptada
}

    copyButton.addEventListener('click',function(){
        mensaje.focus();
        document.execCommand('selectAll');
        document.execCommand('copy');

        confirmarCopiado.innerHTML = "Mensaje copiado en el portapapeles";
        setTimeout(()=> confirmarCopiado.innerHTML = "", 3000);
    })   
    
